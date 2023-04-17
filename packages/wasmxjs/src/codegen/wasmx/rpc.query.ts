import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      base: {
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      }
    },
    wasmx: {
      wasmx: {
        v1: (await import("./wasmx/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      websrv: {
        v1: (await import("./websrv/v1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};