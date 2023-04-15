import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as wasmxWasmxTxRegistry from "./wasmx/tx.registry";
import * as wasmxWebsrvTxRegistry from "./websrv/tx.registry";
import * as wasmxWasmxTxAmino from "./wasmx/tx.amino";
import * as wasmxWebsrvTxAmino from "./websrv/tx.amino";
export const wasmxAminoConverters = { ...wasmxWasmxTxAmino.AminoConverter,
  ...wasmxWebsrvTxAmino.AminoConverter
};
export const wasmxProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...wasmxWasmxTxRegistry.registry, ...wasmxWebsrvTxRegistry.registry];
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