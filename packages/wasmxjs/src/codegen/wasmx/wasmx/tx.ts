import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../helpers";
/** MsgStoreCode submit Wasm code to the system */

export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasmByteCode: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */

export interface MsgStoreCodeSDKType {
  sender: string;
  wasm_byte_code: Uint8Array;
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
  code_id: Long;
  checksum: Uint8Array;
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
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */

export interface MsgInstantiateContractSDKType {
  sender: string;
  code_id: Long;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
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
  /** Label is optional metadata to be stored with a contract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
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
  sender: string;
  code_id: Long;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
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
  address: string;
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
  address: string;
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
  sender: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  dependencies: string[];
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */

export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}
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
  origin: string;
  sender: string;
  contract: string;
  msg: Uint8Array;
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
  origin: string;
  sender: string;
  caller: string;
  code_contract: string;
  storage_contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/** MsgExecuteDelegateContractResponse returns execution result data. */

export interface MsgExecuteDelegateContractResponse {
  /** Data contains bytes to returned from the contract */
  data: Uint8Array;
}
/** MsgExecuteDelegateContractResponse returns execution result data. */

export interface MsgExecuteDelegateContractResponseSDKType {
  data: Uint8Array;
}

function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    sender: "",
    wasmByteCode: new Uint8Array()
  };
}

export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
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
          message.wasmByteCode = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
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

  fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return {
    sender: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
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

    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
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
          message.label = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgInstantiateContract>): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgInstantiateContract2(): MsgInstantiateContract2 {
  return {
    sender: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: [],
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

    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.label = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<MsgInstantiateContract2>): MsgInstantiateContract2 {
    const message = createBaseMsgInstantiateContract2();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
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

  fromPartial(object: DeepPartial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse {
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

  fromPartial(object: DeepPartial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response {
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

  fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract {
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

  fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array();
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

  fromPartial(object: DeepPartial<MsgExecuteWithOriginContract>): MsgExecuteWithOriginContract {
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

  fromPartial(object: DeepPartial<MsgExecuteDelegateContract>): MsgExecuteDelegateContract {
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

  fromPartial(object: DeepPartial<MsgExecuteDelegateContractResponse>): MsgExecuteDelegateContractResponse {
    const message = createBaseMsgExecuteDelegateContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};