export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        base: {
            tendermint: {
                v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
            };
        };
    };
    wasmx: {
        wasmx: import("./wasmx/query.lcd").LCDQueryClient;
    };
}>;
