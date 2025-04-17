import * as _138 from "./cosmosmod/v1/auth_cosmos";
import * as _139 from "./cosmosmod/v1/auth_genesis";
import * as _140 from "./cosmosmod/v1/auth";
import * as _141 from "./cosmosmod/v1/bank_genesis";
import * as _142 from "./cosmosmod/v1/distribution_genesis";
import * as _143 from "./cosmosmod/v1/genesis";
import * as _144 from "./cosmosmod/v1/gov_genesis";
import * as _145 from "./cosmosmod/v1/gov";
import * as _146 from "./cosmosmod/v1/staking_genesis";
import * as _147 from "./cosmosmod/v1/staking";
import * as _148 from "./crypto/v1/ethsecp256k1/keys";
import * as _149 from "./network/v1/custom";
import * as _150 from "./network/v1/genesis";
import * as _151 from "./network/v1/query";
import * as _152 from "./network/v1/tendermint";
import * as _153 from "./network/v1/tx";
import * as _154 from "./wasmx/v1/contract";
import * as _155 from "./wasmx/v1/eth";
import * as _156 from "./wasmx/v1/genesis";
import * as _157 from "./wasmx/v1/params";
import * as _158 from "./wasmx/v1/query";
import * as _159 from "./wasmx/v1/role";
import * as _160 from "./wasmx/v1/tx";
import * as _161 from "./websrv/v1/genesis";
import * as _162 from "./websrv/v1/params";
import * as _163 from "./websrv/v1/query";
import * as _164 from "./websrv/v1/tx";
import * as _253 from "./network/v1/tx.amino";
import * as _254 from "./wasmx/v1/tx.amino";
import * as _255 from "./websrv/v1/tx.amino";
import * as _256 from "./network/v1/tx.registry";
import * as _257 from "./wasmx/v1/tx.registry";
import * as _258 from "./websrv/v1/tx.registry";
import * as _259 from "./network/v1/query.rpc.Query";
import * as _260 from "./wasmx/v1/query.rpc.Query";
import * as _261 from "./websrv/v1/query.rpc.Query";
import * as _262 from "./network/v1/tx.rpc.msg";
import * as _263 from "./wasmx/v1/tx.rpc.msg";
import * as _264 from "./websrv/v1/tx.rpc.msg";
import * as _267 from "./rpc.query";
import * as _268 from "./rpc.tx";
export namespace mythos {
  export namespace cosmosmod {
    export const v1 = { ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147
    };
  }
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = { ..._148
      };
    }
  }
  export namespace network {
    export const v1 = { ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._253,
      ..._256,
      ..._259,
      ..._262
    };
  }
  export namespace wasmx {
    export const v1 = { ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._254,
      ..._257,
      ..._260,
      ..._263
    };
  }
  export namespace websrv {
    export const v1 = { ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._255,
      ..._258,
      ..._261,
      ..._264
    };
  }
  export const ClientFactory = { ..._267,
    ..._268
  };
}