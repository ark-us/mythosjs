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
    wasmx: {
        wasmx: {
            contractInfo(request: import("./wasmx/query").QueryContractInfoRequest): Promise<import("./wasmx/query").QueryContractInfoResponse>;
            contractsByCode(request: import("./wasmx/query").QueryContractsByCodeRequest): Promise<import("./wasmx/query").QueryContractsByCodeResponse>;
            allContractState(request: import("./wasmx/query").QueryAllContractStateRequest): Promise<import("./wasmx/query").QueryAllContractStateResponse>;
            rawContractState(request: import("./wasmx/query").QueryRawContractStateRequest): Promise<import("./wasmx/query").QueryRawContractStateResponse>;
            smartContractCall(request: import("./wasmx/query").QuerySmartContractCallRequest): Promise<import("./wasmx/query").QuerySmartContractCallResponse>;
            code(request: import("./wasmx/query").QueryCodeRequest): Promise<import("./wasmx/query").QueryCodeResponse>;
            codes(request?: import("./wasmx/query").QueryCodesRequest): Promise<import("./wasmx/query").QueryCodesResponse>;
            params(request?: import("./wasmx/query").QueryParamsRequest): Promise<import("./wasmx/query").QueryParamsResponse>;
            contractsByCreator(request: import("./wasmx/query").QueryContractsByCreatorRequest): Promise<import("./wasmx/query").QueryContractsByCreatorResponse>;
        };
        websrv: {
            httpGet(request: import("./websrv/query").QueryHttpRequestGet): Promise<import("./websrv/query").QueryHttpResponseGet>;
            contractByRoute(request: import("./websrv/query").QueryContractByRouteRequest): Promise<import("./websrv/query").QueryContractByRouteResponse>;
            routeByContract(request: import("./websrv/query").QueryRouteByContractRequest): Promise<import("./websrv/query").QueryRouteByContractResponse>;
            params(request?: import("./websrv/query").QueryParamsRequest): Promise<import("./websrv/query").QueryParamsResponse>;
            getAllOauthClients(request?: import("./websrv/query").QueryGetAllOauthClientsRequest): Promise<import("./websrv/query").QueryGetAllOauthClientsResponse>;
            getOauthClient(request: import("./websrv/query").QueryGetOauthClientRequest): Promise<import("./websrv/query").QueryGetOauthClientResponse>;
            getOauthClientsByOwner(request: import("./websrv/query").QueryGetOauthClientsByOwnerRequest): Promise<import("./websrv/query").QueryGetOauthClientsByOwnerResponse>;
        };
    };
}>;
