import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../../helpers";
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

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
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

function createBaseQueryContractByRouteRequest(): QueryContractByRouteRequest {
  return {
    path: ""
  };
}

export const QueryContractByRouteRequest = {
  encode(message: QueryContractByRouteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractByRouteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractByRouteRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractByRouteRequest {
    return {
      path: isSet(object.path) ? String(object.path) : ""
    };
  },

  toJSON(message: QueryContractByRouteRequest): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial(object: Partial<QueryContractByRouteRequest>): QueryContractByRouteRequest {
    const message = createBaseQueryContractByRouteRequest();
    message.path = object.path ?? "";
    return message;
  }

};

function createBaseQueryContractByRouteResponse(): QueryContractByRouteResponse {
  return {
    contractAddress: ""
  };
}

export const QueryContractByRouteResponse = {
  encode(message: QueryContractByRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractByRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractByRouteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractByRouteResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: QueryContractByRouteResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryContractByRouteResponse>): QueryContractByRouteResponse {
    const message = createBaseQueryContractByRouteResponse();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryRouteByContractRequest(): QueryRouteByContractRequest {
  return {
    contractAddress: ""
  };
}

export const QueryRouteByContractRequest = {
  encode(message: QueryRouteByContractRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRouteByContractRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRouteByContractRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRouteByContractRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: QueryRouteByContractRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<QueryRouteByContractRequest>): QueryRouteByContractRequest {
    const message = createBaseQueryRouteByContractRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryRouteByContractResponse(): QueryRouteByContractResponse {
  return {
    path: ""
  };
}

export const QueryRouteByContractResponse = {
  encode(message: QueryRouteByContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRouteByContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRouteByContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryRouteByContractResponse {
    return {
      path: isSet(object.path) ? String(object.path) : ""
    };
  },

  toJSON(message: QueryRouteByContractResponse): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial(object: Partial<QueryRouteByContractResponse>): QueryRouteByContractResponse {
    const message = createBaseQueryRouteByContractResponse();
    message.path = object.path ?? "";
    return message;
  }

};

function createBaseQueryHttpRequestGet(): QueryHttpRequestGet {
  return {
    httpRequest: new Uint8Array()
  };
}

export const QueryHttpRequestGet = {
  encode(message: QueryHttpRequestGet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.httpRequest.length !== 0) {
      writer.uint32(10).bytes(message.httpRequest);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHttpRequestGet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHttpRequestGet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.httpRequest = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHttpRequestGet {
    return {
      httpRequest: isSet(object.httpRequest) ? bytesFromBase64(object.httpRequest) : new Uint8Array()
    };
  },

  toJSON(message: QueryHttpRequestGet): unknown {
    const obj: any = {};
    message.httpRequest !== undefined && (obj.httpRequest = base64FromBytes(message.httpRequest !== undefined ? message.httpRequest : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryHttpRequestGet>): QueryHttpRequestGet {
    const message = createBaseQueryHttpRequestGet();
    message.httpRequest = object.httpRequest ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryHttpResponseGet(): QueryHttpResponseGet {
  return {
    data: new Uint8Array()
  };
}

export const QueryHttpResponseGet = {
  encode(message: QueryHttpResponseGet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHttpResponseGet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHttpResponseGet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHttpResponseGet {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryHttpResponseGet): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryHttpResponseGet>): QueryHttpResponseGet {
    const message = createBaseQueryHttpResponseGet();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseOauthClientInfo(): OauthClientInfo {
  return {
    clientId: Long.UZERO,
    owner: "",
    domain: "",
    public: false
  };
}

export const OauthClientInfo = {
  encode(message: OauthClientInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.clientId.isZero()) {
      writer.uint32(8).uint64(message.clientId);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }

    if (message.public === true) {
      writer.uint32(32).bool(message.public);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OauthClientInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOauthClientInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = (reader.uint64() as Long);
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.domain = reader.string();
          break;

        case 4:
          message.public = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OauthClientInfo {
    return {
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      public: isSet(object.public) ? Boolean(object.public) : false
    };
  },

  toJSON(message: OauthClientInfo): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = (message.clientId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.domain !== undefined && (obj.domain = message.domain);
    message.public !== undefined && (obj.public = message.public);
    return obj;
  },

  fromPartial(object: Partial<OauthClientInfo>): OauthClientInfo {
    const message = createBaseOauthClientInfo();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.domain = object.domain ?? "";
    message.public = object.public ?? false;
    return message;
  }

};

function createBaseQueryGetAllOauthClientsRequest(): QueryGetAllOauthClientsRequest {
  return {
    pagination: undefined
  };
}

export const QueryGetAllOauthClientsRequest = {
  encode(message: QueryGetAllOauthClientsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOauthClientsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllOauthClientsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetAllOauthClientsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryGetAllOauthClientsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryGetAllOauthClientsRequest>): QueryGetAllOauthClientsRequest {
    const message = createBaseQueryGetAllOauthClientsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetAllOauthClientsResponse(): QueryGetAllOauthClientsResponse {
  return {
    clients: [],
    pagination: undefined
  };
}

export const QueryGetAllOauthClientsResponse = {
  encode(message: QueryGetAllOauthClientsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clients) {
      OauthClientInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOauthClientsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllOauthClientsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clients.push(OauthClientInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetAllOauthClientsResponse {
    return {
      clients: Array.isArray(object?.clients) ? object.clients.map((e: any) => OauthClientInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryGetAllOauthClientsResponse): unknown {
    const obj: any = {};

    if (message.clients) {
      obj.clients = message.clients.map(e => e ? OauthClientInfo.toJSON(e) : undefined);
    } else {
      obj.clients = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryGetAllOauthClientsResponse>): QueryGetAllOauthClientsResponse {
    const message = createBaseQueryGetAllOauthClientsResponse();
    message.clients = object.clients?.map(e => OauthClientInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetOauthClientRequest(): QueryGetOauthClientRequest {
  return {
    clientId: Long.UZERO
  };
}

export const QueryGetOauthClientRequest = {
  encode(message: QueryGetOauthClientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.clientId.isZero()) {
      writer.uint32(8).uint64(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOauthClientRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.clientId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetOauthClientRequest {
    return {
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.UZERO
    };
  },

  toJSON(message: QueryGetOauthClientRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = (message.clientId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryGetOauthClientRequest>): QueryGetOauthClientRequest {
    const message = createBaseQueryGetOauthClientRequest();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetOauthClientResponse(): QueryGetOauthClientResponse {
  return {
    client: undefined
  };
}

export const QueryGetOauthClientResponse = {
  encode(message: QueryGetOauthClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client !== undefined) {
      OauthClientInfo.encode(message.client, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOauthClientResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client = OauthClientInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetOauthClientResponse {
    return {
      client: isSet(object.client) ? OauthClientInfo.fromJSON(object.client) : undefined
    };
  },

  toJSON(message: QueryGetOauthClientResponse): unknown {
    const obj: any = {};
    message.client !== undefined && (obj.client = message.client ? OauthClientInfo.toJSON(message.client) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryGetOauthClientResponse>): QueryGetOauthClientResponse {
    const message = createBaseQueryGetOauthClientResponse();
    message.client = object.client !== undefined && object.client !== null ? OauthClientInfo.fromPartial(object.client) : undefined;
    return message;
  }

};

function createBaseQueryGetOauthClientsByOwnerRequest(): QueryGetOauthClientsByOwnerRequest {
  return {
    owner: ""
  };
}

export const QueryGetOauthClientsByOwnerRequest = {
  encode(message: QueryGetOauthClientsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOauthClientsByOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetOauthClientsByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },

  toJSON(message: QueryGetOauthClientsByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: Partial<QueryGetOauthClientsByOwnerRequest>): QueryGetOauthClientsByOwnerRequest {
    const message = createBaseQueryGetOauthClientsByOwnerRequest();
    message.owner = object.owner ?? "";
    return message;
  }

};

function createBaseQueryGetOauthClientsByOwnerResponse(): QueryGetOauthClientsByOwnerResponse {
  return {
    clientIds: []
  };
}

export const QueryGetOauthClientsByOwnerResponse = {
  encode(message: QueryGetOauthClientsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.clientIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOauthClientsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOauthClientsByOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.clientIds.push((reader.uint64() as Long));
            }
          } else {
            message.clientIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetOauthClientsByOwnerResponse {
    return {
      clientIds: Array.isArray(object?.clientIds) ? object.clientIds.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: QueryGetOauthClientsByOwnerResponse): unknown {
    const obj: any = {};

    if (message.clientIds) {
      obj.clientIds = message.clientIds.map(e => (e || Long.UZERO).toString());
    } else {
      obj.clientIds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryGetOauthClientsByOwnerResponse>): QueryGetOauthClientsByOwnerResponse {
    const message = createBaseQueryGetOauthClientsByOwnerResponse();
    message.clientIds = object.clientIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};