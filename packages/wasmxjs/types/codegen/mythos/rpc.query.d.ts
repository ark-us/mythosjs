import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        base: {
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                };
            };
        };
    };
    mythos: {
        wasmx: {
            v1: {
                contractInfo(request: import(".").QueryContractInfoRequest): Promise<import(".").QueryContractInfoResponse>;
                contractsByCode(request: import(".").QueryContractsByCodeRequest): Promise<import(".").QueryContractsByCodeResponse>;
                allContractState(request: import(".").QueryAllContractStateRequest): Promise<import(".").QueryAllContractStateResponse>;
                rawContractState(request: import(".").QueryRawContractStateRequest): Promise<import(".").QueryRawContractStateResponse>;
                smartContractCall(request: import(".").QuerySmartContractCallRequest): Promise<import(".").QuerySmartContractCallResponse>;
                code(request: import(".").QueryCodeRequest): Promise<import(".").QueryCodeResponse>;
                codeInfo(request: import(".").QueryCodeInfoRequest): Promise<import(".").QueryCodeInfoResponse>;
                codes(request?: import(".").QueryCodesRequest): Promise<import(".").QueryCodesResponse>;
                params(request?: import(".").QueryParamsRequest): Promise<import(".").QueryParamsResponse>;
                contractsByCreator(request: import(".").QueryContractsByCreatorRequest): Promise<import(".").QueryContractsByCreatorResponse>;
            };
        };
        websrv: {
            v1: {
                httpGet(request: import("./websrv/v1/query").QueryHttpRequestGet): Promise<import("./websrv/v1/query").QueryHttpResponseGet>;
                contractByRoute(request: import("./websrv/v1/query").QueryContractByRouteRequest): Promise<import("./websrv/v1/query").QueryContractByRouteResponse>;
                routeByContract(request: import("./websrv/v1/query").QueryRouteByContractRequest): Promise<import("./websrv/v1/query").QueryRouteByContractResponse>;
                params(request?: import("./websrv/v1/query").QueryParamsRequest): Promise<import("./websrv/v1/query").QueryParamsResponse>;
                getAllOauthClients(request?: import("./websrv/v1/query").QueryGetAllOauthClientsRequest): Promise<import("./websrv/v1/query").QueryGetAllOauthClientsResponse>;
                getOauthClient(request: import("./websrv/v1/query").QueryGetOauthClientRequest): Promise<import("./websrv/v1/query").QueryGetOauthClientResponse>;
                getOauthClientsByOwner(request: import("./websrv/v1/query").QueryGetOauthClientsByOwnerRequest): Promise<import("./websrv/v1/query").QueryGetOauthClientsByOwnerResponse>;
            };
        };
    };
}>;
