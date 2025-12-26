import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ExecTxResult, ExecTxResultSDKType } from "./tendermint";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface MsgExecuteCrossChainCallRequestIndexed {
  request?: MsgExecuteCrossChainCallRequest;
  index: number;
}
export interface MsgExecuteCrossChainCallRequestIndexedSDKType {
  request?: MsgExecuteCrossChainCallRequestSDKType;
  index: number;
}
export interface MsgExecuteCrossChainCallResponseIndexed {
  data?: MsgExecuteCrossChainCallResponse;
  index: number;
}
export interface MsgExecuteCrossChainCallResponseIndexedSDKType {
  data?: MsgExecuteCrossChainCallResponseSDKType;
  index: number;
}
export interface MsgExecuteCrossChainCallRequest {
  /** authority is the address that controls the module. */
  authority: string;
  /** sender is the contract that prepared the message */

  sender: string;
  /** from is the contract that sent the cross-chain message */

  from: string;
  /** to is the address of the smart contract on the current chain */

  to: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: Coin[];
  /**
   * Array of either hex-encoded contract addresses or contract labels
   * on which the execution of this message depends on
   */

  dependencies: string[];
  fromChainId: string;
  toChainId: string;
  isQuery: boolean;
  /** timeout in miliseconds for this cross-chain call */

  timeoutMs: Long;
}
export interface MsgExecuteCrossChainCallRequestSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  /** sender is the contract that prepared the message */

  sender: string;
  /** from is the contract that sent the cross-chain message */

  from: string;
  /** to is the address of the smart contract on the current chain */

  to: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: CoinSDKType[];
  /**
   * Array of either hex-encoded contract addresses or contract labels
   * on which the execution of this message depends on
   */

  dependencies: string[];
  from_chain_id: string;
  to_chain_id: string;
  is_query: boolean;
  /** timeout in miliseconds for this cross-chain call */

  timeout_ms: Long;
}
export interface MsgExecuteCrossChainCallResponse {
  data: Uint8Array;
  error: string;
}
export interface MsgExecuteCrossChainCallResponseSDKType {
  data: Uint8Array;
  error: string;
}
export interface MsgExecuteAtomicTxResponse {
  results: ExecTxResult[];
}
export interface MsgExecuteAtomicTxResponseSDKType {
  results: ExecTxResultSDKType[];
}
export interface MsgMultiChainWrap {
  multiChainId: string;
  sender: string;
  data?: Any;
}
export interface MsgMultiChainWrapSDKType {
  multi_chain_id: string;
  sender: string;
  data?: AnySDKType;
}
export interface MsgMultiChainWrapResponse {
  data: Uint8Array;
}
export interface MsgMultiChainWrapResponseSDKType {
  data: Uint8Array;
}
export interface MsgGrpcSendRequest {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  contract: string;
  ipAddress: string;
  data: Uint8Array;
  /** evm, json, protobuf // ? */

  encoding: string;
}
export interface MsgGrpcSendRequestSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  contract: string;
  ip_address: string;
  data: Uint8Array;
  /** evm, json, protobuf // ? */

  encoding: string;
}
export interface MsgGrpcSendRequestResponse {
  data: Uint8Array;
}
export interface MsgGrpcSendRequestResponseSDKType {
  data: Uint8Array;
}
export interface MsgGrpcReceiveRequest {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  contract: string;
  data: Uint8Array;
  /** evm, json, protobuf // ? */

  encoding: string;
}
export interface MsgGrpcReceiveRequestSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  contract: string;
  data: Uint8Array;
  /** evm, json, protobuf // ? */

  encoding: string;
}
export interface MsgGrpcReceiveRequestResponse {
  data: Uint8Array;
}
export interface MsgGrpcReceiveRequestResponseSDKType {
  data: Uint8Array;
}
/** MsgStartTimeoutRequest */

export interface MsgStartTimeoutRequest {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  delay: Long;
  args: Uint8Array;
  id: string;
}
/** MsgStartTimeoutRequest */

export interface MsgStartTimeoutRequestSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  delay: Long;
  args: Uint8Array;
  id: string;
}
/** MsgStartTimeoutResponse */

export interface MsgStartTimeoutResponse {}
/** MsgStartTimeoutResponse */

export interface MsgStartTimeoutResponseSDKType {}
/** MsgCancelTimeoutRequest */

export interface MsgCancelTimeoutRequest {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  id: string;
}
/** MsgCancelTimeoutRequest */

export interface MsgCancelTimeoutRequestSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  id: string;
}
/** MsgStartTimeoutResponse */

