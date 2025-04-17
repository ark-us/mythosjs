import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgSetAccount {
  account?: Any;
}
export interface MsgSetAccountSDKType {
  account?: AnySDKType;
}
export interface QueryAccountResponse {
  account?: Any;
}
export interface QueryAccountResponseSDKType {
  account?: AnySDKType;
}
export interface QueryHasAccountResponse {
  found: boolean;
}
export interface QueryHasAccountResponseSDKType {
  found: boolean;
}

function createBaseMsgSetAccount(): MsgSetAccount {
  return {
    account: undefined
  };
}

export const MsgSetAccount = {
  encode(message: MsgSetAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetAccount {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: MsgSetAccount): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgSetAccount>): MsgSetAccount {
    const message = createBaseMsgSetAccount();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }

};

function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: undefined
  };
}

export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  }

};

function createBaseQueryHasAccountResponse(): QueryHasAccountResponse {
  return {
    found: false
  };
}

export const QueryHasAccountResponse = {
  encode(message: QueryHasAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.found === true) {
      writer.uint32(8).bool(message.found);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHasAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHasAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.found = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryHasAccountResponse {
    return {
      found: isSet(object.found) ? Boolean(object.found) : false
    };
  },

  toJSON(message: QueryHasAccountResponse): unknown {
    const obj: any = {};
    message.found !== undefined && (obj.found = message.found);
    return obj;
  },

  fromPartial(object: Partial<QueryHasAccountResponse>): QueryHasAccountResponse {
    const message = createBaseQueryHasAccountResponse();
    message.found = object.found ?? false;
    return message;
  }

};