import { AminoMsg } from "@cosmjs/amino";
import { MsgStoreCode, MsgDeployCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract, MsgCompileContract } from "./tx";
export interface AminoMsgStoreCode extends AminoMsg {
    type: "/mythos.wasmx.v1.MsgStoreCode";
    value: {
        sender: string;
        byte_code: Uint8Array;
        deps: string[];
        metadata: {
            name: string;
            categ: string[];
            icon: string;
            author: string;
            site: string;
            abi: string;
            json_schema: string;
            origin: {
                chain_id: string;
                address: string;
            };
        };
    };
}
export interface AminoMsgDeployCode extends AminoMsg {
    type: "/mythos.wasmx.v1.MsgDeployCode";
    value: {
        sender: string;
        byte_code: Uint8Array;
        deps: string[];
        metadata: {
            name: string;
            categ: string[];
            icon: string;
            author: string;
            site: string;
            abi: string;
            json_schema: string;
            origin: {
                chain_id: string;
                address: string;
            };
        };
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
        label: string;
    };
}
export interface AminoMsgInstantiateContract extends AminoMsg {
    type: "/mythos.wasmx.v1.MsgInstantiateContract";
    value: {
        sender: string;
        code_id: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
        label: string;
    };
}
export interface AminoMsgInstantiateContract2 extends AminoMsg {
    type: "/mythos.wasmx.v1.MsgInstantiateContract2";
    value: {
        sender: string;
        code_id: string;
        msg: Uint8Array;
        funds: {
            denom: string;
            amount: string;
        }[];
        label: string;
        salt: Uint8Array;
        fix_msg: boolean;
    };
}
export interface AminoMsgExecuteContract extends AminoMsg {
    type: "/mythos.wasmx.v1.MsgExecuteContract";
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
    type: "/mythos.wasmx.v1.MsgExecuteWithOriginContract";
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
    type: "/mythos.wasmx.v1.MsgExecuteDelegateContract";
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
export interface AminoMsgCompileContract extends AminoMsg {
    type: "/mythos.wasmx.v1.MsgCompileContract";
    value: {
        sender: string;
        codeId: string;
    };
}
export declare const AminoConverter: {
    "/mythos.wasmx.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, byteCode, deps, metadata }: MsgStoreCode) => AminoMsgStoreCode["value"];
        fromAmino: ({ sender, byte_code, deps, metadata }: AminoMsgStoreCode["value"]) => MsgStoreCode;
    };
    "/mythos.wasmx.v1.MsgDeployCode": {
        aminoType: string;
        toAmino: ({ sender, byteCode, deps, metadata, msg, funds, label }: MsgDeployCode) => AminoMsgDeployCode["value"];
        fromAmino: ({ sender, byte_code, deps, metadata, msg, funds, label }: AminoMsgDeployCode["value"]) => MsgDeployCode;
    };
    "/mythos.wasmx.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, codeId, msg, funds, label }: MsgInstantiateContract) => AminoMsgInstantiateContract["value"];
        fromAmino: ({ sender, code_id, msg, funds, label }: AminoMsgInstantiateContract["value"]) => MsgInstantiateContract;
    };
    "/mythos.wasmx.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, codeId, msg, funds, label, salt, fixMsg }: MsgInstantiateContract2) => AminoMsgInstantiateContract2["value"];
        fromAmino: ({ sender, code_id, msg, funds, label, salt, fix_msg }: AminoMsgInstantiateContract2["value"]) => MsgInstantiateContract2;
    };
    "/mythos.wasmx.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds, dependencies }: MsgExecuteContract) => AminoMsgExecuteContract["value"];
        fromAmino: ({ sender, contract, msg, funds, dependencies }: AminoMsgExecuteContract["value"]) => MsgExecuteContract;
    };
    "/mythos.wasmx.v1.MsgExecuteWithOriginContract": {
        aminoType: string;
        toAmino: ({ origin, sender, contract, msg, funds }: MsgExecuteWithOriginContract) => AminoMsgExecuteWithOriginContract["value"];
        fromAmino: ({ origin, sender, contract, msg, funds }: AminoMsgExecuteWithOriginContract["value"]) => MsgExecuteWithOriginContract;
    };
    "/mythos.wasmx.v1.MsgExecuteDelegateContract": {
        aminoType: string;
        toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: MsgExecuteDelegateContract) => AminoMsgExecuteDelegateContract["value"];
        fromAmino: ({ origin, sender, caller, code_contract, storage_contract, msg, funds }: AminoMsgExecuteDelegateContract["value"]) => MsgExecuteDelegateContract;
    };
    "/mythos.wasmx.v1.MsgCompileContract": {
        aminoType: string;
        toAmino: ({ sender, codeId }: MsgCompileContract) => AminoMsgCompileContract["value"];
        fromAmino: ({ sender, codeId }: AminoMsgCompileContract["value"]) => MsgCompileContract;
    };
};
