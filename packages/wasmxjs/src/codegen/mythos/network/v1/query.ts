import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * QueryMultiChainRequest is the request type for the
 * Query/QueryMultiChain RPC method
 */

export interface QueryMultiChainRequest {
  multiChainId: string;
  queryData: Uint8Array;
}
/**
 * QueryMultiChainRequest is the request type for the
 * Query/QueryMultiChain RPC method
 */

export interface QueryMultiChainRequestSDKType {
  multi_chain_id: string;
  query_data: Uint8Array;
}
/** QueryMultiChainResponse is the response type for the */

export interface QueryMultiChainResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/** QueryMultiChainResponse is the response type for the */

export interface QueryMultiChainResponseSDKType {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/**
 * QueryContractCallRequest is the request type for the
 * Query/ContractCall RPC method
 */

export interface QueryContractCallRequest {
  multiChainId: string;
  /** Sender is the that actor that signed the messages */

  sender: string;
  /** Address is the address of the smart contract */

  address: string;
  queryData: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: Coin[];
  /**
   * Array of either hex-encoded contract addresses or contract labels
   * on which the execution of this message depends on
   */

  dependencies: string[];
}
/**
 * QueryContractCallRequest is the request type for the
 * Query/ContractCall RPC method
 */

export interface QueryContractCallRequestSDKType {
  multi_chain_id: string;
  /** Sender is the that actor that signed the messages */

  sender: string;
  /** Address is the address of the smart contract */

  address: string;
  query_data: Uint8Array;
  /** Funds coins that are transferred to the contract on execution */

  funds: CoinSDKType[];
  /**
   * Array of either hex-encoded contract addresses or contract labels
   * on which the execution of this message depends on
   */

  dependencies: string[];
}
/**
 * QueryContractCallResponse is the response type for the
 * Query/ContractCall RPC method
 */

export interface QueryContractCallResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/**
 * QueryContractCallResponse is the response type for the
 * Query/ContractCall RPC method
 */

export interface QueryContractCallResponseSDKType {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}

function createBaseQueryMultiChainRequest(): QueryMultiChainRequest {
  return {
    multiChainId: "",
    queryData: new Uint8Array()
  };
}

export const QueryMultiChainRequest = {
  encode(message: QueryMultiChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.multiChainId !== "") {
      writer.uint32(10).string(message.multiChainId);
    }

    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMultiChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMultiChainRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.multiChainId = reader.string();
          break;

        case 2:
          message.queryData = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMultiChainRequest {
    return {
      multiChainId: isSet(object.multiChainId) ? String(object.multiChainId) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    };
  },

  toJSON(message: QueryMultiChainRequest): unknown {
    const obj: any = {};
    message.multiChainId !== undefined && (obj.multiChainId = message.multiChainId);
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryMultiChainRequest>): QueryMultiChainRequest {
    const message = createBaseQueryMultiChainRequest();
    message.multiChainId = object.multiChainId ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryMultiChainResponse(): QueryMultiChainResponse {
  return {
    data: new Uint8Array()
  };
}

export const QueryMultiChainResponse = {
  encode(message: QueryMultiChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMultiChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMultiChainResponse();

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

  fromJSON(object: any): QueryMultiChainResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryMultiChainResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryMultiChainResponse>): QueryMultiChainResponse {
    const message = createBaseQueryMultiChainResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryContractCallRequest(): QueryContractCallRequest {
  return {
    multiChainId: "",
    sender: "",
    address: "",
    queryData: new Uint8Array(),
    funds: [],
    dependencies: []
  };
}

export const QueryContractCallRequest = {
  encode(message: QueryContractCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.multiChainId !== "") {
      writer.uint32(10).string(message.multiChainId);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (message.queryData.length !== 0) {
      writer.uint32(34).bytes(message.queryData);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.dependencies) {
      writer.uint32(50).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractCallRequest();

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
          message.address = reader.string();
          break;

        case 4:
          message.queryData = reader.bytes();
          break;

        case 5:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.dependencies.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractCallRequest {
    return {
      multiChainId: isSet(object.multiChainId) ? String(object.multiChainId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryContractCallRequest): unknown {
    const obj: any = {};
    message.multiChainId !== undefined && (obj.multiChainId = message.multiChainId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));

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

  fromPartial(object: Partial<QueryContractCallRequest>): QueryContractCallRequest {
    const message = createBaseQueryContractCallRequest();
    message.multiChainId = object.multiChainId ?? "";
    message.sender = object.sender ?? "";
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.dependencies = object.dependencies?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryContractCallResponse(): QueryContractCallResponse {
  return {
    data: new Uint8Array()
  };
}

export const QueryContractCallResponse = {
  encode(message: QueryContractCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractCallResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractCallResponse();

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

  fromJSON(object: any): QueryContractCallResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryContractCallResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryContractCallResponse>): QueryContractCallResponse {
    const message = createBaseQueryContractCallResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};