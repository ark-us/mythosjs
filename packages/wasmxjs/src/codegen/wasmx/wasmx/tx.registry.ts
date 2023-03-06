import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/wasmx.wasmx.MsgStoreCode", MsgStoreCode], ["/wasmx.wasmx.MsgInstantiateContract", MsgInstantiateContract], ["/wasmx.wasmx.MsgInstantiateContract2", MsgInstantiateContract2], ["/wasmx.wasmx.MsgExecuteContract", MsgExecuteContract], ["/wasmx.wasmx.MsgExecuteWithOriginContract", MsgExecuteWithOriginContract], ["/wasmx.wasmx.MsgExecuteDelegateContract", MsgExecuteDelegateContract]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/wasmx.wasmx.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
        value: MsgInstantiateContract.encode(value).finish()
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract2",
        value: MsgInstantiateContract2.encode(value).finish()
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteContract",
        value: MsgExecuteContract.encode(value).finish()
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.encode(value).finish()
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/wasmx.wasmx.MsgStoreCode",
        value
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
        value
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract2",
        value
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteContract",
        value
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteWithOriginContract",
        value
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteDelegateContract",
        value
      };
    }

  },
  toJSON: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/wasmx.wasmx.MsgStoreCode",
        value: MsgStoreCode.toJSON(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
        value: MsgInstantiateContract.toJSON(value)
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract2",
        value: MsgInstantiateContract2.toJSON(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteContract",
        value: MsgExecuteContract.toJSON(value)
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.toJSON(value)
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.toJSON(value)
      };
    }

  },
  fromJSON: {
    storeCode(value: any) {
      return {
        typeUrl: "/wasmx.wasmx.MsgStoreCode",
        value: MsgStoreCode.fromJSON(value)
      };
    },

    instantiateContract(value: any) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
        value: MsgInstantiateContract.fromJSON(value)
      };
    },

    instantiateContract2(value: any) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract2",
        value: MsgInstantiateContract2.fromJSON(value)
      };
    },

    executeContract(value: any) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteContract",
        value: MsgExecuteContract.fromJSON(value)
      };
    },

    executeWithOriginContract(value: any) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.fromJSON(value)
      };
    },

    executeDelegateContract(value: any) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.fromJSON(value)
      };
    }

  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/wasmx.wasmx.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(value)
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/wasmx.wasmx.MsgInstantiateContract2",
        value: MsgInstantiateContract2.fromPartial(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteContract",
        value: MsgExecuteContract.fromPartial(value)
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.fromPartial(value)
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/wasmx.wasmx.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.fromPartial(value)
      };
    }

  }
};