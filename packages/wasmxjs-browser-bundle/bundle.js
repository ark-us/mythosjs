// Import the entire wasmxjs package
import * as WasmxJS from '@ark-us/wasmxjs';
import * as WasmxStargate from '@ark-us/wasmx-stargate';

// Import CosmJS utilities for manual transaction construction
import * as ProtoSigning from '@cosmjs/proto-signing';
import * as Amino from '@cosmjs/amino';
import * as Encoding from '@cosmjs/encoding';

// Import Cosmos types
import { TxRaw, TxBody } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

// Export everything for ES module usage
export * from '@ark-us/wasmxjs';
export * as stargate from '@ark-us/wasmx-stargate';
export * as protoSigning from '@cosmjs/proto-signing';
export * as amino from '@cosmjs/amino';
export * as encoding from '@cosmjs/encoding';

// Also expose as a global for script tag usage
if (typeof window !== 'undefined') {
  window.WasmxJS = {
    ...WasmxJS,
    stargate: WasmxStargate,
    protoSigning: ProtoSigning,
    amino: Amino,
    encoding: Encoding,
    cosmjsTypes: {
      cosmos: {
        tx: {
          v1beta1: {
            tx: { TxRaw, TxBody }
          }
        }
      }
    },
    // Also expose wasmx types at top level for easy access
    wasmx: WasmxJS
  };
}

// Default export with stargate
export default {
  ...WasmxJS,
  stargate: WasmxStargate,
  protoSigning: ProtoSigning,
  amino: Amino,
  encoding: Encoding
};
