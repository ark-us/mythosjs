import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrpcSendRequest, MsgStartTimeoutRequest, MsgCancelTimeoutRequest, MsgStartBackgroundProcessRequest, MsgMultiChainWrap, MsgReentryWithGoRoutine, MsgReentry, MsgGrpcReceiveRequest, MsgP2PReceiveMessageRequest, MsgExecuteCrossChainCallRequest } from "./tx";
import { MsgExecuteAtomicTxRequest } from "./custom";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        grpcSendRequest(value: MsgGrpcSendRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        startTimeout(value: MsgStartTimeoutRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelTimeout(value: MsgCancelTimeoutRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        startBackgroundProcess(value: MsgStartBackgroundProcessRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        multiChainWrap(value: MsgMultiChainWrap): {
            typeUrl: string;
            value: Uint8Array;
        };
        reentryWithGoRoutine(value: MsgReentryWithGoRoutine): {
            typeUrl: string;
            value: Uint8Array;
        };
        reentry(value: MsgReentry): {
            typeUrl: string;
            value: Uint8Array;
        };
        grpcReceiveRequest(value: MsgGrpcReceiveRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        p2PReceiveMessage(value: MsgP2PReceiveMessageRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeAtomicTx(value: MsgExecuteAtomicTxRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeCrossChainTx(value: MsgExecuteCrossChainCallRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        grpcSendRequest(value: MsgGrpcSendRequest): {
            typeUrl: string;
            value: MsgGrpcSendRequest;
        };
        startTimeout(value: MsgStartTimeoutRequest): {
            typeUrl: string;
            value: MsgStartTimeoutRequest;
        };
        cancelTimeout(value: MsgCancelTimeoutRequest): {
            typeUrl: string;
            value: MsgCancelTimeoutRequest;
        };
        startBackgroundProcess(value: MsgStartBackgroundProcessRequest): {
            typeUrl: string;
            value: MsgStartBackgroundProcessRequest;
        };
        multiChainWrap(value: MsgMultiChainWrap): {
            typeUrl: string;
            value: MsgMultiChainWrap;
        };
        reentryWithGoRoutine(value: MsgReentryWithGoRoutine): {
            typeUrl: string;
            value: MsgReentryWithGoRoutine;
        };
        reentry(value: MsgReentry): {
            typeUrl: string;
            value: MsgReentry;
        };
        grpcReceiveRequest(value: MsgGrpcReceiveRequest): {
            typeUrl: string;
            value: MsgGrpcReceiveRequest;
        };
        p2PReceiveMessage(value: MsgP2PReceiveMessageRequest): {
            typeUrl: string;
            value: MsgP2PReceiveMessageRequest;
        };
        executeAtomicTx(value: MsgExecuteAtomicTxRequest): {
            typeUrl: string;
            value: MsgExecuteAtomicTxRequest;
        };
        executeCrossChainTx(value: MsgExecuteCrossChainCallRequest): {
            typeUrl: string;
            value: MsgExecuteCrossChainCallRequest;
        };
    };
    toJSON: {
        grpcSendRequest(value: MsgGrpcSendRequest): {
            typeUrl: string;
            value: unknown;
        };
        startTimeout(value: MsgStartTimeoutRequest): {
            typeUrl: string;
            value: unknown;
        };
        cancelTimeout(value: MsgCancelTimeoutRequest): {
            typeUrl: string;
            value: unknown;
        };
        startBackgroundProcess(value: MsgStartBackgroundProcessRequest): {
            typeUrl: string;
            value: unknown;
        };
        multiChainWrap(value: MsgMultiChainWrap): {
            typeUrl: string;
            value: unknown;
        };
        reentryWithGoRoutine(value: MsgReentryWithGoRoutine): {
            typeUrl: string;
            value: unknown;
        };
        reentry(value: MsgReentry): {
            typeUrl: string;
            value: unknown;
        };
        grpcReceiveRequest(value: MsgGrpcReceiveRequest): {
            typeUrl: string;
            value: unknown;
        };
        p2PReceiveMessage(value: MsgP2PReceiveMessageRequest): {
            typeUrl: string;
            value: unknown;
        };
        executeAtomicTx(value: MsgExecuteAtomicTxRequest): {
            typeUrl: string;
            value: unknown;
        };
        executeCrossChainTx(value: MsgExecuteCrossChainCallRequest): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        grpcSendRequest(value: any): {
            typeUrl: string;
            value: MsgGrpcSendRequest;
        };
        startTimeout(value: any): {
            typeUrl: string;
            value: MsgStartTimeoutRequest;
        };
        cancelTimeout(value: any): {
            typeUrl: string;
            value: MsgCancelTimeoutRequest;
        };
        startBackgroundProcess(value: any): {
            typeUrl: string;
            value: MsgStartBackgroundProcessRequest;
        };
        multiChainWrap(value: any): {
            typeUrl: string;
            value: MsgMultiChainWrap;
        };
        reentryWithGoRoutine(value: any): {
            typeUrl: string;
            value: MsgReentryWithGoRoutine;
        };
        reentry(value: any): {
            typeUrl: string;
            value: MsgReentry;
        };
        grpcReceiveRequest(value: any): {
            typeUrl: string;
            value: MsgGrpcReceiveRequest;
        };
        p2PReceiveMessage(value: any): {
            typeUrl: string;
            value: MsgP2PReceiveMessageRequest;
        };
        executeAtomicTx(value: any): {
            typeUrl: string;
            value: MsgExecuteAtomicTxRequest;
        };
        executeCrossChainTx(value: any): {
            typeUrl: string;
            value: MsgExecuteCrossChainCallRequest;
        };
    };
    fromPartial: {
        grpcSendRequest(value: MsgGrpcSendRequest): {
            typeUrl: string;
            value: MsgGrpcSendRequest;
        };
        startTimeout(value: MsgStartTimeoutRequest): {
            typeUrl: string;
            value: MsgStartTimeoutRequest;
        };
        cancelTimeout(value: MsgCancelTimeoutRequest): {
            typeUrl: string;
            value: MsgCancelTimeoutRequest;
        };
        startBackgroundProcess(value: MsgStartBackgroundProcessRequest): {
            typeUrl: string;
            value: MsgStartBackgroundProcessRequest;
        };
        multiChainWrap(value: MsgMultiChainWrap): {
            typeUrl: string;
            value: MsgMultiChainWrap;
        };
        reentryWithGoRoutine(value: MsgReentryWithGoRoutine): {
            typeUrl: string;
            value: MsgReentryWithGoRoutine;
        };
        reentry(value: MsgReentry): {
            typeUrl: string;
            value: MsgReentry;
        };
        grpcReceiveRequest(value: MsgGrpcReceiveRequest): {
            typeUrl: string;
            value: MsgGrpcReceiveRequest;
        };
        p2PReceiveMessage(value: MsgP2PReceiveMessageRequest): {
            typeUrl: string;
            value: MsgP2PReceiveMessageRequest;
        };
        executeAtomicTx(value: MsgExecuteAtomicTxRequest): {
            typeUrl: string;
            value: MsgExecuteAtomicTxRequest;
        };
        executeCrossChainTx(value: MsgExecuteCrossChainCallRequest): {
            typeUrl: string;
            value: MsgExecuteCrossChainCallRequest;
        };
    };
};
