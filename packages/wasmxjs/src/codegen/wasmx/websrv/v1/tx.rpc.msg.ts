import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterOAuthClient, MsgRegisterOAuthClientResponse, MsgEditOAuthClient, MsgEditOAuthClientResponse, MsgDeregisterOAuthClient, MsgDeregisterOAuthClientResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  /** Register OAuth client */
  registerOAuthClient(request: MsgRegisterOAuthClient): Promise<MsgRegisterOAuthClientResponse>;
  /** Edit OAuth client */

  editOAuthClient(request: MsgEditOAuthClient): Promise<MsgEditOAuthClientResponse>;
  /** Deregister OAuth client */

  deregisterOAuthClient(request: MsgDeregisterOAuthClient): Promise<MsgDeregisterOAuthClientResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerOAuthClient = this.registerOAuthClient.bind(this);
    this.editOAuthClient = this.editOAuthClient.bind(this);
    this.deregisterOAuthClient = this.deregisterOAuthClient.bind(this);
  }

  registerOAuthClient(request: MsgRegisterOAuthClient): Promise<MsgRegisterOAuthClientResponse> {
    const data = MsgRegisterOAuthClient.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Msg", "RegisterOAuthClient", data);
    return promise.then(data => MsgRegisterOAuthClientResponse.decode(new _m0.Reader(data)));
  }

  editOAuthClient(request: MsgEditOAuthClient): Promise<MsgEditOAuthClientResponse> {
    const data = MsgEditOAuthClient.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Msg", "EditOAuthClient", data);
    return promise.then(data => MsgEditOAuthClientResponse.decode(new _m0.Reader(data)));
  }

  deregisterOAuthClient(request: MsgDeregisterOAuthClient): Promise<MsgDeregisterOAuthClientResponse> {
    const data = MsgDeregisterOAuthClient.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Msg", "DeregisterOAuthClient", data);
    return promise.then(data => MsgDeregisterOAuthClientResponse.decode(new _m0.Reader(data)));
  }

}