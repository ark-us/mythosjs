import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface MsgRegisterOAuthClient {
    /** bech32 address */
    owner: string;
    domain: string;
}
export interface MsgRegisterOAuthClientSDKType {
    /** bech32 address */
    owner: string;
    domain: string;
}
export interface MsgRegisterOAuthClientResponse {
    clientId: Long;
}
export interface MsgRegisterOAuthClientResponseSDKType {
    client_id: Long;
}
export interface MsgEditOAuthClient {
    /** bech32 address */
    owner: string;
    clientId: Long;
    domain: string;
}
export interface MsgEditOAuthClientSDKType {
    /** bech32 address */
    owner: string;
    client_id: Long;
    domain: string;
}
export interface MsgEditOAuthClientResponse {
}
export interface MsgEditOAuthClientResponseSDKType {
}
export interface MsgDeregisterOAuthClient {
    /** bech32 address */
    owner: string;
    clientId: Long;
}
export interface MsgDeregisterOAuthClientSDKType {
    /** bech32 address */
    owner: string;
    client_id: Long;
}
export interface MsgDeregisterOAuthClientResponse {
}
export interface MsgDeregisterOAuthClientResponseSDKType {
}
export declare const MsgRegisterOAuthClient: {
    encode(message: MsgRegisterOAuthClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOAuthClient;
    fromJSON(object: any): MsgRegisterOAuthClient;
    toJSON(message: MsgRegisterOAuthClient): unknown;
    fromPartial(object: Partial<MsgRegisterOAuthClient>): MsgRegisterOAuthClient;
};
export declare const MsgRegisterOAuthClientResponse: {
    encode(message: MsgRegisterOAuthClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOAuthClientResponse;
    fromJSON(object: any): MsgRegisterOAuthClientResponse;
    toJSON(message: MsgRegisterOAuthClientResponse): unknown;
    fromPartial(object: Partial<MsgRegisterOAuthClientResponse>): MsgRegisterOAuthClientResponse;
};
export declare const MsgEditOAuthClient: {
    encode(message: MsgEditOAuthClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOAuthClient;
    fromJSON(object: any): MsgEditOAuthClient;
    toJSON(message: MsgEditOAuthClient): unknown;
    fromPartial(object: Partial<MsgEditOAuthClient>): MsgEditOAuthClient;
};
export declare const MsgEditOAuthClientResponse: {
    encode(_: MsgEditOAuthClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOAuthClientResponse;
    fromJSON(_: any): MsgEditOAuthClientResponse;
    toJSON(_: MsgEditOAuthClientResponse): unknown;
    fromPartial(_: Partial<MsgEditOAuthClientResponse>): MsgEditOAuthClientResponse;
};
export declare const MsgDeregisterOAuthClient: {
    encode(message: MsgDeregisterOAuthClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterOAuthClient;
    fromJSON(object: any): MsgDeregisterOAuthClient;
    toJSON(message: MsgDeregisterOAuthClient): unknown;
    fromPartial(object: Partial<MsgDeregisterOAuthClient>): MsgDeregisterOAuthClient;
};
export declare const MsgDeregisterOAuthClientResponse: {
    encode(_: MsgDeregisterOAuthClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterOAuthClientResponse;
    fromJSON(_: any): MsgDeregisterOAuthClientResponse;
    toJSON(_: MsgDeregisterOAuthClientResponse): unknown;
    fromPartial(_: Partial<MsgDeregisterOAuthClientResponse>): MsgDeregisterOAuthClientResponse;
};
