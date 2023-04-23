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
                contractInfo(request: import("./wasmx/v1/query").QueryContractInfoRequest): Promise<import("./wasmx/v1/query").QueryContractInfoResponse>;
                contractsByCode(request: import("./wasmx/v1/query").QueryContractsByCodeRequest): Promise<import("./wasmx/v1/query").QueryContractsByCodeResponse>;
                allContractState(request: import("./wasmx/v1/query").QueryAllContractStateRequest): Promise<import("./wasmx/v1/query").QueryAllContractStateResponse>;
                rawContractState(request: import("./wasmx/v1/query").QueryRawContractStateRequest): Promise<import("./wasmx/v1/query").QueryRawContractStateResponse>;
                smartContractCall(request: import("./wasmx/v1/query").QuerySmartContractCallRequest): Promise<import("./wasmx/v1/query").QuerySmartContractCallResponse>;
                code(request: import("./wasmx/v1/query").QueryCodeRequest): Promise<import("./wasmx/v1/query").QueryCodeResponse>;
                codeInfo(request: import("./wasmx/v1/query").QueryCodeInfoRequest): Promise<import("./wasmx/v1/query").QueryCodeInfoResponse>;
                codes(request?: import("./wasmx/v1/query").QueryCodesRequest): Promise<import("./wasmx/v1/query").QueryCodesResponse>;
                params(request?: import("./wasmx/v1/query").QueryParamsRequest): Promise<import("./wasmx/v1/query").QueryParamsResponse>;
                contractsByCreator(request: import("./wasmx/v1/query").QueryContractsByCreatorRequest): Promise<import("./wasmx/v1/query").QueryContractsByCreatorResponse>;
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
