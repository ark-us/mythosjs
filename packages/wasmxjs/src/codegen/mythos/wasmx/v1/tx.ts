import { CodeMetadataPB, CodeMetadataPBSDKType } from "./contract";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Long } from "../../../helpers";
/** MsgStoreCode submit Wasm code to the system */

export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /**
   * WASMByteCode can be raw or gzip compressed
   * can be interpreted bytecode
   * constructor + runtime
   */

  byteCode: Uint8Array;
  /**
   * deps can be hex-formatted contract addresses (32 bytes) for interpreter contracts
   * and/or versioned interface labels
   */

  deps: string[];
  metadata?: CodeMetadataPB;
}
/** MsgStoreCode submit Wasm code to the system */

export interface MsgStoreCodeSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /**
   * WASMByteCode can be raw or gzip compressed
   * can be interpreted bytecode
   * constructor + runtime
   */

  byte_code: Uint8Array;
  /**
   * deps can be hex-formatted contract addresses (32 bytes) for interpreter contracts
   * and/or versioned interface labels
   */

  deps: string[];
  metadata?: CodeMetadataPBSDKType;
}
/** MsgStoreCodeResponse returns store result data. */

export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Checksum is the sha256 hash of the stored code */

  checksum: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */

export interface MsgStoreCodeResponseSDKType {
  /** CodeID is the reference to the stored WASM code */
  code_id: Long;
  /** Checksum is the sha256 hash of the stored code */

  checksum: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */

export interface MsgDeployCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /**
   * WASMByteCode can be raw or gzip compressed
   * can be interpreted bytecode
   * constructor + runtime
   */

  byteCode: Uint8Array;
  /**
   * deps can be hex-formatted contract addresses (32 bytes) for interpreter contracts
   * and/or versioned interface labels
   */

  deps: string[];
  metadata?: CodeMetadataPB;
  /**
   * instantiation:
   * Msg json encoded message to be passed to the contract on instantiation
   */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
  label: string;
}
/** MsgStoreCode submit Wasm code to the system */

export interface MsgDeployCodeSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /**
   * WASMByteCode can be raw or gzip compressed
   * can be interpreted bytecode
   * constructor + runtime
   */

  byte_code: Uint8Array;
  /**
   * deps can be hex-formatted contract addresses (32 bytes) for interpreter contracts
   * and/or versioned interface labels
   */

  deps: string[];
  metadata?: CodeMetadataPBSDKType;
  /**
   * instantiation:
   * Msg json encoded message to be passed to the contract on instantiation
   */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinSDKType[];
  label: string;
}
/** MsgDeployCodeResponse returns store result data. */

export interface MsgDeployCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Checksum is the sha256 hash of the stored code */

  checksum: Uint8Array;
  address: string;
}
/** MsgDeployCodeResponse returns store result data. */

export interface MsgDeployCodeResponseSDKType {
  /** CodeID is the reference to the stored WASM code */
  code_id: Long;
  /** Checksum is the sha256 hash of the stored code */

  checksum: Uint8Array;
  address: string;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */

export interface MsgInstantiateContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** CodeID is the reference to the stored WASM code */

  codeId: Long;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
  label: string;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */

export interface MsgInstantiateContractSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** CodeID is the reference to the stored WASM code */

  code_id: Long;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinSDKType[];
  label: string;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */

export interface MsgInstantiateContract2 {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */

  codeId: Long;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
  label: string;
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */

  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */

  fixMsg: boolean;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */

export interface MsgInstantiateContract2SDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Admin is an optional address that can execute migrations */

  code_id: Long;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinSDKType[];
  label: string;
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */

  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */

  fix_msg: boolean;
}
/** MsgInstantiateContractResponse return instantiation result data */

export interface MsgInstantiateContractResponse {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */

  data: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */

export interface MsgInstantiateContractResponseSDKType {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */

  data: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */

export interface MsgInstantiateContract2Response {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */

  data: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */

export interface MsgInstantiateContract2ResponseSDKType {
  /** Address is the bech32 address of the new contract instance. */
  address: string;
  /** Data contains bytes to returned from the contract */

  data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */

export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: Coin[];
  /**
   * Array of either hex-encoded contract addresses or contract labels
   * on which the execution of this message depends on
   */

