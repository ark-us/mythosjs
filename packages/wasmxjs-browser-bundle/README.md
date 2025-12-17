# WasmxJS Browser Bundle

This creates a browser-ready bundle of @ark-us/wasmxjs.

## Build

```bash
npm install
npm run build
```

This creates:
- `dist/wasmxjs-bundle.es.js` - ES module format (for `import`)
- `dist/wasmxjs-bundle.umd.js` - UMD format (for `<script>` tag)

## Usage

### Option 1: ES Module Import

```html
<script type="module">
  import * as WasmxJS from './dist/wasmxjs-bundle.es.js';
  console.log('WasmxJS:', WasmxJS);
</script>
```

### Option 2: Script Tag (UMD)

```html
<script src="./dist/wasmxjs-bundle.umd.js"></script>
<script>
  console.log('WasmxJS:', window.WasmxJS);
</script>
```

### Option 3: Mixed (Script tag + Module)

```html
<script src="./dist/wasmxjs-bundle.umd.js"></script>
<script type="module">
  import * as secp from 'https://cdn.jsdelivr.net/npm/@noble/secp256k1@2.1.0/+esm';

  // WasmxJS is available as global
  console.log('WasmxJS:', window.WasmxJS);

  // Use with your other imports
  const keyPair = generateKeyPair();
</script>
```
