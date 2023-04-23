import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../../helpers";
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
/** Metadata for each codeId */

export interface CodeMetadata {
  name: string;
  /** category paths e.g. "/dapps/history" */

  categ: string[];
  icon: string;
  /** off-chain identifier */

  author: string;
  site: string;
  abi: string;
  jsonSchema: string;
  origin?: CodeOrigin;
}
/** Metadata for each codeId */

export interface CodeMetadataSDKType {
  name: string;
  /** category paths e.g. "/dapps/history" */

  categ: string[];
  icon: string;
  /** off-chain identifier */

  author: string;
  site: string;
  abi: string;
  json_schema: string;
  origin?: CodeOriginSDKType;
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
  metadata?: CodeMetadata;
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
  metadata?: CodeMetadataSDKType;
}
export interface CodeOrigin {
  /** unique chain ID */
  chainId: string;
  /** hex-encoded address */

  address: string;
}
export interface CodeOriginSDKType {
  /** unique chain ID */
  chain_id: string;
  /** hex-encoded address */

  address: string;
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

function createBaseCodeMetadata(): CodeMetadata {
  return {
    name: undefined,
    categ: undefined,
    icon: undefined,
    author: undefined,
    site: undefined,
    abi: undefined,
    jsonSchema: undefined,
    origin: undefined
  };
}

export const CodeMetadata = {
  encode(message: CodeMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.categ) {
      writer.uint32(18).string(v!);
    }

    if (message.icon !== undefined) {
      writer.uint32(26).string(message.icon);
    }

    if (message.author !== undefined) {
      writer.uint32(34).string(message.author);
    }

    if (message.site !== undefined) {
      writer.uint32(42).string(message.site);
    }

    if (message.abi !== undefined) {
      writer.uint32(50).string(message.abi);
    }

    if (message.jsonSchema !== undefined) {
      writer.uint32(58).string(message.jsonSchema);
    }

    if (message.origin !== undefined) {
      CodeOrigin.encode(message.origin, writer.uint32(66).fork()).ldelim();
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
          message.name = reader.string();
          break;

        case 2:
          message.categ.push(reader.string());
          break;

        case 3:
          message.icon = reader.string();
          break;

        case 4:
          message.author = reader.string();
          break;

        case 5:
          message.site = reader.string();
          break;

        case 6:
          message.abi = reader.string();
          break;

        case 7:
          message.jsonSchema = reader.string();
          break;

        case 8:
          message.origin = CodeOrigin.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : undefined,
      categ: Array.isArray(object?.categ) ? object.categ.map((e: any) => String(e)) : [],
      icon: isSet(object.icon) ? String(object.icon) : undefined,
      author: isSet(object.author) ? String(object.author) : undefined,
      site: isSet(object.site) ? String(object.site) : undefined,
      abi: isSet(object.abi) ? String(object.abi) : undefined,
      jsonSchema: isSet(object.jsonSchema) ? String(object.jsonSchema) : undefined,
      origin: isSet(object.origin) ? CodeOrigin.fromJSON(object.origin) : undefined
    };
  },

  toJSON(message: CodeMetadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.categ) {
      obj.categ = message.categ.map(e => e);
    } else {
      obj.categ = [];
    }

    message.icon !== undefined && (obj.icon = message.icon);
    message.author !== undefined && (obj.author = message.author);
    message.site !== undefined && (obj.site = message.site);
    message.abi !== undefined && (obj.abi = message.abi);
    message.jsonSchema !== undefined && (obj.jsonSchema = message.jsonSchema);
    message.origin !== undefined && (obj.origin = message.origin ? CodeOrigin.toJSON(message.origin) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CodeMetadata>): CodeMetadata {
    const message = createBaseCodeMetadata();
    message.name = object.name ?? undefined;
    message.categ = object.categ?.map(e => e) || [];
    message.icon = object.icon ?? undefined;
    message.author = object.author ?? undefined;
    message.site = object.site ?? undefined;
    message.abi = object.abi ?? undefined;
    message.jsonSchema = object.jsonSchema ?? undefined;
    message.origin = object.origin !== undefined && object.origin !== null ? CodeOrigin.fromPartial(object.origin) : undefined;
    return message;
  }

};

function createBaseCodeInfo(): CodeInfo {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    deps: [],
    pinned: false,
    metadata: undefined
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

    if (message.metadata !== undefined) {
      CodeMetadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
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

        case 5:
          message.metadata = CodeMetadata.decode(reader, reader.uint32());
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
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
      metadata: isSet(object.metadata) ? CodeMetadata.fromJSON(object.metadata) : undefined
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
    message.metadata !== undefined && (obj.metadata = message.metadata ? CodeMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CodeInfo>): CodeInfo {
    const message = createBaseCodeInfo();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.deps = object.deps?.map(e => e) || [];
    message.pinned = object.pinned ?? false;
    message.metadata = object.metadata !== undefined && object.metadata !== null ? CodeMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseCodeOrigin(): CodeOrigin {
  return {
    chainId: "",
    address: ""
  };
}

export const CodeOrigin = {
  encode(message: CodeOrigin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeOrigin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeOrigin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeOrigin {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: CodeOrigin): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<CodeOrigin>): CodeOrigin {
    const message = createBaseCodeOrigin();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
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