  dependencies: string[];
}
/** MsgExecuteContract submits the given message data to a smart contract */

export interface MsgExecuteContractSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: CoinSDKType[];
  /**
   * Array of either hex-encoded contract addresses or contract labels
   * on which the execution of this message depends on
   */

  dependencies: string[];
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponseSDKType {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteEth submits an Ethereum-like RLP-encoded transaction */

export interface MsgExecuteEth {
  /**
   * data is RLP-encoded transaction data of the Ethereum transaction
   * we use Any for its caching feature
   * google.protobuf.Any data = 1;
   */
  data: Uint8Array;
  /** from is a bech32 address decoded from the transaction signature */

  sender: string;
}
/** MsgExecuteEth submits an Ethereum-like RLP-encoded transaction */

export interface MsgExecuteEthSDKType {
  /**
   * data is RLP-encoded transaction data of the Ethereum transaction
   * we use Any for its caching feature
   * google.protobuf.Any data = 1;
   */
  data: Uint8Array;
  /** from is a bech32 address decoded from the transaction signature */

  sender: string;
}
/** MsgExecuteEthResponse returns execution result data. */

export interface MsgExecuteEthResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteEthResponse returns execution result data. */

export interface MsgExecuteEthResponseSDKType {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
/** ExtensionOptionEthereumTx is an extension option for ethereum transactions */

export interface ExtensionOptionEthereumTx {}
/** ExtensionOptionEthereumTx is an extension option for ethereum transactions */

export interface ExtensionOptionEthereumTxSDKType {}
/**
 * MsgExecuteWithOriginContract forwards a message data from a smart contract
 * to another smart contract
 */

export interface MsgExecuteWithOriginContract {
  /** Origin is the actor that originally signed the message */
  origin: string;
  /** Sender is the the smart contract that sent the messages */

  sender: string;
  /** Contract is the address of the smart contract that receives the message */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: Coin[];
}
/**
 * MsgExecuteWithOriginContract forwards a message data from a smart contract
 * to another smart contract
 */

export interface MsgExecuteWithOriginContractSDKType {
  /** Origin is the actor that originally signed the message */
  origin: string;
  /** Sender is the the smart contract that sent the messages */

  sender: string;
  /** Contract is the address of the smart contract that receives the message */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: CoinSDKType[];
}
/** MsgExecuteDelegateContract submits the given message data to a smart contract */

export interface MsgExecuteDelegateContract {
  /** Origin is the actor that originally signed the message */
  origin: string;
  /** Sender is the storage contract, equivalent to the address that triggers the message (signer) */

  sender: string;
  /** Caller is the address that will be used as sender */

  caller: string;
  /** CodeContract is the address of the smart contract whose binary is used */

  codeContract: string;
  /** StorageContract is the address of the smart contract whose storage is used */

  storageContract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: Coin[];
}
/** MsgExecuteDelegateContract submits the given message data to a smart contract */

export interface MsgExecuteDelegateContractSDKType {
  /** Origin is the actor that originally signed the message */
  origin: string;
  /** Sender is the storage contract, equivalent to the address that triggers the message (signer) */

  sender: string;
  /** Caller is the address that will be used as sender */

  caller: string;
  /** CodeContract is the address of the smart contract whose binary is used */

  code_contract: string;
  /** StorageContract is the address of the smart contract whose storage is used */

  storage_contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: CoinSDKType[];
}
/** MsgExecuteDelegateContractResponse returns execution result data. */

export interface MsgExecuteDelegateContractResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteDelegateContractResponse returns execution result data. */

export interface MsgExecuteDelegateContractResponseSDKType {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
export interface MsgCompileContract {
  /** authority is the address that controls the module. */
  authority: string;
  /** Contract is the address of the smart contract */

  codeId: Long;
  meteringOff: boolean;
}
export interface MsgCompileContractSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  /** Contract is the address of the smart contract */

  codeId: Long;
  metering_off: boolean;
}
export interface MsgCompileContractResponse {}
export interface MsgCompileContractResponseSDKType {}

function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    byteCode: new Uint8Array(),
    deps: [],
    metadata: undefined
  };
}

export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.byteCode.length !== 0) {
      writer.uint32(18).bytes(message.byteCode);
    }

