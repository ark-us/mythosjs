import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grpcSendRequest = this.grpcSendRequest.bind(this);
    this.startTimeout = this.startTimeout.bind(this);
    this.cancelTimeout = this.cancelTimeout.bind(this);
    this.startBackgroundProcess = this.startBackgroundProcess.bind(this);
    this.multiChainWrap = this.multiChainWrap.bind(this);
    this.grpcReceiveRequest = this.grpcReceiveRequest.bind(this);
    this.p2PReceiveMessage = this.p2PReceiveMessage.bind(this);
    this.executeAtomicTx = this.executeAtomicTx.bind(this);
    this.executeCrossChainTx = this.executeCrossChainTx.bind(this);
  }

  grpcSendRequest(request: MsgGrpcSendRequest): Promise<MsgGrpcSendRequestResponse> {
    const data = MsgGrpcSendRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "GrpcSendRequest", data);
    return promise.then(data => MsgGrpcSendRequestResponse.decode(new _m0.Reader(data)));
  }

  startTimeout(request: MsgStartTimeoutRequest): Promise<MsgStartTimeoutResponse> {
    const data = MsgStartTimeoutRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "StartTimeout", data);
    return promise.then(data => MsgStartTimeoutResponse.decode(new _m0.Reader(data)));
  }

  cancelTimeout(request: MsgCancelTimeoutRequest): Promise<MsgCancelTimeoutResponse> {
    const data = MsgCancelTimeoutRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "CancelTimeout", data);
    return promise.then(data => MsgCancelTimeoutResponse.decode(new _m0.Reader(data)));
  }

  startBackgroundProcess(request: MsgStartBackgroundProcessRequest): Promise<MsgStartBackgroundProcessResponse> {
    const data = MsgStartBackgroundProcessRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "StartBackgroundProcess", data);
    return promise.then(data => MsgStartBackgroundProcessResponse.decode(new _m0.Reader(data)));
  }

  multiChainWrap(request: MsgMultiChainWrap): Promise<MsgMultiChainWrapResponse> {
    const data = MsgMultiChainWrap.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "MultiChainWrap", data);
    return promise.then(data => MsgMultiChainWrapResponse.decode(new _m0.Reader(data)));
  }

  grpcReceiveRequest(request: MsgGrpcReceiveRequest): Promise<MsgGrpcReceiveRequestResponse> {
    const data = MsgGrpcReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "GrpcReceiveRequest", data);
    return promise.then(data => MsgGrpcReceiveRequestResponse.decode(new _m0.Reader(data)));
  }

  p2PReceiveMessage(request: MsgP2PReceiveMessageRequest): Promise<MsgP2PReceiveMessageResponse> {
    const data = MsgP2PReceiveMessageRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "P2PReceiveMessage", data);
    return promise.then(data => MsgP2PReceiveMessageResponse.decode(new _m0.Reader(data)));
  }

  executeAtomicTx(request: MsgExecuteAtomicTxRequest): Promise<MsgExecuteAtomicTxResponse> {
    const data = MsgExecuteAtomicTxRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "ExecuteAtomicTx", data);
    return promise.then(data => MsgExecuteAtomicTxResponse.decode(new _m0.Reader(data)));
  }

  executeCrossChainTx(request: MsgExecuteCrossChainCallRequest): Promise<MsgExecuteCrossChainCallResponse> {
    const data = MsgExecuteCrossChainCallRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Msg", "ExecuteCrossChainTx", data);
    return promise.then(data => MsgExecuteCrossChainCallResponse.decode(new _m0.Reader(data)));
  }

}