import { RequestProcessProposal, RequestProcessProposalSDKType } from "../../../tendermint/abci/types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long, isObject } from "../../../helpers";
export interface RequestPing {}
export interface RequestPingSDKType {}
export interface RequestBroadcastTx {
  tx: Uint8Array;
}
export interface RequestBroadcastTxSDKType {
  tx: Uint8Array;
}
export interface ResponsePing {}
export interface ResponsePingSDKType {}
export interface ResponseBroadcastTx {
  checkTx?: ResponseCheckTx;
  txResult?: ExecTxResult;
}
export interface ResponseBroadcastTxSDKType {
  check_tx?: ResponseCheckTxSDKType;
  tx_result?: ExecTxResultSDKType;
}
/** tendermint.abci.ResponseCheckTx */

export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}
/** tendermint.abci.ResponseCheckTx */

export interface ResponseCheckTxSDKType {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 * 
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 * tendermint.abci.ExecTxResult
 */

export interface ExecTxResult {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gasWanted: Long;
  gasUsed: Long;
  events: Event[];
  codespace: string;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 * 
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 * tendermint.abci.ExecTxResult
 */

export interface ExecTxResultSDKType {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */

export interface Event {
  type: string;
  attributes: EventAttribute[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */

export interface EventSDKType {
  type: string;
  attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */

export interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */

  index: boolean;
}
/** EventAttribute is a single key-value pair, associated with an event. */

export interface EventAttributeSDKType {
  key: string;
  value: string;
  /** nondeterministic */

  index: boolean;
}
export interface RequestProcessProposalWithMetaInfo_MetainfoEntry {
  key: string;
  value: string;
}
export interface RequestProcessProposalWithMetaInfo_MetainfoEntrySDKType {
  key: string;
  value: string;
}
export interface RequestProcessProposalWithMetaInfo {
  request?: RequestProcessProposal;
  optimisticExecution: boolean;
  metainfo: {
    [key: string]: string;
  };
}
export interface RequestProcessProposalWithMetaInfoSDKType {
  request?: RequestProcessProposalSDKType;
  optimistic_execution: boolean;
  metainfo: {
    [key: string]: string;
  };
}
export interface TendermintValidator {
  /** bech32 operator address */
  operatorAddress: string;
  /** hex-format address derived from consensus public key */

  hexAddress: string;
  pubKey?: Any;
  votingPower: Long;
  proposerPriority: Long;
}
export interface TendermintValidatorSDKType {
  /** bech32 operator address */
  operator_address: string;
  /** hex-format address derived from consensus public key */

  hex_address: string;
  pub_key?: AnySDKType;
  voting_power: Long;
  proposer_priority: Long;
}
export interface TendermintValidators {
  validators: TendermintValidator[];
}
export interface TendermintValidatorsSDKType {
  validators: TendermintValidatorSDKType[];
}
export interface ValidatorSet {
  validators: TendermintValidator[];
  proposer?: TendermintValidator;
}
export interface ValidatorSetSDKType {
  validators: TendermintValidatorSDKType[];
  proposer?: TendermintValidatorSDKType;
}

function createBaseRequestPing(): RequestPing {
  return {};
}

export const RequestPing = {
  encode(_: RequestPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPing();

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

  fromJSON(_: any): RequestPing {
    return {};
  },

  toJSON(_: RequestPing): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<RequestPing>): RequestPing {
    const message = createBaseRequestPing();
    return message;
  }

};

function createBaseRequestBroadcastTx(): RequestBroadcastTx {
  return {
    tx: new Uint8Array()
  };
}

export const RequestBroadcastTx = {
  encode(message: RequestBroadcastTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBroadcastTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestBroadcastTx {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array()
    };
  },

  toJSON(message: RequestBroadcastTx): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<RequestBroadcastTx>): RequestBroadcastTx {
    const message = createBaseRequestBroadcastTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  }

};

function createBaseResponsePing(): ResponsePing {
  return {};
}

export const ResponsePing = {
  encode(_: ResponsePing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePing();

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

  fromJSON(_: any): ResponsePing {
    return {};
  },

  toJSON(_: ResponsePing): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ResponsePing>): ResponsePing {
    const message = createBaseResponsePing();
    return message;
  }

};

function createBaseResponseBroadcastTx(): ResponseBroadcastTx {
  return {
    checkTx: undefined,
    txResult: undefined
  };
}

export const ResponseBroadcastTx = {
  encode(message: ResponseBroadcastTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkTx !== undefined) {
      ResponseCheckTx.encode(message.checkTx, writer.uint32(10).fork()).ldelim();
    }

    if (message.txResult !== undefined) {
      ExecTxResult.encode(message.txResult, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBroadcastTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.checkTx = ResponseCheckTx.decode(reader, reader.uint32());
          break;

        case 2:
          message.txResult = ExecTxResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseBroadcastTx {
    return {
      checkTx: isSet(object.checkTx) ? ResponseCheckTx.fromJSON(object.checkTx) : undefined,
      txResult: isSet(object.txResult) ? ExecTxResult.fromJSON(object.txResult) : undefined
    };
  },

  toJSON(message: ResponseBroadcastTx): unknown {
    const obj: any = {};
    message.checkTx !== undefined && (obj.checkTx = message.checkTx ? ResponseCheckTx.toJSON(message.checkTx) : undefined);
    message.txResult !== undefined && (obj.txResult = message.txResult ? ExecTxResult.toJSON(message.txResult) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ResponseBroadcastTx>): ResponseBroadcastTx {
    const message = createBaseResponseBroadcastTx();
    message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? ResponseCheckTx.fromPartial(object.checkTx) : undefined;
    message.txResult = object.txResult !== undefined && object.txResult !== null ? ExecTxResult.fromPartial(object.txResult) : undefined;
    return message;
  }

};

function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: ""
  };
}

export const ResponseCheckTx = {
  encode(message: ResponseCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }

    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }

    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.gasWanted = (reader.int64() as Long);
          break;

        case 6:
          message.gasUsed = (reader.int64() as Long);
          break;

        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        case 8:
          message.codespace = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseCheckTx {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
      gasUsed: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },

  toJSON(message: ResponseCheckTx): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gas_wanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined && (obj.gas_used = (message.gasUsed || Long.ZERO).toString());

    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }

    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  }

};

function createBaseExecTxResult(): ExecTxResult {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: Long.ZERO,
    gasUsed: Long.ZERO,
    events: [],
    codespace: ""
  };
}

export const ExecTxResult = {
  encode(message: ExecTxResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.gasWanted.isZero()) {
      writer.uint32(40).int64(message.gasWanted);
    }

    if (!message.gasUsed.isZero()) {
      writer.uint32(48).int64(message.gasUsed);
    }

    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecTxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecTxResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.gasWanted = (reader.int64() as Long);
          break;

        case 6:
          message.gasUsed = (reader.int64() as Long);
          break;

        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        case 8:
          message.codespace = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExecTxResult {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : "",
      info: isSet(object.info) ? String(object.info) : "",
      gasWanted: isSet(object.gas_wanted) ? Long.fromValue(object.gas_wanted) : Long.ZERO,
      gasUsed: isSet(object.gas_used) ? Long.fromValue(object.gas_used) : Long.ZERO,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
      codespace: isSet(object.codespace) ? String(object.codespace) : ""
    };
  },

