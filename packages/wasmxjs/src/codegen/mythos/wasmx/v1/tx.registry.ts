import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgDeployCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgCompileContract, MsgExecuteEth, MsgExecuteWithOriginContract, MsgExecuteDelegateContract } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mythos.wasmx.v1.MsgStoreCode", MsgStoreCode], ["/mythos.wasmx.v1.MsgDeployCode", MsgDeployCode], ["/mythos.wasmx.v1.MsgInstantiateContract", MsgInstantiateContract], ["/mythos.wasmx.v1.MsgInstantiateContract2", MsgInstantiateContract2], ["/mythos.wasmx.v1.MsgExecuteContract", MsgExecuteContract], ["/mythos.wasmx.v1.MsgCompileContract", MsgCompileContract], ["/mythos.wasmx.v1.MsgExecuteEth", MsgExecuteEth], ["/mythos.wasmx.v1.MsgExecuteWithOriginContract", MsgExecuteWithOriginContract], ["/mythos.wasmx.v1.MsgExecuteDelegateContract", MsgExecuteDelegateContract]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgStoreCode",
        value: MsgStoreCode.encode(value).finish()
      };
    },

    deployCode(value: MsgDeployCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgDeployCode",
        value: MsgDeployCode.encode(value).finish()
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.encode(value).finish()
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.encode(value).finish()
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteContract",
        value: MsgExecuteContract.encode(value).finish()
      };
    },

    compileContract(value: MsgCompileContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgCompileContract",
        value: MsgCompileContract.encode(value).finish()
      };
    },

    executeEth(value: MsgExecuteEth) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteEth",
        value: MsgExecuteEth.encode(value).finish()
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.encode(value).finish()
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgStoreCode",
        value
      };
    },

    deployCode(value: MsgDeployCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgDeployCode",
        value
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract",
        value
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract2",
        value
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteContract",
        value
      };
    },

    compileContract(value: MsgCompileContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgCompileContract",
        value
      };
    },

    executeEth(value: MsgExecuteEth) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteEth",
        value
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteWithOriginContract",
        value
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteDelegateContract",
        value
      };
    }

  },
  toJSON: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgStoreCode",
        value: MsgStoreCode.toJSON(value)
      };
    },

    deployCode(value: MsgDeployCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgDeployCode",
        value: MsgDeployCode.toJSON(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.toJSON(value)
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.toJSON(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteContract",
        value: MsgExecuteContract.toJSON(value)
      };
    },

    compileContract(value: MsgCompileContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgCompileContract",
        value: MsgCompileContract.toJSON(value)
      };
    },

    executeEth(value: MsgExecuteEth) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteEth",
        value: MsgExecuteEth.toJSON(value)
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.toJSON(value)
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.toJSON(value)
      };
    }

  },
  fromJSON: {
    storeCode(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgStoreCode",
        value: MsgStoreCode.fromJSON(value)
      };
    },

    deployCode(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgDeployCode",
        value: MsgDeployCode.fromJSON(value)
      };
    },

    instantiateContract(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromJSON(value)
      };
    },

    instantiateContract2(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.fromJSON(value)
      };
    },

    executeContract(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteContract",
        value: MsgExecuteContract.fromJSON(value)
      };
    },

    compileContract(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgCompileContract",
        value: MsgCompileContract.fromJSON(value)
      };
    },

    executeEth(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteEth",
        value: MsgExecuteEth.fromJSON(value)
      };
    },

    executeWithOriginContract(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.fromJSON(value)
      };
    },

    executeDelegateContract(value: any) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.fromJSON(value)
      };
    }

  },
  fromPartial: {
    storeCode(value: MsgStoreCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgStoreCode",
        value: MsgStoreCode.fromPartial(value)
      };
    },

    deployCode(value: MsgDeployCode) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgDeployCode",
        value: MsgDeployCode.fromPartial(value)
      };
    },

    instantiateContract(value: MsgInstantiateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract",
        value: MsgInstantiateContract.fromPartial(value)
      };
    },

    instantiateContract2(value: MsgInstantiateContract2) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract2",
        value: MsgInstantiateContract2.fromPartial(value)
      };
    },

    executeContract(value: MsgExecuteContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteContract",
        value: MsgExecuteContract.fromPartial(value)
      };
    },

    compileContract(value: MsgCompileContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgCompileContract",
        value: MsgCompileContract.fromPartial(value)
      };
    },

    executeEth(value: MsgExecuteEth) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteEth",
        value: MsgExecuteEth.fromPartial(value)
      };
    },

    executeWithOriginContract(value: MsgExecuteWithOriginContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteWithOriginContract",
        value: MsgExecuteWithOriginContract.fromPartial(value)
      };
    },

    executeDelegateContract(value: MsgExecuteDelegateContract) {
      return {
        typeUrl: "/mythos.wasmx.v1.MsgExecuteDelegateContract",
        value: MsgExecuteDelegateContract.fromPartial(value)
      };
    }

  }
};