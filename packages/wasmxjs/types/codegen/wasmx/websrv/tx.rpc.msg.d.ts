import { Rpc } from "../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerOAuthClient(request: MsgRegisterOAuthClient): Promise<MsgRegisterOAuthClientResponse>;
    editOAuthClient(request: MsgEditOAuthClient): Promise<MsgEditOAuthClientResponse>;
    deregisterOAuthClient(request: MsgDeregisterOAuthClient): Promise<MsgDeregisterOAuthClientResponse>;
}