export interface MsgCancelTimeoutResponse {}
/** MsgStartTimeoutResponse */

export interface MsgCancelTimeoutResponseSDKType {}
/** MsgStartBackgroundProcessRequest */

export interface MsgStartBackgroundProcessRequest {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  args: Uint8Array;
}
/** MsgStartBackgroundProcessRequest */

export interface MsgStartBackgroundProcessRequestSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  args: Uint8Array;
}
/** MsgStartBackgroundProcessResponse */

export interface MsgStartBackgroundProcessResponse {}
/** MsgStartBackgroundProcessResponse */

export interface MsgStartBackgroundProcessResponseSDKType {}
/** ExecuteContract */

export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address or role of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
}
/** ExecuteContract */

export interface MsgExecuteContractSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address or role of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract */

  msg: Uint8Array;
}
/** ExecuteContractResponse */

export interface MsgExecuteContractResponse {
  data: Uint8Array;
}
/** ExecuteContractResponse */

export interface MsgExecuteContractResponseSDKType {
  data: Uint8Array;
}
/** MsgReentry */

export interface MsgReentry {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  entryPoint: string;
  msg: Uint8Array;
}
/** MsgReentry */

export interface MsgReentrySDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  entry_point: string;
  msg: Uint8Array;
}
/** MsgReentryResponse */

export interface MsgReentryResponse {
  data: Uint8Array;
}
/** MsgReentryResponse */

export interface MsgReentryResponseSDKType {
  data: Uint8Array;
}
/** MsgReentryWithGoRoutine */

export interface MsgReentryWithGoRoutine {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  entryPoint: string;
  msg: Uint8Array;
}
/** MsgReentryWithGoRoutine */

export interface MsgReentryWithGoRoutineSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  /** contract address */

  contract: string;
  entry_point: string;
  msg: Uint8Array;
}
/** MsgReentryWithGoRoutineResponse */

export interface MsgReentryWithGoRoutineResponse {
  data: Uint8Array;
}
/** MsgReentryWithGoRoutineResponse */

export interface MsgReentryWithGoRoutineResponseSDKType {
  data: Uint8Array;
}
/** QueryContract */

export interface MsgQueryContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Address is the address of the smart contract */

  contract: string;
  msg: Uint8Array;
}
/** QueryContract */

export interface MsgQueryContractSDKType {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Address is the address of the smart contract */

  contract: string;
  msg: Uint8Array;
}
/** QueryContractResponse */

export interface MsgQueryContractResponse {
  data: Uint8Array;
}
/** QueryContractResponse */

export interface MsgQueryContractResponseSDKType {
  data: Uint8Array;
}
export interface MsgP2PReceiveMessageRequest {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  contract: string;
  data: Uint8Array;
}
export interface MsgP2PReceiveMessageRequestSDKType {
  /** authority is the address that controls the module. */
  authority: string;
  sender: string;
  contract: string;
  data: Uint8Array;
}
export interface MsgP2PReceiveMessageResponse {}
export interface MsgP2PReceiveMessageResponseSDKType {}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */

export interface ExtensionOptionMultiChainTx {
  /** option (gogoproto.goproto_getters) = false; */
  chainId: string;
  /** index of this transaction in the atomic set */

  index: number;
  /** total transactions in the atomic set */

  txCount: number;
}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */

export interface ExtensionOptionMultiChainTxSDKType {
  /** option (gogoproto.goproto_getters) = false; */
  chain_id: string;
  /** index of this transaction in the atomic set */

  index: number;
  /** total transactions in the atomic set */

  tx_count: number;
}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */

export interface ExtensionOptionAtomicMultiChainTx {
  leaderChainId: string;
  chainIds: string[];
}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */

export interface ExtensionOptionAtomicMultiChainTxSDKType {
  leader_chain_id: string;
  chain_ids: string[];
}
export interface WrappedResponse {
  data: Uint8Array;
  error: string;
}
export interface WrappedResponseSDKType {
  data: Uint8Array;
  error: string;
}
export interface CrossChainCallInfo {
  request?: MsgExecuteCrossChainCallRequest;
  response?: WrappedResponse;
}
export interface CrossChainCallInfoSDKType {
  request?: MsgExecuteCrossChainCallRequestSDKType;
  response?: WrappedResponseSDKType;
}
export interface SubTxCrossChainCallInfo {
  calls: CrossChainCallInfo[];
}
export interface SubTxCrossChainCallInfoSDKType {
  calls: CrossChainCallInfoSDKType[];
}
export interface AtomicTxCrossChainCallInfo {
  subtx: SubTxCrossChainCallInfo[];
}
export interface AtomicTxCrossChainCallInfoSDKType {
  subtx: SubTxCrossChainCallInfoSDKType[];
}

