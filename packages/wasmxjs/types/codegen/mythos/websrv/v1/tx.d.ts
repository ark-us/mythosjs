/// <reference types="long" />
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface MsgRegisterOAuthClient {
    owner: string;
    domain: string;
}
export interface MsgRegisterOAuthClientSDKType {
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
    owner: string;
    clientId: Long;
    domain: string;
}
export interface MsgEditOAuthClientSDKType {
    owner: string;
    client_id: Long;
    domain: string;
}
export interface MsgEditOAuthClientResponse {
}
export interface MsgEditOAuthClientResponseSDKType {
}
export interface MsgDeregisterOAuthClient {
    owner: string;
    clientId: Long;
}
export interface MsgDeregisterOAuthClientSDKType {
    owner: string;
    client_id: Long;
}
export interface MsgDeregisterOAuthClientResponse {
}
export interface MsgDeregisterOAuthClientResponseSDKType {
}
/** Register a web server route */
export interface MsgRegisterRoute {
    /** authority is the address that controls the module. */
    authority: string;
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contractAddress: string;
}
/** Register a web server route */
export interface MsgRegisterRouteSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contract_address: string;
}
export interface MsgRegisterRouteResponse {
}
export interface MsgRegisterRouteResponseSDKType {
}
export interface MsgDeregisterRoute {
    /** authority is the address that controls the module. */
    authority: string;
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contractAddress: string;
}
export interface MsgDeregisterRouteSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contract_address: string;
}
export interface MsgDeregisterRouteResponse {
}
export interface MsgDeregisterRouteResponseSDKType {
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
export declare const MsgRegisterRoute: {
    encode(message: MsgRegisterRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterRoute;
    fromJSON(object: any): MsgRegisterRoute;
    toJSON(message: MsgRegisterRoute): unknown;
    fromPartial(object: Partial<MsgRegisterRoute>): MsgRegisterRoute;
};
export declare const MsgRegisterRouteResponse: {
    encode(_: MsgRegisterRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterRouteResponse;
    fromJSON(_: any): MsgRegisterRouteResponse;
    toJSON(_: MsgRegisterRouteResponse): unknown;
    fromPartial(_: Partial<MsgRegisterRouteResponse>): MsgRegisterRouteResponse;
};
export declare const MsgDeregisterRoute: {
    encode(message: MsgDeregisterRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterRoute;
    fromJSON(object: any): MsgDeregisterRoute;
    toJSON(message: MsgDeregisterRoute): unknown;
    fromPartial(object: Partial<MsgDeregisterRoute>): MsgDeregisterRoute;
};
export declare const MsgDeregisterRouteResponse: {
    encode(_: MsgDeregisterRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterRouteResponse;
    fromJSON(_: any): MsgDeregisterRouteResponse;
    toJSON(_: MsgDeregisterRouteResponse): unknown;
    fromPartial(_: Partial<MsgDeregisterRouteResponse>): MsgDeregisterRouteResponse;
};
