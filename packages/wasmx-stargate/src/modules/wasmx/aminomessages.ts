/* eslint-disable @typescript-eslint/naming-convention */
import { fromBase64, fromUtf8, toBase64, toUtf8 } from "@cosmjs/encoding";
import { AminoConverters, Coin } from "@cosmjs/stargate";
import {
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgStoreCode,
  MsgStoreCodeEvm,
} from "@ark-us/wasmxjs";
import Long from 'long';

/**
 * The Amino JSON representation of [MsgStoreCode].
 */
export interface AminoMsgStoreCode {
  type: "wasmx/MsgStoreCode";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Base64 encoded Wasm */
    readonly wasm_byte_code: string;
  };
}

/**
 * The Amino JSON representation of [MsgStoreCodeEvm].
 */
export interface AminoMsgStoreCodeEvm {
  type: "wasmx/MsgStoreCodeEvm";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Base64 encoded Wasm */
    readonly evm_byte_code: string;
  };
}

/**
 * The Amino JSON representation of [MsgExecuteContract].
 */
export interface AminoMsgExecuteContract {
  type: "wasmx/MsgExecuteContract";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Bech32 account address */
    readonly contract: string;
    /** Execute message as JavaScript object */
    readonly msg: any;
    readonly funds: readonly Coin[];
    readonly dependencies: string[];
  };
}

/**
 * The Amino JSON representation of [MsgInstantiateContract].
 */
export interface AminoMsgInstantiateContract {
  type: "wasmx/MsgInstantiateContract";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** ID of the Wasm code that was uploaded before */
    readonly code_id: string;
    /** Human-readable label for this contract */
    readonly label: string;
    /** Instantiate message as JavaScript object */
    readonly msg: any;
    readonly funds: readonly Coin[];
  };
}

export function createWasmAminoConverters(): AminoConverters {
  return {
    "/mythos.wasmx.v1.MsgStoreCode": {
      aminoType: "wasm/MsgStoreCode",
      toAmino: ({ sender, wasmByteCode }: MsgStoreCode): AminoMsgStoreCode["value"] => ({
        sender: sender,
        wasm_byte_code: toBase64(wasmByteCode),
      }),
      fromAmino: ({ sender, wasm_byte_code }: AminoMsgStoreCode["value"]): MsgStoreCode => ({
        sender: sender,
        wasmByteCode: fromBase64(wasm_byte_code),
      }),
    },
    "/mythos.wasmx.v1.MsgStoreCodeEvm": {
      aminoType: "wasm/MsgStoreCodeEvm",
      toAmino: ({ sender, evmByteCode }: MsgStoreCodeEvm): AminoMsgStoreCodeEvm["value"] => ({
        sender: sender,
        evm_byte_code: toBase64(evmByteCode),
      }),
      fromAmino: ({ sender, evm_byte_code }: AminoMsgStoreCodeEvm["value"]): MsgStoreCodeEvm => ({
        sender: sender,
        evmByteCode: fromBase64(evm_byte_code),
      }),
    },
    "/mythos.wasmx.v1.MsgInstantiateContract": {
      aminoType: "wasm/MsgInstantiateContract",
      toAmino: ({
        sender,
        codeId,
        label,
        msg,
        funds,
      }: MsgInstantiateContract): AminoMsgInstantiateContract["value"] => ({
        sender: sender,
        code_id: codeId.toString(),
        label: label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds,
      }),
      fromAmino: ({
        sender,
        code_id,
        label,
        msg,
        funds,
      }: AminoMsgInstantiateContract["value"]): MsgInstantiateContract => ({
        sender: sender,
        // @ts-ignore
        codeId: Long.fromString(code_id),
        label: label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: [...funds],
      }),
    },
    "/mythos.wasmx.v1.MsgExecuteContract": {
      aminoType: "wasm/MsgExecuteContract",
      toAmino: ({ sender, contract, msg, funds, dependencies }: MsgExecuteContract): AminoMsgExecuteContract["value"] => ({
        sender: sender,
        contract: contract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds,
        dependencies: dependencies,
      }),
      fromAmino: ({
        sender,
        contract,
        msg,
        funds,
        dependencies,
      }: AminoMsgExecuteContract["value"]): MsgExecuteContract => ({
        sender: sender,
        contract: contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: [...funds],
        dependencies: [...dependencies]
      }),
    },
  };
}

/** @deprecated use `createWasmAminoConverters()` */
export const wasmXTypes: AminoConverters = createWasmAminoConverters();
