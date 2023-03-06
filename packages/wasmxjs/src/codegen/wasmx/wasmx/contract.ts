import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
/** ContractStorage */

export interface ContractStorage {
  /** hex-encode key */
  key: Uint8Array;
  /** raw value */

  value: Uint8Array;
}
/** ContractStorage */

export interface ContractStorageSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfo {
  /** CodeHash is the unique identifier created by hashing the wasm code */
  codeHash: Uint8Array;
  /** Creator address who initially stored the code */

  creator: string;
  /**
   * deps can be hex-formatted contract addresses (32 bytes)
   * or versioned interface labels
   */

  deps: string[];
  abi: string;
  jsonSchema: string;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfoSDKType {
  code_hash: Uint8Array;
  creator: string;
  deps: string[];
  abi: string;
  json_schema: string;
}
/** ContractInfo stores a WASM contract instance */

export interface ContractInfo {
  /** CodeID is the reference to the stored Wasm code */
  codeId: Long;
  /** Creator address who initially instantiated the contract */

  creator: string;
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Initialization message */

  initMessage: Uint8Array;
  ibcPortId: string;
}
/** ContractInfo stores a WASM contract instance */

export interface ContractInfoSDKType {
  code_id: Long;
  creator: string;
  label: string;
  init_message: Uint8Array;
  ibc_port_id: string;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */

export interface AbsoluteTxPosition {
  /** BlockHeight is the block the contract was created at */
  blockHeight: Long;
  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   */

  txIndex: Long;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */

export interface AbsoluteTxPositionSDKType {
  block_height: Long;
  tx_index: Long;
}

function createBaseContractStorage(): ContractStorage {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const ContractStorage = {
  encode(message: ContractStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractStorage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractStorage>): ContractStorage {
    const message = createBaseContractStorage();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};

function createBaseCodeInfo(): CodeInfo {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    deps: [],
    abi: "",
    jsonSchema: ""
  };
}

export const CodeInfo = {
  encode(message: CodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    for (const v of message.deps) {
      writer.uint32(26).string(v!);
    }

    if (message.abi !== "") {
      writer.uint32(34).string(message.abi);
    }

    if (message.jsonSchema !== "") {
      writer.uint32(42).string(message.jsonSchema);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.deps.push(reader.string());
          break;

        case 4:
          message.abi = reader.string();
          break;

        case 5:
          message.jsonSchema = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.deps = object.deps?.map(e => e) || [];
    message.abi = object.abi ?? "";
    message.jsonSchema = object.jsonSchema ?? "";
    return message;
  }

};

function createBaseContractInfo(): ContractInfo {
  return {
    codeId: Long.UZERO,
    creator: "",
    label: "",
    initMessage: new Uint8Array(),
    ibcPortId: ""
  };
}

export const ContractInfo = {
  encode(message: ContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }

    if (message.initMessage.length !== 0) {
      writer.uint32(34).bytes(message.initMessage);
    }

    if (message.ibcPortId !== "") {
      writer.uint32(42).string(message.ibcPortId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.label = reader.string();
          break;

        case 4:
          message.initMessage = reader.bytes();
          break;

        case 5:
          message.ibcPortId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.label = object.label ?? "";
    message.initMessage = object.initMessage ?? new Uint8Array();
    message.ibcPortId = object.ibcPortId ?? "";
    return message;
  }

};

function createBaseAbsoluteTxPosition(): AbsoluteTxPosition {
  return {
    blockHeight: Long.UZERO,
    txIndex: Long.UZERO
  };
}

export const AbsoluteTxPosition = {
  encode(message: AbsoluteTxPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }

    if (!message.txIndex.isZero()) {
      writer.uint32(16).uint64(message.txIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbsoluteTxPosition();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 2:
          message.txIndex = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? Long.fromValue(object.txIndex) : Long.UZERO;
    return message;
  }

};