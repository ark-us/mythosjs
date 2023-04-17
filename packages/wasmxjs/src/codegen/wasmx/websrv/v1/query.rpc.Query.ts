import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryHttpRequestGet, QueryHttpResponseGet, QueryContractByRouteRequest, QueryContractByRouteResponse, QueryRouteByContractRequest, QueryRouteByContractResponse, QueryParamsRequest, QueryParamsResponse, QueryGetAllOauthClientsRequest, QueryGetAllOauthClientsResponse, QueryGetOauthClientRequest, QueryGetOauthClientResponse, QueryGetOauthClientsByOwnerRequest, QueryGetOauthClientsByOwnerResponse } from "./query";
/** Query defines the gRPC querier service. */

export interface Query {
  /** HttpGet makes a get request to the webserver */
  httpGet(request: QueryHttpRequestGet): Promise<QueryHttpResponseGet>;
  /** ContractByRoute gets the contract controlling a given route */

  contractByRoute(request: QueryContractByRouteRequest): Promise<QueryContractByRouteResponse>;
  /** RouteByContract gets the route controlled by a given contract */

  routeByContract(request: QueryRouteByContractRequest): Promise<QueryRouteByContractResponse>;
  /** Parameters queries the parameters of the module. */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** GetAllClients gets all the registered client apps for the oauth service */

  getAllOauthClients(request?: QueryGetAllOauthClientsRequest): Promise<QueryGetAllOauthClientsResponse>;
  /** GetOauthClient gets the registered oauth client by client id */

  getOauthClient(request: QueryGetOauthClientRequest): Promise<QueryGetOauthClientResponse>;
  /** GetOauthClientsByOwner gets all the registered oauth client by an owner address */

  getOauthClientsByOwner(request: QueryGetOauthClientsByOwnerRequest): Promise<QueryGetOauthClientsByOwnerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.httpGet = this.httpGet.bind(this);
    this.contractByRoute = this.contractByRoute.bind(this);
    this.routeByContract = this.routeByContract.bind(this);
    this.params = this.params.bind(this);
    this.getAllOauthClients = this.getAllOauthClients.bind(this);
    this.getOauthClient = this.getOauthClient.bind(this);
    this.getOauthClientsByOwner = this.getOauthClientsByOwner.bind(this);
  }

  httpGet(request: QueryHttpRequestGet): Promise<QueryHttpResponseGet> {
    const data = QueryHttpRequestGet.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Query", "HttpGet", data);
    return promise.then(data => QueryHttpResponseGet.decode(new _m0.Reader(data)));
  }

  contractByRoute(request: QueryContractByRouteRequest): Promise<QueryContractByRouteResponse> {
    const data = QueryContractByRouteRequest.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Query", "ContractByRoute", data);
    return promise.then(data => QueryContractByRouteResponse.decode(new _m0.Reader(data)));
  }

  routeByContract(request: QueryRouteByContractRequest): Promise<QueryRouteByContractResponse> {
    const data = QueryRouteByContractRequest.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Query", "RouteByContract", data);
    return promise.then(data => QueryRouteByContractResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  getAllOauthClients(request: QueryGetAllOauthClientsRequest = {
    pagination: undefined
  }): Promise<QueryGetAllOauthClientsResponse> {
    const data = QueryGetAllOauthClientsRequest.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Query", "GetAllOauthClients", data);
    return promise.then(data => QueryGetAllOauthClientsResponse.decode(new _m0.Reader(data)));
  }

  getOauthClient(request: QueryGetOauthClientRequest): Promise<QueryGetOauthClientResponse> {
    const data = QueryGetOauthClientRequest.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Query", "GetOauthClient", data);
    return promise.then(data => QueryGetOauthClientResponse.decode(new _m0.Reader(data)));
  }

  getOauthClientsByOwner(request: QueryGetOauthClientsByOwnerRequest): Promise<QueryGetOauthClientsByOwnerResponse> {
    const data = QueryGetOauthClientsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("wasmx.websrv.v1.Query", "GetOauthClientsByOwner", data);
    return promise.then(data => QueryGetOauthClientsByOwnerResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    httpGet(request: QueryHttpRequestGet): Promise<QueryHttpResponseGet> {
      return queryService.httpGet(request);
    },

    contractByRoute(request: QueryContractByRouteRequest): Promise<QueryContractByRouteResponse> {
      return queryService.contractByRoute(request);
    },

    routeByContract(request: QueryRouteByContractRequest): Promise<QueryRouteByContractResponse> {
      return queryService.routeByContract(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    getAllOauthClients(request?: QueryGetAllOauthClientsRequest): Promise<QueryGetAllOauthClientsResponse> {
      return queryService.getAllOauthClients(request);
    },

    getOauthClient(request: QueryGetOauthClientRequest): Promise<QueryGetOauthClientResponse> {
      return queryService.getOauthClient(request);
    },

    getOauthClientsByOwner(request: QueryGetOauthClientsByOwnerRequest): Promise<QueryGetOauthClientsByOwnerResponse> {
      return queryService.getOauthClientsByOwner(request);
    }

  };
};