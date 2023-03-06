import { AminoMsg } from "@cosmjs/amino";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract } from "./tx";
export interface AminoMsgStoreCode extends AminoMsg {
    type: "/wasmx.wasmx.MsgStoreCode";
    value: {
        sender: string;
        wasm_byte_code: Uint8Array;
    };
}
export interface AminoMsgInstantiateContract extends AminoMsg {
    type: "/wasmx.wasmx.MsgInstantiateContract";
    value: {
        sender: string;
        code_id: string;
        label: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgInstantiateContract2 extends AminoMsg {
    type: "/wasmx.wasmx.MsgInstantiateContract2";
    value: {
        sender: string;
        code_id: string;
        label: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
        salt: Uint8Array;
        fix_msg: boolean;
    };
}
export interface AminoMsgExecuteContract extends AminoMsg {
    type: "/wasmx.wasmx.MsgExecuteContract";
    value: {
        sender: string;
        contract: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
        dependencies: string[];
    };
}
export interface AminoMsgExecuteWithOriginContract extends AminoMsg {
    type: "/wasmx.wasmx.MsgExecuteWithOriginContract";
    value: {
        origin: string;
        sender: string;
        contract: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgExecuteDelegateContract extends AminoMsg {
    type: "/wasmx.wasmx.MsgExecuteDelegateContract";
    value: {
        origin: string;
        sender: string;
        caller: string;
        code_contract: string;
        storage_contract: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/wasmx.wasmx.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode }: MsgStoreCode) => AminoMsgStoreCode["value"];
        fromAmino: ({ sender, wasm_byte_code }: AminoMsgStoreCode["value"]) => MsgStoreCode;
    };
    "/wasmx.wasmx.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds }: MsgInstantiateContract) => AminoMsgInstantiateContract["value"];
        fromAmino: ({ sender, code_id, label, msg, funds }: AminoMsgInstantiateContract["value"]) => MsgInstantiateContract;
    };
    "/wasmx.wasmx.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds, salt, fixMsg }: MsgInstantiateContract2) => AminoMsgInstantiateContract2["value"];
        fromAmino: ({ sender, code_id, label, msg, funds, salt, fix_msg }: AminoMsgInstantiateContract2["value"]) => MsgInstantiateContract2;
    };
    "/wasmx.wasmx.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds, dependencies }: MsgExecuteContract) => AminoMsgExecuteContract["value"];
        fromAmino: ({ sender, contract, msg, funds, dependencies }: AminoMsgExecuteContract["value"]) => MsgExecuteContract;
    };
    "/wasmx.wasmx.MsgExecuteWithOriginContract": {
        aminoType: string;
        toAmino: ({ origin, sender, contract, msg, funds }: MsgExecuteWithOriginContract) => AminoMsgExecuteWithOriginContract["value"];
        fromAmino: ({ origin, sender, contract, msg, funds }: AminoMsgExecuteWithOriginContract["value"]) => MsgExecuteWithOriginContract;
    };
    "/wasmx.wasmx.MsgExecuteDelegateContract": {
        aminoType: string;
        toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: MsgExecuteDelegateContract) => AminoMsgExecuteDelegateContract["value"];
        fromAmino: ({ origin, sender, caller, code_contract, storage_contract, msg, funds }: AminoMsgExecuteDelegateContract["value"]) => MsgExecuteDelegateContract;
    };
};
