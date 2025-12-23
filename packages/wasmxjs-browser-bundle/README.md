# WasmxJS Browser Bundle

This creates a browser-ready bundle of @ark-us/wasmxjs and @ark-us/wasmx-stargate.

## Build

```bash
npm install
npm run build
```

This creates:
- `dist/wasmxjs-bundle.es.js` - ES module format (for `import`)
- `dist/wasmxjs-bundle.umd.js` - UMD format (for `<script>` tag)

## What's Included

- **@ark-us/wasmxjs** - WasmX protocol buffer messages
- **@ark-us/wasmx-stargate** - WasmX Stargate client (available as `WasmxJS.stargate`)

## Usage

### Option 1: ES Module Import

```html
<script type="module">
  import * as WasmxJS from './dist/wasmxjs-bundle.es.js';
  import { stargate } from './dist/wasmxjs-bundle.es.js';

  console.log('WasmxJS:', WasmxJS);
  console.log('Stargate:', stargate);
</script>
```

### Option 2: Script Tag (UMD)

```html
<script src="./dist/wasmxjs-bundle.umd.js"></script>
<script>
  console.log('WasmxJS:', window.WasmxJS);
  console.log('Stargate:', window.WasmxJS.stargate);

  // Use stargate client
  const { SigningStargateClient } = window.WasmxJS.stargate;
</script>
```

### Option 3: CDN (jsDelivr)

```html
<!-- Load from GitHub via jsDelivr -->
<script src="https://cdn.jsdelivr.net/gh/ark-us/mythosjs@main/packages/wasmxjs-browser-bundle/dist/wasmxjs-bundle.umd.js"></script>
<script>
  console.log('WasmxJS:', window.WasmxJS);
  console.log('Stargate:', window.WasmxJS.stargate);
</script>
```

### Option 4: Mixed (Script tag + Module)

```html
<script src="./dist/wasmxjs-bundle.umd.js"></script>
<script type="module">
  import * as secp from 'https://cdn.jsdelivr.net/npm/@noble/secp256k1@2.1.0/+esm';

  // WasmxJS is available as global
  console.log('WasmxJS:', window.WasmxJS);

  // Access stargate client
  const { SigningStargateClient } = window.WasmxJS.stargate;

  // Use with your other imports
  const keyPair = generateKeyPair();
</script>
```