    for (const v of message.deps) {
      writer.uint32(26).string(v!);
    }

    if (message.metadata !== undefined) {
      CodeMetadataPB.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.byteCode = reader.bytes();
          break;

        case 3:
          message.deps.push(reader.string());
          break;

        case 4:
          message.metadata = CodeMetadataPB.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      byteCode: isSet(object.byteCode) ? bytesFromBase64(object.byteCode) : new Uint8Array(),
      deps: Array.isArray(object?.deps) ? object.deps.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? CodeMetadataPB.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.byteCode !== undefined && (obj.byteCode = base64FromBytes(message.byteCode !== undefined ? message.byteCode : new Uint8Array()));

    if (message.deps) {
      obj.deps = message.deps.map(e => e);
    } else {
      obj.deps = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata ? CodeMetadataPB.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.byteCode = object.byteCode ?? new Uint8Array();
    message.deps = object.deps?.map(e => e) || [];
    message.metadata = object.metadata !== undefined && object.metadata !== null ? CodeMetadataPB.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    codeId: Long.UZERO,
    checksum: new Uint8Array()
  };
}

export const MsgStoreCodeResponse = {
  encode(message: MsgStoreCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.checksum = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStoreCodeResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array()
    };
  },

  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.checksum !== undefined && (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgDeployCode(): MsgDeployCode {
  return {
    sender: "",
    byteCode: new Uint8Array(),
    deps: [],
    metadata: undefined,
    msg: new Uint8Array(),
    funds: [],
    label: ""
  };
}

export const MsgDeployCode = {
  encode(message: MsgDeployCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.byteCode.length !== 0) {
      writer.uint32(18).bytes(message.byteCode);
    }

    for (const v of message.deps) {
      writer.uint32(26).string(v!);
    }

    if (message.metadata !== undefined) {
      CodeMetadataPB.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.label !== "") {
      writer.uint32(58).string(message.label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeployCode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeployCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.byteCode = reader.bytes();
          break;

        case 3:
          message.deps.push(reader.string());
          break;

        case 4:
          message.metadata = CodeMetadataPB.decode(reader, reader.uint32());
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.label = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeployCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      byteCode: isSet(object.byteCode) ? bytesFromBase64(object.byteCode) : new Uint8Array(),
      deps: Array.isArray(object?.deps) ? object.deps.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? CodeMetadataPB.fromJSON(object.metadata) : undefined,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      label: isSet(object.label) ? String(object.label) : ""
    };
  },

  toJSON(message: MsgDeployCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.byteCode !== undefined && (obj.byteCode = base64FromBytes(message.byteCode !== undefined ? message.byteCode : new Uint8Array()));

    if (message.deps) {
      obj.deps = message.deps.map(e => e);
    } else {
      obj.deps = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata ? CodeMetadataPB.toJSON(message.metadata) : undefined);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  fromPartial(object: Partial<MsgDeployCode>): MsgDeployCode {
    const message = createBaseMsgDeployCode();
    message.sender = object.sender ?? "";
    message.byteCode = object.byteCode ?? new Uint8Array();
    message.deps = object.deps?.map(e => e) || [];
    message.metadata = object.metadata !== undefined && object.metadata !== null ? CodeMetadataPB.fromPartial(object.metadata) : undefined;
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.label = object.label ?? "";
    return message;
  }

};

function createBaseMsgDeployCodeResponse(): MsgDeployCodeResponse {
  return {
    codeId: Long.UZERO,
    checksum: new Uint8Array(),
    address: ""
  };
}

export const MsgDeployCodeResponse = {
  encode(message: MsgDeployCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeployCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeployCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.checksum = reader.bytes();
          break;

        case 3:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeployCodeResponse {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array(),
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgDeployCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.checksum !== undefined && (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<MsgDeployCodeResponse>): MsgDeployCodeResponse {
    const message = createBaseMsgDeployCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.checksum = object.checksum ?? new Uint8Array();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    codeId: Long.UZERO,
    msg: new Uint8Array(),
    funds: [],
    label: ""
  };
}

export const MsgInstantiateContract = {
  encode(message: MsgInstantiateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(16).uint64(message.codeId);
    }

    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.label !== "") {
      writer.uint32(42).string(message.label);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.codeId = (reader.uint64() as Long);
          break;

        case 3:
          message.msg = reader.bytes();
          break;

        case 4:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.label = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      label: isSet(object.label) ? String(object.label) : ""
    };
  },

  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    message.label !== undefined && (obj.label = message.label);
    return obj;
  },

  fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.label = object.label ?? "";
    return message;
  }

};

function createBaseMsgInstantiateContract2(): MsgInstantiateContract2 {
  return {
    sender: "",
    codeId: Long.UZERO,
    msg: new Uint8Array(),
    funds: [],
    label: "",
    salt: new Uint8Array(),
    fixMsg: false
  };
}

export const MsgInstantiateContract2 = {
  encode(message: MsgInstantiateContract2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(16).uint64(message.codeId);
    }

    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.label !== "") {
      writer.uint32(42).string(message.label);
    }

