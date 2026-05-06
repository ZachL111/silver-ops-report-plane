# silver-ops-report-plane

`silver-ops-report-plane` is a JavaScript project for Automation. It turns develop a JavaScript command-oriented project for report scenarios with seeded input scenarios, deterministic summary checks, and bounded memory input sets into a small local model with readable fixtures and a direct verification command.

## Reading Silver Ops Report Plane

Start with the README, then open `metadata/project.json` to check the constants behind the examples. After that, `fixtures/cases.csv` shows the compact path and `examples/extended_cases.csv` gives a wider look at the same rule.

## Purpose

I use this kind of project to make a rule visible before adding more machinery around it. The important part here is not the size of the codebase. It is that the input signals, scoring rule, fixture data, and expected output can all be checked in one sitting.

## Fixture Notes

`examples/extended_cases.csv` adds six named cases. I kept the names plain so failures are easy to read in a terminal: baseline, pressure, surge, degraded, recovery, and boundary.

## Design Sketch

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps dry-run output, file plans, and safety rails in one explicit decision path. The threshold is 163, with risk penalty 6, latency penalty 3, and weight bonus 6. The JavaScript version uses native modules and a small Node test path.

## What It Does

- Models dry-run output with deterministic scoring and explicit review decisions.
- Uses fixture data to keep file plans changes visible in code review.
- Includes extended examples for safety rails, including `surge` and `degraded`.
- Documents idempotent checks tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Verification

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Files Worth Reading

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Next Directions

- Split the scoring constants into a typed configuration object and validate it before use.
- Add a comparison mode that shows how decisions change when one signal is adjusted.
- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add one more automation fixture that focuses on a malformed or borderline input.

## Limits

The fixture set is deliberately small. That keeps the review surface clear, but it also means the model should not be treated as a complete domain simulator.

## Setup

The only required setup is the local JavaScript toolchain. After cloning, stay in the repo root so fixture paths resolve correctly.
