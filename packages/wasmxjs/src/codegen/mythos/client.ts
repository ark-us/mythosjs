import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as mythosNetworkV1TxRegistry from "./network/v1/tx.registry";
import * as mythosWasmxV1TxRegistry from "./wasmx/v1/tx.registry";
import * as mythosWebsrvV1TxRegistry from "./websrv/v1/tx.registry";
import * as mythosNetworkV1TxAmino from "./network/v1/tx.amino";
import * as mythosWasmxV1TxAmino from "./wasmx/v1/tx.amino";
import * as mythosWebsrvV1TxAmino from "./websrv/v1/tx.amino";
export const mythosAminoConverters = { ...mythosNetworkV1TxAmino.AminoConverter,
  ...mythosWasmxV1TxAmino.AminoConverter,
  ...mythosWebsrvV1TxAmino.AminoConverter
};
export const mythosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...mythosNetworkV1TxRegistry.registry, ...mythosWasmxV1TxRegistry.registry, ...mythosWebsrvV1TxRegistry.registry];
export const getSigningMythosClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...mythosProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...mythosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningMythosClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningMythosClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};