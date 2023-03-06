import * as _18 from "./abci/types";
import * as _19 from "./crypto/keys";
import * as _20 from "./crypto/proof";
import * as _21 from "./libs/bits/types";
import * as _22 from "./p2p/types";
import * as _23 from "./types/block";
import * as _24 from "./types/evidence";
import * as _25 from "./types/params";
import * as _26 from "./types/types";
import * as _27 from "./types/validator";
import * as _28 from "./version/types";
export namespace tendermint {
  export const abci = { ..._18
  };
  export const crypto = { ..._19,
    ..._20
  };
  export namespace libs {
    export const bits = { ..._21
    };
  }
  export const p2p = { ..._22
  };
  export const types = { ..._23,
    ..._24,
    ..._25,
    ..._26,
    ..._27
  };
  export const version = { ..._28
  };
}