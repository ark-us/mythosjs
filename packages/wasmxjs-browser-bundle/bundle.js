// Import the entire wasmxjs package
import * as WasmxJS from '@ark-us/wasmxjs';

// Export everything for ES module usage
export * from '@ark-us/wasmxjs';

// Also expose as a global for script tag usage
if (typeof window !== 'undefined') {
  window.WasmxJS = WasmxJS;
}

// Default export
export default WasmxJS;