function createBaseMsgExecuteCrossChainCallRequestIndexed(): MsgExecuteCrossChainCallRequestIndexed {
  return {
    request: undefined,
    index: 0
  };
}

export const MsgExecuteCrossChainCallRequestIndexed = {
  encode(message: MsgExecuteCrossChainCallRequestIndexed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      MsgExecuteCrossChainCallRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }

    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallRequestIndexed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteCrossChainCallRequestIndexed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.request = MsgExecuteCrossChainCallRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.index = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteCrossChainCallRequestIndexed {
    return {
      request: isSet(object.request) ? MsgExecuteCrossChainCallRequest.fromJSON(object.request) : undefined,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },

  toJSON(message: MsgExecuteCrossChainCallRequestIndexed): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? MsgExecuteCrossChainCallRequest.toJSON(message.request) : undefined);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteCrossChainCallRequestIndexed>): MsgExecuteCrossChainCallRequestIndexed {
    const message = createBaseMsgExecuteCrossChainCallRequestIndexed();
    message.request = object.request !== undefined && object.request !== null ? MsgExecuteCrossChainCallRequest.fromPartial(object.request) : undefined;
    message.index = object.index ?? 0;
    return message;
  }

};

function createBaseMsgExecuteCrossChainCallResponseIndexed(): MsgExecuteCrossChainCallResponseIndexed {
  return {
    data: undefined,
    index: 0
  };
}

export const MsgExecuteCrossChainCallResponseIndexed = {
  encode(message: MsgExecuteCrossChainCallResponseIndexed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      MsgExecuteCrossChainCallResponse.encode(message.data, writer.uint32(10).fork()).ldelim();
    }

    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallResponseIndexed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteCrossChainCallResponseIndexed();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = MsgExecuteCrossChainCallResponse.decode(reader, reader.uint32());
          break;

        case 2:
          message.index = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteCrossChainCallResponseIndexed {
    return {
      data: isSet(object.data) ? MsgExecuteCrossChainCallResponse.fromJSON(object.data) : undefined,
      index: isSet(object.index) ? Number(object.index) : 0
    };
  },

  toJSON(message: MsgExecuteCrossChainCallResponseIndexed): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? MsgExecuteCrossChainCallResponse.toJSON(message.data) : undefined);
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteCrossChainCallResponseIndexed>): MsgExecuteCrossChainCallResponseIndexed {
    const message = createBaseMsgExecuteCrossChainCallResponseIndexed();
    message.data = object.data !== undefined && object.data !== null ? MsgExecuteCrossChainCallResponse.fromPartial(object.data) : undefined;
    message.index = object.index ?? 0;
    return message;
  }

};

function createBaseMsgExecuteCrossChainCallRequest(): MsgExecuteCrossChainCallRequest {
  return {
    authority: "",
    sender: "",
    from: "",
    to: "",
    msg: new Uint8Array(),
    funds: [],
    dependencies: [],
    fromChainId: "",
    toChainId: "",
    isQuery: false,
    timeoutMs: Long.UZERO
  };
}

