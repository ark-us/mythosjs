import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../helpers";
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
export interface MsgEditOAuthClientResponse {}
export interface MsgEditOAuthClientResponseSDKType {}
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
export interface MsgDeregisterOAuthClientResponse {}
export interface MsgDeregisterOAuthClientResponseSDKType {}

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