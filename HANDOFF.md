# HANDOFF.md

## 2026-07-01 Context Initialization
- Current working tree before documentation work: clean.
- Added project, product, technical, deployment, and handoff documentation.

## Current State
- Public SDK package is `nftscan-api` at version `1.15.0`.
- Build output is `dist`, and only `dist` is included in the package files.
- GitHub Actions publishes to npm on push to `master`.
- `npm pack --dry-run --json` confirms agent docs are not included in the npm package contents.

## Next Task Checklist
- For chain support changes, update constants, types, README/docs, and generated package output as needed.
- For method changes, preserve public signatures unless a breaking version is intended.
- Run `npm run lint` and `npm run build`.

## Verification Notes
- This handoff records documentation context only. It does not claim the SDK was built or published.
