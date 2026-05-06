# Silver Ops Report Plane Walkthrough

This walk-through keeps the domain vocabulary close to the data instead of burying it in prose.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 126 | watch |
| stress | rename risk | 193 | ship |
| edge | operator cost | 194 | ship |
| recovery | idempotence | 142 | ship |
| stale | dry-run spread | 177 | ship |

Start with `edge` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `operator cost` against `dry-run spread`, not the raw score alone.
