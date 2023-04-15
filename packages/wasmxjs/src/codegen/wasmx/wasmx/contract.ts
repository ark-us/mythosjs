import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../helpers";
/** ContractStorage */

export interface ContractStorage {
  /** hex-encode key */
  key: Uint8Array;
  /** raw value */

  value: Uint8Array;
}
/** ContractStorage */

export interface ContractStorageSDKType {
  /** hex-encode key */
  key: Uint8Array;
  /** raw value */

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
  /** Pinned contract */

  pinned: boolean;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfoSDKType {
  /** CodeHash is the unique identifier created by hashing the wasm code */
  code_hash: Uint8Array;
  /** Creator address who initially stored the code */

  creator: string;
  /**
   * deps can be hex-formatted contract addresses (32 bytes)
   * or versioned interface labels
   */

  deps: string[];
  /** Pinned contract */

  pinned: boolean;
}
/** Metadata for each codeId */

export interface CodeMetadata {
  abi: string;
  jsonSchema: string;
}
/** Metadata for each codeId */

export interface CodeMetadataSDKType {
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
  /** CodeID is the reference to the stored Wasm code */
  code_id: Long;
  /** Creator address who initially instantiated the contract */

  creator: string;
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Initialization message */

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
  /** BlockHeight is the block the contract was created at */
  block_height: Long;
  /**
   * TxIndex is a monotonic counter within the block (actual transaction index,
   * or gas consumed)
   */

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

  fromJSON(object: any): ContractStorage {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: ContractStorage): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<ContractStorage>): ContractStorage {
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
    pinned: false
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

    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
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
          message.pinned = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeInfo {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      deps: Array.isArray(object?.deps) ? object.deps.map((e: any) => String(e)) : [],
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false
    };
  },

  toJSON(message: CodeInfo): unknown {
    const obj: any = {};
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    message.creator !== undefined && (obj.creator = message.creator);

    if (message.deps) {
      obj.deps = message.deps.map(e => e);
    } else {
      obj.deps = [];
    }

    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },

  fromPartial(object: Partial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.deps = object.deps?.map(e => e) || [];
    message.pinned = object.pinned ?? false;
    return message;
  }

};

function createBaseCodeMetadata(): CodeMetadata {
  return {
    abi: "",
    jsonSchema: ""
  };
}

export const CodeMetadata = {
  encode(message: CodeMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abi !== "") {
      writer.uint32(10).string(message.abi);
    }

    if (message.jsonSchema !== "") {
      writer.uint32(18).string(message.jsonSchema);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.abi = reader.string();
          break;

        case 2:
          message.jsonSchema = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeMetadata {
    return {
      abi: isSet(object.abi) ? String(object.abi) : "",
      jsonSchema: isSet(object.jsonSchema) ? String(object.jsonSchema) : ""
    };
  },

  toJSON(message: CodeMetadata): unknown {
    const obj: any = {};
    message.abi !== undefined && (obj.abi = message.abi);
    message.jsonSchema !== undefined && (obj.jsonSchema = message.jsonSchema);
    return obj;
  },

  fromPartial(object: Partial<CodeMetadata>): CodeMetadata {
    const message = createBaseCodeMetadata();
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

  fromJSON(object: any): ContractInfo {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      label: isSet(object.label) ? String(object.label) : "",
      initMessage: isSet(object.initMessage) ? bytesFromBase64(object.initMessage) : new Uint8Array(),
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : ""
    };
  },

  toJSON(message: ContractInfo): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.initMessage !== undefined && (obj.initMessage = base64FromBytes(message.initMessage !== undefined ? message.initMessage : new Uint8Array()));
    message.ibcPortId !== undefined && (obj.ibcPortId = message.ibcPortId);
    return obj;
  },

  fromPartial(object: Partial<ContractInfo>): ContractInfo {
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

  fromJSON(object: any): AbsoluteTxPosition {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.UZERO,
      txIndex: isSet(object.txIndex) ? Long.fromValue(object.txIndex) : Long.UZERO
    };
  },

  toJSON(message: AbsoluteTxPosition): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.txIndex !== undefined && (obj.txIndex = (message.txIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition {
    const message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? Long.fromValue(object.txIndex) : Long.UZERO;
    return message;
  }

};