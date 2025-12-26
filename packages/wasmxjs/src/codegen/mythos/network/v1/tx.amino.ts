import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgGrpcSendRequest, MsgStartTimeoutRequest, MsgCancelTimeoutRequest, MsgStartBackgroundProcessRequest, MsgMultiChainWrap, MsgReentryWithGoRoutine, MsgReentry, MsgGrpcReceiveRequest, MsgP2PReceiveMessageRequest, MsgExecuteCrossChainCallRequest } from "./tx";
import { MsgExecuteAtomicTxRequest } from "./custom";
export interface AminoMsgGrpcSendRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgGrpcSendRequest";
  value: {
    authority: string;
    sender: string;
    contract: string;
    ip_address: string;
    data: Uint8Array;
    encoding: string;
  };
}
export interface AminoMsgStartTimeoutRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgStartTimeoutRequest";
  value: {
    authority: string;
    sender: string;
    contract: string;
    delay: string;
    args: Uint8Array;
    id: string;
  };
}
export interface AminoMsgCancelTimeoutRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgCancelTimeoutRequest";
  value: {
    authority: string;
    sender: string;
    id: string;
  };
}
export interface AminoMsgStartBackgroundProcessRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgStartBackgroundProcessRequest";
  value: {
    authority: string;
    sender: string;
    contract: string;
    args: Uint8Array;
  };
}
export interface AminoMsgMultiChainWrap extends AminoMsg {
  type: "/mythos.network.v1.MsgMultiChainWrap";
  value: {
    multi_chain_id: string;
    sender: string;
    data: {
      type_url: string;
      value: Uint8Array;
    };
  };
}
export interface AminoMsgReentryWithGoRoutine extends AminoMsg {
  type: "/mythos.network.v1.MsgReentryWithGoRoutine";
  value: {
    authority: string;
    sender: string;
    contract: string;
    entry_point: string;
    msg: Uint8Array;
  };
}
export interface AminoMsgReentry extends AminoMsg {
  type: "/mythos.network.v1.MsgReentry";
  value: {
    authority: string;
    sender: string;
    contract: string;
    entry_point: string;
    msg: Uint8Array;
  };
}
export interface AminoMsgGrpcReceiveRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgGrpcReceiveRequest";
  value: {
    authority: string;
    sender: string;
    contract: string;
    data: Uint8Array;
    encoding: string;
  };
}
export interface AminoMsgP2PReceiveMessageRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgP2PReceiveMessageRequest";
  value: {
    authority: string;
    sender: string;
    contract: string;
    data: Uint8Array;
  };
}
export interface AminoMsgExecuteAtomicTxRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgExecuteAtomicTxRequest";
  value: {
    txs: Uint8Array[];
    sender: Uint8Array;
  };
}
export interface AminoMsgExecuteCrossChainCallRequest extends AminoMsg {
  type: "/mythos.network.v1.MsgExecuteCrossChainCallRequest";
  value: {
    authority: string;
    sender: string;
    from: string;
    to: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
    dependencies: string[];
    from_chain_id: string;
    to_chain_id: string;
    is_query: boolean;
    timeout_ms: string;
  };
}
export const AminoConverter = {
  "/mythos.network.v1.MsgGrpcSendRequest": {
    aminoType: "/mythos.network.v1.MsgGrpcSendRequest",
    toAmino: ({
      authority,
      sender,
      contract,
      ipAddress,
      data,
      encoding
    }: MsgGrpcSendRequest): AminoMsgGrpcSendRequest["value"] => {
      return {
        authority,
        sender,
        contract,
        ip_address: ipAddress,
        data,
        encoding
      };
    },
    fromAmino: ({
      authority,
      sender,
      contract,
      ip_address,
      data,
      encoding
    }: AminoMsgGrpcSendRequest["value"]): MsgGrpcSendRequest => {
      return {
        authority,
        sender,
        contract,
        ipAddress: ip_address,
        data,
        encoding
      };
    }
  },
  "/mythos.network.v1.MsgStartTimeoutRequest": {
    aminoType: "/mythos.network.v1.MsgStartTimeoutRequest",
    toAmino: ({
      authority,
      sender,
      contract,
      delay,
      args,
      id
    }: MsgStartTimeoutRequest): AminoMsgStartTimeoutRequest["value"] => {
      return {
        authority,
        sender,
        contract,
        delay: delay.toString(),
        args,
        id
      };
    },
    fromAmino: ({
      authority,
      sender,
      contract,
      delay,
      args,
      id
    }: AminoMsgStartTimeoutRequest["value"]): MsgStartTimeoutRequest => {
      return {
        authority,
        sender,
        contract,
        delay: Long.fromString(delay),
        args,
        id
      };
    }
  },
  "/mythos.network.v1.MsgCancelTimeoutRequest": {
    aminoType: "/mythos.network.v1.MsgCancelTimeoutRequest",
    toAmino: ({
      authority,
      sender,
      id
    }: MsgCancelTimeoutRequest): AminoMsgCancelTimeoutRequest["value"] => {
      return {
        authority,
        sender,
        id
      };
    },
    fromAmino: ({
      authority,
      sender,
      id
    }: AminoMsgCancelTimeoutRequest["value"]): MsgCancelTimeoutRequest => {
      return {
        authority,
        sender,
        id
      };
    }
  },
  "/mythos.network.v1.MsgStartBackgroundProcessRequest": {
    aminoType: "/mythos.network.v1.MsgStartBackgroundProcessRequest",
    toAmino: ({
      authority,
      sender,
      contract,
      args
    }: MsgStartBackgroundProcessRequest): AminoMsgStartBackgroundProcessRequest["value"] => {
      return {
        authority,
        sender,
        contract,
        args
      };
    },
    fromAmino: ({
      authority,
      sender,
      contract,
      args
    }: AminoMsgStartBackgroundProcessRequest["value"]): MsgStartBackgroundProcessRequest => {
      return {
        authority,
        sender,
        contract,
        args
      };
    }
  },
  "/mythos.network.v1.MsgMultiChainWrap": {
    aminoType: "/mythos.network.v1.MsgMultiChainWrap",
    toAmino: ({
      multiChainId,
      sender,
      data
    }: MsgMultiChainWrap): AminoMsgMultiChainWrap["value"] => {
      return {
        multi_chain_id: multiChainId,
        sender,
        data: {
          type_url: data.typeUrl,
          value: data.value
        }
      };
    },
    fromAmino: ({
      multi_chain_id,
      sender,
      data
    }: AminoMsgMultiChainWrap["value"]): MsgMultiChainWrap => {
      return {
        multiChainId: multi_chain_id,
        sender,
        data: {
          typeUrl: data.type_url,
          value: data.value
        }
      };
    }
  },
  "/mythos.network.v1.MsgReentryWithGoRoutine": {
    aminoType: "/mythos.network.v1.MsgReentryWithGoRoutine",
    toAmino: ({
      authority,
      sender,
      contract,
      entryPoint,
      msg
    }: MsgReentryWithGoRoutine): AminoMsgReentryWithGoRoutine["value"] => {
      return {
        authority,
        sender,
        contract,
        entry_point: entryPoint,
        msg
      };
    },
    fromAmino: ({
      authority,
      sender,
      contract,
      entry_point,
      msg
    }: AminoMsgReentryWithGoRoutine["value"]): MsgReentryWithGoRoutine => {
      return {
        authority,
        sender,
        contract,
        entryPoint: entry_point,
        msg
      };
    }
  },
  "/mythos.network.v1.MsgReentry": {
    aminoType: "/mythos.network.v1.MsgReentry",
    toAmino: ({
      authority,
      sender,
      contract,
      entryPoint,
      msg
    }: MsgReentry): AminoMsgReentry["value"] => {
      return {
        authority,
        sender,
        contract,
        entry_point: entryPoint,
        msg
      };
    },
    fromAmino: ({
      authority,
      sender,
      contract,
      entry_point,
      msg
    }: AminoMsgReentry["value"]): MsgReentry => {
      return {
        authority,
        sender,
        contract,
        entryPoint: entry_point,
        msg
      };
    }
  },
  "/mythos.network.v1.MsgGrpcReceiveRequest": {
    aminoType: "/mythos.network.v1.MsgGrpcReceiveRequest",
    toAmino: ({
      authority,
      sender,
      contract,
      data,
      encoding
    }: MsgGrpcReceiveRequest): AminoMsgGrpcReceiveRequest["value"] => {
      return {
        authority,
        sender,
        contract,
        data,
        encoding
      };
    },
    fromAmino: ({
      authority,
      sender,
      contract,
      data,
      encoding
    }: AminoMsgGrpcReceiveRequest["value"]): MsgGrpcReceiveRequest => {
      return {
        authority,
        sender,
        contract,
        data,
        encoding
      };
    }
  },
  "/mythos.network.v1.MsgP2PReceiveMessageRequest": {
    aminoType: "/mythos.network.v1.MsgP2PReceiveMessageRequest",
    toAmino: ({
      authority,
      sender,
      contract,
      data
    }: MsgP2PReceiveMessageRequest): AminoMsgP2PReceiveMessageRequest["value"] => {
      return {
        authority,
        sender,
        contract,
        data
      };
    },
    fromAmino: ({
      authority,
      sender,
      contract,
      data
    }: AminoMsgP2PReceiveMessageRequest["value"]): MsgP2PReceiveMessageRequest => {
      return {
        authority,
        sender,
        contract,
        data
      };
    }
  },
  "/mythos.network.v1.MsgExecuteAtomicTxRequest": {
    aminoType: "/mythos.network.v1.MsgExecuteAtomicTxRequest",
    toAmino: ({
      txs,
      sender
    }: MsgExecuteAtomicTxRequest): AminoMsgExecuteAtomicTxRequest["value"] => {
      return {
        txs,
        sender
      };
    },
    fromAmino: ({
      txs,
      sender
    }: AminoMsgExecuteAtomicTxRequest["value"]): MsgExecuteAtomicTxRequest => {
      return {
        txs,
        sender
      };
    }
  },
  "/mythos.network.v1.MsgExecuteCrossChainCallRequest": {
    aminoType: "/mythos.network.v1.MsgExecuteCrossChainCallRequest",
    toAmino: ({
      authority,
      sender,
      from,
      to,
      msg,
      funds,
      dependencies,
      fromChainId,
      toChainId,
      isQuery,
      timeoutMs
    }: MsgExecuteCrossChainCallRequest): AminoMsgExecuteCrossChainCallRequest["value"] => {
      return {
        authority,
        sender,
        from,
        to,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        dependencies,
        from_chain_id: fromChainId,
        to_chain_id: toChainId,
        is_query: isQuery,
        timeout_ms: timeoutMs.toString()
      };
    },
    fromAmino: ({
      authority,
      sender,
      from,
      to,
      msg,
      funds,
      dependencies,
      from_chain_id,
      to_chain_id,
      is_query,
      timeout_ms
    }: AminoMsgExecuteCrossChainCallRequest["value"]): MsgExecuteCrossChainCallRequest => {
      return {
        authority,
        sender,
        from,
        to,
        msg,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        dependencies,
        fromChainId: from_chain_id,
        toChainId: to_chain_id,
        isQuery: is_query,
        timeoutMs: Long.fromString(timeout_ms)
      };
    }
  }
};