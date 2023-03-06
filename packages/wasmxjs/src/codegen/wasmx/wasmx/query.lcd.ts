import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateResponseSDKType, QuerySmartContractCallRequest, QuerySmartContractCallResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryContractsByCreatorRequest, QueryContractsByCreatorResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractCall = this.smartContractCall.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.params = this.params.bind(this);
    this.contractsByCreator = this.contractsByCreator.bind(this);
  }
  /* ContractInfo gets the contract meta data */


  async contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> {
    const endpoint = `wasmx/v1/contract/${params.address}`;
    return await this.req.get<QueryContractInfoResponseSDKType>(endpoint);
  }
  /* ContractsByCode lists all smart contracts for a code id */


  async contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `wasmx/v1/code/${params.codeId}/contracts`;
    return await this.req.get<QueryContractsByCodeResponseSDKType>(endpoint, options);
  }
  /* AllContractState gets all raw store data for a single contract */


  async allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `wasmx/v1/contract/${params.address}/state`;
    return await this.req.get<QueryAllContractStateResponseSDKType>(endpoint, options);
  }
  /* RawContractState gets single key from the raw store data of a contract */


  async rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType> {
    const endpoint = `wasmx/v1/contract/${params.address}/raw/${params.queryData}`;
    return await this.req.get<QueryRawContractStateResponseSDKType>(endpoint);
  }
  /* SmartContractCall get query result from the contract */


  async smartContractCall(params: QuerySmartContractCallRequest): Promise<QuerySmartContractCallResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.sender !== "undefined") {
      options.params.sender = params.sender;
    }

    if (typeof params?.funds !== "undefined") {
      options.params.funds = params.funds;
    }

    if (typeof params?.dependencies !== "undefined") {
      options.params.dependencies = params.dependencies;
    }

    const endpoint = `wasmx/v1/contract/${params.address}/call/${params.queryData}`;
    return await this.req.get<QuerySmartContractCallResponseSDKType>(endpoint, options);
  }
  /* Code gets the binary code and metadata for a singe wasm code */


  async code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType> {
    const endpoint = `wasmx/v1/code/${params.codeId}`;
    return await this.req.get<QueryCodeResponseSDKType>(endpoint);
  }
  /* Codes gets the metadata for all stored wasm codes */


  async codes(params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `wasmx/v1/code`;
    return await this.req.get<QueryCodesResponseSDKType>(endpoint, options);
  }
  /* Params gets the module params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `wasmx/v1/codes/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ContractsByCreator gets the contracts by creator */


  async contractsByCreator(params: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `wasmx/v1/contracts/creator/${params.creatorAddress}`;
    return await this.req.get<QueryContractsByCreatorResponseSDKType>(endpoint, options);
  }

}