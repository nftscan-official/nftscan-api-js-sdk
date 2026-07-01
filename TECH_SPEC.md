# TECH_SPEC.md

## Stack
- TypeScript 4, Rollup, Axios, VuePress docs.
- Package manager: npm, because `package-lock.json` is present.
- Published package: `nftscan-api`.

## Important Files
- `src/index.ts`: public exports.
- `src/api/evm/nftscan-evm.ts`: EVM API client.
- `src/api/solana/nftscan-solana.ts`: Solana API client.
- `src/api/base-api.ts`: shared API behavior.
- `src/http/nftscan.http.ts`: HTTP transport.
- `src/types`: public types.
- `src/util/nftscan.const.ts`: API hosts and endpoint paths.
- `.github/workflows/deploy.yml`: npm publication pipeline.

## Local Development
```bash
npm ci
npm run dev
```

## Build and Verification
```bash
npm run lint
npm run build
```

`npm run test` is currently a placeholder that exits with an error. Do not cite it as passing verification.

## Release and Deployment
```bash
npm run release-patch
npm run release-minor
npm run release-major
```

Publishing path:
- push to `master`;
- GitHub Actions uses Node 16;
- runs `npm install`;
- runs `npm run build`;
- runs `npm publish` with `NFTSCAN_NPM_PUBLISH`.

Package contents are constrained by `package.json`:

```json
"files": [
  "dist"
]
```

`npm pack --dry-run --json` confirms the package contains `README.md`, `package.json`, and `dist/**`; agent-facing docs such as `AGENTS.md`, `PRODUCT_SPEC.md`, `TECH_SPEC.md`, and `HANDOFF.md` are not included in the published npm package.

Only pushes to `master` match the current publish trigger. Work on other branches must be merged or pushed to `master` before the workflow publishes, unless the workflow is changed.
