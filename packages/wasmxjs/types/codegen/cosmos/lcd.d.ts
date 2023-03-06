export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        base: {
            tendermint: {
                v1beta1: import("./base/tendermint/v1beta1/query.lcd").LCDQueryClient;
            };
        };
    };
}>;
