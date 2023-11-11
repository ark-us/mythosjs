/// <reference types="long" />
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ContractInfo, ContractInfoSDKType, ContractStorage, ContractStorageSDKType, CodeInfo, CodeInfoSDKType } from "./contract";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
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
    contractInfo?: ContractInfo;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 */
export interface QueryContractInfoResponseSDKType {
    /** address is the address of the contract */
    address: string;
    contract_info?: ContractInfoSDKType;
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
    items: ContractStorage[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 */
export interface QueryAllContractStateResponseSDKType {
    items: ContractStorageSDKType[];
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
    codeInfo?: CodeInfo;
    data: Uint8Array;
}
/** QueryCodeResponse is the response type for the Query/Code RPC method */
export interface QueryCodeResponseSDKType {
    code_info?: CodeInfoSDKType;
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
    codeInfo?: CodeInfo;
}
/** QueryCodeInfoResponse is the response type for the Query/Code RPC method */
export interface QueryCodeInfoResponseSDKType {
    code_info?: CodeInfoSDKType;
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
    codeInfos: CodeInfo[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryCodesResponse is the response type for the Query/Codes RPC method */
export interface QueryCodesResponseSDKType {
    code_infos: CodeInfoSDKType[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
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
export declare const QueryContractInfoRequest: {
    encode(message: QueryContractInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoRequest;
    fromJSON(object: any): QueryContractInfoRequest;
    toJSON(message: QueryContractInfoRequest): unknown;
    fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest;
};
export declare const QueryContractInfoResponse: {
    encode(message: QueryContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractInfoResponse;
    fromJSON(object: any): QueryContractInfoResponse;
    toJSON(message: QueryContractInfoResponse): unknown;
    fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse;
};
export declare const QueryContractsByCodeRequest: {
    encode(message: QueryContractsByCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeRequest;
    fromJSON(object: any): QueryContractsByCodeRequest;
    toJSON(message: QueryContractsByCodeRequest): unknown;
    fromPartial(object: Partial<QueryContractsByCodeRequest>): QueryContractsByCodeRequest;
};
export declare const QueryContractsByCodeResponse: {
    encode(message: QueryContractsByCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCodeResponse;
    fromJSON(object: any): QueryContractsByCodeResponse;
    toJSON(message: QueryContractsByCodeResponse): unknown;
    fromPartial(object: Partial<QueryContractsByCodeResponse>): QueryContractsByCodeResponse;
};
export declare const QueryAllContractStateRequest: {
    encode(message: QueryAllContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateRequest;
    fromJSON(object: any): QueryAllContractStateRequest;
    toJSON(message: QueryAllContractStateRequest): unknown;
    fromPartial(object: Partial<QueryAllContractStateRequest>): QueryAllContractStateRequest;
};
export declare const QueryAllContractStateResponse: {
    encode(message: QueryAllContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllContractStateResponse;
    fromJSON(object: any): QueryAllContractStateResponse;
    toJSON(message: QueryAllContractStateResponse): unknown;
    fromPartial(object: Partial<QueryAllContractStateResponse>): QueryAllContractStateResponse;
};
export declare const QueryRawContractStateRequest: {
    encode(message: QueryRawContractStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateRequest;
    fromJSON(object: any): QueryRawContractStateRequest;
    toJSON(message: QueryRawContractStateRequest): unknown;
    fromPartial(object: Partial<QueryRawContractStateRequest>): QueryRawContractStateRequest;
};
export declare const QueryRawContractStateResponse: {
    encode(message: QueryRawContractStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRawContractStateResponse;
    fromJSON(object: any): QueryRawContractStateResponse;
    toJSON(message: QueryRawContractStateResponse): unknown;
    fromPartial(object: Partial<QueryRawContractStateResponse>): QueryRawContractStateResponse;
};
export declare const QuerySmartContractCallRequest: {
    encode(message: QuerySmartContractCallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractCallRequest;
    fromJSON(object: any): QuerySmartContractCallRequest;
    toJSON(message: QuerySmartContractCallRequest): unknown;
    fromPartial(object: Partial<QuerySmartContractCallRequest>): QuerySmartContractCallRequest;
};
export declare const QuerySmartContractCallResponse: {
    encode(message: QuerySmartContractCallResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySmartContractCallResponse;
    fromJSON(object: any): QuerySmartContractCallResponse;
    toJSON(message: QuerySmartContractCallResponse): unknown;
    fromPartial(object: Partial<QuerySmartContractCallResponse>): QuerySmartContractCallResponse;
};
export declare const QueryCodeRequest: {
    encode(message: QueryCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeRequest;
    fromJSON(object: any): QueryCodeRequest;
    toJSON(message: QueryCodeRequest): unknown;
    fromPartial(object: Partial<QueryCodeRequest>): QueryCodeRequest;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial(object: Partial<QueryCodeResponse>): QueryCodeResponse;
};
export declare const QueryCodeInfoRequest: {
    encode(message: QueryCodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeInfoRequest;
    fromJSON(object: any): QueryCodeInfoRequest;
    toJSON(message: QueryCodeInfoRequest): unknown;
    fromPartial(object: Partial<QueryCodeInfoRequest>): QueryCodeInfoRequest;
};
export declare const QueryCodeInfoResponse: {
    encode(message: QueryCodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodeInfoResponse;
    fromJSON(object: any): QueryCodeInfoResponse;
    toJSON(message: QueryCodeInfoResponse): unknown;
    fromPartial(object: Partial<QueryCodeInfoResponse>): QueryCodeInfoResponse;
};
export declare const QueryCodesRequest: {
    encode(message: QueryCodesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesRequest;
    fromJSON(object: any): QueryCodesRequest;
    toJSON(message: QueryCodesRequest): unknown;
    fromPartial(object: Partial<QueryCodesRequest>): QueryCodesRequest;
};
export declare const QueryCodesResponse: {
    encode(message: QueryCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCodesResponse;
    fromJSON(object: any): QueryCodesResponse;
    toJSON(message: QueryCodesResponse): unknown;
    fromPartial(object: Partial<QueryCodesResponse>): QueryCodesResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryContractsByCreatorRequest: {
    encode(message: QueryContractsByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorRequest;
    fromJSON(object: any): QueryContractsByCreatorRequest;
    toJSON(message: QueryContractsByCreatorRequest): unknown;
    fromPartial(object: Partial<QueryContractsByCreatorRequest>): QueryContractsByCreatorRequest;
};
export declare const QueryContractsByCreatorResponse: {
    encode(message: QueryContractsByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractsByCreatorResponse;
    fromJSON(object: any): QueryContractsByCreatorResponse;
    toJSON(message: QueryContractsByCreatorResponse): unknown;
    fromPartial(object: Partial<QueryContractsByCreatorResponse>): QueryContractsByCreatorResponse;
};
