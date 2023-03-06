import * as _29 from "./wasmx/contract";
import * as _30 from "./wasmx/genesis";
import * as _31 from "./wasmx/params";
import * as _32 from "./wasmx/query";
import * as _33 from "./wasmx/tx";
import * as _35 from "./wasmx/tx.amino";
import * as _36 from "./wasmx/tx.registry";
import * as _37 from "./wasmx/query.rpc.Query";
import * as _38 from "./wasmx/tx.rpc.msg";
import * as _40 from "./rpc.query";
import * as _41 from "./rpc.tx";
export namespace wasmx {
  export const wasmx = { ..._29,
    ..._30,
    ..._31,
    ..._32,
    ..._33,
    ..._35,
    ..._36,
    ..._37,
    ..._38
  };
  export const ClientFactory = { ..._40,
    ..._41
  };
}