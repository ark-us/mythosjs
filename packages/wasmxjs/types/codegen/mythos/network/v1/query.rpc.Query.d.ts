import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryContractCallRequest, QueryContractCallResponse, QueryMultiChainRequest, QueryMultiChainResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ContractCall */
    contractCall(request: QueryContractCallRequest): Promise<QueryContractCallResponse>;
    queryMultiChain(request: QueryMultiChainRequest): Promise<QueryMultiChainResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    contractCall(request: QueryContractCallRequest): Promise<QueryContractCallResponse>;
    queryMultiChain(request: QueryMultiChainRequest): Promise<QueryMultiChainResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    contractCall(request: QueryContractCallRequest): Promise<QueryContractCallResponse>;
    queryMultiChain(request: QueryMultiChainRequest): Promise<QueryMultiChainResponse>;
};
