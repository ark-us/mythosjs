import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

export type TendermintClient = Tendermint34Client;

export function isTendermint34Client(client: TendermintClient): client is Tendermint34Client {
  return client instanceof Tendermint34Client;
}
