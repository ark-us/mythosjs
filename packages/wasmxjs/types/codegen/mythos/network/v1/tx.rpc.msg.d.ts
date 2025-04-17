import { Rpc } from "../../../helpers";
import { MsgGrpcSendRequest, MsgGrpcSendRequestResponse, MsgStartTimeoutRequest, MsgStartTimeoutResponse, MsgCancelTimeoutRequest, MsgCancelTimeoutResponse, MsgStartBackgroundProcessRequest, MsgStartBackgroundProcessResponse, MsgMultiChainWrap, MsgMultiChainWrapResponse, MsgGrpcReceiveRequest, MsgGrpcReceiveRequestResponse, MsgP2PReceiveMessageRequest, MsgP2PReceiveMessageResponse, MsgExecuteAtomicTxResponse, MsgExecuteCrossChainCallRequest, MsgExecuteCrossChainCallResponse } from "./tx";
import { MsgExecuteAtomicTxRequest } from "./custom";
/** Msg defines the grpc server */
export interface Msg {
    /** GrpcSendRequest */
    grpcSendRequest(request: MsgGrpcSendRequest): Promise<MsgGrpcSendRequestResponse>;
    /** StartTimeout */
    startTimeout(request: MsgStartTimeoutRequest): Promise<MsgStartTimeoutResponse>;
    /** CancelTimeout */
    cancelTimeout(request: MsgCancelTimeoutRequest): Promise<MsgCancelTimeoutResponse>;
    startBackgroundProcess(request: MsgStartBackgroundProcessRequest): Promise<MsgStartBackgroundProcessResponse>;
    /** MultiChainWrap wraps a message to be executed on one of the available chains */
    multiChainWrap(request: MsgMultiChainWrap): Promise<MsgMultiChainWrapResponse>;
    /** GrpcReceiveRequest */
    grpcReceiveRequest(request: MsgGrpcReceiveRequest): Promise<MsgGrpcReceiveRequestResponse>;
    /** P2PReceiveMessage */
    p2PReceiveMessage(request: MsgP2PReceiveMessageRequest): Promise<MsgP2PReceiveMessageResponse>;
    executeAtomicTx(request: MsgExecuteAtomicTxRequest): Promise<MsgExecuteAtomicTxResponse>;
    /** only executed internally, sent by wasmx */
    executeCrossChainTx(request: MsgExecuteCrossChainCallRequest): Promise<MsgExecuteCrossChainCallResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    grpcSendRequest(request: MsgGrpcSendRequest): Promise<MsgGrpcSendRequestResponse>;
    startTimeout(request: MsgStartTimeoutRequest): Promise<MsgStartTimeoutResponse>;
    cancelTimeout(request: MsgCancelTimeoutRequest): Promise<MsgCancelTimeoutResponse>;
    startBackgroundProcess(request: MsgStartBackgroundProcessRequest): Promise<MsgStartBackgroundProcessResponse>;
    multiChainWrap(request: MsgMultiChainWrap): Promise<MsgMultiChainWrapResponse>;
    grpcReceiveRequest(request: MsgGrpcReceiveRequest): Promise<MsgGrpcReceiveRequestResponse>;
    p2PReceiveMessage(request: MsgP2PReceiveMessageRequest): Promise<MsgP2PReceiveMessageResponse>;
    executeAtomicTx(request: MsgExecuteAtomicTxRequest): Promise<MsgExecuteAtomicTxResponse>;
    executeCrossChainTx(request: MsgExecuteCrossChainCallRequest): Promise<MsgExecuteCrossChainCallResponse>;
}