export const MsgExecuteCrossChainCallRequest = {
  encode(message: MsgExecuteCrossChainCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.dependencies) {
      writer.uint32(58).string(v!);
    }

    if (message.fromChainId !== "") {
      writer.uint32(66).string(message.fromChainId);
    }

    if (message.toChainId !== "") {
      writer.uint32(74).string(message.toChainId);
    }

    if (message.isQuery === true) {
      writer.uint32(80).bool(message.isQuery);
    }

    if (!message.timeoutMs.isZero()) {
      writer.uint32(88).uint64(message.timeoutMs);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteCrossChainCallRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.from = reader.string();
          break;

        case 4:
          message.to = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.dependencies.push(reader.string());
          break;

        case 8:
          message.fromChainId = reader.string();
          break;

        case 9:
          message.toChainId = reader.string();
          break;

        case 10:
          message.isQuery = reader.bool();
          break;

        case 11:
          message.timeoutMs = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteCrossChainCallRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => String(e)) : [],
      fromChainId: isSet(object.fromChainId) ? String(object.fromChainId) : "",
      toChainId: isSet(object.toChainId) ? String(object.toChainId) : "",
      isQuery: isSet(object.isQuery) ? Boolean(object.isQuery) : false,
      timeoutMs: isSet(object.timeoutMs) ? Long.fromValue(object.timeoutMs) : Long.UZERO
    };
  },

  toJSON(message: MsgExecuteCrossChainCallRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
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

    message.fromChainId !== undefined && (obj.fromChainId = message.fromChainId);
    message.toChainId !== undefined && (obj.toChainId = message.toChainId);
    message.isQuery !== undefined && (obj.isQuery = message.isQuery);
    message.timeoutMs !== undefined && (obj.timeoutMs = (message.timeoutMs || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteCrossChainCallRequest>): MsgExecuteCrossChainCallRequest {
    const message = createBaseMsgExecuteCrossChainCallRequest();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.dependencies = object.dependencies?.map(e => e) || [];
    message.fromChainId = object.fromChainId ?? "";
    message.toChainId = object.toChainId ?? "";
    message.isQuery = object.isQuery ?? false;
    message.timeoutMs = object.timeoutMs !== undefined && object.timeoutMs !== null ? Long.fromValue(object.timeoutMs) : Long.UZERO;
    return message;
  }

};

function createBaseMsgExecuteCrossChainCallResponse(): MsgExecuteCrossChainCallResponse {
  return {
    data: new Uint8Array(),
    error: ""
  };
}

export const MsgExecuteCrossChainCallResponse = {
  encode(message: MsgExecuteCrossChainCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteCrossChainCallResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteCrossChainCallResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      error: isSet(object.error) ? String(object.error) : ""
    };
  },

  toJSON(message: MsgExecuteCrossChainCallResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteCrossChainCallResponse>): MsgExecuteCrossChainCallResponse {
    const message = createBaseMsgExecuteCrossChainCallResponse();
    message.data = object.data ?? new Uint8Array();
    message.error = object.error ?? "";
    return message;
  }

};

function createBaseMsgExecuteAtomicTxResponse(): MsgExecuteAtomicTxResponse {
  return {
    results: []
  };
}

