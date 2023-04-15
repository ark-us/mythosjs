import { fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { createPagination, createProtobufRpcClient, QueryClient, Coin } from "@cosmjs/stargate";
import {
  QueryAllContractStateResponse,
  QueryCodeResponse,
  QueryCodesResponse,
  QueryContractInfoResponse,
  QueryContractsByCodeResponse,
  QueryRawContractStateResponse,
  QueryClientImpl,
} from "@ark-us/wasmxjs";
import Long from 'long';

/**
 * An object containing a parsed JSON document. The result of JSON.parse().
 * This doesn't provide any type safety over `any` but expresses intent in the code.
 *
 * This type is returned by `queryContractSmart`.
 */
export type JsonObject = any;

export interface WasmExtension {
  readonly wasm: {
    readonly listCodeInfo: (paginationKey?: Uint8Array) => Promise<QueryCodesResponse>;
    /**
     * Downloads the original wasm bytecode by code ID.
     *
     * Throws an error if no code with this id
     */
    readonly getCode: (id: number) => Promise<QueryCodeResponse>;
    readonly listContractsByCodeId: (
      id: number,
      paginationKey?: Uint8Array,
    ) => Promise<QueryContractsByCodeResponse>;
    /**
     * Returns null when contract was not found at this address.
     */
    readonly getContractInfo: (address: string) => Promise<QueryContractInfoResponse>;
    /**
     * Returns all contract state.
     * This is an empty array if no such contract, or contract has no data.
     */
    readonly getAllContractState: (
      address: string,
      paginationKey?: Uint8Array,
    ) => Promise<QueryAllContractStateResponse>;
    /**
     * Returns the data at the key if present (unknown decoded json),
     * or null if no data at this (contract address, key) pair
     */
    readonly queryContractRaw: (address: string, key: Uint8Array) => Promise<QueryRawContractStateResponse>;
    /**
     * Makes a smart query on the contract and parses the response as JSON.
     * Throws error if no such contract exists, the query format is invalid or the response is invalid.
     */
    readonly queryContractSmart: (address: string, query: JsonObject) => Promise<JsonObject>;
    readonly queryContractFull: (sender: string, address: string, query: JsonObject, funds: Coin[], dependencies: string[]) => Promise<JsonObject>;
  };
}

export function setupWasmExtension(base: QueryClient): WasmExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    wasm: {
      listCodeInfo: async (paginationKey?: Uint8Array) => {
        const request = {
          pagination: createPagination(paginationKey),
        };
        // @ts-ignore
        return queryService.codes(request);
      },
      getCode: async (id: number) => {
        const request = { codeId: Long.fromNumber(id) };
        // @ts-ignore
        return queryService.code(request);
      },
      listContractsByCodeId: async (id: number, paginationKey?: Uint8Array) => {
        const request = {
          codeId: Long.fromNumber(id),
          pagination: createPagination(paginationKey),
        };
        // @ts-ignore
        return queryService.contractsByCode(request);
      },
      getContractInfo: async (address: string) => {
        const request = { address: address };
        return queryService.contractInfo(request);
      },

      getAllContractState: async (address: string, paginationKey?: Uint8Array) => {
        const request = {
          address: address,
          pagination: createPagination(paginationKey),
        };
        // @ts-ignore
        return queryService.allContractState(request);
      },

      queryContractRaw: async (address: string, key: Uint8Array) => {
        const request = { address: address, queryData: key };
        return queryService.rawContractState(request);
      },

      queryContractSmart: async (address: string, query: JsonObject) => {
        const request = { address: address, queryData: toUtf8(JSON.stringify(query)) };
        const { items } = await queryService.allContractState(request);
        return items;
      },

      queryContractFull: async (sender: string, address: string, query: JsonObject, funds: Coin[], dependencies: string[]) => {
        const request = { sender: sender, address: address, queryData: toUtf8(JSON.stringify(query)), funds: funds, dependencies };
        const { data } = await queryService.smartContractCall(request);
        // By convention, smart queries must return a valid JSON document (see https://github.com/CosmWasm/cosmwasm/issues/144)
        let responseText;
        try {
            responseText = fromUtf8(data);
        }
        catch (error) {
            throw new Error(`Could not UTF-8 decode smart query response from contract: ${error}`);
        }
        try {
            return JSON.parse(responseText);
        }
        catch (error) {
            throw new Error(`Could not JSON parse smart query response from contract: ${error}`);
        }
      },
    },
  };
}
