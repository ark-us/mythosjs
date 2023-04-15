import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/**
 * QueryContractByRouteRequest is the request type for the
 * Query/ContractByRoute RPC method.
 */
export interface QueryContractByRouteRequest {
    path: string;
}
/**
 * QueryContractByRouteRequest is the request type for the
 * Query/ContractByRoute RPC method.
 */
export interface QueryContractByRouteRequestSDKType {
    path: string;
}
/**
 * QueryContractByRouteResponse is the response type for the
 * Query/ContractByRoute RPC method.
 */
export interface QueryContractByRouteResponse {
    contractAddress: string;
}
/**
 * QueryContractByRouteResponse is the response type for the
 * Query/ContractByRoute RPC method.
 */
export interface QueryContractByRouteResponseSDKType {
    contract_address: string;
}
/**
 * QueryRouteByContractRequest is the request type for the
 * Query/RouteByContract RPC method.
 */
export interface QueryRouteByContractRequest {
    contractAddress: string;
}
/**
 * QueryRouteByContractRequest is the request type for the
 * Query/RouteByContract RPC method.
 */
export interface QueryRouteByContractRequestSDKType {
    contract_address: string;
}
/**
 * QueryRouteByContractResponse is the response type for the
 * Query/RouteByContract RPC method.
 */
export interface QueryRouteByContractResponse {
    path: string;
}
/**
 * QueryRouteByContractResponse is the response type for the
 * Query/RouteByContract RPC method.
 */
export interface QueryRouteByContractResponseSDKType {
    path: string;
}
/**
 * QueryHttpGetRequest is the request type for the
 * Query/HttpGet RPC method.
 */
export interface QueryHttpRequestGet {
    httpRequest: Uint8Array;
}
/**
 * QueryHttpGetRequest is the request type for the
 * Query/HttpGet RPC method.
 */
export interface QueryHttpRequestGetSDKType {
    http_request: Uint8Array;
}
/**
 * QueryHttpResponseGet is the response type for the
 * Query/HttpGet RPC method.
 */
export interface QueryHttpResponseGet {
    /** HttpResponse data = 1; */
    data: Uint8Array;
}
/**
 * QueryHttpResponseGet is the response type for the
 * Query/HttpGet RPC method.
 */
export interface QueryHttpResponseGetSDKType {
    /** HttpResponse data = 1; */
    data: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params holds all the parameters of this module. */
    params?: ParamsSDKType;
}
export interface OauthClientInfo {
    clientId: Long;
    owner: string;
    domain: string;
    public: boolean;
}
export interface OauthClientInfoSDKType {
    client_id: Long;
    owner: string;
    domain: string;
    public: boolean;
}
/**
 * QueryGetAllOauthClientsRequest is the request type for the
 * Query/GetAllOauthClients RPC method.
 */
export interface QueryGetAllOauthClientsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryGetAllOauthClientsRequest is the request type for the
 * Query/GetAllOauthClients RPC method.
 */
export interface QueryGetAllOauthClientsRequestSDKType {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestSDKType;
}
/**
 * QueryGetAllOauthClientsResponse is the response type for the
 * Query/GetAllOauthClients RPC method.
 */
