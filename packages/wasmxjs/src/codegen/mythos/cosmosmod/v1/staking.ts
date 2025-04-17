import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
/**
 * InitGenesisResponse is the InitGenesis response expected from smart contracts
 * that act as modules
 */

export interface InitGenesisResponse {
  updates: ValidatorUpdate[];
}
/**
 * InitGenesisResponse is the InitGenesis response expected from smart contracts
 * that act as modules
 */

export interface InitGenesisResponseSDKType {
  updates: ValidatorUpdateSDKType[];
}
export interface ValidatorUpdate {
  pubKey?: Any;
  power: Long;
}
export interface ValidatorUpdateSDKType {
  pub_key?: AnySDKType;
  power: Long;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

export interface QueryTotalSupplyResponse {
  supply?: Coin;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */

export interface QueryTotalSupplyResponseSDKType {
  supply?: CoinSDKType;
}

function createBaseInitGenesisResponse(): InitGenesisResponse {
  return {
    updates: []
  };
}

export const InitGenesisResponse = {
  encode(message: InitGenesisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.updates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitGenesisResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitGenesisResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InitGenesisResponse {
    return {
      updates: Array.isArray(object?.updates) ? object.updates.map((e: any) => ValidatorUpdate.fromJSON(e)) : []
    };
  },

  toJSON(message: InitGenesisResponse): unknown {
    const obj: any = {};

    if (message.updates) {
      obj.updates = message.updates.map(e => e ? ValidatorUpdate.toJSON(e) : undefined);
    } else {
      obj.updates = [];
    }

    return obj;
  },

  fromPartial(object: Partial<InitGenesisResponse>): InitGenesisResponse {
    const message = createBaseInitGenesisResponse();
    message.updates = object.updates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  }

};

function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pubKey: undefined,
    power: Long.ZERO
  };
}

export const ValidatorUpdate = {
  encode(message: ValidatorUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.power = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorUpdate {
    return {
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO
    };
  },

  toJSON(message: ValidatorUpdate): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }

};

function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    supply: undefined
  };
}

export const QueryTotalSupplyResponse = {
  encode(message: QueryTotalSupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supply !== undefined) {
      Coin.encode(message.supply, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.supply = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      supply: isSet(object.supply) ? Coin.fromJSON(object.supply) : undefined
    };
  },

  toJSON(message: QueryTotalSupplyResponse): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = message.supply ? Coin.toJSON(message.supply) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.supply = object.supply !== undefined && object.supply !== null ? Coin.fromPartial(object.supply) : undefined;
    return message;
  }

};