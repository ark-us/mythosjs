# mythosjs


* change proto defs in packages/wasmxjs/proto
* cosmos-sdk v0.50.6

```bash
cd packages/wasmxjs
yarn
yarn buidl
yarn codegen
```

* `src/codegen/index.ts` should contain `export * from "./mythos/index";`
* `src/codegen/mythos/index.ts` should export `src/codegen/mythos` contents
* either fix Duration and Time or fix amino conversions after `yarn build:ts`

```bash
yarn build:ts
yarn publish
```

```bash
cd packages/wasmx-stargate
yarn
yarn build

yarn publish
```
