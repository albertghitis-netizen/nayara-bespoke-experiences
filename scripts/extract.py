#!/usr/bin/env python3
"""Pull human-readable prose out of the site's .tsx/.ts sources."""
import re
import sys
from pathlib import Path

# Things that are code, not copy.
NOISE = re.compile(
    r"""^(?:
      \#[0-9a-fA-F]{3,8}          # hex colours
    | https?://\S+                # urls
    | [\w./@-]+\.(?:tsx?|css|jpg|jpeg|png|webp|svg|mp4|mov)  # file paths
    | [a-z-]+(?:\s+[a-z0-9:\[\]/.%-]+)*$   # tailwind-ish class soup
    | \d[\d\s.,:/%-]*             # bare numbers
    | [A-Za-z_$][\w$]*            # single identifier
    )$""",
    re.X,
)

TAILWIND_HINT = re.compile(
    r"\b(?:flex|grid|absolute|relative|text-|bg-|px-|py-|mt-|mb-|md:|lg:|hover:|rounded|opacity|z-\d|w-full|h-\d|gap-|border|tracking-|leading-|font-)"
)

# leaked JavaScript rather than prose
CODE_HINT = re.compile(
    r"(?:=>|===|!==|\?\.|&&|\|\||\breturn\b|\bconst\b|\blet\b|\bfunction\b"
    r"|use(?:Ref|State|Effect|Memo)|\bnull\b|\bundefined\b|\.map\(|\.filter\(|\);)"
)


def is_prose(s: str) -> bool:
    s = s.strip()
    if len(s) < 12 or len(s) > 4000:
        return False
    if NOISE.match(s):
        return False
    if CODE_HINT.search(s):
        return False
    if s[0] in "()[].;:=<>/\\|&":
        return False
    if TAILWIND_HINT.search(s) and not re.search(r"[.!?,]", s):
        return False
    if s.count("{") or s.count("}"):
        return False
    # needs at least three words and some lowercase letters
    if len(s.split()) < 3:
        return False
    if not re.search(r"[a-z]{3}", s):
        return False
    return True


def clean(s: str) -> str:
    s = re.sub(r"\s+", " ", s).strip()
    s = s.replace("\\'", "'").replace('\\"', '"').replace("\\n", " ")
    return s.strip()


def extract(path: Path) -> list[str]:
    src = path.read_text(encoding="utf-8", errors="replace")
    # drop imports and obvious style blocks
    src = re.sub(r"^import .*?;$", "", src, flags=re.M)
    src = re.sub(r"className=\{?[\"'`][^\"'`]*[\"'`]\}?", " ", src)

    found: list[str] = []

    # JSX text nodes: >  some words  <
    for m in re.finditer(r">([^<>{}]{12,})<", src):
        t = clean(m.group(1))
        if is_prose(t):
            found.append(t)

    # quoted strings (props, data files, arrays)
    for m in re.finditer(r"[\"'`]([^\"'`\n]{12,})[\"'`]", src):
        t = clean(m.group(1))
        if is_prose(t):
            found.append(t)

    # template literals spanning lines (long editorial bodies)
    for m in re.finditer(r"`([^`]{80,})`", src, re.S):
        t = clean(m.group(1))
        if is_prose(t) and "${" not in t:
            found.append(t)

    # de-dupe, preserve order
    seen: set[str] = set()
    out: list[str] = []
    for t in found:
        k = t.lower()
        if k not in seen:
            seen.add(k)
            out.append(t)
    return out


if __name__ == "__main__":
    for arg in sys.argv[1:]:
        p = Path(arg)
        items = extract(p)
        print(f"--- {p.name}: {len(items)} strings ---")
        for t in items[:40]:
            print(" *", t[:160])
