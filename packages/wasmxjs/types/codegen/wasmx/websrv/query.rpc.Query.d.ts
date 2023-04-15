import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    httpGet(request: QueryHttpRequestGet): Promise<QueryHttpResponseGet>;
    contractByRoute(request: QueryContractByRouteRequest): Promise<QueryContractByRouteResponse>;
    routeByContract(request: QueryRouteByContractRequest): Promise<QueryRouteByContractResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getAllOauthClients(request?: QueryGetAllOauthClientsRequest): Promise<QueryGetAllOauthClientsResponse>;
    getOauthClient(request: QueryGetOauthClientRequest): Promise<QueryGetOauthClientResponse>;
    getOauthClientsByOwner(request: QueryGetOauthClientsByOwnerRequest): Promise<QueryGetOauthClientsByOwnerResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    httpGet(request: QueryHttpRequestGet): Promise<QueryHttpResponseGet>;
    contractByRoute(request: QueryContractByRouteRequest): Promise<QueryContractByRouteResponse>;
    routeByContract(request: QueryRouteByContractRequest): Promise<QueryRouteByContractResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    getAllOauthClients(request?: QueryGetAllOauthClientsRequest): Promise<QueryGetAllOauthClientsResponse>;
    getOauthClient(request: QueryGetOauthClientRequest): Promise<QueryGetOauthClientResponse>;
    getOauthClientsByOwner(request: QueryGetOauthClientsByOwnerRequest): Promise<QueryGetOauthClientsByOwnerResponse>;
};
