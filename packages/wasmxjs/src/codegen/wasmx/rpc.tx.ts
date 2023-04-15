import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  wasmx: {
    wasmx: new (await import("./wasmx/tx.rpc.msg")).MsgClientImpl(rpc),
    websrv: new (await import("./websrv/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});