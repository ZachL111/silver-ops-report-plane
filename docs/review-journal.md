# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its automation focus without claiming live deployment or external usage.

## Cases

- `baseline`: `dry-run spread`, score 126, lane `watch`
- `stress`: `rename risk`, score 193, lane `ship`
- `edge`: `operator cost`, score 194, lane `ship`
- `recovery`: `idempotence`, score 142, lane `ship`
- `stale`: `dry-run spread`, score 177, lane `ship`

## Note

The useful failure mode here is a wrong decision on a named case, not a vague style disagreement.
