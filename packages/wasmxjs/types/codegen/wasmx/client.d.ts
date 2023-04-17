import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const wasmxAminoConverters: {
    "/wasmx.websrv.v1.MsgRegisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, domain }: import("./websrv/v1/tx").MsgRegisterOAuthClient) => {
            owner: string;
            domain: string;
        };
        fromAmino: ({ owner, domain }: {
            owner: string;
            domain: string;
        }) => import("./websrv/v1/tx").MsgRegisterOAuthClient;
    };
    "/wasmx.websrv.v1.MsgEditOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId, domain }: import("./websrv/v1/tx").MsgEditOAuthClient) => {
            owner: string;
            client_id: string;
            domain: string;
        };
        fromAmino: ({ owner, client_id, domain }: {
            owner: string;
            client_id: string;
            domain: string;
        }) => import("./websrv/v1/tx").MsgEditOAuthClient;
    };
    "/wasmx.websrv.v1.MsgDeregisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId }: import("./websrv/v1/tx").MsgDeregisterOAuthClient) => {
            owner: string;
            client_id: string;
        };
        fromAmino: ({ owner, client_id }: {
            owner: string;
            client_id: string;
        }) => import("./websrv/v1/tx").MsgDeregisterOAuthClient;
    };
    "/wasmx.wasmx.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode }: import("./wasmx/v1/tx").MsgStoreCode) => {
            sender: string;
            wasm_byte_code: Uint8Array;
        };
        fromAmino: ({ sender, wasm_byte_code }: {
            sender: string;
            wasm_byte_code: Uint8Array;
        }) => import("./wasmx/v1/tx").MsgStoreCode;
    };
    "/wasmx.wasmx.v1.MsgStoreCodeEvm": {
        aminoType: string;
        toAmino: ({ sender, evmByteCode }: import("./wasmx/v1/tx").MsgStoreCodeEvm) => {
            sender: string;
            evm_byte_code: Uint8Array;
        };
        fromAmino: ({ sender, evm_byte_code }: {
            sender: string;
            evm_byte_code: Uint8Array;
        }) => import("./wasmx/v1/tx").MsgStoreCodeEvm;
    };
    "/wasmx.wasmx.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds }: import("./wasmx/v1/tx").MsgInstantiateContract) => {
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
        }) => import("./wasmx/v1/tx").MsgInstantiateContract;
    };
    "/wasmx.wasmx.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, codeId, label, msg, funds, salt, fixMsg }: import("./wasmx/v1/tx").MsgInstantiateContract2) => {
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
        }) => import("./wasmx/v1/tx").MsgInstantiateContract2;
    };
    "/wasmx.wasmx.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds, dependencies }: import("./wasmx/v1/tx").MsgExecuteContract) => {
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
        }) => import("./wasmx/v1/tx").MsgExecuteContract;
    };
    "/wasmx.wasmx.v1.MsgExecuteWithOriginContract": {
        aminoType: string;
        toAmino: ({ origin, sender, contract, msg, funds }: import("./wasmx/v1/tx").MsgExecuteWithOriginContract) => {
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
        }) => import("./wasmx/v1/tx").MsgExecuteWithOriginContract;
    };
    "/wasmx.wasmx.v1.MsgExecuteDelegateContract": {
        aminoType: string;
        toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: import("./wasmx/v1/tx").MsgExecuteDelegateContract) => {
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
        }) => import("./wasmx/v1/tx").MsgExecuteDelegateContract;
    };
    "/wasmx.wasmx.v1.MsgCompileContract": {
        aminoType: string;
        toAmino: ({ sender, codeId }: import("./wasmx/v1/tx").MsgCompileContract) => {
            sender: string;
            codeId: string;
        };
        fromAmino: ({ sender, codeId }: {
            sender: string;
            codeId: string;
        }) => import("./wasmx/v1/tx").MsgCompileContract;
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
