import * as _29 from "./wasmx/contract";
import * as _30 from "./wasmx/genesis";
import * as _31 from "./wasmx/params";
import * as _32 from "./wasmx/query";
import * as _33 from "./wasmx/tx";
import * as _34 from "./websrv/genesis";
import * as _35 from "./websrv/params";
import * as _36 from "./websrv/proposal";
import * as _37 from "./websrv/query";
import * as _38 from "./websrv/tx";
import * as _40 from "./wasmx/tx.amino";
import * as _41 from "./websrv/tx.amino";
import * as _42 from "./wasmx/tx.registry";
import * as _43 from "./websrv/tx.registry";
import * as _44 from "./wasmx/query.rpc.Query";
import * as _45 from "./websrv/query.rpc.Query";
import * as _46 from "./wasmx/tx.rpc.msg";
import * as _47 from "./websrv/tx.rpc.msg";
import * as _49 from "./rpc.query";
import * as _50 from "./rpc.tx";
export namespace wasmx {
  export const wasmx = { ..._29,
    ..._30,
    ..._31,
    ..._32,
    ..._33,
    ..._40,
    ..._42,
    ..._44,
    ..._46
  };
  export const websrv = { ..._34,
    ..._35,
    ..._36,
    ..._37,
    ..._38,
    ..._41,
    ..._43,
    ..._45,
    ..._47
  };
  export const ClientFactory = { ..._49,
    ..._50
  };
}