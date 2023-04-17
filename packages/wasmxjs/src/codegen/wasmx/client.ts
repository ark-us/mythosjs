import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as wasmxWasmxV1TxRegistry from "./wasmx/v1/tx.registry";
import * as wasmxWebsrvV1TxRegistry from "./websrv/v1/tx.registry";
import * as wasmxWasmxV1TxAmino from "./wasmx/v1/tx.amino";
import * as wasmxWebsrvV1TxAmino from "./websrv/v1/tx.amino";
export const wasmxAminoConverters = { ...wasmxWasmxV1TxAmino.AminoConverter,
  ...wasmxWebsrvV1TxAmino.AminoConverter
};
export const wasmxProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...wasmxWasmxV1TxRegistry.registry, ...wasmxWebsrvV1TxRegistry.registry];
export const getSigningWasmxClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...wasmxProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...wasmxAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningWasmxClient = async ({
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
  } = getSigningWasmxClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};