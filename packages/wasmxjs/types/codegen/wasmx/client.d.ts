import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const wasmxAminoConverters: {
    "/wasmx.wasmx.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode }: import(".").MsgStoreCode) => {
            sender: string;
            wasm_byte_code: Uint8Array;
        };
        fromAmino: ({ sender, wasm_byte_code }: {
            sender: string;
            wasm_byte_code: Uint8Array;
        }) => import(".").MsgStoreCode;
    };
    "/wasmx.wasmx.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds }: import(".").MsgInstantiateContract) => {
            sender: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ sender, code_id, label, msg, funds }: {
            sender: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        }) => import(".").MsgInstantiateContract;
    };
    "/wasmx.wasmx.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds, salt, fixMsg }: import(".").MsgInstantiateContract2) => {
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
        fromAmino: ({ sender, code_id, label, msg, funds, salt, fix_msg }: {
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
        }) => import(".").MsgInstantiateContract2;
    };
    "/wasmx.wasmx.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds, dependencies }: import(".").MsgExecuteContract) => {
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            dependencies: string[];
        };
        fromAmino: ({ sender, contract, msg, funds, dependencies }: {
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            dependencies: string[];
        }) => import(".").MsgExecuteContract;
    };
    "/wasmx.wasmx.MsgExecuteWithOriginContract": {
        aminoType: string;
        toAmino: ({ origin, sender, contract, msg, funds }: import(".").MsgExecuteWithOriginContract) => {
            origin: string;
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ origin, sender, contract, msg, funds }: {
            origin: string;
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        }) => import(".").MsgExecuteWithOriginContract;
    };
    "/wasmx.wasmx.MsgExecuteDelegateContract": {
        aminoType: string;
        toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: import(".").MsgExecuteDelegateContract) => {
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
        fromAmino: ({ origin, sender, caller, code_contract, storage_contract, msg, funds }: {
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
        }) => import(".").MsgExecuteDelegateContract;
    };
};
export declare const wasmxProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningWasmxClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningWasmxClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
