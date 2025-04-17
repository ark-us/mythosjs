import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ContractInfoPB, ContractInfoPBSDKType, ContractStoragePB, ContractStoragePBSDKType, CodeInfoPB, CodeInfoPBSDKType } from "./contract";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */

export interface QueryContractInfoRequest {
  /** address is the address of the contract to query */
  address: string;
}
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 */

export interface QueryContractInfoRequestSDKType {
  /** address is the address of the contract to query */
  address: string;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */

export interface QueryContractInfoResponse {
  /** address is the address of the contract */
  address: string;
  contractInfo?: ContractInfoPB;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */

export interface QueryContractInfoResponseSDKType {
  /** address is the address of the contract */
  address: string;
  contract_info?: ContractInfoPBSDKType;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */

export interface QueryContractsByCodeRequest {
  /**
   * grpc-gateway_out does not support Go style CodID
   * pagination defines an optional pagination for the request.
   */
  codeId: Long;
  pagination?: PageRequest;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 */

export interface QueryContractsByCodeRequestSDKType {
  /**
   * grpc-gateway_out does not support Go style CodID
   * pagination defines an optional pagination for the request.
   */
  code_id: Long;
  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */

export interface QueryContractsByCodeResponse {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 */

export interface QueryContractsByCodeResponseSDKType {
  /** contracts are a set of contract addresses */
  contracts: string[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */

export interface QueryAllContractStateRequest {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 */

export interface QueryAllContractStateRequestSDKType {
  /** address is the address of the contract */
  address: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */

export interface QueryAllContractStateResponse {
  items: ContractStoragePB[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */

export interface QueryAllContractStateResponseSDKType {
  items: ContractStoragePBSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */

export interface QueryRawContractStateRequest {
  /** address is the address of the contract */
  address: string;
  queryData: Uint8Array;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 */

export interface QueryRawContractStateRequestSDKType {
  /** address is the address of the contract */
  address: string;
  query_data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */

export interface QueryRawContractStateResponse {
  /** Data contains the raw store data */
  data: Uint8Array;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 */

export interface QueryRawContractStateResponseSDKType {
  /** Data contains the raw store data */
  data: Uint8Array;
}
/**
 * QuerySmartContractCallRequest is the request type for the
 * Query/SmartContractCall RPC method
 */

export interface QuerySmartContractCallRequest {
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
 * QuerySmartContractCallRequest is the request type for the
 * Query/SmartContractCall RPC method
 */

export interface QuerySmartContractCallRequestSDKType {
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
 * QuerySmartContractCallResponse is the response type for the
 * Query/SmartContractCall RPC method
 */

export interface QuerySmartContractCallResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/**
 * QuerySmartContractCallResponse is the response type for the
 * Query/SmartContractCall RPC method
 */

export interface QuerySmartContractCallResponseSDKType {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
}
/**
 * QueryCallEthRequest is the request type for the
 * Query/CallEth RPC method
 */

export interface QueryCallEthRequest {
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
 * QueryCallEthRequest is the request type for the
 * Query/CallEth RPC method
 */

export interface QueryCallEthRequestSDKType {
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
 * QueryCallEthResponse is the response type for the
 * Query/CallEth RPC method
 */

export interface QueryCallEthResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
  gasUsed: Long;
}
/**
 * QueryCallEthResponse is the response type for the
 * Query/CallEth RPC method
 */

export interface QueryCallEthResponseSDKType {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
  gas_used: Long;
}
/**
 * QueryDebugContractCallRequest is the request type for the
 * Query/DebugContractCall RPC method
 */

export interface QueryDebugContractCallRequest {
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
 * QueryDebugContractCallRequest is the request type for the
 * Query/DebugContractCall RPC method
 */

export interface QueryDebugContractCallRequestSDKType {
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
 * QueryDebugContractCallResponse is the response type for the
 * Query/DebugContractCall RPC method
 */

export interface QueryDebugContractCallResponse {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
  /** wasm memory at the time of execution end */

  memorySnapshot: Uint8Array;
  errorMessage: string;
}
/**
 * QueryDebugContractCallResponse is the response type for the
 * Query/DebugContractCall RPC method
 */

export interface QueryDebugContractCallResponseSDKType {
  /** Data contains the json data returned from the smart contract */
  data: Uint8Array;
  /** wasm memory at the time of execution end */

  memory_snapshot: Uint8Array;
  error_message: string;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */

export interface QueryCodeRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: Long;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method */

export interface QueryCodeRequestSDKType {
  /** grpc-gateway_out does not support Go style CodID */
  code_id: Long;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */

export interface QueryCodeResponse {
  codeInfo?: CodeInfoPB;
  data: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */

export interface QueryCodeResponseSDKType {
  code_info?: CodeInfoPBSDKType;
  data: Uint8Array;
}
/** QueryCodeInfoRequest is the request type for the Query/CodeInfo RPC method */

export interface QueryCodeInfoRequest {
  /** grpc-gateway_out does not support Go style CodID */
  codeId: Long;
}
/** QueryCodeInfoRequest is the request type for the Query/CodeInfo RPC method */

export interface QueryCodeInfoRequestSDKType {
  /** grpc-gateway_out does not support Go style CodID */
  code_id: Long;
}
/** QueryCodeInfoResponse is the response type for the Query/Code RPC method */

export interface QueryCodeInfoResponse {
  codeInfo?: CodeInfoPB;
}
/** QueryCodeInfoResponse is the response type for the Query/Code RPC method */

export interface QueryCodeInfoResponseSDKType {
  code_info?: CodeInfoPBSDKType;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */

export interface QueryCodesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** QueryCodesRequest is the request type for the Query/Codes RPC method */

export interface QueryCodesRequestSDKType {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestSDKType;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */

export interface QueryCodesResponse {
  codeInfos: CodeInfoPB[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */

export interface QueryCodesResponseSDKType {
  code_infos: CodeInfoPBSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params defines the parameters of the module. */
  params?: ParamsSDKType;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */

export interface QueryContractsByCreatorRequest {
  /** CreatorAddress is the address of contract creator */
  creatorAddress: string;
  /** Pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 */

export interface QueryContractsByCreatorRequestSDKType {
  /** CreatorAddress is the address of contract creator */
  creator_address: string;
  /** Pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */

export interface QueryContractsByCreatorResponse {
  /** ContractAddresses result set */
  contractAddresses: string[];
  /** Pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 */

export interface QueryContractsByCreatorResponseSDKType {
  /** ContractAddresses result set */
  contract_addresses: string[];
  /** Pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}

function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    address: ""
  };
}

export const QueryContractInfoRequest = {
  encode(message: QueryContractInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractInfoRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    address: "",
    contractInfo: undefined
  };
}

export const QueryContractInfoResponse = {
  encode(message: QueryContractInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.contractInfo !== undefined) {
      ContractInfoPB.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.contractInfo = ContractInfoPB.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractInfoResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      contractInfo: isSet(object.contractInfo) ? ContractInfoPB.fromJSON(object.contractInfo) : undefined
    };
  },

  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.contractInfo !== undefined && (obj.contractInfo = message.contractInfo ? ContractInfoPB.toJSON(message.contractInfo) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfoPB.fromPartial(object.contractInfo) : undefined;
    return message;
  }

};

function createBaseQueryContractsByCodeRequest(): QueryContractsByCodeRequest {
  return {
    codeId: Long.UZERO,
    pagination: undefined
  };
}

export const QueryContractsByCodeRequest = {
  encode(message: QueryContractsByCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByCodeRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryContractsByCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryContractsByCodeResponse(): QueryContractsByCodeResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}

export const QueryContractsByCodeResponse = {
  encode(message: QueryContractsByCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contracts) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByCodeResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryContractsByCodeResponse): unknown {
    const obj: any = {};

    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e);
    } else {
      obj.contracts = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllContractStateRequest(): QueryAllContractStateRequest {
  return {
    address: "",
    pagination: undefined
  };
}

export const QueryAllContractStateRequest = {
  encode(message: QueryAllContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllContractStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllContractStateRequest>): QueryAllContractStateRequest {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllContractStateResponse(): QueryAllContractStateResponse {
  return {
    items: [],
    pagination: undefined
  };
}

export const QueryAllContractStateResponse = {
  encode(message: QueryAllContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ContractStoragePB.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.items.push(ContractStoragePB.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllContractStateResponse {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ContractStoragePB.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllContractStateResponse): unknown {
    const obj: any = {};

    if (message.items) {
      obj.items = message.items.map(e => e ? ContractStoragePB.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryAllContractStateResponse>): QueryAllContractStateResponse {
    const message = createBaseQueryAllContractStateResponse();
    message.items = object.items?.map(e => ContractStoragePB.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryRawContractStateRequest(): QueryRawContractStateRequest {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}

export const QueryRawContractStateRequest = {
  encode(message: QueryRawContractStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): QueryRawContractStateRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    };
  },

  toJSON(message: QueryRawContractStateRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.queryData !== undefined && (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryRawContractStateRequest>): QueryRawContractStateRequest {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryRawContractStateResponse(): QueryRawContractStateResponse {
  return {
    data: new Uint8Array()
  };
}

export const QueryRawContractStateResponse = {
  encode(message: QueryRawContractStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();

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

  fromJSON(object: any): QueryRawContractStateResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryRawContractStateResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryRawContractStateResponse>): QueryRawContractStateResponse {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQuerySmartContractCallRequest(): QuerySmartContractCallRequest {
  return {
    sender: "",
    address: "",
    queryData: new Uint8Array(),
    funds: [],
    dependencies: []
  };
}

export const QuerySmartContractCallRequest = {
  encode(message: QuerySmartContractCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.queryData.length !== 0) {
      writer.uint32(26).bytes(message.queryData);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.dependencies) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractCallRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.queryData = reader.bytes();
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

  fromJSON(object: any): QuerySmartContractCallRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QuerySmartContractCallRequest): unknown {
    const obj: any = {};
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

  fromPartial(object: Partial<QuerySmartContractCallRequest>): QuerySmartContractCallRequest {
    const message = createBaseQuerySmartContractCallRequest();
    message.sender = object.sender ?? "";
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.dependencies = object.dependencies?.map(e => e) || [];
    return message;
  }

};

function createBaseQuerySmartContractCallResponse(): QuerySmartContractCallResponse {
  return {
    data: new Uint8Array()
  };
}

export const QuerySmartContractCallResponse = {
  encode(message: QuerySmartContractCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractCallResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractCallResponse();

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

  fromJSON(object: any): QuerySmartContractCallResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QuerySmartContractCallResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QuerySmartContractCallResponse>): QuerySmartContractCallResponse {
    const message = createBaseQuerySmartContractCallResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryCallEthRequest(): QueryCallEthRequest {
  return {
    sender: "",
    address: "",
    queryData: new Uint8Array(),
    funds: [],
    dependencies: []
  };
}

export const QueryCallEthRequest = {
  encode(message: QueryCallEthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.queryData.length !== 0) {
      writer.uint32(26).bytes(message.queryData);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.dependencies) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCallEthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCallEthRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.queryData = reader.bytes();
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

  fromJSON(object: any): QueryCallEthRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryCallEthRequest): unknown {
    const obj: any = {};
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

  fromPartial(object: Partial<QueryCallEthRequest>): QueryCallEthRequest {
    const message = createBaseQueryCallEthRequest();
    message.sender = object.sender ?? "";
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.dependencies = object.dependencies?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryCallEthResponse(): QueryCallEthResponse {
  return {
    data: new Uint8Array(),
    gasUsed: Long.UZERO
  };
}

export const QueryCallEthResponse = {
  encode(message: QueryCallEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (!message.gasUsed.isZero()) {
      writer.uint32(16).uint64(message.gasUsed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCallEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCallEthResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.gasUsed = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCallEthResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO
    };
  },

  toJSON(message: QueryCallEthResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryCallEthResponse>): QueryCallEthResponse {
    const message = createBaseQueryCallEthResponse();
    message.data = object.data ?? new Uint8Array();
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.UZERO;
    return message;
  }

};

function createBaseQueryDebugContractCallRequest(): QueryDebugContractCallRequest {
  return {
    sender: "",
    address: "",
    queryData: new Uint8Array(),
    funds: [],
    dependencies: []
  };
}

export const QueryDebugContractCallRequest = {
  encode(message: QueryDebugContractCallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.queryData.length !== 0) {
      writer.uint32(26).bytes(message.queryData);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.dependencies) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDebugContractCallRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebugContractCallRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.queryData = reader.bytes();
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

  fromJSON(object: any): QueryDebugContractCallRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      address: isSet(object.address) ? String(object.address) : "",
      queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      dependencies: Array.isArray(object?.dependencies) ? object.dependencies.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: QueryDebugContractCallRequest): unknown {
    const obj: any = {};
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

  fromPartial(object: Partial<QueryDebugContractCallRequest>): QueryDebugContractCallRequest {
    const message = createBaseQueryDebugContractCallRequest();
    message.sender = object.sender ?? "";
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.dependencies = object.dependencies?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryDebugContractCallResponse(): QueryDebugContractCallResponse {
  return {
    data: new Uint8Array(),
    memorySnapshot: new Uint8Array(),
    errorMessage: ""
  };
}

export const QueryDebugContractCallResponse = {
  encode(message: QueryDebugContractCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.memorySnapshot.length !== 0) {
      writer.uint32(18).bytes(message.memorySnapshot);
    }

    if (message.errorMessage !== "") {
      writer.uint32(26).string(message.errorMessage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDebugContractCallResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDebugContractCallResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.memorySnapshot = reader.bytes();
          break;

        case 3:
          message.errorMessage = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDebugContractCallResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      memorySnapshot: isSet(object.memorySnapshot) ? bytesFromBase64(object.memorySnapshot) : new Uint8Array(),
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : ""
    };
  },

  toJSON(message: QueryDebugContractCallResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.memorySnapshot !== undefined && (obj.memorySnapshot = base64FromBytes(message.memorySnapshot !== undefined ? message.memorySnapshot : new Uint8Array()));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial(object: Partial<QueryDebugContractCallResponse>): QueryDebugContractCallResponse {
    const message = createBaseQueryDebugContractCallResponse();
    message.data = object.data ?? new Uint8Array();
    message.memorySnapshot = object.memorySnapshot ?? new Uint8Array();
    message.errorMessage = object.errorMessage ?? "";
    return message;
  }

};

function createBaseQueryCodeRequest(): QueryCodeRequest {
  return {
    codeId: Long.UZERO
  };
}

export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodeRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },

  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest {
    const message = createBaseQueryCodeRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryCodeResponse(): QueryCodeResponse {
  return {
    codeInfo: undefined,
    data: new Uint8Array()
  };
}

export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfoPB.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoPB.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryCodeResponse {
    return {
      codeInfo: isSet(object.codeInfo) ? CodeInfoPB.fromJSON(object.codeInfo) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfoPB.toJSON(message.codeInfo) : undefined);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoPB.fromPartial(object.codeInfo) : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseQueryCodeInfoRequest(): QueryCodeInfoRequest {
  return {
    codeId: Long.UZERO
  };
}

export const QueryCodeInfoRequest = {
  encode(message: QueryCodeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodeInfoRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO
    };
  },

  toJSON(message: QueryCodeInfoRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<QueryCodeInfoRequest>): QueryCodeInfoRequest {
    const message = createBaseQueryCodeInfoRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  }

};

function createBaseQueryCodeInfoResponse(): QueryCodeInfoResponse {
  return {
    codeInfo: undefined
  };
}

export const QueryCodeInfoResponse = {
  encode(message: QueryCodeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      CodeInfoPB.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoPB.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodeInfoResponse {
    return {
      codeInfo: isSet(object.codeInfo) ? CodeInfoPB.fromJSON(object.codeInfo) : undefined
    };
  },

  toJSON(message: QueryCodeInfoResponse): unknown {
    const obj: any = {};
    message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfoPB.toJSON(message.codeInfo) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCodeInfoResponse>): QueryCodeInfoResponse {
    const message = createBaseQueryCodeInfoResponse();
    message.codeInfo = object.codeInfo !== undefined && object.codeInfo !== null ? CodeInfoPB.fromPartial(object.codeInfo) : undefined;
    return message;
  }

};

function createBaseQueryCodesRequest(): QueryCodesRequest {
  return {
    pagination: undefined
  };
}

export const QueryCodesRequest = {
  encode(message: QueryCodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCodesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCodesRequest>): QueryCodesRequest {
    const message = createBaseQueryCodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryCodesResponse(): QueryCodesResponse {
  return {
    codeInfos: [],
    pagination: undefined
  };
}

export const QueryCodesResponse = {
  encode(message: QueryCodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.codeInfos) {
      CodeInfoPB.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoPB.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryCodesResponse {
    return {
      codeInfos: Array.isArray(object?.codeInfos) ? object.codeInfos.map((e: any) => CodeInfoPB.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryCodesResponse): unknown {
    const obj: any = {};

    if (message.codeInfos) {
      obj.codeInfos = message.codeInfos.map(e => e ? CodeInfoPB.toJSON(e) : undefined);
    } else {
      obj.codeInfos = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map(e => CodeInfoPB.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryContractsByCreatorRequest(): QueryContractsByCreatorRequest {
  return {
    creatorAddress: "",
    pagination: undefined
  };
}

export const QueryContractsByCreatorRequest = {
  encode(message: QueryContractsByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByCreatorRequest {
    return {
      creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryContractsByCreatorRequest): unknown {
    const obj: any = {};
    message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryContractsByCreatorResponse(): QueryContractsByCreatorResponse {
  return {
    contractAddresses: [],
    pagination: undefined
  };
}

export const QueryContractsByCreatorResponse = {
  encode(message: QueryContractsByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractsByCreatorResponse {
    return {
      contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryContractsByCreatorResponse): unknown {
    const obj: any = {};

    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map(e => e);
    } else {
      obj.contractAddresses = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};