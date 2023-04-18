import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  mythos: {
    wasmx: {
      v1: new (await import("./wasmx/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    websrv: {
      v1: new (await import("./websrv/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});