import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgStoreCode, MsgStoreCodeResponse, MsgDeployCode, MsgDeployCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgExecuteWithOriginContract, MsgExecuteDelegateContract, MsgExecuteDelegateContractResponse, MsgCompileContract, MsgCompileContractResponse } from "./tx";
/** Msg defines the wasm Msg service. */

export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /** DeployCode stores and instantiates */

  deployCode(request: MsgDeployCode): Promise<MsgDeployCodeResponse>;
  /**
   * InstantiateContract creates a new smart contract instance for the given
   *  code id.
   */

  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
  /**
   * InstantiateContract2 creates a new smart contract instance for the given
   *  code id with a predictable address
   */

  instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
  /** Execute submits the given message data to a smart contract */

  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
  /** ExecuteWithOrigin submits the given message data to a smart contract */

  executeWithOriginContract(request: MsgExecuteWithOriginContract): Promise<MsgExecuteContractResponse>;
  /** ExecuteDelegate submits the given message data to a smart contract */

  executeDelegateContract(request: MsgExecuteDelegateContract): Promise<MsgExecuteDelegateContractResponse>;
  /** CompileContract submits a smart contract to be precompiled */

  compileContract(request: MsgCompileContract): Promise<MsgCompileContractResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.deployCode = this.deployCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.instantiateContract2 = this.instantiateContract2.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.executeWithOriginContract = this.executeWithOriginContract.bind(this);
    this.executeDelegateContract = this.executeDelegateContract.bind(this);
    this.compileContract = this.compileContract.bind(this);
  }

  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
  }

  deployCode(request: MsgDeployCode): Promise<MsgDeployCodeResponse> {
    const data = MsgDeployCode.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "DeployCode", data);
    return promise.then(data => MsgDeployCodeResponse.decode(new _m0.Reader(data)));
  }

  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
  }

  instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response> {
    const data = MsgInstantiateContract2.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "InstantiateContract2", data);
    return promise.then(data => MsgInstantiateContract2Response.decode(new _m0.Reader(data)));
  }

  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
  }

  executeWithOriginContract(request: MsgExecuteWithOriginContract): Promise<MsgExecuteContractResponse> {
    const data = MsgExecuteWithOriginContract.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "ExecuteWithOriginContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
  }

  executeDelegateContract(request: MsgExecuteDelegateContract): Promise<MsgExecuteDelegateContractResponse> {
    const data = MsgExecuteDelegateContract.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "ExecuteDelegateContract", data);
    return promise.then(data => MsgExecuteDelegateContractResponse.decode(new _m0.Reader(data)));
  }

  compileContract(request: MsgCompileContract): Promise<MsgCompileContractResponse> {
    const data = MsgCompileContract.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Msg", "CompileContract", data);
    return promise.then(data => MsgCompileContractResponse.decode(new _m0.Reader(data)));
  }

}