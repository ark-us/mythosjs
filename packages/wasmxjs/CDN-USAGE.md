# Using WasmxJS with CDN

Add this script tag to your HTML:

```html
<!-- Using unpkg -->
<script src="https://unpkg.com/@ark-us/wasmxjs@latest/dist/wasmxjs.umd.min.js"></script>

<!-- Or using jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@ark-us/wasmxjs@latest/dist/wasmxjs.umd.min.js"></script>
```

The library will be available as a global variable `WasmxJS`.

## Example Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>WasmxJS Example</title>
</head>
<body>
    <script src="https://unpkg.com/@ark-us/wasmxjs@latest/dist/wasmxjs.umd.min.js"></script>
    <script>
        // WasmxJS is now available globally
        console.log('WasmxJS loaded:', WasmxJS);

        // Access your protobuf types and utilities
        // Example: const { wasmx } = WasmxJS;
    </script>
</body>
</html>
```

## Available Versions

### Minified (Production)
```html
<!-- Latest version -->
<script src="https://unpkg.com/@ark-us/wasmxjs@latest/dist/wasmxjs.umd.min.js"></script>

<!-- Specific version -->
<script src="https://unpkg.com/@ark-us/wasmxjs@0.0.12/dist/wasmxjs.umd.min.js"></script>
```

### Unminified (Development/Debugging)
```html
<!-- Latest version -->
<script src="https://unpkg.com/@ark-us/wasmxjs@latest/dist/wasmxjs.umd.js"></script>

<!-- Specific version -->
<script src="https://unpkg.com/@ark-us/wasmxjs@0.0.12/dist/wasmxjs.umd.js"></script>
```

## CDN Options

### unpkg
- URL: `https://unpkg.com/@ark-us/wasmxjs@<version>/dist/wasmxjs.umd.min.js`
- Automatically serves the latest version when using `@latest`
- Fast global CDN
- No signup required

### jsDelivr
- URL: `https://cdn.jsdelivr.net/npm/@ark-us/wasmxjs@<version>/dist/wasmxjs.umd.min.js`
- Multiple CDN sources for high availability
- Better performance in some regions
- Free for open source projects

## Building the Browser Bundle

To rebuild the browser bundle locally:

```bash
npm run build:browser
```

This will generate:
- `dist/wasmxjs.umd.js` - Unminified bundle (~7MB)
- `dist/wasmxjs.umd.min.js` - Minified bundle (~3MB)
- Source maps for both files

## Publishing

After building, publish to npm:

```bash
npm publish
```

The CDNs (unpkg and jsDelivr) will automatically pick up the new version within minutes.