export interface QueryGetAllOauthClientsResponse {
    clients: OauthClientInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryGetAllOauthClientsResponse is the response type for the
 * Query/GetAllOauthClients RPC method.
 */
export interface QueryGetAllOauthClientsResponseSDKType {
    clients: OauthClientInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/**
 * QueryGetOauthClientRequest is the request type for the
 * Query/GetOauthClient RPC method.
 */
export interface QueryGetOauthClientRequest {
    clientId: Long;
}
/**
 * QueryGetOauthClientRequest is the request type for the
 * Query/GetOauthClient RPC method.
 */
export interface QueryGetOauthClientRequestSDKType {
    client_id: Long;
}
/**
 * QueryGetOauthClientResponse is the response type for the
 * Query/GetOauthClient RPC method.
 */
export interface QueryGetOauthClientResponse {
    client?: OauthClientInfo;
}
/**
 * QueryGetOauthClientResponse is the response type for the
 * Query/GetOauthClient RPC method.
 */
export interface QueryGetOauthClientResponseSDKType {
    client?: OauthClientInfoSDKType;
}
/**
 * QueryGetAllOauthClientsRequest is the request type for the
 * Query/GetOauthClientsByOwner RPC method.
 */
export interface QueryGetOauthClientsByOwnerRequest {
    /** bech32 address */
    owner: string;
}
/**
 * QueryGetAllOauthClientsRequest is the request type for the
 * Query/GetOauthClientsByOwner RPC method.
 */
export interface QueryGetOauthClientsByOwnerRequestSDKType {
    /** bech32 address */
    owner: string;
}
/**
 * QueryGetAllOauthClientsResponse is the response type for the
 * Query/GetOauthClientsByOwner RPC method.
 */
export interface QueryGetOauthClientsByOwnerResponse {
    clientIds: Long[];
}
/**
 * QueryGetAllOauthClientsResponse is the response type for the
 * Query/GetOauthClientsByOwner RPC method.
 */
export interface QueryGetOauthClientsByOwnerResponseSDKType {
    client_ids: Long[];
}
export declare const QueryContractByRouteRequest: {
    encode(message: QueryContractByRouteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractByRouteRequest;
    fromJSON(object: any): QueryContractByRouteRequest;
    toJSON(message: QueryContractByRouteRequest): unknown;
    fromPartial(object: Partial<QueryContractByRouteRequest>): QueryContractByRouteRequest;
};
export declare const QueryContractByRouteResponse: {
    encode(message: QueryContractByRouteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractByRouteResponse;
    fromJSON(object: any): QueryContractByRouteResponse;
    toJSON(message: QueryContractByRouteResponse): unknown;
    fromPartial(object: Partial<QueryContractByRouteResponse>): QueryContractByRouteResponse;
};
export declare const QueryRouteByContractRequest: {
    encode(message: QueryRouteByContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRouteByContractRequest;
    fromJSON(object: any): QueryRouteByContractRequest;
    toJSON(message: QueryRouteByContractRequest): unknown;
    fromPartial(object: Partial<QueryRouteByContractRequest>): QueryRouteByContractRequest;
};
export declare const QueryRouteByContractResponse: {
    encode(message: QueryRouteByContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRouteByContractResponse;
    fromJSON(object: any): QueryRouteByContractResponse;
    toJSON(message: QueryRouteByContractResponse): unknown;
    fromPartial(object: Partial<QueryRouteByContractResponse>): QueryRouteByContractResponse;
};
export declare const QueryHttpRequestGet: {
    encode(message: QueryHttpRequestGet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHttpRequestGet;
    fromJSON(object: any): QueryHttpRequestGet;
    toJSON(message: QueryHttpRequestGet): unknown;
    fromPartial(object: Partial<QueryHttpRequestGet>): QueryHttpRequestGet;
};
export declare const QueryHttpResponseGet: {
    encode(message: QueryHttpResponseGet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHttpResponseGet;
    fromJSON(object: any): QueryHttpResponseGet;
    toJSON(message: QueryHttpResponseGet): unknown;
    fromPartial(object: Partial<QueryHttpResponseGet>): QueryHttpResponseGet;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const OauthClientInfo: {
    encode(message: OauthClientInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OauthClientInfo;
    fromJSON(object: any): OauthClientInfo;
    toJSON(message: OauthClientInfo): unknown;
    fromPartial(object: Partial<OauthClientInfo>): OauthClientInfo;
};
export declare const QueryGetAllOauthClientsRequest: {
    encode(message: QueryGetAllOauthClientsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOauthClientsRequest;
    fromJSON(object: any): QueryGetAllOauthClientsRequest;
    toJSON(message: QueryGetAllOauthClientsRequest): unknown;
    fromPartial(object: Partial<QueryGetAllOauthClientsRequest>): QueryGetAllOauthClientsRequest;
};
export declare const QueryGetAllOauthClientsResponse: {
    encode(message: QueryGetAllOauthClientsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOauthClientsResponse;
    fromJSON(object: any): QueryGetAllOauthClientsResponse;
    toJSON(message: QueryGetAllOauthClientsResponse): unknown;
    fromPartial(object: Partial<QueryGetAllOauthClientsResponse>): QueryGetAllOauthClientsResponse;
};
export declare const QueryGetOauthClientRequest: {
    encode(message: QueryGetOauthClientRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientRequest;
    fromJSON(object: any): QueryGetOauthClientRequest;
    toJSON(message: QueryGetOauthClientRequest): unknown;
    fromPartial(object: Partial<QueryGetOauthClientRequest>): QueryGetOauthClientRequest;
};
export declare const QueryGetOauthClientResponse: {
    encode(message: QueryGetOauthClientResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientResponse;
    fromJSON(object: any): QueryGetOauthClientResponse;
    toJSON(message: QueryGetOauthClientResponse): unknown;
    fromPartial(object: Partial<QueryGetOauthClientResponse>): QueryGetOauthClientResponse;
};
export declare const QueryGetOauthClientsByOwnerRequest: {
    encode(message: QueryGetOauthClientsByOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientsByOwnerRequest;
    fromJSON(object: any): QueryGetOauthClientsByOwnerRequest;
    toJSON(message: QueryGetOauthClientsByOwnerRequest): unknown;
    fromPartial(object: Partial<QueryGetOauthClientsByOwnerRequest>): QueryGetOauthClientsByOwnerRequest;
};
export declare const QueryGetOauthClientsByOwnerResponse: {
    encode(message: QueryGetOauthClientsByOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientsByOwnerResponse;
    fromJSON(object: any): QueryGetOauthClientsByOwnerResponse;
    toJSON(message: QueryGetOauthClientsByOwnerResponse): unknown;
    fromPartial(object: Partial<QueryGetOauthClientsByOwnerResponse>): QueryGetOauthClientsByOwnerResponse;
};
