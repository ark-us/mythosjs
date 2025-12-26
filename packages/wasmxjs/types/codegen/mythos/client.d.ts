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
    "/mythos.websrv.v1.MsgRegisterRoute": {
        aminoType: string;
        toAmino: ({ authority, title, description, path, contractAddress }: import("./websrv/v1/tx").MsgRegisterRoute) => {
            authority: string;
            title: string;
            description: string;
            path: string;
            contract_address: string;
        };
        fromAmino: ({ authority, title, description, path, contract_address }: {
            authority: string;
            title: string;
            description: string;
            path: string;
            contract_address: string;
        }) => import("./websrv/v1/tx").MsgRegisterRoute;
    };
    "/mythos.websrv.v1.MsgDeregisterRoute": {
        aminoType: string;
        toAmino: ({ authority, title, description, path, contractAddress }: import("./websrv/v1/tx").MsgDeregisterRoute) => {
            authority: string;
            title: string;
            description: string;
            path: string;
            contract_address: string;
        };
        fromAmino: ({ authority, title, description, path, contract_address }: {
            authority: string;
            title: string;
            description: string;
            path: string;
            contract_address: string;
        }) => import("./websrv/v1/tx").MsgDeregisterRoute;
    };
    "/mythos.wasmx.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, byteCode, deps, metadata, source }: import(".").MsgStoreCode) => {
            sender: string;
            byte_code: Uint8Array;
            deps: string[];
            metadata: {
                name: string;
                categ: string[];
                icon: string;
                author: string;
                site: string;
                abi: Uint8Array;
                json_schema: string;
                origin: {
                    chain_id: string;
                    address: string;
                };
            };
            source: Uint8Array;
        };
        fromAmino: ({ sender, byte_code, deps, metadata, source }: {
            sender: string;
            byte_code: Uint8Array;
            deps: string[];
            metadata: {
                name: string;
                categ: string[];
                icon: string;
                author: string;
                site: string;
                abi: Uint8Array;
                json_schema: string;
                origin: {
                    chain_id: string;
                    address: string;
                };
            };
            source: Uint8Array;
        }) => import(".").MsgStoreCode;
    };
    "/mythos.wasmx.v1.MsgDeployCode": {
        aminoType: string;
        toAmino: ({ sender, byteCode, deps, metadata, msg, funds, label, source }: import(".").MsgDeployCode) => {
            sender: string;
            byte_code: Uint8Array;
            deps: string[];
            metadata: {
                name: string;
                categ: string[];
                icon: string;
                author: string;
                site: string;
                abi: Uint8Array;
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
            source: Uint8Array;
        };
        fromAmino: ({ sender, byte_code, deps, metadata, msg, funds, label, source }: {
            sender: string;
            byte_code: Uint8Array;
            deps: string[];
            metadata: {
                name: string;
                categ: string[];
                icon: string;
                author: string;
                site: string;
                abi: Uint8Array;
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
            source: Uint8Array;
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
    "/mythos.wasmx.v1.MsgCompileContract": {
        aminoType: string;
        toAmino: ({ authority, codeId, meteringOff }: import(".").MsgCompileContract) => {
            authority: string;
            codeId: string;
            metering_off: boolean;
        };
        fromAmino: ({ authority, codeId, metering_off }: {
            authority: string;
            codeId: string;
            metering_off: boolean;
        }) => import(".").MsgCompileContract;
    };
    "/mythos.wasmx.v1.MsgExecuteEth": {
        aminoType: string;
        toAmino: ({ data, sender }: import(".").MsgExecuteEth) => {
            data: Uint8Array;
            sender: string;
        };
        fromAmino: ({ data, sender }: {
            data: Uint8Array;
            sender: string;
        }) => import(".").MsgExecuteEth;
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
    "/mythos.network.v1.MsgGrpcSendRequest": {
        aminoType: string;
        toAmino: ({ authority, sender, contract, ipAddress, data, encoding }: import("./network/v1/tx").MsgGrpcSendRequest) => {
            authority: string;
            sender: string;
            contract: string;
            ip_address: string;
            data: Uint8Array;
            encoding: string;
        };
        fromAmino: ({ authority, sender, contract, ip_address, data, encoding }: {
            authority: string;
            sender: string;
            contract: string;
            ip_address: string;
            data: Uint8Array;
            encoding: string;
        }) => import("./network/v1/tx").MsgGrpcSendRequest;
    };
    "/mythos.network.v1.MsgStartTimeoutRequest": {
        aminoType: string;
        toAmino: ({ authority, sender, contract, delay, args, id }: import("./network/v1/tx").MsgStartTimeoutRequest) => {
            authority: string;
            sender: string;
            contract: string;
            delay: string;
            args: Uint8Array;
            id: string;
        };
        fromAmino: ({ authority, sender, contract, delay, args, id }: {
            authority: string;
            sender: string;
            contract: string;
            delay: string;
            args: Uint8Array;
            id: string;
        }) => import("./network/v1/tx").MsgStartTimeoutRequest;
    };
    "/mythos.network.v1.MsgCancelTimeoutRequest": {
        aminoType: string;
        toAmino: ({ authority, sender, id }: import("./network/v1/tx").MsgCancelTimeoutRequest) => {
            authority: string;
            sender: string;
            id: string;
        };
        fromAmino: ({ authority, sender, id }: {
            authority: string;
            sender: string;
            id: string;
        }) => import("./network/v1/tx").MsgCancelTimeoutRequest;
    };
    "/mythos.network.v1.MsgStartBackgroundProcessRequest": {
        aminoType: string;
        toAmino: ({ authority, sender, contract, args }: import("./network/v1/tx").MsgStartBackgroundProcessRequest) => {
            authority: string;
            sender: string;
            contract: string;
            args: Uint8Array;
        };
        fromAmino: ({ authority, sender, contract, args }: {
            authority: string;
            sender: string;
            contract: string;
            args: Uint8Array;
        }) => import("./network/v1/tx").MsgStartBackgroundProcessRequest;
    };
    "/mythos.network.v1.MsgMultiChainWrap": {
        aminoType: string;
        toAmino: ({ multiChainId, sender, data }: import("./network/v1/tx").MsgMultiChainWrap) => {
            multi_chain_id: string;
            sender: string;
            data: {
                type_url: string;
                value: Uint8Array;
            };
        };
        fromAmino: ({ multi_chain_id, sender, data }: {
            multi_chain_id: string;
            sender: string;
            data: {
                type_url: string;
                value: Uint8Array;
            };
        }) => import("./network/v1/tx").MsgMultiChainWrap;
    };
    "/mythos.network.v1.MsgReentryWithGoRoutine": {
        aminoType: string;
        toAmino: ({ authority, sender, contract, entryPoint, msg }: import("./network/v1/tx").MsgReentryWithGoRoutine) => {
            authority: string;
            sender: string;
            contract: string;
            entry_point: string;
            msg: Uint8Array;
        };
        fromAmino: ({ authority, sender, contract, entry_point, msg }: {
            authority: string;
            sender: string;
            contract: string;
            entry_point: string;
            msg: Uint8Array;
        }) => import("./network/v1/tx").MsgReentryWithGoRoutine;
    };
    "/mythos.network.v1.MsgReentry": {
        aminoType: string;
        toAmino: ({ authority, sender, contract, entryPoint, msg }: import("./network/v1/tx").MsgReentry) => {
            authority: string;
            sender: string;
            contract: string;
            entry_point: string;
            msg: Uint8Array;
        };
        fromAmino: ({ authority, sender, contract, entry_point, msg }: {
            authority: string;
            sender: string;
            contract: string;
            entry_point: string;
            msg: Uint8Array;
        }) => import("./network/v1/tx").MsgReentry;
    };
    "/mythos.network.v1.MsgGrpcReceiveRequest": {
        aminoType: string;
        toAmino: ({ authority, sender, contract, data, encoding }: import("./network/v1/tx").MsgGrpcReceiveRequest) => {
            authority: string;
            sender: string;
            contract: string;
            data: Uint8Array;
            encoding: string;
        };
        fromAmino: ({ authority, sender, contract, data, encoding }: {
            authority: string;
            sender: string;
            contract: string;
            data: Uint8Array;
            encoding: string;
        }) => import("./network/v1/tx").MsgGrpcReceiveRequest;
    };
    "/mythos.network.v1.MsgP2PReceiveMessageRequest": {
        aminoType: string;
        toAmino: ({ authority, sender, contract, data }: import("./network/v1/tx").MsgP2PReceiveMessageRequest) => {
            authority: string;
            sender: string;
            contract: string;
            data: Uint8Array;
        };
        fromAmino: ({ authority, sender, contract, data }: {
            authority: string;
            sender: string;
            contract: string;
            data: Uint8Array;
        }) => import("./network/v1/tx").MsgP2PReceiveMessageRequest;
    };
    "/mythos.network.v1.MsgExecuteAtomicTxRequest": {
        aminoType: string;
        toAmino: ({ txs, sender }: import("./network/v1/custom").MsgExecuteAtomicTxRequest) => {
            txs: Uint8Array[];
            sender: Uint8Array;
        };
        fromAmino: ({ txs, sender }: {
            txs: Uint8Array[];
            sender: Uint8Array;
        }) => import("./network/v1/custom").MsgExecuteAtomicTxRequest;
    };
    "/mythos.network.v1.MsgExecuteCrossChainCallRequest": {
        aminoType: string;
        toAmino: ({ authority, sender, from, to, msg, funds, dependencies, fromChainId, toChainId, isQuery, timeoutMs }: import("./network/v1/tx").MsgExecuteCrossChainCallRequest) => {
            authority: string;
            sender: string;
            from: string;
            to: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            dependencies: string[];
            from_chain_id: string;
            to_chain_id: string;
            is_query: boolean;
            timeout_ms: string;
        };
        fromAmino: ({ authority, sender, from, to, msg, funds, dependencies, from_chain_id, to_chain_id, is_query, timeout_ms }: {
            authority: string;
            sender: string;
            from: string;
            to: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
            dependencies: string[];
            from_chain_id: string;
            to_chain_id: string;
            is_query: boolean;
            timeout_ms: string;
        }) => import("./network/v1/tx").MsgExecuteCrossChainCallRequest;
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