export const MsgExecuteAtomicTxResponse = {
  encode(message: MsgExecuteAtomicTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.results) {
      ExecTxResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteAtomicTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteAtomicTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.results.push(ExecTxResult.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteAtomicTxResponse {
    return {
      results: Array.isArray(object?.results) ? object.results.map((e: any) => ExecTxResult.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExecuteAtomicTxResponse): unknown {
    const obj: any = {};

    if (message.results) {
      obj.results = message.results.map(e => e ? ExecTxResult.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgExecuteAtomicTxResponse>): MsgExecuteAtomicTxResponse {
    const message = createBaseMsgExecuteAtomicTxResponse();
    message.results = object.results?.map(e => ExecTxResult.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgMultiChainWrap(): MsgMultiChainWrap {
  return {
    multiChainId: "",
    sender: "",
    data: undefined
  };
}

export const MsgMultiChainWrap = {
  encode(message: MsgMultiChainWrap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.multiChainId !== "") {
      writer.uint32(10).string(message.multiChainId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiChainWrap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiChainWrap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.multiChainId = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.data = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgMultiChainWrap {
    return {
      multiChainId: isSet(object.multiChainId) ? String(object.multiChainId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined
    };
  },

  toJSON(message: MsgMultiChainWrap): unknown {
    const obj: any = {};
    message.multiChainId !== undefined && (obj.multiChainId = message.multiChainId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgMultiChainWrap>): MsgMultiChainWrap {
    const message = createBaseMsgMultiChainWrap();
    message.multiChainId = object.multiChainId ?? "";
    message.sender = object.sender ?? "";
    message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
    return message;
  }

};

function createBaseMsgMultiChainWrapResponse(): MsgMultiChainWrapResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgMultiChainWrapResponse = {
  encode(message: MsgMultiChainWrapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiChainWrapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiChainWrapResponse();

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

  fromJSON(object: any): MsgMultiChainWrapResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgMultiChainWrapResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgMultiChainWrapResponse>): MsgMultiChainWrapResponse {
    const message = createBaseMsgMultiChainWrapResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgGrpcSendRequest(): MsgGrpcSendRequest {
  return {
    authority: "",
    sender: "",
    contract: "",
    ipAddress: "",
    data: new Uint8Array(),
    encoding: ""
  };
}

export const MsgGrpcSendRequest = {
  encode(message: MsgGrpcSendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.ipAddress !== "") {
      writer.uint32(34).string(message.ipAddress);
    }

    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }

    if (message.encoding !== "") {
      writer.uint32(50).string(message.encoding);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcSendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrpcSendRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.ipAddress = reader.string();
          break;

        case 5:
          message.data = reader.bytes();
          break;

        case 6:
          message.encoding = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGrpcSendRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      encoding: isSet(object.encoding) ? String(object.encoding) : ""
    };
  },

  toJSON(message: MsgGrpcSendRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },

  fromPartial(object: Partial<MsgGrpcSendRequest>): MsgGrpcSendRequest {
    const message = createBaseMsgGrpcSendRequest();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.ipAddress = object.ipAddress ?? "";
    message.data = object.data ?? new Uint8Array();
    message.encoding = object.encoding ?? "";
    return message;
  }

};

function createBaseMsgGrpcSendRequestResponse(): MsgGrpcSendRequestResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgGrpcSendRequestResponse = {
  encode(message: MsgGrpcSendRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcSendRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrpcSendRequestResponse();

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

  fromJSON(object: any): MsgGrpcSendRequestResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgGrpcSendRequestResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgGrpcSendRequestResponse>): MsgGrpcSendRequestResponse {
    const message = createBaseMsgGrpcSendRequestResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgGrpcReceiveRequest(): MsgGrpcReceiveRequest {
  return {
    authority: "",
    sender: "",
    contract: "",
    data: new Uint8Array(),
    encoding: ""
  };
}

export const MsgGrpcReceiveRequest = {
  encode(message: MsgGrpcReceiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }

    if (message.encoding !== "") {
      writer.uint32(42).string(message.encoding);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcReceiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrpcReceiveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.data = reader.bytes();
          break;

        case 5:
          message.encoding = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgGrpcReceiveRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      encoding: isSet(object.encoding) ? String(object.encoding) : ""
    };
  },

  toJSON(message: MsgGrpcReceiveRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.encoding !== undefined && (obj.encoding = message.encoding);
    return obj;
  },

  fromPartial(object: Partial<MsgGrpcReceiveRequest>): MsgGrpcReceiveRequest {
    const message = createBaseMsgGrpcReceiveRequest();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.data = object.data ?? new Uint8Array();
    message.encoding = object.encoding ?? "";
    return message;
  }

};

function createBaseMsgGrpcReceiveRequestResponse(): MsgGrpcReceiveRequestResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgGrpcReceiveRequestResponse = {
  encode(message: MsgGrpcReceiveRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcReceiveRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrpcReceiveRequestResponse();

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

  fromJSON(object: any): MsgGrpcReceiveRequestResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgGrpcReceiveRequestResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgGrpcReceiveRequestResponse>): MsgGrpcReceiveRequestResponse {
    const message = createBaseMsgGrpcReceiveRequestResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgStartTimeoutRequest(): MsgStartTimeoutRequest {
  return {
    authority: "",
    sender: "",
    contract: "",
    delay: Long.ZERO,
    args: new Uint8Array(),
    id: ""
  };
}

export const MsgStartTimeoutRequest = {
  encode(message: MsgStartTimeoutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (!message.delay.isZero()) {
      writer.uint32(32).int64(message.delay);
    }

    if (message.args.length !== 0) {
      writer.uint32(42).bytes(message.args);
    }

    if (message.id !== "") {
      writer.uint32(50).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartTimeoutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartTimeoutRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.delay = (reader.int64() as Long);
          break;

        case 5:
          message.args = reader.bytes();
          break;

        case 6:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStartTimeoutRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      delay: isSet(object.delay) ? Long.fromValue(object.delay) : Long.ZERO,
      args: isSet(object.args) ? bytesFromBase64(object.args) : new Uint8Array(),
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: MsgStartTimeoutRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.delay !== undefined && (obj.delay = (message.delay || Long.ZERO).toString());
    message.args !== undefined && (obj.args = base64FromBytes(message.args !== undefined ? message.args : new Uint8Array()));
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<MsgStartTimeoutRequest>): MsgStartTimeoutRequest {
    const message = createBaseMsgStartTimeoutRequest();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.delay = object.delay !== undefined && object.delay !== null ? Long.fromValue(object.delay) : Long.ZERO;
    message.args = object.args ?? new Uint8Array();
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseMsgStartTimeoutResponse(): MsgStartTimeoutResponse {
  return {};
}

export const MsgStartTimeoutResponse = {
  encode(_: MsgStartTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartTimeoutResponse();

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

  fromJSON(_: any): MsgStartTimeoutResponse {
    return {};
  },

  toJSON(_: MsgStartTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgStartTimeoutResponse>): MsgStartTimeoutResponse {
    const message = createBaseMsgStartTimeoutResponse();
    return message;
  }

};

function createBaseMsgCancelTimeoutRequest(): MsgCancelTimeoutRequest {
  return {
    authority: "",
    sender: "",
    id: ""
  };
}

export const MsgCancelTimeoutRequest = {
  encode(message: MsgCancelTimeoutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTimeoutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTimeoutRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelTimeoutRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },

  toJSON(message: MsgCancelTimeoutRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: Partial<MsgCancelTimeoutRequest>): MsgCancelTimeoutRequest {
    const message = createBaseMsgCancelTimeoutRequest();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    return message;
  }

};

function createBaseMsgCancelTimeoutResponse(): MsgCancelTimeoutResponse {
  return {};
}

export const MsgCancelTimeoutResponse = {
  encode(_: MsgCancelTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTimeoutResponse();

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

  fromJSON(_: any): MsgCancelTimeoutResponse {
    return {};
  },

  toJSON(_: MsgCancelTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgCancelTimeoutResponse>): MsgCancelTimeoutResponse {
    const message = createBaseMsgCancelTimeoutResponse();
    return message;
  }

};

function createBaseMsgStartBackgroundProcessRequest(): MsgStartBackgroundProcessRequest {
  return {
    authority: "",
    sender: "",
    contract: "",
    args: new Uint8Array()
  };
}

export const MsgStartBackgroundProcessRequest = {
  encode(message: MsgStartBackgroundProcessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.args.length !== 0) {
      writer.uint32(34).bytes(message.args);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartBackgroundProcessRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartBackgroundProcessRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.args = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgStartBackgroundProcessRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      args: isSet(object.args) ? bytesFromBase64(object.args) : new Uint8Array()
    };
  },

  toJSON(message: MsgStartBackgroundProcessRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.args !== undefined && (obj.args = base64FromBytes(message.args !== undefined ? message.args : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgStartBackgroundProcessRequest>): MsgStartBackgroundProcessRequest {
    const message = createBaseMsgStartBackgroundProcessRequest();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.args = object.args ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgStartBackgroundProcessResponse(): MsgStartBackgroundProcessResponse {
  return {};
}

export const MsgStartBackgroundProcessResponse = {
  encode(_: MsgStartBackgroundProcessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartBackgroundProcessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartBackgroundProcessResponse();

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

  fromJSON(_: any): MsgStartBackgroundProcessResponse {
    return {};
  },

  toJSON(_: MsgStartBackgroundProcessResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgStartBackgroundProcessResponse>): MsgStartBackgroundProcessResponse {
    const message = createBaseMsgStartBackgroundProcessResponse();
    return message;
  }

};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array()
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
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
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

function createBaseMsgReentry(): MsgReentry {
  return {
    authority: "",
    sender: "",
    contract: "",
    entryPoint: "",
    msg: new Uint8Array()
  };
}

export const MsgReentry = {
  encode(message: MsgReentry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.entryPoint !== "") {
      writer.uint32(34).string(message.entryPoint);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReentry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.entryPoint = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgReentry {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      entryPoint: isSet(object.entryPoint) ? String(object.entryPoint) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: MsgReentry): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.entryPoint !== undefined && (obj.entryPoint = message.entryPoint);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgReentry>): MsgReentry {
    const message = createBaseMsgReentry();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.entryPoint = object.entryPoint ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgReentryResponse(): MsgReentryResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgReentryResponse = {
  encode(message: MsgReentryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReentryResponse();

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

  fromJSON(object: any): MsgReentryResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgReentryResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgReentryResponse>): MsgReentryResponse {
    const message = createBaseMsgReentryResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgReentryWithGoRoutine(): MsgReentryWithGoRoutine {
  return {
    authority: "",
    sender: "",
    contract: "",
    entryPoint: "",
    msg: new Uint8Array()
  };
}

export const MsgReentryWithGoRoutine = {
  encode(message: MsgReentryWithGoRoutine, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.entryPoint !== "") {
      writer.uint32(34).string(message.entryPoint);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentryWithGoRoutine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReentryWithGoRoutine();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.entryPoint = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgReentryWithGoRoutine {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      entryPoint: isSet(object.entryPoint) ? String(object.entryPoint) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: MsgReentryWithGoRoutine): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.entryPoint !== undefined && (obj.entryPoint = message.entryPoint);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgReentryWithGoRoutine>): MsgReentryWithGoRoutine {
    const message = createBaseMsgReentryWithGoRoutine();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.entryPoint = object.entryPoint ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgReentryWithGoRoutineResponse(): MsgReentryWithGoRoutineResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgReentryWithGoRoutineResponse = {
  encode(message: MsgReentryWithGoRoutineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentryWithGoRoutineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReentryWithGoRoutineResponse();

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

  fromJSON(object: any): MsgReentryWithGoRoutineResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgReentryWithGoRoutineResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgReentryWithGoRoutineResponse>): MsgReentryWithGoRoutineResponse {
    const message = createBaseMsgReentryWithGoRoutineResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgQueryContract(): MsgQueryContract {
  return {
    sender: "",
    contract: "",
    msg: new Uint8Array()
  };
}

export const MsgQueryContract = {
  encode(message: MsgQueryContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgQueryContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgQueryContract();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgQueryContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },

  toJSON(message: MsgQueryContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgQueryContract>): MsgQueryContract {
    const message = createBaseMsgQueryContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgQueryContractResponse(): MsgQueryContractResponse {
  return {
    data: new Uint8Array()
  };
}

export const MsgQueryContractResponse = {
  encode(message: MsgQueryContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgQueryContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgQueryContractResponse();

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

  fromJSON(object: any): MsgQueryContractResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgQueryContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgQueryContractResponse>): MsgQueryContractResponse {
    const message = createBaseMsgQueryContractResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgP2PReceiveMessageRequest(): MsgP2PReceiveMessageRequest {
  return {
    authority: "",
    sender: "",
    contract: "",
    data: new Uint8Array()
  };
}

export const MsgP2PReceiveMessageRequest = {
  encode(message: MsgP2PReceiveMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgP2PReceiveMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgP2PReceiveMessageRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgP2PReceiveMessageRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgP2PReceiveMessageRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgP2PReceiveMessageRequest>): MsgP2PReceiveMessageRequest {
    const message = createBaseMsgP2PReceiveMessageRequest();
    message.authority = object.authority ?? "";
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgP2PReceiveMessageResponse(): MsgP2PReceiveMessageResponse {
  return {};
}

export const MsgP2PReceiveMessageResponse = {
  encode(_: MsgP2PReceiveMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgP2PReceiveMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgP2PReceiveMessageResponse();

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

  fromJSON(_: any): MsgP2PReceiveMessageResponse {
    return {};
  },

  toJSON(_: MsgP2PReceiveMessageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgP2PReceiveMessageResponse>): MsgP2PReceiveMessageResponse {
    const message = createBaseMsgP2PReceiveMessageResponse();
    return message;
  }

};

function createBaseExtensionOptionMultiChainTx(): ExtensionOptionMultiChainTx {
  return {
    chainId: "",
    index: 0,
    txCount: 0
  };
}

export const ExtensionOptionMultiChainTx = {
  encode(message: ExtensionOptionMultiChainTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }

    if (message.txCount !== 0) {
      writer.uint32(24).int32(message.txCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionMultiChainTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionMultiChainTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.index = reader.int32();
          break;

        case 3:
          message.txCount = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExtensionOptionMultiChainTx {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      index: isSet(object.index) ? Number(object.index) : 0,
      txCount: isSet(object.txCount) ? Number(object.txCount) : 0
    };
  },

  toJSON(message: ExtensionOptionMultiChainTx): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.txCount !== undefined && (obj.txCount = Math.round(message.txCount));
    return obj;
  },

  fromPartial(object: Partial<ExtensionOptionMultiChainTx>): ExtensionOptionMultiChainTx {
    const message = createBaseExtensionOptionMultiChainTx();
    message.chainId = object.chainId ?? "";
    message.index = object.index ?? 0;
    message.txCount = object.txCount ?? 0;
    return message;
  }

};

function createBaseExtensionOptionAtomicMultiChainTx(): ExtensionOptionAtomicMultiChainTx {
  return {
    leaderChainId: "",
    chainIds: []
  };
}

export const ExtensionOptionAtomicMultiChainTx = {
  encode(message: ExtensionOptionAtomicMultiChainTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaderChainId !== "") {
      writer.uint32(10).string(message.leaderChainId);
    }

    for (const v of message.chainIds) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionAtomicMultiChainTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionAtomicMultiChainTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.leaderChainId = reader.string();
          break;

        case 2:
          message.chainIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ExtensionOptionAtomicMultiChainTx {
    return {
      leaderChainId: isSet(object.leaderChainId) ? String(object.leaderChainId) : "",
      chainIds: Array.isArray(object?.chainIds) ? object.chainIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ExtensionOptionAtomicMultiChainTx): unknown {
    const obj: any = {};
    message.leaderChainId !== undefined && (obj.leaderChainId = message.leaderChainId);

    if (message.chainIds) {
      obj.chainIds = message.chainIds.map(e => e);
    } else {
      obj.chainIds = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ExtensionOptionAtomicMultiChainTx>): ExtensionOptionAtomicMultiChainTx {
    const message = createBaseExtensionOptionAtomicMultiChainTx();
    message.leaderChainId = object.leaderChainId ?? "";
    message.chainIds = object.chainIds?.map(e => e) || [];
    return message;
  }

};

function createBaseWrappedResponse(): WrappedResponse {
  return {
    data: new Uint8Array(),
    error: ""
  };
}

export const WrappedResponse = {
  encode(message: WrappedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WrappedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrappedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WrappedResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      error: isSet(object.error) ? String(object.error) : ""
    };
  },

  toJSON(message: WrappedResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: Partial<WrappedResponse>): WrappedResponse {
    const message = createBaseWrappedResponse();
    message.data = object.data ?? new Uint8Array();
    message.error = object.error ?? "";
    return message;
  }

};

function createBaseCrossChainCallInfo(): CrossChainCallInfo {
  return {
    request: undefined,
    response: undefined
  };
}

export const CrossChainCallInfo = {
  encode(message: CrossChainCallInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      MsgExecuteCrossChainCallRequest.encode(message.request, writer.uint32(10).fork()).ldelim();
    }

    if (message.response !== undefined) {
      WrappedResponse.encode(message.response, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainCallInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainCallInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.request = MsgExecuteCrossChainCallRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.response = WrappedResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CrossChainCallInfo {
    return {
      request: isSet(object.request) ? MsgExecuteCrossChainCallRequest.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? WrappedResponse.fromJSON(object.response) : undefined
    };
  },

  toJSON(message: CrossChainCallInfo): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? MsgExecuteCrossChainCallRequest.toJSON(message.request) : undefined);
    message.response !== undefined && (obj.response = message.response ? WrappedResponse.toJSON(message.response) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CrossChainCallInfo>): CrossChainCallInfo {
    const message = createBaseCrossChainCallInfo();
    message.request = object.request !== undefined && object.request !== null ? MsgExecuteCrossChainCallRequest.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? WrappedResponse.fromPartial(object.response) : undefined;
    return message;
  }

};

function createBaseSubTxCrossChainCallInfo(): SubTxCrossChainCallInfo {
  return {
    calls: []
  };
}

export const SubTxCrossChainCallInfo = {
  encode(message: SubTxCrossChainCallInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      CrossChainCallInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubTxCrossChainCallInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubTxCrossChainCallInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.calls.push(CrossChainCallInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubTxCrossChainCallInfo {
    return {
      calls: Array.isArray(object?.calls) ? object.calls.map((e: any) => CrossChainCallInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: SubTxCrossChainCallInfo): unknown {
    const obj: any = {};

    if (message.calls) {
      obj.calls = message.calls.map(e => e ? CrossChainCallInfo.toJSON(e) : undefined);
    } else {
      obj.calls = [];
    }

    return obj;
  },

  fromPartial(object: Partial<SubTxCrossChainCallInfo>): SubTxCrossChainCallInfo {
    const message = createBaseSubTxCrossChainCallInfo();
    message.calls = object.calls?.map(e => CrossChainCallInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAtomicTxCrossChainCallInfo(): AtomicTxCrossChainCallInfo {
  return {
    subtx: []
  };
}

export const AtomicTxCrossChainCallInfo = {
  encode(message: AtomicTxCrossChainCallInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subtx) {
      SubTxCrossChainCallInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AtomicTxCrossChainCallInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAtomicTxCrossChainCallInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subtx.push(SubTxCrossChainCallInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AtomicTxCrossChainCallInfo {
    return {
      subtx: Array.isArray(object?.subtx) ? object.subtx.map((e: any) => SubTxCrossChainCallInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: AtomicTxCrossChainCallInfo): unknown {
    const obj: any = {};

    if (message.subtx) {
      obj.subtx = message.subtx.map(e => e ? SubTxCrossChainCallInfo.toJSON(e) : undefined);
    } else {
      obj.subtx = [];
    }

    return obj;
  },

  fromPartial(object: Partial<AtomicTxCrossChainCallInfo>): AtomicTxCrossChainCallInfo {
    const message = createBaseAtomicTxCrossChainCallInfo();
    message.subtx = object.subtx?.map(e => SubTxCrossChainCallInfo.fromPartial(e)) || [];
    return message;
  }

};