  toJSON(message: ExecTxResult): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    message.info !== undefined && (obj.info = message.info);
    message.gasWanted !== undefined && (obj.gas_wanted = (message.gasWanted || Long.ZERO).toString());
    message.gasUsed !== undefined && (obj.gas_used = (message.gasUsed || Long.ZERO).toString());

    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }

    message.codespace !== undefined && (obj.codespace = message.codespace);
    return obj;
  },

  fromPartial(object: Partial<ExecTxResult>): ExecTxResult {
    const message = createBaseExecTxResult();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? Long.fromValue(object.gasWanted) : Long.ZERO;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  }

};

function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Event {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => EventAttribute.fromJSON(e)) : []
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? EventAttribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventAttribute(): EventAttribute {
  return {
    key: "",
    value: "",
    index: false
  };
}

export const EventAttribute = {
  encode(message: EventAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        case 3:
          message.index = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventAttribute {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      index: isSet(object.index) ? Boolean(object.index) : false
    };
  },

  toJSON(message: EventAttribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: Partial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.index = object.index ?? false;
    return message;
  }

};

function createBaseRequestProcessProposalWithMetaInfo_MetainfoEntry(): RequestProcessProposalWithMetaInfo_MetainfoEntry {
  return {
    key: "",
    value: ""
  };
}

