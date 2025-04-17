import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterOAuthClient, MsgRegisterOAuthClientResponse, MsgEditOAuthClient, MsgEditOAuthClientResponse, MsgDeregisterOAuthClient, MsgDeregisterOAuthClientResponse, MsgRegisterRoute, MsgRegisterRouteResponse, MsgDeregisterRoute, MsgDeregisterRouteResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  /** Register OAuth client */
  registerOAuthClient(request: MsgRegisterOAuthClient): Promise<MsgRegisterOAuthClientResponse>;
  /** Edit OAuth client */

  editOAuthClient(request: MsgEditOAuthClient): Promise<MsgEditOAuthClientResponse>;
  /** Deregister OAuth client */

  deregisterOAuthClient(request: MsgDeregisterOAuthClient): Promise<MsgDeregisterOAuthClientResponse>;
  /**
   * gov authorized
   * register contract for http route
   */

  registerRoute(request: MsgRegisterRoute): Promise<MsgRegisterRouteResponse>;
  /** deregister http route */

  deregisterRoute(request: MsgDeregisterRoute): Promise<MsgDeregisterRouteResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerOAuthClient = this.registerOAuthClient.bind(this);
    this.editOAuthClient = this.editOAuthClient.bind(this);
    this.deregisterOAuthClient = this.deregisterOAuthClient.bind(this);
    this.registerRoute = this.registerRoute.bind(this);
    this.deregisterRoute = this.deregisterRoute.bind(this);
  }

  registerOAuthClient(request: MsgRegisterOAuthClient): Promise<MsgRegisterOAuthClientResponse> {
    const data = MsgRegisterOAuthClient.encode(request).finish();
    const promise = this.rpc.request("mythos.websrv.v1.Msg", "RegisterOAuthClient", data);
    return promise.then(data => MsgRegisterOAuthClientResponse.decode(new _m0.Reader(data)));
  }

  editOAuthClient(request: MsgEditOAuthClient): Promise<MsgEditOAuthClientResponse> {
    const data = MsgEditOAuthClient.encode(request).finish();
    const promise = this.rpc.request("mythos.websrv.v1.Msg", "EditOAuthClient", data);
    return promise.then(data => MsgEditOAuthClientResponse.decode(new _m0.Reader(data)));
  }

  deregisterOAuthClient(request: MsgDeregisterOAuthClient): Promise<MsgDeregisterOAuthClientResponse> {
    const data = MsgDeregisterOAuthClient.encode(request).finish();
    const promise = this.rpc.request("mythos.websrv.v1.Msg", "DeregisterOAuthClient", data);
    return promise.then(data => MsgDeregisterOAuthClientResponse.decode(new _m0.Reader(data)));
  }

  registerRoute(request: MsgRegisterRoute): Promise<MsgRegisterRouteResponse> {
    const data = MsgRegisterRoute.encode(request).finish();
    const promise = this.rpc.request("mythos.websrv.v1.Msg", "RegisterRoute", data);
    return promise.then(data => MsgRegisterRouteResponse.decode(new _m0.Reader(data)));
  }

  deregisterRoute(request: MsgDeregisterRoute): Promise<MsgDeregisterRouteResponse> {
    const data = MsgDeregisterRoute.encode(request).finish();
    const promise = this.rpc.request("mythos.websrv.v1.Msg", "DeregisterRoute", data);
    return promise.then(data => MsgDeregisterRouteResponse.decode(new _m0.Reader(data)));
  }

}