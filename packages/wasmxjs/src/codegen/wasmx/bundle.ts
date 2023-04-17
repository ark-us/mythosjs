import * as _29 from "./wasmx/v1/contract";
import * as _30 from "./wasmx/v1/genesis";
import * as _31 from "./wasmx/v1/params";
import * as _32 from "./wasmx/v1/query";
import * as _33 from "./wasmx/v1/tx";
import * as _34 from "./websrv/v1/genesis";
import * as _35 from "./websrv/v1/params";
import * as _36 from "./websrv/v1/proposal";
import * as _37 from "./websrv/v1/query";
import * as _38 from "./websrv/v1/tx";
import * as _40 from "./wasmx/v1/tx.amino";
import * as _41 from "./websrv/v1/tx.amino";
import * as _42 from "./wasmx/v1/tx.registry";
import * as _43 from "./websrv/v1/tx.registry";
import * as _44 from "./wasmx/v1/query.rpc.Query";
import * as _45 from "./websrv/v1/query.rpc.Query";
import * as _46 from "./wasmx/v1/tx.rpc.msg";
import * as _47 from "./websrv/v1/tx.rpc.msg";
import * as _49 from "./rpc.query";
import * as _50 from "./rpc.tx";
export namespace wasmx {
  export namespace wasmx {
    export const v1 = { ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._40,
      ..._42,
      ..._44,
      ..._46
    };
  }
  export namespace websrv {
    export const v1 = { ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._41,
      ..._43,
      ..._45,
      ..._47
    };
  }
  export const ClientFactory = { ..._49,
    ..._50
  };
}