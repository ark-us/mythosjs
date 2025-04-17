import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
export declare const QueryMultiChainRequest: {
    encode(message: QueryMultiChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMultiChainRequest;
    fromJSON(object: any): QueryMultiChainRequest;
    toJSON(message: QueryMultiChainRequest): unknown;
    fromPartial(object: Partial<QueryMultiChainRequest>): QueryMultiChainRequest;
};
export declare const QueryMultiChainResponse: {
    encode(message: QueryMultiChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMultiChainResponse;
    fromJSON(object: any): QueryMultiChainResponse;
    toJSON(message: QueryMultiChainResponse): unknown;
    fromPartial(object: Partial<QueryMultiChainResponse>): QueryMultiChainResponse;
};
export declare const QueryContractCallRequest: {
    encode(message: QueryContractCallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractCallRequest;
    fromJSON(object: any): QueryContractCallRequest;
    toJSON(message: QueryContractCallRequest): unknown;
    fromPartial(object: Partial<QueryContractCallRequest>): QueryContractCallRequest;
};
export declare const QueryContractCallResponse: {
    encode(message: QueryContractCallResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractCallResponse;
    fromJSON(object: any): QueryContractCallResponse;
    toJSON(message: QueryContractCallResponse): unknown;
    fromPartial(object: Partial<QueryContractCallResponse>): QueryContractCallResponse;
};
