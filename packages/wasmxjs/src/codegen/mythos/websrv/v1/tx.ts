import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
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
export interface MsgEditOAuthClientResponse {}
export interface MsgEditOAuthClientResponseSDKType {}
export interface MsgDeregisterOAuthClient {
  owner: string;
  clientId: Long;
}
export interface MsgDeregisterOAuthClientSDKType {
  owner: string;
  client_id: Long;
}
export interface MsgDeregisterOAuthClientResponse {}
export interface MsgDeregisterOAuthClientResponseSDKType {}
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
export interface MsgRegisterRouteResponse {}
export interface MsgRegisterRouteResponseSDKType {}
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
export interface MsgDeregisterRouteResponse {}
export interface MsgDeregisterRouteResponseSDKType {}

function createBaseMsgRegisterOAuthClient(): MsgRegisterOAuthClient {
  return {
    owner: "",
    domain: ""
  };
}

export const MsgRegisterOAuthClient = {
  encode(message: MsgRegisterOAuthClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOAuthClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOAuthClient();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.domain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterOAuthClient {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      domain: isSet(object.domain) ? String(object.domain) : ""
    };
  },

  toJSON(message: MsgRegisterOAuthClient): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.domain !== undefined && (obj.domain = message.domain);
    return obj;
  },

  fromPartial(object: Partial<MsgRegisterOAuthClient>): MsgRegisterOAuthClient {
    const message = createBaseMsgRegisterOAuthClient();
    message.owner = object.owner ?? "";
    message.domain = object.domain ?? "";
    return message;
  }

};

function createBaseMsgRegisterOAuthClientResponse(): MsgRegisterOAuthClientResponse {
  return {
    clientId: Long.UZERO
  };
}

export const MsgRegisterOAuthClientResponse = {
  encode(message: MsgRegisterOAuthClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.clientId.isZero()) {
      writer.uint32(8).uint64(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOAuthClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOAuthClientResponse();

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

  fromJSON(object: any): MsgRegisterOAuthClientResponse {
    return {
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.UZERO
    };
  },

  toJSON(message: MsgRegisterOAuthClientResponse): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = (message.clientId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgRegisterOAuthClientResponse>): MsgRegisterOAuthClientResponse {
    const message = createBaseMsgRegisterOAuthClientResponse();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgEditOAuthClient(): MsgEditOAuthClient {
  return {
    owner: "",
    clientId: Long.UZERO,
    domain: ""
  };
}

export const MsgEditOAuthClient = {
  encode(message: MsgEditOAuthClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.clientId.isZero()) {
      writer.uint32(16).uint64(message.clientId);
    }

    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOAuthClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOAuthClient();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.clientId = (reader.uint64() as Long);
          break;

        case 3:
          message.domain = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgEditOAuthClient {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.UZERO,
      domain: isSet(object.domain) ? String(object.domain) : ""
    };
  },

  toJSON(message: MsgEditOAuthClient): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.clientId !== undefined && (obj.clientId = (message.clientId || Long.UZERO).toString());
    message.domain !== undefined && (obj.domain = message.domain);
    return obj;
  },

  fromPartial(object: Partial<MsgEditOAuthClient>): MsgEditOAuthClient {
    const message = createBaseMsgEditOAuthClient();
    message.owner = object.owner ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.UZERO;
    message.domain = object.domain ?? "";
    return message;
  }

};

function createBaseMsgEditOAuthClientResponse(): MsgEditOAuthClientResponse {
  return {};
}

export const MsgEditOAuthClientResponse = {
  encode(_: MsgEditOAuthClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOAuthClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOAuthClientResponse();

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

  fromJSON(_: any): MsgEditOAuthClientResponse {
    return {};
  },

  toJSON(_: MsgEditOAuthClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgEditOAuthClientResponse>): MsgEditOAuthClientResponse {
    const message = createBaseMsgEditOAuthClientResponse();
    return message;
  }

};

function createBaseMsgDeregisterOAuthClient(): MsgDeregisterOAuthClient {
  return {
    owner: "",
    clientId: Long.UZERO
  };
}

export const MsgDeregisterOAuthClient = {
  encode(message: MsgDeregisterOAuthClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.clientId.isZero()) {
      writer.uint32(16).uint64(message.clientId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterOAuthClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterOAuthClient();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.clientId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeregisterOAuthClient {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.UZERO
    };
  },

  toJSON(message: MsgDeregisterOAuthClient): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.clientId !== undefined && (obj.clientId = (message.clientId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgDeregisterOAuthClient>): MsgDeregisterOAuthClient {
    const message = createBaseMsgDeregisterOAuthClient();
    message.owner = object.owner ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDeregisterOAuthClientResponse(): MsgDeregisterOAuthClientResponse {
  return {};
}

export const MsgDeregisterOAuthClientResponse = {
  encode(_: MsgDeregisterOAuthClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterOAuthClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterOAuthClientResponse();

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

  fromJSON(_: any): MsgDeregisterOAuthClientResponse {
    return {};
  },

  toJSON(_: MsgDeregisterOAuthClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgDeregisterOAuthClientResponse>): MsgDeregisterOAuthClientResponse {
    const message = createBaseMsgDeregisterOAuthClientResponse();
    return message;
  }

};

function createBaseMsgRegisterRoute(): MsgRegisterRoute {
  return {
    authority: "",
    title: "",
    description: "",
    path: "",
    contractAddress: ""
  };
}

export const MsgRegisterRoute = {
  encode(message: MsgRegisterRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }

    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.title = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.path = reader.string();
          break;

        case 5:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      path: isSet(object.path) ? String(object.path) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: MsgRegisterRoute): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.path !== undefined && (obj.path = message.path);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgRegisterRoute>): MsgRegisterRoute {
    const message = createBaseMsgRegisterRoute();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.path = object.path ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseMsgRegisterRouteResponse(): MsgRegisterRouteResponse {
  return {};
}

export const MsgRegisterRouteResponse = {
  encode(_: MsgRegisterRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterRouteResponse();

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

  fromJSON(_: any): MsgRegisterRouteResponse {
    return {};
  },

  toJSON(_: MsgRegisterRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgRegisterRouteResponse>): MsgRegisterRouteResponse {
    const message = createBaseMsgRegisterRouteResponse();
    return message;
  }

};

function createBaseMsgDeregisterRoute(): MsgDeregisterRoute {
  return {
    authority: "",
    title: "",
    description: "",
    path: "",
    contractAddress: ""
  };
}

export const MsgDeregisterRoute = {
  encode(message: MsgDeregisterRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }

    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterRoute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.title = reader.string();
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.path = reader.string();
          break;

        case 5:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeregisterRoute {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      path: isSet(object.path) ? String(object.path) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: MsgDeregisterRoute): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.path !== undefined && (obj.path = message.path);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<MsgDeregisterRoute>): MsgDeregisterRoute {
    const message = createBaseMsgDeregisterRoute();
    message.authority = object.authority ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.path = object.path ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseMsgDeregisterRouteResponse(): MsgDeregisterRouteResponse {
  return {};
}

export const MsgDeregisterRouteResponse = {
  encode(_: MsgDeregisterRouteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterRouteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeregisterRouteResponse();

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

  fromJSON(_: any): MsgDeregisterRouteResponse {
    return {};
  },

  toJSON(_: MsgDeregisterRouteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgDeregisterRouteResponse>): MsgDeregisterRouteResponse {
    const message = createBaseMsgDeregisterRouteResponse();
    return message;
  }

};