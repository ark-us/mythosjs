import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    wasmx: {
        wasmx: {
            v1: import("./wasmx/v1/tx.rpc.msg").MsgClientImpl;
        };
        websrv: {
            v1: import("./websrv/v1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
