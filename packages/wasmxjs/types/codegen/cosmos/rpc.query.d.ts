import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        base: {
            tendermint: {
                v1beta1: {
                    getNodeInfo(request?: import("./base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("./base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                    getSyncing(request?: import("./base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("./base/tendermint/v1beta1/query").GetSyncingResponse>;
                    getLatestBlock(request?: import("./base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("./base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                    getBlockByHeight(request: import("./base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("./base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: import("./base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("./base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: import("./base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("./base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                };
            };
        };
    };
}>;
