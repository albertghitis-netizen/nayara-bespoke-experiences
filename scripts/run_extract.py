#!/usr/bin/env python3
"""Write every page's prose out as markdown under content/."""
import re
from pathlib import Path
from extract import extract

ROOT = Path("/home/user/nayara-bespoke-experiences")
OUT = ROOT / "content"

# Pages that belong to other sites built in the same Manus workspace.
NON_NAYARA = {
    "Sylvia", "SylviaComingSoon", "Lexi", "Sharalynn",
    "HenryStandalone", "AylaRestaurant",
}

def title_of(stem: str) -> str:
    return re.sub(r"(?<!^)(?=[A-Z])", " ", stem).replace("_", " ").strip()

def write(src: Path, dest_dir: Path) -> int:
    items = extract(src)
    if not items:
        return 0
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / f"{src.stem}.md"
    lines = [
        f"# {title_of(src.stem)}",
        "",
        f"Source: `{src.relative_to(ROOT)}`  ",
        f"Extracted strings: {len(items)}",
        "",
        "---",
        "",
    ]
    for t in items:
        lines.append(t)
        lines.append("")
    dest.write_text("\n".join(lines), encoding="utf-8")
    return len(items)

def main() -> None:
    total_files = 0
    total_strings = 0
    manifest: list[tuple[str, int]] = []

    groups = [
        (sorted((ROOT / "client/src/pages").glob("*.tsx")), "pages"),
        (sorted((ROOT / "client/src/data").glob("*.ts")), "data"),
    ]

    for paths, kind in groups:
        for p in paths:
            other = p.stem in NON_NAYARA or "Sylvia" in p.stem
            sub = OUT / ("other" if other else kind)
            n = write(p, sub)
            if n:
                total_files += 1
                total_strings += n
                rel = (sub / f"{p.stem}.md").relative_to(OUT)
                manifest.append((str(rel), n))

    manifest.sort(key=lambda r: -r[1])
    idx = [
        "# Extracted site copy",
        "",
        "Every string of human-readable prose recovered from the site source,",
        "one file per page. `pages/` and `data/` are Nayara. `other/` belongs to",
        "the unrelated sites built in the same workspace.",
        "",
        f"{total_files} files, {total_strings} strings.",
        "",
        "| File | Strings |",
        "| --- | ---: |",
    ]
    for rel, n in manifest:
        idx.append(f"| [{rel}]({rel}) | {n} |")
    (OUT / "README.md").write_text("\n".join(idx) + "\n", encoding="utf-8")

    print(f"{total_files} files, {total_strings} strings")
    for rel, n in manifest[:15]:
        print(f"  {n:5d}  {rel}")

if __name__ == "__main__":
    main()
