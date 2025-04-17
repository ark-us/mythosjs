import { AminoMsg } from "@cosmjs/amino";
import { MsgGrpcSendRequest, MsgStartTimeoutRequest, MsgCancelTimeoutRequest, MsgStartBackgroundProcessRequest, MsgMultiChainWrap, MsgGrpcReceiveRequest, MsgP2PReceiveMessageRequest, MsgExecuteCrossChainCallRequest } from "./tx";
import { MsgExecuteAtomicTxRequest } from "./custom";
export interface AminoMsgGrpcSendRequest extends AminoMsg {
    type: "/mythos.network.v1.MsgGrpcSendRequest";
    value: {
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
        sender: string;
        id: string;
    };
}
export interface AminoMsgStartBackgroundProcessRequest extends AminoMsg {
    type: "/mythos.network.v1.MsgStartBackgroundProcessRequest";
    value: {
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
export interface AminoMsgGrpcReceiveRequest extends AminoMsg {
    type: "/mythos.network.v1.MsgGrpcReceiveRequest";
    value: {
        sender: string;
        contract: string;
        data: Uint8Array;
        encoding: string;
    };
}
export interface AminoMsgP2PReceiveMessageRequest extends AminoMsg {
    type: "/mythos.network.v1.MsgP2PReceiveMessageRequest";
    value: {
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
export declare const AminoConverter: {
    "/mythos.network.v1.MsgGrpcSendRequest": {
        aminoType: string;
        toAmino: ({ sender, contract, ipAddress, data, encoding }: MsgGrpcSendRequest) => AminoMsgGrpcSendRequest["value"];
        fromAmino: ({ sender, contract, ip_address, data, encoding }: AminoMsgGrpcSendRequest["value"]) => MsgGrpcSendRequest;
    };
    "/mythos.network.v1.MsgStartTimeoutRequest": {
        aminoType: string;
        toAmino: ({ sender, contract, delay, args, id }: MsgStartTimeoutRequest) => AminoMsgStartTimeoutRequest["value"];
        fromAmino: ({ sender, contract, delay, args, id }: AminoMsgStartTimeoutRequest["value"]) => MsgStartTimeoutRequest;
    };
    "/mythos.network.v1.MsgCancelTimeoutRequest": {
        aminoType: string;
        toAmino: ({ sender, id }: MsgCancelTimeoutRequest) => AminoMsgCancelTimeoutRequest["value"];
        fromAmino: ({ sender, id }: AminoMsgCancelTimeoutRequest["value"]) => MsgCancelTimeoutRequest;
    };
    "/mythos.network.v1.MsgStartBackgroundProcessRequest": {
        aminoType: string;
        toAmino: ({ sender, contract, args }: MsgStartBackgroundProcessRequest) => AminoMsgStartBackgroundProcessRequest["value"];
        fromAmino: ({ sender, contract, args }: AminoMsgStartBackgroundProcessRequest["value"]) => MsgStartBackgroundProcessRequest;
    };
    "/mythos.network.v1.MsgMultiChainWrap": {
        aminoType: string;
        toAmino: ({ multiChainId, sender, data }: MsgMultiChainWrap) => AminoMsgMultiChainWrap["value"];
        fromAmino: ({ multi_chain_id, sender, data }: AminoMsgMultiChainWrap["value"]) => MsgMultiChainWrap;
    };
    "/mythos.network.v1.MsgGrpcReceiveRequest": {
        aminoType: string;
        toAmino: ({ sender, contract, data, encoding }: MsgGrpcReceiveRequest) => AminoMsgGrpcReceiveRequest["value"];
        fromAmino: ({ sender, contract, data, encoding }: AminoMsgGrpcReceiveRequest["value"]) => MsgGrpcReceiveRequest;
    };
    "/mythos.network.v1.MsgP2PReceiveMessageRequest": {
        aminoType: string;
        toAmino: ({ sender, contract, data }: MsgP2PReceiveMessageRequest) => AminoMsgP2PReceiveMessageRequest["value"];
        fromAmino: ({ sender, contract, data }: AminoMsgP2PReceiveMessageRequest["value"]) => MsgP2PReceiveMessageRequest;
    };
    "/mythos.network.v1.MsgExecuteAtomicTxRequest": {
        aminoType: string;
        toAmino: ({ txs, sender }: MsgExecuteAtomicTxRequest) => AminoMsgExecuteAtomicTxRequest["value"];
        fromAmino: ({ txs, sender }: AminoMsgExecuteAtomicTxRequest["value"]) => MsgExecuteAtomicTxRequest;
    };
    "/mythos.network.v1.MsgExecuteCrossChainCallRequest": {
        aminoType: string;
        toAmino: ({ sender, from, to, msg, funds, dependencies, fromChainId, toChainId, isQuery, timeoutMs }: MsgExecuteCrossChainCallRequest) => AminoMsgExecuteCrossChainCallRequest["value"];
        fromAmino: ({ sender, from, to, msg, funds, dependencies, from_chain_id, to_chain_id, is_query, timeout_ms }: AminoMsgExecuteCrossChainCallRequest["value"]) => MsgExecuteCrossChainCallRequest;
    };
};
