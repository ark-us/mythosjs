import * as _28 from "./abci/types";
import * as _29 from "./crypto/keys";
import * as _30 from "./crypto/proof";
import * as _31 from "./libs/bits/types";
import * as _32 from "./p2p/types";
import * as _33 from "./types/block";
import * as _34 from "./types/evidence";
import * as _35 from "./types/params";
import * as _36 from "./types/types";
import * as _37 from "./types/validator";
import * as _38 from "./version/types";
export namespace tendermint {
  export const abci = { ..._28
  };
  export const crypto = { ..._29,
    ..._30
  };
  export namespace libs {
    export const bits = { ..._31
    };
  }
  export const p2p = { ..._32
  };
  export const types = { ..._33,
    ..._34,
    ..._35,
    ..._36,
    ..._37
  };
  export const version = { ..._38
  };
}