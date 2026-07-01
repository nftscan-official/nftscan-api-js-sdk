# PRODUCT_SPEC.md

## Product
`nftscan-api-js-sdk` is the published npm SDK for NFTScan APIs.

## Users
- JavaScript and TypeScript developers integrating NFTScan data.
- Internal NFTScan projects that need typed API wrappers.
- Documentation maintainers who need examples aligned with actual SDK behavior.

## Core Capabilities
- Construct EVM API clients with `NftscanEvm`.
- Construct Solana API clients with `NftscanSolana`.
- Provide typed methods for assets, transactions, collections, statistics, refresh, and other supported API groups.
- Support endpoint host selection through chain enums or explicit base URLs.

## Public API Boundary
- `src/index.ts` exports the public SDK entry points.
- `src/types` defines public interfaces and enums.
- `src/util/nftscan.const.ts` maps chains and endpoint paths.
- Breaking changes require versioning discipline and docs coordination.

## Deployment Boundary
- npm publication is triggered by pushing to `master`.
- Version changes are handled through `standard-version` scripts, with commit creation skipped by current config.