    if (message.salt.length !== 0) {
      writer.uint32(50).bytes(message.salt);
    }

    if (message.fixMsg === true) {
      writer.uint32(56).bool(message.fixMsg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.codeId = (reader.uint64() as Long);
          break;

        case 3:
          message.msg = reader.bytes();
          break;

        case 4:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.label = reader.string();
          break;

        case 6:
          message.salt = reader.bytes();
          break;

        case 7:
          message.fixMsg = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContract2 {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      label: isSet(object.label) ? String(object.label) : "",
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fixMsg: isSet(object.fixMsg) ? Boolean(object.fixMsg) : false
    };
  },

  toJSON(message: MsgInstantiateContract2): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    message.label !== undefined && (obj.label = message.label);
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.fixMsg !== undefined && (obj.fixMsg = message.fixMsg);
    return obj;
  },

  fromPartial(object: Partial<MsgInstantiateContract2>): MsgInstantiateContract2 {
    const message = createBaseMsgInstantiateContract2();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.label = object.label ?? "";
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  }

};

function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}

export const MsgInstantiateContractResponse = {
  encode(message: MsgInstantiateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgInstantiateContract2Response(): MsgInstantiateContract2Response {
  return {
    address: "",
    data: new Uint8Array()
  };
}

export const MsgInstantiateContract2Response = {
  encode(message: MsgInstantiateContract2Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract2Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract2Response();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgInstantiateContract2Response {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgInstantiateContract2Response): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response {
    const message = createBaseMsgInstantiateContract2Response();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: [],
    dependencies: []
  };
}

export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.dependencies) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.contract = reader.string();
          break;

        case 3:
          message.msg = reader.bytes();
          break;

        case 4:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.dependencies.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    if (message.dependencies) {
      obj.dependencies = message.dependencies.map(e => e);
    } else {
      obj.dependencies = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.dependencies = object.dependencies?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgExecuteContractResponse = {
  encode(message: MsgExecuteContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgExecuteEth(): MsgExecuteEth {
  return {
    data: new Uint8Array(),
    sender: ""
  };
}

export const MsgExecuteEth = {
  encode(message: MsgExecuteEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteEth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteEth {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },

  toJSON(message: MsgExecuteEth): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteEth>): MsgExecuteEth {
    const message = createBaseMsgExecuteEth();
    message.data = object.data ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgExecuteEthResponse(): MsgExecuteEthResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgExecuteEthResponse = {
  encode(message: MsgExecuteEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteEthResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteEthResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteEthResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteEthResponse>): MsgExecuteEthResponse {
    const message = createBaseMsgExecuteEthResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseExtensionOptionEthereumTx(): ExtensionOptionEthereumTx {
  return {};
}

export const ExtensionOptionEthereumTx = {
  encode(_: ExtensionOptionEthereumTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionEthereumTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionEthereumTx();

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

  fromJSON(_: any): ExtensionOptionEthereumTx {
    return {};
  },

  toJSON(_: ExtensionOptionEthereumTx): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ExtensionOptionEthereumTx>): ExtensionOptionEthereumTx {
    const message = createBaseExtensionOptionEthereumTx();
    return message;
  }

};

function createBaseMsgExecuteWithOriginContract(): MsgExecuteWithOriginContract {
  return {
    origin: "",
    sender: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const MsgExecuteWithOriginContract = {
  encode(message: MsgExecuteWithOriginContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== "") {
      writer.uint32(10).string(message.origin);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteWithOriginContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteWithOriginContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.origin = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteWithOriginContract {
    return {
      origin: isSet(object.origin) ? String(object.origin) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExecuteWithOriginContract): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgExecuteWithOriginContract>): MsgExecuteWithOriginContract {
    const message = createBaseMsgExecuteWithOriginContract();
    message.origin = object.origin ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgExecuteDelegateContract(): MsgExecuteDelegateContract {
  return {
    origin: "",
    sender: "",
    caller: "",
    codeContract: "",
    storageContract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const MsgExecuteDelegateContract = {
  encode(message: MsgExecuteDelegateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== "") {
      writer.uint32(10).string(message.origin);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.caller !== "") {
      writer.uint32(26).string(message.caller);
    }

    if (message.codeContract !== "") {
      writer.uint32(34).string(message.codeContract);
    }

    if (message.storageContract !== "") {
      writer.uint32(42).string(message.storageContract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteDelegateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteDelegateContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.origin = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.caller = reader.string();
          break;

        case 4:
          message.codeContract = reader.string();
          break;

        case 5:
          message.storageContract = reader.string();
          break;

        case 6:
          message.msg = reader.bytes();
          break;

        case 7:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteDelegateContract {
    return {
      origin: isSet(object.origin) ? String(object.origin) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      caller: isSet(object.caller) ? String(object.caller) : "",
      codeContract: isSet(object.codeContract) ? String(object.codeContract) : "",
      storageContract: isSet(object.storageContract) ? String(object.storageContract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExecuteDelegateContract): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin);
    message.sender !== undefined && (obj.sender = message.sender);
    message.caller !== undefined && (obj.caller = message.caller);
    message.codeContract !== undefined && (obj.codeContract = message.codeContract);
    message.storageContract !== undefined && (obj.storageContract = message.storageContract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));

    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.funds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgExecuteDelegateContract>): MsgExecuteDelegateContract {
    const message = createBaseMsgExecuteDelegateContract();
    message.origin = object.origin ?? "";
    message.sender = object.sender ?? "";
    message.caller = object.caller ?? "";
    message.codeContract = object.codeContract ?? "";
    message.storageContract = object.storageContract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgExecuteDelegateContractResponse(): MsgExecuteDelegateContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgExecuteDelegateContractResponse = {
  encode(message: MsgExecuteDelegateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteDelegateContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteDelegateContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteDelegateContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteDelegateContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteDelegateContractResponse>): MsgExecuteDelegateContractResponse {
    const message = createBaseMsgExecuteDelegateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgCompileContract(): MsgCompileContract {
  return {
    authority: "",
    codeId: Long.UZERO,
    meteringOff: false
  };
}

export const MsgCompileContract = {
  encode(message: MsgCompileContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (!message.codeId.isZero()) {
      writer.uint32(16).uint64(message.codeId);
    }

    if (message.meteringOff === true) {
      writer.uint32(24).bool(message.meteringOff);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompileContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompileContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.codeId = (reader.uint64() as Long);
          break;

        case 3:
          message.meteringOff = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCompileContract {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      meteringOff: isSet(object.meteringOff) ? Boolean(object.meteringOff) : false
    };
  },

  toJSON(message: MsgCompileContract): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.meteringOff !== undefined && (obj.meteringOff = message.meteringOff);
    return obj;
  },

  fromPartial(object: Partial<MsgCompileContract>): MsgCompileContract {
    const message = createBaseMsgCompileContract();
    message.authority = object.authority ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.meteringOff = object.meteringOff ?? false;
    return message;
  }

};

function createBaseMsgCompileContractResponse(): MsgCompileContractResponse {
  return {};
}

export const MsgCompileContractResponse = {
  encode(_: MsgCompileContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompileContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompileContractResponse();

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

  fromJSON(_: any): MsgCompileContractResponse {
    return {};
  },

  toJSON(_: MsgCompileContractResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCompileContractResponse>): MsgCompileContractResponse {
    const message = createBaseMsgCompileContractResponse();
    return message;
  }

};