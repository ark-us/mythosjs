import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../../helpers";
export enum ContractStorageType {
  /** CoreConsensus - transaction execution effects; this must be the DEFAULT storage */
  CoreConsensus = 0,

  /** MetaConsensus - blocks, transactions - meta chain data */
  MetaConsensus = 1,

  /** SingleConsensus - node-specific storage that must NOT be used in deterministic operations */
  SingleConsensus = 2,
  Memory = 3,
  Transient = 4,
  UNRECOGNIZED = -1,
}
export enum ContractStorageTypeSDKType {
  /** CoreConsensus - transaction execution effects; this must be the DEFAULT storage */
  CoreConsensus = 0,

  /** MetaConsensus - blocks, transactions - meta chain data */
  MetaConsensus = 1,

  /** SingleConsensus - node-specific storage that must NOT be used in deterministic operations */
  SingleConsensus = 2,
  Memory = 3,
  Transient = 4,
  UNRECOGNIZED = -1,
}
export function contractStorageTypeFromJSON(object: any): ContractStorageType {
  switch (object) {
    case 0:
    case "CoreConsensus":
      return ContractStorageType.CoreConsensus;

    case 1:
    case "MetaConsensus":
      return ContractStorageType.MetaConsensus;

    case 2:
    case "SingleConsensus":
      return ContractStorageType.SingleConsensus;

    case 3:
    case "Memory":
      return ContractStorageType.Memory;

    case 4:
    case "Transient":
      return ContractStorageType.Transient;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractStorageType.UNRECOGNIZED;
  }
}
export function contractStorageTypeToJSON(object: ContractStorageType): string {
  switch (object) {
    case ContractStorageType.CoreConsensus:
      return "CoreConsensus";

    case ContractStorageType.MetaConsensus:
      return "MetaConsensus";

    case ContractStorageType.SingleConsensus:
      return "SingleConsensus";

    case ContractStorageType.Memory:
      return "Memory";

    case ContractStorageType.Transient:
      return "Transient";

    case ContractStorageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ContractStorage */

export interface ContractStoragePB {
  /** hex-encode key */
  key: Uint8Array;
  /** raw value */

  value: Uint8Array;
}
/** ContractStorage */

export interface ContractStoragePBSDKType {
  /** hex-encode key */
  key: Uint8Array;
  /** raw value */

  value: Uint8Array;
}
/** Metadata for each codeId */

export interface CodeMetadataPB {
  name: string;
  /** category paths e.g. "/dapps/history" */

  categ: string[];
  icon: string;
  /** off-chain identifier */

  author: string;
  site: string;
  abi: Uint8Array;
  jsonSchema: string;
  origin?: CodeOriginPB;
}
/** Metadata for each codeId */

export interface CodeMetadataPBSDKType {
  name: string;
  /** category paths e.g. "/dapps/history" */

  categ: string[];
  icon: string;
  /** off-chain identifier */

  author: string;
  site: string;
  abi: Uint8Array;
  json_schema: string;
  origin?: CodeOriginPBSDKType;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfoPB {
  /**
   * CodeHash is the unique identifier created by hashing the
   * wasm or interpreted code
   */
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
  /** default is on, but some system contracts may have metering off */

  meteringOff: boolean;
  metadata?: CodeMetadataPB;
  /** for code that has a different runtime, like EVM */

  interpretedBytecodeDeployment: Uint8Array;
  interpretedBytecodeRuntime: Uint8Array;
  runtimeHash: Uint8Array;
  source: Uint8Array;
  sourceVerified: boolean;
}
/** CodeInfo is data for the uploaded contract WASM code */

export interface CodeInfoPBSDKType {
  /**
   * CodeHash is the unique identifier created by hashing the
   * wasm or interpreted code
   */
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
  /** default is on, but some system contracts may have metering off */

  metering_off: boolean;
  metadata?: CodeMetadataPBSDKType;
  /** for code that has a different runtime, like EVM */

  interpreted_bytecode_deployment: Uint8Array;
  interpreted_bytecode_runtime: Uint8Array;
  runtime_hash: Uint8Array;
  source: Uint8Array;
  source_verified: boolean;
}
export interface CodeOriginPB {
  /** unique chain ID */
  chainId: string;
  /** hex-encoded address */

  address: string;
}
export interface CodeOriginPBSDKType {
  /** unique chain ID */
  chain_id: string;
  /** hex-encoded address */

  address: string;
}
/** ContractInfo stores a WASM contract instance */

export interface ContractInfoPB {
  /** CodeID is the reference to the stored Wasm code */
  codeId: Long;
  /** Creator address who initially instantiated the contract */

  creator: string;
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Each contract can set its storage type */

  storageType: ContractStorageType;
  /** Initialization message */

  initMessage: Uint8Array;
  /** factory/deployer address */

  provenance: string;
  ibcPortId: string;
}
/** ContractInfo stores a WASM contract instance */

export interface ContractInfoPBSDKType {
  /** CodeID is the reference to the stored Wasm code */
  code_id: Long;
  /** Creator address who initially instantiated the contract */

  creator: string;
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Each contract can set its storage type */

  storage_type: ContractStorageTypeSDKType;
  /** Initialization message */

  init_message: Uint8Array;
  /** factory/deployer address */

  provenance: string;
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

function createBaseContractStoragePB(): ContractStoragePB {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}

export const ContractStoragePB = {
  encode(message: ContractStoragePB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractStoragePB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractStoragePB();

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

  fromJSON(object: any): ContractStoragePB {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: ContractStoragePB): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<ContractStoragePB>): ContractStoragePB {
    const message = createBaseContractStoragePB();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  }

};

function createBaseCodeMetadataPB(): CodeMetadataPB {
  return {
    name: undefined,
    categ: [],
    icon: undefined,
    author: undefined,
    site: undefined,
    abi: undefined,
    jsonSchema: undefined,
    origin: undefined
  };
}

export const CodeMetadataPB = {
  encode(message: CodeMetadataPB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(50).bytes(message.abi);
    }

    if (message.jsonSchema !== undefined) {
      writer.uint32(58).string(message.jsonSchema);
    }

    if (message.origin !== undefined) {
      CodeOriginPB.encode(message.origin, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeMetadataPB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeMetadataPB();

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
          message.abi = reader.bytes();
          break;

        case 7:
          message.jsonSchema = reader.string();
          break;

        case 8:
          message.origin = CodeOriginPB.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeMetadataPB {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      categ: Array.isArray(object?.categ) ? object.categ.map((e: any) => String(e)) : [],
      icon: isSet(object.icon) ? String(object.icon) : undefined,
      author: isSet(object.author) ? String(object.author) : undefined,
      site: isSet(object.site) ? String(object.site) : undefined,
      abi: isSet(object.abi) ? bytesFromBase64(object.abi) : undefined,
      jsonSchema: isSet(object.jsonSchema) ? String(object.jsonSchema) : undefined,
      origin: isSet(object.origin) ? CodeOriginPB.fromJSON(object.origin) : undefined
    };
  },

  toJSON(message: CodeMetadataPB): unknown {
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
    message.abi !== undefined && (obj.abi = message.abi !== undefined ? base64FromBytes(message.abi) : undefined);
    message.jsonSchema !== undefined && (obj.jsonSchema = message.jsonSchema);
    message.origin !== undefined && (obj.origin = message.origin ? CodeOriginPB.toJSON(message.origin) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CodeMetadataPB>): CodeMetadataPB {
    const message = createBaseCodeMetadataPB();
    message.name = object.name ?? undefined;
    message.categ = object.categ?.map(e => e) || [];
    message.icon = object.icon ?? undefined;
    message.author = object.author ?? undefined;
    message.site = object.site ?? undefined;
    message.abi = object.abi ?? undefined;
    message.jsonSchema = object.jsonSchema ?? undefined;
    message.origin = object.origin !== undefined && object.origin !== null ? CodeOriginPB.fromPartial(object.origin) : undefined;
    return message;
  }

};

function createBaseCodeInfoPB(): CodeInfoPB {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    deps: [],
    pinned: false,
    meteringOff: false,
    metadata: undefined,
    interpretedBytecodeDeployment: new Uint8Array(),
    interpretedBytecodeRuntime: new Uint8Array(),
    runtimeHash: new Uint8Array(),
    source: new Uint8Array(),
    sourceVerified: false
  };
}

export const CodeInfoPB = {
  encode(message: CodeInfoPB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.meteringOff === true) {
      writer.uint32(40).bool(message.meteringOff);
    }

    if (message.metadata !== undefined) {
      CodeMetadataPB.encode(message.metadata, writer.uint32(50).fork()).ldelim();
    }

    if (message.interpretedBytecodeDeployment.length !== 0) {
      writer.uint32(58).bytes(message.interpretedBytecodeDeployment);
    }

    if (message.interpretedBytecodeRuntime.length !== 0) {
      writer.uint32(66).bytes(message.interpretedBytecodeRuntime);
    }

    if (message.runtimeHash.length !== 0) {
      writer.uint32(74).bytes(message.runtimeHash);
    }

    if (message.source.length !== 0) {
      writer.uint32(82).bytes(message.source);
    }

    if (message.sourceVerified === true) {
      writer.uint32(88).bool(message.sourceVerified);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoPB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoPB();

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
          message.meteringOff = reader.bool();
          break;

        case 6:
          message.metadata = CodeMetadataPB.decode(reader, reader.uint32());
          break;

        case 7:
          message.interpretedBytecodeDeployment = reader.bytes();
          break;

        case 8:
          message.interpretedBytecodeRuntime = reader.bytes();
          break;

        case 9:
          message.runtimeHash = reader.bytes();
          break;

        case 10:
          message.source = reader.bytes();
          break;

        case 11:
          message.sourceVerified = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CodeInfoPB {
    return {
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      deps: Array.isArray(object?.deps) ? object.deps.map((e: any) => String(e)) : [],
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
      meteringOff: isSet(object.meteringOff) ? Boolean(object.meteringOff) : false,
      metadata: isSet(object.metadata) ? CodeMetadataPB.fromJSON(object.metadata) : undefined,
      interpretedBytecodeDeployment: isSet(object.interpretedBytecodeDeployment) ? bytesFromBase64(object.interpretedBytecodeDeployment) : new Uint8Array(),
      interpretedBytecodeRuntime: isSet(object.interpretedBytecodeRuntime) ? bytesFromBase64(object.interpretedBytecodeRuntime) : new Uint8Array(),
      runtimeHash: isSet(object.runtimeHash) ? bytesFromBase64(object.runtimeHash) : new Uint8Array(),
      source: isSet(object.source) ? bytesFromBase64(object.source) : new Uint8Array(),
      sourceVerified: isSet(object.sourceVerified) ? Boolean(object.sourceVerified) : false
    };
  },

  toJSON(message: CodeInfoPB): unknown {
    const obj: any = {};
    message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    message.creator !== undefined && (obj.creator = message.creator);

    if (message.deps) {
      obj.deps = message.deps.map(e => e);
    } else {
      obj.deps = [];
    }

    message.pinned !== undefined && (obj.pinned = message.pinned);
    message.meteringOff !== undefined && (obj.meteringOff = message.meteringOff);
    message.metadata !== undefined && (obj.metadata = message.metadata ? CodeMetadataPB.toJSON(message.metadata) : undefined);
    message.interpretedBytecodeDeployment !== undefined && (obj.interpretedBytecodeDeployment = base64FromBytes(message.interpretedBytecodeDeployment !== undefined ? message.interpretedBytecodeDeployment : new Uint8Array()));
    message.interpretedBytecodeRuntime !== undefined && (obj.interpretedBytecodeRuntime = base64FromBytes(message.interpretedBytecodeRuntime !== undefined ? message.interpretedBytecodeRuntime : new Uint8Array()));
    message.runtimeHash !== undefined && (obj.runtimeHash = base64FromBytes(message.runtimeHash !== undefined ? message.runtimeHash : new Uint8Array()));
    message.source !== undefined && (obj.source = base64FromBytes(message.source !== undefined ? message.source : new Uint8Array()));
    message.sourceVerified !== undefined && (obj.sourceVerified = message.sourceVerified);
    return obj;
  },

  fromPartial(object: Partial<CodeInfoPB>): CodeInfoPB {
    const message = createBaseCodeInfoPB();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.deps = object.deps?.map(e => e) || [];
    message.pinned = object.pinned ?? false;
    message.meteringOff = object.meteringOff ?? false;
    message.metadata = object.metadata !== undefined && object.metadata !== null ? CodeMetadataPB.fromPartial(object.metadata) : undefined;
    message.interpretedBytecodeDeployment = object.interpretedBytecodeDeployment ?? new Uint8Array();
    message.interpretedBytecodeRuntime = object.interpretedBytecodeRuntime ?? new Uint8Array();
    message.runtimeHash = object.runtimeHash ?? new Uint8Array();
    message.source = object.source ?? new Uint8Array();
    message.sourceVerified = object.sourceVerified ?? false;
    return message;
  }

};

function createBaseCodeOriginPB(): CodeOriginPB {
  return {
    chainId: "",
    address: ""
  };
}

export const CodeOriginPB = {
  encode(message: CodeOriginPB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CodeOriginPB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeOriginPB();

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

  fromJSON(object: any): CodeOriginPB {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: CodeOriginPB): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<CodeOriginPB>): CodeOriginPB {
    const message = createBaseCodeOriginPB();
    message.chainId = object.chainId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseContractInfoPB(): ContractInfoPB {
  return {
    codeId: Long.UZERO,
    creator: "",
    label: "",
    storageType: 0,
    initMessage: new Uint8Array(),
    provenance: "",
    ibcPortId: ""
  };
}

export const ContractInfoPB = {
  encode(message: ContractInfoPB, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }

    if (message.storageType !== 0) {
      writer.uint32(32).int32(message.storageType);
    }

    if (message.initMessage.length !== 0) {
      writer.uint32(42).bytes(message.initMessage);
    }

    if (message.provenance !== "") {
      writer.uint32(50).string(message.provenance);
    }

    if (message.ibcPortId !== "") {
      writer.uint32(58).string(message.ibcPortId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoPB {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoPB();

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
          message.storageType = (reader.int32() as any);
          break;

        case 5:
          message.initMessage = reader.bytes();
          break;

        case 6:
          message.provenance = reader.string();
          break;

        case 7:
          message.ibcPortId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractInfoPB {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      label: isSet(object.label) ? String(object.label) : "",
      storageType: isSet(object.storageType) ? contractStorageTypeFromJSON(object.storageType) : 0,
      initMessage: isSet(object.initMessage) ? bytesFromBase64(object.initMessage) : new Uint8Array(),
      provenance: isSet(object.provenance) ? String(object.provenance) : "",
      ibcPortId: isSet(object.ibcPortId) ? String(object.ibcPortId) : ""
    };
  },

  toJSON(message: ContractInfoPB): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.storageType !== undefined && (obj.storageType = contractStorageTypeToJSON(message.storageType));
    message.initMessage !== undefined && (obj.initMessage = base64FromBytes(message.initMessage !== undefined ? message.initMessage : new Uint8Array()));
    message.provenance !== undefined && (obj.provenance = message.provenance);
    message.ibcPortId !== undefined && (obj.ibcPortId = message.ibcPortId);
    return obj;
  },

  fromPartial(object: Partial<ContractInfoPB>): ContractInfoPB {
    const message = createBaseContractInfoPB();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.label = object.label ?? "";
    message.storageType = object.storageType ?? 0;
    message.initMessage = object.initMessage ?? new Uint8Array();
    message.provenance = object.provenance ?? "";
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