#!/usr/bin/env bash
# Downloads every Manus-hosted image and video the site depends on.
# Run from your own machine, not from a Claude Code session: the Manus CDN
# is blocked by the org egress policy there.
#
#   bash scripts/rescue-assets.sh [output-dir]
#
# Re-running skips files already downloaded, so it is safe to resume.

set -uo pipefail

MANIFEST="$(dirname "$0")/asset-manifest.txt"
OUT="${1:-nayara-assets}"
FAILED="$OUT/_failed.txt"

[ -f "$MANIFEST" ] || { echo "missing manifest: $MANIFEST" >&2; exit 1; }

mkdir -p "$OUT"
: > "$FAILED"

total=0
ok=0
skipped=0
failed=0

while IFS= read -r url; do
  [ -n "$url" ] || continue
  name="${url##*/}"
  case "$name" in *.*) ;; *) continue ;; esac
  total=$((total + 1))

  if [ -s "$OUT/$name" ]; then
    skipped=$((skipped + 1))
    continue
  fi

  if curl -fsSL --retry 3 --retry-delay 2 --max-time 300 -o "$OUT/$name.part" "$url"; then
    mv "$OUT/$name.part" "$OUT/$name"
    ok=$((ok + 1))
    printf '.'
  else
    rm -f "$OUT/$name.part"
    failed=$((failed + 1))
    echo "$url" >> "$FAILED"
    printf 'x'
  fi
done < "$MANIFEST"

echo
echo "downloaded $ok, already had $skipped, failed $failed, of $total"
[ "$failed" -gt 0 ] && echo "failed URLs listed in $FAILED"
exit 0