export const RequestProcessProposalWithMetaInfo_MetainfoEntry = {
  encode(message: RequestProcessProposalWithMetaInfo_MetainfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposalWithMetaInfo_MetainfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposalWithMetaInfo_MetainfoEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestProcessProposalWithMetaInfo_MetainfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: RequestProcessProposalWithMetaInfo_MetainfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<RequestProcessProposalWithMetaInfo_MetainfoEntry>): RequestProcessProposalWithMetaInfo_MetainfoEntry {
    const message = createBaseRequestProcessProposalWithMetaInfo_MetainfoEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseRequestProcessProposalWithMetaInfo(): RequestProcessProposalWithMetaInfo {
  return {
    request: undefined,
    optimisticExecution: false,
    metainfo: {}
  };
}

export const RequestProcessProposalWithMetaInfo = {
  encode(message: RequestProcessProposalWithMetaInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RequestProcessProposal.encode(message.request, writer.uint32(10).fork()).ldelim();
    }

    if (message.optimisticExecution === true) {
      writer.uint32(16).bool(message.optimisticExecution);
    }

    Object.entries(message.metainfo).forEach(([key, value]) => {
      RequestProcessProposalWithMetaInfo_MetainfoEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposalWithMetaInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposalWithMetaInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.request = RequestProcessProposal.decode(reader, reader.uint32());
          break;

        case 2:
          message.optimisticExecution = reader.bool();
          break;

        case 3:
          const entry3 = RequestProcessProposalWithMetaInfo_MetainfoEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.metainfo[entry3.key] = entry3.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RequestProcessProposalWithMetaInfo {
    return {
      request: isSet(object.request) ? RequestProcessProposal.fromJSON(object.request) : undefined,
      optimisticExecution: isSet(object.optimisticExecution) ? Boolean(object.optimisticExecution) : false,
      metainfo: isObject(object.metainfo) ? Object.entries(object.metainfo).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: RequestProcessProposalWithMetaInfo): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? RequestProcessProposal.toJSON(message.request) : undefined);
    message.optimisticExecution !== undefined && (obj.optimisticExecution = message.optimisticExecution);
    obj.metainfo = {};

    if (message.metainfo) {
      Object.entries(message.metainfo).forEach(([k, v]) => {
        obj.metainfo[k] = v;
      });
    }

    return obj;
  },

  fromPartial(object: Partial<RequestProcessProposalWithMetaInfo>): RequestProcessProposalWithMetaInfo {
    const message = createBaseRequestProcessProposalWithMetaInfo();
    message.request = object.request !== undefined && object.request !== null ? RequestProcessProposal.fromPartial(object.request) : undefined;
    message.optimisticExecution = object.optimisticExecution ?? false;
    message.metainfo = Object.entries(object.metainfo ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseTendermintValidator(): TendermintValidator {
  return {
    operatorAddress: "",
    hexAddress: "",
    pubKey: undefined,
    votingPower: Long.ZERO,
    proposerPriority: Long.ZERO
  };
}

export const TendermintValidator = {
  encode(message: TendermintValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }

    if (message.hexAddress !== "") {
      writer.uint32(18).string(message.hexAddress);
    }

    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(26).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(32).int64(message.votingPower);
    }

    if (!message.proposerPriority.isZero()) {
      writer.uint32(40).int64(message.proposerPriority);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TendermintValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTendermintValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;

        case 2:
          message.hexAddress = reader.string();
          break;

        case 3:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.votingPower = (reader.int64() as Long);
          break;

        case 5:
          message.proposerPriority = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TendermintValidator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      hexAddress: isSet(object.hexAddress) ? String(object.hexAddress) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? Long.fromValue(object.votingPower) : Long.ZERO,
      proposerPriority: isSet(object.proposerPriority) ? Long.fromValue(object.proposerPriority) : Long.ZERO
    };
  },

  toJSON(message: TendermintValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.hexAddress !== undefined && (obj.hexAddress = message.hexAddress);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<TendermintValidator>): TendermintValidator {
    const message = createBaseTendermintValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.hexAddress = object.hexAddress ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? Long.fromValue(object.votingPower) : Long.ZERO;
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? Long.fromValue(object.proposerPriority) : Long.ZERO;
    return message;
  }

};

function createBaseTendermintValidators(): TendermintValidators {
  return {
    validators: []
  };
}

export const TendermintValidators = {
  encode(message: TendermintValidators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      TendermintValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TendermintValidators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTendermintValidators();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(TendermintValidator.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TendermintValidators {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => TendermintValidator.fromJSON(e)) : []
    };
  },

  toJSON(message: TendermintValidators): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? TendermintValidator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    return obj;
  },

  fromPartial(object: Partial<TendermintValidators>): TendermintValidators {
    const message = createBaseTendermintValidators();
    message.validators = object.validators?.map(e => TendermintValidator.fromPartial(e)) || [];
    return message;
  }

};

function createBaseValidatorSet(): ValidatorSet {
  return {
    validators: [],
    proposer: undefined
  };
}

export const ValidatorSet = {
  encode(message: ValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      TendermintValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.proposer !== undefined) {
      TendermintValidator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(TendermintValidator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.proposer = TendermintValidator.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => TendermintValidator.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? TendermintValidator.fromJSON(object.proposer) : undefined
    };
  },

  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? TendermintValidator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer ? TendermintValidator.toJSON(message.proposer) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => TendermintValidator.fromPartial(e)) || [];
    message.proposer = object.proposer !== undefined && object.proposer !== null ? TendermintValidator.fromPartial(object.proposer) : undefined;
    return message;
  }

};