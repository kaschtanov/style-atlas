#!/bin/sh
# Prints the HTTP status of every site link in site/data.js (follows redirects, browser-like user agent).
# sh tools/check-links.sh
cd "$(dirname "$0")/.." || exit 1
grep -o 'url: "[^"]*"' site/data.js | cut -d'"' -f2 | while read -r u; do
  printf '%s %s\n' "$(curl -s -o /dev/null -L -m 20 -A 'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/130 Safari/537.36' -w '%{http_code}' "$u")" "$u"
done
