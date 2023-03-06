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
            contractInfo(request: import(".").QueryContractInfoRequest): Promise<import(".").QueryContractInfoResponse>;
            contractsByCode(request: import(".").QueryContractsByCodeRequest): Promise<import(".").QueryContractsByCodeResponse>;
            allContractState(request: import(".").QueryAllContractStateRequest): Promise<import(".").QueryAllContractStateResponse>;
            rawContractState(request: import(".").QueryRawContractStateRequest): Promise<import(".").QueryRawContractStateResponse>;
            smartContractCall(request: import(".").QuerySmartContractCallRequest): Promise<import(".").QuerySmartContractCallResponse>;
            code(request: import(".").QueryCodeRequest): Promise<import(".").QueryCodeResponse>;
            codes(request?: import(".").QueryCodesRequest): Promise<import(".").QueryCodesResponse>;
            params(request?: import(".").QueryParamsRequest): Promise<import(".").QueryParamsResponse>;
            contractsByCreator(request: import(".").QueryContractsByCreatorRequest): Promise<import(".").QueryContractsByCreatorResponse>;
        };
    };
}>;
