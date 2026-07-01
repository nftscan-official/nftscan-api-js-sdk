# AGENTS.md

## Scope
- Applies to the entire `nftscan-api-js-sdk` repository.
- Default response and documentation language is Chinese. Keep SDK class names, endpoint names, package names, and commands in English.

## Project Boundary
- This repo publishes the `nftscan-api` JavaScript/TypeScript SDK.
- It wraps NFTScan EVM and Solana REST API endpoints.
- Start from the repository default branch unless the task explicitly names another branch.

## Required Context
- Read `PRODUCT_SPEC.md`, `TECH_SPEC.md`, and `HANDOFF.md` before substantial changes.
- Read `src/util/nftscan.const.ts` before endpoint or chain changes.
- Read `src/types`, `src/api/evm`, and `src/api/solana` before public SDK changes.

## Commands
- Install: `npm ci`
- Dev watch: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Docs dev: `npm run docs-dev`

## Deployment
- Publishing is automated by GitHub Actions on push to `master`.
- Workflow: `.github/workflows/deploy.yml`.
- The workflow installs with npm, builds, and runs `npm publish` using `NFTSCAN_NPM_PUBLISH`.
- npm package contents are limited by `package.json` `files: ["dist"]`, plus npm's default package files. Agent docs are not included in the published package.

## Agent Rules
- Treat exports, types, enum values, and method names as public API.
- Do not remove chain support without checking docs, explorer, and API compatibility.
- Do not publish manually unless explicitly asked.
