import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const mythosAminoConverters: {
    "/mythos.websrv.v1.MsgRegisterOAuthClient": {
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
    "/mythos.websrv.v1.MsgEditOAuthClient": {
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
    "/mythos.websrv.v1.MsgDeregisterOAuthClient": {
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
    "/mythos.wasmx.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, byteCode, deps, metadata }: import(".").MsgStoreCode) => {
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
        fromAmino: ({ sender, byte_code, deps, metadata }: {
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
        }) => import(".").MsgStoreCode;
    };
    "/mythos.wasmx.v1.MsgDeployCode": {
        aminoType: string;
        toAmino: ({ sender, byteCode, deps, metadata, msg, funds, label }: import(".").MsgDeployCode) => {
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
        fromAmino: ({ sender, byte_code, deps, metadata, msg, funds, label }: {
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
        }) => import(".").MsgDeployCode;
    };
    "/mythos.wasmx.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, codeId, msg, funds, label }: import(".").MsgInstantiateContract) => {
            sender: string;
            code_id: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            label: string;
        };
        fromAmino: ({ sender, code_id, msg, funds, label }: {
            sender: string;
            code_id: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            label: string;
        }) => import(".").MsgInstantiateContract;
    };
    "/mythos.wasmx.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, codeId, msg, funds, label, salt, fixMsg }: import(".").MsgInstantiateContract2) => {
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
        fromAmino: ({ sender, code_id, msg, funds, label, salt, fix_msg }: {
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
        }) => import(".").MsgInstantiateContract2;
    };
    "/mythos.wasmx.v1.MsgExecuteContract": {
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
    "/mythos.wasmx.v1.MsgExecuteWithOriginContract": {
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
    "/mythos.wasmx.v1.MsgExecuteDelegateContract": {
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
    "/mythos.wasmx.v1.MsgCompileContract": {
        aminoType: string;
        toAmino: ({ sender, codeId }: import(".").MsgCompileContract) => {
            sender: string;
            codeId: string;
        };
        fromAmino: ({ sender, codeId }: {
            sender: string;
            codeId: string;
        }) => import(".").MsgCompileContract;
    };
};
export declare const mythosProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningMythosClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningMythosClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
