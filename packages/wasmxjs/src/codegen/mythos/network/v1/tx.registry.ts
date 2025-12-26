import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrpcSendRequest, MsgStartTimeoutRequest, MsgCancelTimeoutRequest, MsgStartBackgroundProcessRequest, MsgMultiChainWrap, MsgReentryWithGoRoutine, MsgReentry, MsgGrpcReceiveRequest, MsgP2PReceiveMessageRequest, MsgExecuteCrossChainCallRequest } from "./tx";
import { MsgExecuteAtomicTxRequest } from "./custom";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mythos.network.v1.MsgGrpcSendRequest", MsgGrpcSendRequest], ["/mythos.network.v1.MsgStartTimeoutRequest", MsgStartTimeoutRequest], ["/mythos.network.v1.MsgCancelTimeoutRequest", MsgCancelTimeoutRequest], ["/mythos.network.v1.MsgStartBackgroundProcessRequest", MsgStartBackgroundProcessRequest], ["/mythos.network.v1.MsgMultiChainWrap", MsgMultiChainWrap], ["/mythos.network.v1.MsgReentryWithGoRoutine", MsgReentryWithGoRoutine], ["/mythos.network.v1.MsgReentry", MsgReentry], ["/mythos.network.v1.MsgGrpcReceiveRequest", MsgGrpcReceiveRequest], ["/mythos.network.v1.MsgP2PReceiveMessageRequest", MsgP2PReceiveMessageRequest], ["/mythos.network.v1.MsgExecuteAtomicTxRequest", MsgExecuteAtomicTxRequest], ["/mythos.network.v1.MsgExecuteCrossChainCallRequest", MsgExecuteCrossChainCallRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    grpcSendRequest(value: MsgGrpcSendRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcSendRequest",
        value: MsgGrpcSendRequest.encode(value).finish()
      };
    },

    startTimeout(value: MsgStartTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartTimeoutRequest",
        value: MsgStartTimeoutRequest.encode(value).finish()
      };
    },

    cancelTimeout(value: MsgCancelTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgCancelTimeoutRequest",
        value: MsgCancelTimeoutRequest.encode(value).finish()
      };
    },

    startBackgroundProcess(value: MsgStartBackgroundProcessRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartBackgroundProcessRequest",
        value: MsgStartBackgroundProcessRequest.encode(value).finish()
      };
    },

    multiChainWrap(value: MsgMultiChainWrap) {
      return {
        typeUrl: "/mythos.network.v1.MsgMultiChainWrap",
        value: MsgMultiChainWrap.encode(value).finish()
      };
    },

    reentryWithGoRoutine(value: MsgReentryWithGoRoutine) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentryWithGoRoutine",
        value: MsgReentryWithGoRoutine.encode(value).finish()
      };
    },

    reentry(value: MsgReentry) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentry",
        value: MsgReentry.encode(value).finish()
      };
    },

    grpcReceiveRequest(value: MsgGrpcReceiveRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcReceiveRequest",
        value: MsgGrpcReceiveRequest.encode(value).finish()
      };
    },

    p2PReceiveMessage(value: MsgP2PReceiveMessageRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgP2PReceiveMessageRequest",
        value: MsgP2PReceiveMessageRequest.encode(value).finish()
      };
    },

    executeAtomicTx(value: MsgExecuteAtomicTxRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteAtomicTxRequest",
        value: MsgExecuteAtomicTxRequest.encode(value).finish()
      };
    },

    executeCrossChainTx(value: MsgExecuteCrossChainCallRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteCrossChainCallRequest",
        value: MsgExecuteCrossChainCallRequest.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    grpcSendRequest(value: MsgGrpcSendRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcSendRequest",
        value
      };
    },

    startTimeout(value: MsgStartTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartTimeoutRequest",
        value
      };
    },

    cancelTimeout(value: MsgCancelTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgCancelTimeoutRequest",
        value
      };
    },

    startBackgroundProcess(value: MsgStartBackgroundProcessRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartBackgroundProcessRequest",
        value
      };
    },

    multiChainWrap(value: MsgMultiChainWrap) {
      return {
        typeUrl: "/mythos.network.v1.MsgMultiChainWrap",
        value
      };
    },

    reentryWithGoRoutine(value: MsgReentryWithGoRoutine) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentryWithGoRoutine",
        value
      };
    },

    reentry(value: MsgReentry) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentry",
        value
      };
    },

    grpcReceiveRequest(value: MsgGrpcReceiveRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcReceiveRequest",
        value
      };
    },

    p2PReceiveMessage(value: MsgP2PReceiveMessageRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgP2PReceiveMessageRequest",
        value
      };
    },

    executeAtomicTx(value: MsgExecuteAtomicTxRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteAtomicTxRequest",
        value
      };
    },

    executeCrossChainTx(value: MsgExecuteCrossChainCallRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteCrossChainCallRequest",
        value
      };
    }

  },
  toJSON: {
    grpcSendRequest(value: MsgGrpcSendRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcSendRequest",
        value: MsgGrpcSendRequest.toJSON(value)
      };
    },

    startTimeout(value: MsgStartTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartTimeoutRequest",
        value: MsgStartTimeoutRequest.toJSON(value)
      };
    },

    cancelTimeout(value: MsgCancelTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgCancelTimeoutRequest",
        value: MsgCancelTimeoutRequest.toJSON(value)
      };
    },

    startBackgroundProcess(value: MsgStartBackgroundProcessRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartBackgroundProcessRequest",
        value: MsgStartBackgroundProcessRequest.toJSON(value)
      };
    },

    multiChainWrap(value: MsgMultiChainWrap) {
      return {
        typeUrl: "/mythos.network.v1.MsgMultiChainWrap",
        value: MsgMultiChainWrap.toJSON(value)
      };
    },

    reentryWithGoRoutine(value: MsgReentryWithGoRoutine) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentryWithGoRoutine",
        value: MsgReentryWithGoRoutine.toJSON(value)
      };
    },

    reentry(value: MsgReentry) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentry",
        value: MsgReentry.toJSON(value)
      };
    },

    grpcReceiveRequest(value: MsgGrpcReceiveRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcReceiveRequest",
        value: MsgGrpcReceiveRequest.toJSON(value)
      };
    },

    p2PReceiveMessage(value: MsgP2PReceiveMessageRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgP2PReceiveMessageRequest",
        value: MsgP2PReceiveMessageRequest.toJSON(value)
      };
    },

    executeAtomicTx(value: MsgExecuteAtomicTxRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteAtomicTxRequest",
        value: MsgExecuteAtomicTxRequest.toJSON(value)
      };
    },

    executeCrossChainTx(value: MsgExecuteCrossChainCallRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteCrossChainCallRequest",
        value: MsgExecuteCrossChainCallRequest.toJSON(value)
      };
    }

  },
  fromJSON: {
    grpcSendRequest(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcSendRequest",
        value: MsgGrpcSendRequest.fromJSON(value)
      };
    },

    startTimeout(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartTimeoutRequest",
        value: MsgStartTimeoutRequest.fromJSON(value)
      };
    },

    cancelTimeout(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgCancelTimeoutRequest",
        value: MsgCancelTimeoutRequest.fromJSON(value)
      };
    },

    startBackgroundProcess(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartBackgroundProcessRequest",
        value: MsgStartBackgroundProcessRequest.fromJSON(value)
      };
    },

    multiChainWrap(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgMultiChainWrap",
        value: MsgMultiChainWrap.fromJSON(value)
      };
    },

    reentryWithGoRoutine(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentryWithGoRoutine",
        value: MsgReentryWithGoRoutine.fromJSON(value)
      };
    },

    reentry(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentry",
        value: MsgReentry.fromJSON(value)
      };
    },

    grpcReceiveRequest(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcReceiveRequest",
        value: MsgGrpcReceiveRequest.fromJSON(value)
      };
    },

    p2PReceiveMessage(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgP2PReceiveMessageRequest",
        value: MsgP2PReceiveMessageRequest.fromJSON(value)
      };
    },

    executeAtomicTx(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteAtomicTxRequest",
        value: MsgExecuteAtomicTxRequest.fromJSON(value)
      };
    },

    executeCrossChainTx(value: any) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteCrossChainCallRequest",
        value: MsgExecuteCrossChainCallRequest.fromJSON(value)
      };
    }

  },
  fromPartial: {
    grpcSendRequest(value: MsgGrpcSendRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcSendRequest",
        value: MsgGrpcSendRequest.fromPartial(value)
      };
    },

    startTimeout(value: MsgStartTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartTimeoutRequest",
        value: MsgStartTimeoutRequest.fromPartial(value)
      };
    },

    cancelTimeout(value: MsgCancelTimeoutRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgCancelTimeoutRequest",
        value: MsgCancelTimeoutRequest.fromPartial(value)
      };
    },

    startBackgroundProcess(value: MsgStartBackgroundProcessRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgStartBackgroundProcessRequest",
        value: MsgStartBackgroundProcessRequest.fromPartial(value)
      };
    },

    multiChainWrap(value: MsgMultiChainWrap) {
      return {
        typeUrl: "/mythos.network.v1.MsgMultiChainWrap",
        value: MsgMultiChainWrap.fromPartial(value)
      };
    },

    reentryWithGoRoutine(value: MsgReentryWithGoRoutine) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentryWithGoRoutine",
        value: MsgReentryWithGoRoutine.fromPartial(value)
      };
    },

    reentry(value: MsgReentry) {
      return {
        typeUrl: "/mythos.network.v1.MsgReentry",
        value: MsgReentry.fromPartial(value)
      };
    },

    grpcReceiveRequest(value: MsgGrpcReceiveRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgGrpcReceiveRequest",
        value: MsgGrpcReceiveRequest.fromPartial(value)
      };
    },

    p2PReceiveMessage(value: MsgP2PReceiveMessageRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgP2PReceiveMessageRequest",
        value: MsgP2PReceiveMessageRequest.fromPartial(value)
      };
    },

    executeAtomicTx(value: MsgExecuteAtomicTxRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteAtomicTxRequest",
        value: MsgExecuteAtomicTxRequest.fromPartial(value)
      };
    },

    executeCrossChainTx(value: MsgExecuteCrossChainCallRequest) {
      return {
        typeUrl: "/mythos.network.v1.MsgExecuteCrossChainCallRequest",
        value: MsgExecuteCrossChainCallRequest.fromPartial(value)
      };
    }

  }
};