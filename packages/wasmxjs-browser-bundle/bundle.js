// Import the entire wasmxjs package
import * as WasmxJS from '@ark-us/wasmxjs';
import * as WasmxStargate from '@ark-us/wasmx-stargate';

// Export everything for ES module usage
export * from '@ark-us/wasmxjs';
export * as stargate from '@ark-us/wasmx-stargate';

// Also expose as a global for script tag usage
if (typeof window !== 'undefined') {
  window.WasmxJS = {
    ...WasmxJS,
    stargate: WasmxStargate
  };
}

// Default export with stargate
export default {
  ...WasmxJS,
  stargate: WasmxStargate
};
