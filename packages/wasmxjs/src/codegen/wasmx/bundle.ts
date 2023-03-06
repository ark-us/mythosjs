import * as _29 from "./wasmx/contract";
import * as _30 from "./wasmx/genesis";
import * as _31 from "./wasmx/params";
import * as _32 from "./wasmx/query";
import * as _33 from "./wasmx/tx";
import * as _36 from "./wasmx/tx.amino";
import * as _37 from "./wasmx/tx.registry";
import * as _38 from "./wasmx/query.lcd";
import * as _39 from "./wasmx/query.rpc.Query";
import * as _40 from "./wasmx/tx.rpc.msg";
import * as _43 from "./lcd";
import * as _44 from "./rpc.query";
import * as _45 from "./rpc.tx";
export namespace wasmx {
  export const wasmx = { ..._29,
    ..._30,
    ..._31,
    ..._32,
    ..._33,
    ..._36,
    ..._37,
    ..._38,
    ..._39,
    ..._40
  };
  export const ClientFactory = { ..._43,
    ..._44,
    ..._45
  };
}