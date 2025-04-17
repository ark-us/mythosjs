import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryContractCallRequest, QueryContractCallResponse, QueryMultiChainRequest, QueryMultiChainResponse } from "./query";
/** Query provides defines the gRPC querier service */

export interface Query {
  /** ContractCall */
  contractCall(request: QueryContractCallRequest): Promise<QueryContractCallResponse>;
  queryMultiChain(request: QueryMultiChainRequest): Promise<QueryMultiChainResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.contractCall = this.contractCall.bind(this);
    this.queryMultiChain = this.queryMultiChain.bind(this);
  }

  contractCall(request: QueryContractCallRequest): Promise<QueryContractCallResponse> {
    const data = QueryContractCallRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Query", "ContractCall", data);
    return promise.then(data => QueryContractCallResponse.decode(new _m0.Reader(data)));
  }

  queryMultiChain(request: QueryMultiChainRequest): Promise<QueryMultiChainResponse> {
    const data = QueryMultiChainRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.network.v1.Query", "QueryMultiChain", data);
    return promise.then(data => QueryMultiChainResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractCall(request: QueryContractCallRequest): Promise<QueryContractCallResponse> {
      return queryService.contractCall(request);
    },

    queryMultiChain(request: QueryMultiChainRequest): Promise<QueryMultiChainResponse> {
      return queryService.queryMultiChain(request);
    }

  };
};