import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    wasmx: {
        wasmx: import("./wasmx/tx.rpc.msg").MsgClientImpl;
    };
}>;
