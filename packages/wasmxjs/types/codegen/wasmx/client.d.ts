import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const wasmxAminoConverters: {
    "/wasmx.websrv.MsgRegisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, domain }: import("./websrv/tx").MsgRegisterOAuthClient) => {
            owner: string;
            domain: string;
        };
        fromAmino: ({ owner, domain }: {
            owner: string;
            domain: string;
        }) => import("./websrv/tx").MsgRegisterOAuthClient;
    };
    "/wasmx.websrv.MsgEditOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId, domain }: import("./websrv/tx").MsgEditOAuthClient) => {
            owner: string;
            client_id: string;
            domain: string;
        };
        fromAmino: ({ owner, client_id, domain }: {
            owner: string;
            client_id: string;
            domain: string;
        }) => import("./websrv/tx").MsgEditOAuthClient;
    };
    "/wasmx.websrv.MsgDeregisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId }: import("./websrv/tx").MsgDeregisterOAuthClient) => {
            owner: string;
            client_id: string;
        };
        fromAmino: ({ owner, client_id }: {
            owner: string;
            client_id: string;
        }) => import("./websrv/tx").MsgDeregisterOAuthClient;
    };
    "/wasmx.wasmx.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode }: import("./wasmx/tx").MsgStoreCode) => {
            sender: string;
            wasm_byte_code: Uint8Array;
        };
        fromAmino: ({ sender, wasm_byte_code }: {
            sender: string;
            wasm_byte_code: Uint8Array;
        }) => import("./wasmx/tx").MsgStoreCode;
    };
    "/wasmx.wasmx.MsgStoreCodeEvm": {
        aminoType: string;
        toAmino: ({ sender, evmByteCode }: import("./wasmx/tx").MsgStoreCodeEvm) => {
            sender: string;
            evm_byte_code: Uint8Array;
        };
        fromAmino: ({ sender, evm_byte_code }: {
            sender: string;
            evm_byte_code: Uint8Array;
        }) => import("./wasmx/tx").MsgStoreCodeEvm;
    };
    "/wasmx.wasmx.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds }: import("./wasmx/tx").MsgInstantiateContract) => {
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
        }) => import("./wasmx/tx").MsgInstantiateContract;
    };
    "/wasmx.wasmx.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds, salt, fixMsg }: import("./wasmx/tx").MsgInstantiateContract2) => {
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
        }) => import("./wasmx/tx").MsgInstantiateContract2;
    };
    "/wasmx.wasmx.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds, dependencies }: import("./wasmx/tx").MsgExecuteContract) => {
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
        }) => import("./wasmx/tx").MsgExecuteContract;
    };
    "/wasmx.wasmx.MsgExecuteWithOriginContract": {
        aminoType: string;
        toAmino: ({ origin, sender, contract, msg, funds }: import("./wasmx/tx").MsgExecuteWithOriginContract) => {
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
        }) => import("./wasmx/tx").MsgExecuteWithOriginContract;
    };
    "/wasmx.wasmx.MsgExecuteDelegateContract": {
        aminoType: string;
        toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: import("./wasmx/tx").MsgExecuteDelegateContract) => {
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
        }) => import("./wasmx/tx").MsgExecuteDelegateContract;
    };
    "/wasmx.wasmx.MsgCompileContract": {
        aminoType: string;
        toAmino: ({ sender, codeId }: import("./wasmx/tx").MsgCompileContract) => {
            sender: string;
            codeId: string;
        };
        fromAmino: ({ sender, codeId }: {
            sender: string;
            codeId: string;
        }) => import("./wasmx/tx").MsgCompileContract;
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
