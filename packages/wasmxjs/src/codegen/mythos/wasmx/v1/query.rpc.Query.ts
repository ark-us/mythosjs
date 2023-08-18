import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
  /** CodeInfo gets the metadata for a singe wasm code */

  codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
  /** Codes gets the metadata for all stored wasm codes */

  codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
  /** Params gets the module params */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ContractsByCreator gets the contracts by creator */

  contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractCall = this.smartContractCall.bind(this);
    this.code = this.code.bind(this);
    this.codeInfo = this.codeInfo.bind(this);
    this.codes = this.codes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }

  contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "ContractInfo", data);
    return promise.then(data => QueryContractInfoResponse.decode(new _m0.Reader(data)));
  }

  contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "ContractsByCode", data);
    return promise.then(data => QueryContractsByCodeResponse.decode(new _m0.Reader(data)));
  }

  allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "AllContractState", data);
    return promise.then(data => QueryAllContractStateResponse.decode(new _m0.Reader(data)));
  }

  rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "RawContractState", data);
    return promise.then(data => QueryRawContractStateResponse.decode(new _m0.Reader(data)));
  }

  smartContractCall(request: QuerySmartContractCallRequest): Promise<QuerySmartContractCallResponse> {
    const data = QuerySmartContractCallRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "SmartContractCall", data);
    return promise.then(data => QuerySmartContractCallResponse.decode(new _m0.Reader(data)));
  }

  code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new _m0.Reader(data)));
  }

  codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse> {
    const data = QueryCodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "CodeInfo", data);
    return promise.then(data => QueryCodeInfoResponse.decode(new _m0.Reader(data)));
  }

  codes(request: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponse> {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "Codes", data);
    return promise.then(data => QueryCodesResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("mythos.wasmx.v1.Query", "ContractsByCreator", data);
    return promise.then(data => QueryContractsByCreatorResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
      return queryService.contractInfo(request);
    },

    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
      return queryService.contractsByCode(request);
    },

    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
      return queryService.allContractState(request);
    },

    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
      return queryService.rawContractState(request);
    },

    smartContractCall(request: QuerySmartContractCallRequest): Promise<QuerySmartContractCallResponse> {
      return queryService.smartContractCall(request);
    },

    code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    },

    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse> {
      return queryService.codeInfo(request);
    },

    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse> {
      return queryService.codes(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> {
      return queryService.contractsByCreator(request);
    }

  };
};