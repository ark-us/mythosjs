import * as _0 from "./base/abci/v1beta1/abci";
import * as _1 from "./base/kv/v1beta1/kv";
import * as _2 from "./base/query/v1beta1/pagination";
import * as _3 from "./base/reflection/v1beta1/reflection";
import * as _4 from "./base/reflection/v2alpha1/reflection";
import * as _5 from "./base/snapshots/v1beta1/snapshot";
import * as _6 from "./base/store/v1beta1/commit_info";
import * as _7 from "./base/store/v1beta1/listening";
import * as _8 from "./base/tendermint/v1beta1/query";
import * as _9 from "./base/v1beta1/coin";
import * as _34 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _39 from "./rpc.query";
export namespace cosmos {
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._0
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._1
      };
    }
    export namespace query {
      export const v1beta1 = { ..._2
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._3
      };
      export const v2alpha1 = { ..._4
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._5
      };
    }
    export namespace store {
      export const v1beta1 = { ..._6,
        ..._7
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._8,
        ..._34
      };
    }
    export const v1beta1 = { ..._9
    };
  }
  export const ClientFactory = { ..._39
  };
}