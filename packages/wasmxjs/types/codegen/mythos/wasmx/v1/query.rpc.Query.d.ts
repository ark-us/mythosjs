import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractCallRequest, QuerySmartContractCallResponse, QueryCodeRequest, QueryCodeResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryCodesRequest, QueryCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ContractInfo gets the contract meta data */
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    /** ContractsByCode lists all smart contracts for a code id */
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    /** AllContractState gets all raw store data for a single contract */
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    /** RawContractState gets single key from the raw store data of a contract */
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    /** SmartContractCall get query result from the contract */
    smartContractCall(request: QuerySmartContractCallRequest): Promise<QuerySmartContractCallResponse>;
    /** Code gets the binary code and metadata for a singe wasm code */
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    /** CodeInfo gets the binary code and metadata for a singe wasm code */
    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    /** Codes gets the metadata for all stored wasm codes */
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    /** Params gets the module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ContractsByCreator gets the contracts by creator */
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractCall(request: QuerySmartContractCallRequest): Promise<QuerySmartContractCallResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractCall(request: QuerySmartContractCallRequest): Promise<QuerySmartContractCallResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
};
