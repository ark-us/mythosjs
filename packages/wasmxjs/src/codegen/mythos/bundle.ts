import * as _18 from "./wasmx/v1/contract";
import * as _19 from "./wasmx/v1/genesis";
import * as _20 from "./wasmx/v1/params";
import * as _21 from "./wasmx/v1/query";
import * as _22 from "./wasmx/v1/tx";
import * as _23 from "./websrv/v1/genesis";
import * as _24 from "./websrv/v1/params";
import * as _25 from "./websrv/v1/proposal";
import * as _26 from "./websrv/v1/query";
import * as _27 from "./websrv/v1/tx";
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
export namespace mythos {
  export namespace wasmx {
    export const v1 = { ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._40,
      ..._42,
      ..._44,
      ..._46
    };
  }
  export namespace websrv {
    export const v1 = { ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
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