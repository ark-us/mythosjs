import { Tendermint34Client, Tendermint37Client } from "@cosmjs/tendermint-rpc";

export type TendermintClient = Tendermint34Client | Tendermint37Client;

export function isTendermint34Client(client: TendermintClient): client is Tendermint34Client {
  return client instanceof Tendermint34Client;
}

export function isTendermint37Client(client: TendermintClient): client is Tendermint37Client {
  return client instanceof Tendermint37Client;
}

// Comet38Client is an alias for Tendermint37Client in newer versions
export { Tendermint37Client as Comet38Client } from "@cosmjs/tendermint-rpc";
