import { Params, ParamsSDKType } from "./params";
import { CodeMetadata, CodeMetadataSDKType, CodeInfo, CodeInfoSDKType, ContractInfo, ContractInfoSDKType, ContractStorage, ContractStorageSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../../helpers";
/** GenesisState defines the wasmx module's genesis state. */

export interface GenesisState {
  params?: Params;
  /** bootstrap address */

  bootstrapAccountAddress: string;
  systemContracts: SystemContract[];
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  /**
   * not recommended
   * initiate pinned/AOT compiled contracts from a provided folder
   * instead of compiling the contracts from wasm
   */

  compiledFolderPath: string;
}
/** GenesisState defines the wasmx module's genesis state. */

export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  /** bootstrap address */

  bootstrap_account_address: string;
  system_contracts: SystemContractSDKType[];
  codes: CodeSDKType[];
  contracts: ContractSDKType[];
  sequences: SequenceSDKType[];
  /**
   * not recommended
   * initiate pinned/AOT compiled contracts from a provided folder
   * instead of compiling the contracts from wasm
   */

  compiled_folder_path: string;
}
export interface SystemContract {
  address: string;
  label: string;
  initMessage: Uint8Array;
  pinned: boolean;
  native: boolean;
  metadata?: CodeMetadata;
}
export interface SystemContractSDKType {
  address: string;
  label: string;
  init_message: Uint8Array;
  pinned: boolean;
  native: boolean;
  metadata?: CodeMetadataSDKType;
}
/** Code - for importing and exporting code data */

export interface Code {
  codeId: Long;
  codeInfo?: CodeInfo;
  codeBytes: Uint8Array;
}
/** Code - for importing and exporting code data */

export interface CodeSDKType {
  code_id: Long;
  code_info?: CodeInfoSDKType;
  code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface Contract {
  contractAddress: string;
  contractInfo?: ContractInfo;
  contractState: ContractStorage[];
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface ContractSDKType {
  contract_address: string;
  contract_info?: ContractInfoSDKType;
  contract_state: ContractStorageSDKType[];
}
/** Sequence key and value of an id generation counter */

export interface Sequence {
  idKey: Uint8Array;
  value: Long;
}
/** Sequence key and value of an id generation counter */

export interface SequenceSDKType {
  id_key: Uint8Array;
  value: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    bootstrapAccountAddress: "",
    systemContracts: [],
    codes: [],
    contracts: [],
    sequences: [],
    compiledFolderPath: ""
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.bootstrapAccountAddress !== "") {
      writer.uint32(18).string(message.bootstrapAccountAddress);
    }

    for (const v of message.systemContracts) {
      SystemContract.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.compiledFolderPath !== "") {
      writer.uint32(58).string(message.compiledFolderPath);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.bootstrapAccountAddress = reader.string();
          break;

        case 3:
          message.systemContracts.push(SystemContract.decode(reader, reader.uint32()));
          break;

        case 4:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;

        case 5:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;

        case 6:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;

        case 7:
          message.compiledFolderPath = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bootstrapAccountAddress: isSet(object.bootstrapAccountAddress) ? String(object.bootstrapAccountAddress) : "",
      systemContracts: Array.isArray(object?.systemContracts) ? object.systemContracts.map((e: any) => SystemContract.fromJSON(e)) : [],
      codes: Array.isArray(object?.codes) ? object.codes.map((e: any) => Code.fromJSON(e)) : [],
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => Contract.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : [],
      compiledFolderPath: isSet(object.compiledFolderPath) ? String(object.compiledFolderPath) : ""
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.bootstrapAccountAddress !== undefined && (obj.bootstrapAccountAddress = message.bootstrapAccountAddress);

    if (message.systemContracts) {
      obj.systemContracts = message.systemContracts.map(e => e ? SystemContract.toJSON(e) : undefined);
    } else {
      obj.systemContracts = [];
    }

    if (message.codes) {
      obj.codes = message.codes.map(e => e ? Code.toJSON(e) : undefined);
    } else {
      obj.codes = [];
    }

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? Contract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }

    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }

    message.compiledFolderPath !== undefined && (obj.compiledFolderPath = message.compiledFolderPath);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bootstrapAccountAddress = object.bootstrapAccountAddress ?? "";
    message.systemContracts = object.systemContracts?.map(e => SystemContract.fromPartial(e)) || [];
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    message.compiledFolderPath = object.compiledFolderPath ?? "";
    return message;
  }

};

function createBaseSystemContract(): SystemContract {
  return {
    address: "",
    label: "",
    initMessage: new Uint8Array(),
    pinned: false,
    native: false,
    metadata: undefined
  };
}

export const SystemContract = {
  encode(message: SystemContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }

    if (message.initMessage.length !== 0) {
      writer.uint32(26).bytes(message.initMessage);
    }

    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }

    if (message.native === true) {
      writer.uint32(40).bool(message.native);
    }

    if (message.metadata !== undefined) {
      CodeMetadata.encode(message.metadata, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.label = reader.string();
          break;

        case 3:
          message.initMessage = reader.bytes();
          break;

        case 4:
          message.pinned = reader.bool();
          break;

        case 5:
          message.native = reader.bool();
          break;

        case 6:
          message.metadata = CodeMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SystemContract {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      label: isSet(object.label) ? String(object.label) : "",
      initMessage: isSet(object.initMessage) ? bytesFromBase64(object.initMessage) : new Uint8Array(),
      pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
      native: isSet(object.native) ? Boolean(object.native) : false,
      metadata: isSet(object.metadata) ? CodeMetadata.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: SystemContract): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.label !== undefined && (obj.label = message.label);
    message.initMessage !== undefined && (obj.initMessage = base64FromBytes(message.initMessage !== undefined ? message.initMessage : new Uint8Array()));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    message.native !== undefined && (obj.native = message.native);
    message.metadata !== undefined && (obj.metadata = message.metadata ? CodeMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: Partial<SystemContract>): SystemContract {
    const message = createBaseSystemContract();
    message.address = object.address ?? "";
    message.label = object.label ?? "";
    message.initMessage = object.initMessage ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    message.native = object.native ?? false;
    message.metadata = object.metadata !== undefined && object.metadata !== null ? CodeMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseCode(): Code {
  return {
    codeId: Long.UZERO,
    codeInfo: undefined,
    codeBytes: new Uint8Array()
  };
}

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }

    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.codeBytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Code {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array()
    };
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined && (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<Code>): Code {
    const message = createBaseCode();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    return message;
  }

};

function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: undefined,
    contractState: []
  };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.contractState) {
      ContractStorage.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.contractState.push(ContractStorage.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Contract {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
      contractState: Array.isArray(object?.contractState) ? object.contractState.map((e: any) => ContractStorage.fromJSON(e)) : []
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);

    if (message.contractState) {
      obj.contractState = message.contractState.map(e => e ? ContractStorage.toJSON(e) : undefined);
    } else {
      obj.contractState = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Contract>): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : undefined;
    message.contractState = object.contractState?.map(e => ContractStorage.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: Long.UZERO
  };
}

export const Sequence = {
  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;

        case 2:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Sequence {
    return {
      idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },

  toJSON(message: Sequence): unknown {
    const obj: any = {};
    message.idKey !== undefined && (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }

};