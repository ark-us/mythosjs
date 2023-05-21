import * as _18 from "./wasmx/v1/contract";
import * as _19 from "./wasmx/v1/genesis";
import * as _20 from "./wasmx/v1/params";
import * as _21 from "./wasmx/v1/query";
import * as _22 from "./wasmx/v1/tx";
import * as _23 from "./websrv/v1/genesis";
import * as _24 from "./websrv/v1/params";
import * as _25 from "./websrv/v1/proposal";
import * as _26 from "./websrv/v1/query";
import * as _27 from "./websrv/v1/tx";
import * as _44 from "./wasmx/v1/query.rpc.Query";
import * as _45 from "./websrv/v1/query.rpc.Query";
import * as _46 from "./wasmx/v1/tx.rpc.msg";
import * as _47 from "./websrv/v1/tx.rpc.msg";
export declare namespace mythos {
    namespace wasmx {
        const v1: {
            MsgClientImpl: typeof _46.MsgClientImpl;
            QueryClientImpl: typeof _44.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _21.QueryContractInfoRequest): Promise<_21.QueryContractInfoResponse>;
                contractsByCode(request: _21.QueryContractsByCodeRequest): Promise<_21.QueryContractsByCodeResponse>;
                allContractState(request: _21.QueryAllContractStateRequest): Promise<_21.QueryAllContractStateResponse>;
                rawContractState(request: _21.QueryRawContractStateRequest): Promise<_21.QueryRawContractStateResponse>;
                smartContractCall(request: _21.QuerySmartContractCallRequest): Promise<_21.QuerySmartContractCallResponse>;
                code(request: _21.QueryCodeRequest): Promise<_21.QueryCodeResponse>;
                codeInfo(request: _21.QueryCodeInfoRequest): Promise<_21.QueryCodeInfoResponse>;
                codes(request?: _21.QueryCodesRequest): Promise<_21.QueryCodesResponse>;
                params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                contractsByCreator(request: _21.QueryContractsByCreatorRequest): Promise<_21.QueryContractsByCreatorResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _22.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deployCode(value: _22.MsgDeployCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _22.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _22.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _22.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeWithOriginContract(value: _22.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeDelegateContract(value: _22.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    compileContract(value: _22.MsgCompileContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _22.MsgStoreCode): {
                        typeUrl: string;
                        value: _22.MsgStoreCode;
                    };
                    deployCode(value: _22.MsgDeployCode): {
                        typeUrl: string;
                        value: _22.MsgDeployCode;
                    };
                    instantiateContract(value: _22.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _22.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _22.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _22.MsgInstantiateContract2;
                    };
                    executeContract(value: _22.MsgExecuteContract): {
                        typeUrl: string;
                        value: _22.MsgExecuteContract;
                    };
                    executeWithOriginContract(value: _22.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: _22.MsgExecuteWithOriginContract;
                    };
                    executeDelegateContract(value: _22.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: _22.MsgExecuteDelegateContract;
                    };
                    compileContract(value: _22.MsgCompileContract): {
                        typeUrl: string;
                        value: _22.MsgCompileContract;
                    };
                };
                toJSON: {
                    storeCode(value: _22.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deployCode(value: _22.MsgDeployCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _22.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _22.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _22.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeWithOriginContract(value: _22.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeDelegateContract(value: _22.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    compileContract(value: _22.MsgCompileContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _22.MsgStoreCode;
                    };
                    deployCode(value: any): {
                        typeUrl: string;
                        value: _22.MsgDeployCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _22.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _22.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _22.MsgExecuteContract;
                    };
                    executeWithOriginContract(value: any): {
                        typeUrl: string;
                        value: _22.MsgExecuteWithOriginContract;
                    };
                    executeDelegateContract(value: any): {
                        typeUrl: string;
                        value: _22.MsgExecuteDelegateContract;
                    };
                    compileContract(value: any): {
                        typeUrl: string;
                        value: _22.MsgCompileContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _22.MsgStoreCode): {
                        typeUrl: string;
                        value: _22.MsgStoreCode;
                    };
                    deployCode(value: _22.MsgDeployCode): {
                        typeUrl: string;
                        value: _22.MsgDeployCode;
                    };
                    instantiateContract(value: _22.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _22.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _22.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _22.MsgInstantiateContract2;
                    };
                    executeContract(value: _22.MsgExecuteContract): {
                        typeUrl: string;
                        value: _22.MsgExecuteContract;
                    };
                    executeWithOriginContract(value: _22.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: _22.MsgExecuteWithOriginContract;
                    };
                    executeDelegateContract(value: _22.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: _22.MsgExecuteDelegateContract;
                    };
                    compileContract(value: _22.MsgCompileContract): {
                        typeUrl: string;
                        value: _22.MsgCompileContract;
                    };
                };
            };
            AminoConverter: {
                "/mythos.wasmx.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, byteCode, deps, metadata }: _22.MsgStoreCode) => {
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
                    }) => _22.MsgStoreCode;
                };
                "/mythos.wasmx.v1.MsgDeployCode": {
                    aminoType: string;
                    toAmino: ({ sender, byteCode, deps, metadata, msg, funds, label }: _22.MsgDeployCode) => {
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
                    }) => _22.MsgDeployCode;
                };
                "/mythos.wasmx.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, msg, funds, label }: _22.MsgInstantiateContract) => {
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
                    }) => _22.MsgInstantiateContract;
                };
                "/mythos.wasmx.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, msg, funds, label, salt, fixMsg }: _22.MsgInstantiateContract2) => {
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
                    }) => _22.MsgInstantiateContract2;
                };
                "/mythos.wasmx.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds, dependencies }: _22.MsgExecuteContract) => {
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
                    }) => _22.MsgExecuteContract;
                };
                "/mythos.wasmx.v1.MsgExecuteWithOriginContract": {
                    aminoType: string;
                    toAmino: ({ origin, sender, contract, msg, funds }: _22.MsgExecuteWithOriginContract) => {
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
                    }) => _22.MsgExecuteWithOriginContract;
                };
                "/mythos.wasmx.v1.MsgExecuteDelegateContract": {
                    aminoType: string;
                    toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: _22.MsgExecuteDelegateContract) => {
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
                    }) => _22.MsgExecuteDelegateContract;
                };
                "/mythos.wasmx.v1.MsgCompileContract": {
                    aminoType: string;
                    toAmino: ({ sender, codeId }: _22.MsgCompileContract) => {
                        sender: string;
                        codeId: string;
                    };
                    fromAmino: ({ sender, codeId }: {
                        sender: string;
                        codeId: string;
                    }) => _22.MsgCompileContract;
                };
            };
            MsgStoreCode: {
                encode(message: _22.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgStoreCode;
                fromJSON(object: any): _22.MsgStoreCode;
                toJSON(message: _22.MsgStoreCode): unknown;
                fromPartial(object: Partial<_22.MsgStoreCode>): _22.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _22.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgStoreCodeResponse;
                fromJSON(object: any): _22.MsgStoreCodeResponse;
                toJSON(message: _22.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_22.MsgStoreCodeResponse>): _22.MsgStoreCodeResponse;
            };
            MsgDeployCode: {
                encode(message: _22.MsgDeployCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgDeployCode;
                fromJSON(object: any): _22.MsgDeployCode;
                toJSON(message: _22.MsgDeployCode): unknown;
                fromPartial(object: Partial<_22.MsgDeployCode>): _22.MsgDeployCode;
            };
            MsgDeployCodeResponse: {
                encode(message: _22.MsgDeployCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgDeployCodeResponse;
                fromJSON(object: any): _22.MsgDeployCodeResponse;
                toJSON(message: _22.MsgDeployCodeResponse): unknown;
                fromPartial(object: Partial<_22.MsgDeployCodeResponse>): _22.MsgDeployCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _22.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgInstantiateContract;
                fromJSON(object: any): _22.MsgInstantiateContract;
                toJSON(message: _22.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_22.MsgInstantiateContract>): _22.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _22.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgInstantiateContract2;
                fromJSON(object: any): _22.MsgInstantiateContract2;
                toJSON(message: _22.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_22.MsgInstantiateContract2>): _22.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _22.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgInstantiateContractResponse;
                fromJSON(object: any): _22.MsgInstantiateContractResponse;
                toJSON(message: _22.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_22.MsgInstantiateContractResponse>): _22.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _22.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgInstantiateContract2Response;
                fromJSON(object: any): _22.MsgInstantiateContract2Response;
                toJSON(message: _22.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_22.MsgInstantiateContract2Response>): _22.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _22.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgExecuteContract;
                fromJSON(object: any): _22.MsgExecuteContract;
                toJSON(message: _22.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_22.MsgExecuteContract>): _22.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _22.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgExecuteContractResponse;
                fromJSON(object: any): _22.MsgExecuteContractResponse;
                toJSON(message: _22.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_22.MsgExecuteContractResponse>): _22.MsgExecuteContractResponse;
            };
            MsgExecuteWithOriginContract: {
                encode(message: _22.MsgExecuteWithOriginContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgExecuteWithOriginContract;
                fromJSON(object: any): _22.MsgExecuteWithOriginContract;
                toJSON(message: _22.MsgExecuteWithOriginContract): unknown;
                fromPartial(object: Partial<_22.MsgExecuteWithOriginContract>): _22.MsgExecuteWithOriginContract;
            };
            MsgExecuteDelegateContract: {
                encode(message: _22.MsgExecuteDelegateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgExecuteDelegateContract;
                fromJSON(object: any): _22.MsgExecuteDelegateContract;
                toJSON(message: _22.MsgExecuteDelegateContract): unknown;
                fromPartial(object: Partial<_22.MsgExecuteDelegateContract>): _22.MsgExecuteDelegateContract;
            };
            MsgExecuteDelegateContractResponse: {
                encode(message: _22.MsgExecuteDelegateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgExecuteDelegateContractResponse;
                fromJSON(object: any): _22.MsgExecuteDelegateContractResponse;
                toJSON(message: _22.MsgExecuteDelegateContractResponse): unknown;
                fromPartial(object: Partial<_22.MsgExecuteDelegateContractResponse>): _22.MsgExecuteDelegateContractResponse;
            };
            MsgCompileContract: {
                encode(message: _22.MsgCompileContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgCompileContract;
                fromJSON(object: any): _22.MsgCompileContract;
                toJSON(message: _22.MsgCompileContract): unknown;
                fromPartial(object: Partial<_22.MsgCompileContract>): _22.MsgCompileContract;
            };
            MsgCompileContractResponse: {
                encode(_: _22.MsgCompileContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgCompileContractResponse;
                fromJSON(_: any): _22.MsgCompileContractResponse;
                toJSON(_: _22.MsgCompileContractResponse): unknown;
                fromPartial(_: Partial<_22.MsgCompileContractResponse>): _22.MsgCompileContractResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _21.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryContractInfoRequest;
                fromJSON(object: any): _21.QueryContractInfoRequest;
                toJSON(message: _21.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_21.QueryContractInfoRequest>): _21.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _21.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryContractInfoResponse;
                fromJSON(object: any): _21.QueryContractInfoResponse;
                toJSON(message: _21.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_21.QueryContractInfoResponse>): _21.QueryContractInfoResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _21.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryContractsByCodeRequest;
                fromJSON(object: any): _21.QueryContractsByCodeRequest;
                toJSON(message: _21.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_21.QueryContractsByCodeRequest>): _21.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _21.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryContractsByCodeResponse;
                fromJSON(object: any): _21.QueryContractsByCodeResponse;
                toJSON(message: _21.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_21.QueryContractsByCodeResponse>): _21.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _21.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryAllContractStateRequest;
                fromJSON(object: any): _21.QueryAllContractStateRequest;
                toJSON(message: _21.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_21.QueryAllContractStateRequest>): _21.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _21.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryAllContractStateResponse;
                fromJSON(object: any): _21.QueryAllContractStateResponse;
                toJSON(message: _21.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_21.QueryAllContractStateResponse>): _21.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _21.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryRawContractStateRequest;
                fromJSON(object: any): _21.QueryRawContractStateRequest;
                toJSON(message: _21.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_21.QueryRawContractStateRequest>): _21.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _21.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryRawContractStateResponse;
                fromJSON(object: any): _21.QueryRawContractStateResponse;
                toJSON(message: _21.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_21.QueryRawContractStateResponse>): _21.QueryRawContractStateResponse;
            };
            QuerySmartContractCallRequest: {
                encode(message: _21.QuerySmartContractCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySmartContractCallRequest;
                fromJSON(object: any): _21.QuerySmartContractCallRequest;
                toJSON(message: _21.QuerySmartContractCallRequest): unknown;
                fromPartial(object: Partial<_21.QuerySmartContractCallRequest>): _21.QuerySmartContractCallRequest;
            };
            QuerySmartContractCallResponse: {
                encode(message: _21.QuerySmartContractCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QuerySmartContractCallResponse;
                fromJSON(object: any): _21.QuerySmartContractCallResponse;
                toJSON(message: _21.QuerySmartContractCallResponse): unknown;
                fromPartial(object: Partial<_21.QuerySmartContractCallResponse>): _21.QuerySmartContractCallResponse;
            };
            QueryCodeRequest: {
                encode(message: _21.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryCodeRequest;
                fromJSON(object: any): _21.QueryCodeRequest;
                toJSON(message: _21.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_21.QueryCodeRequest>): _21.QueryCodeRequest;
            };
            QueryCodeResponse: {
                encode(message: _21.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryCodeResponse;
                fromJSON(object: any): _21.QueryCodeResponse;
                toJSON(message: _21.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_21.QueryCodeResponse>): _21.QueryCodeResponse;
            };
            QueryCodeInfoRequest: {
                encode(message: _21.QueryCodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryCodeInfoRequest;
                fromJSON(object: any): _21.QueryCodeInfoRequest;
                toJSON(message: _21.QueryCodeInfoRequest): unknown;
                fromPartial(object: Partial<_21.QueryCodeInfoRequest>): _21.QueryCodeInfoRequest;
            };
            QueryCodeInfoResponse: {
                encode(message: _21.QueryCodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryCodeInfoResponse;
                fromJSON(object: any): _21.QueryCodeInfoResponse;
                toJSON(message: _21.QueryCodeInfoResponse): unknown;
                fromPartial(object: Partial<_21.QueryCodeInfoResponse>): _21.QueryCodeInfoResponse;
            };
            QueryCodesRequest: {
                encode(message: _21.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryCodesRequest;
                fromJSON(object: any): _21.QueryCodesRequest;
                toJSON(message: _21.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_21.QueryCodesRequest>): _21.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _21.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryCodesResponse;
                fromJSON(object: any): _21.QueryCodesResponse;
                toJSON(message: _21.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_21.QueryCodesResponse>): _21.QueryCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _21.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryParamsRequest;
                fromJSON(_: any): _21.QueryParamsRequest;
                toJSON(_: _21.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _21.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryParamsResponse;
                fromJSON(object: any): _21.QueryParamsResponse;
                toJSON(message: _21.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _21.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryContractsByCreatorRequest;
                fromJSON(object: any): _21.QueryContractsByCreatorRequest;
                toJSON(message: _21.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_21.QueryContractsByCreatorRequest>): _21.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _21.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.QueryContractsByCreatorResponse;
                fromJSON(object: any): _21.QueryContractsByCreatorResponse;
                toJSON(message: _21.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_21.QueryContractsByCreatorResponse>): _21.QueryContractsByCreatorResponse;
            };
            Params: {
                encode(_: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Params;
                fromJSON(_: any): _20.Params;
                toJSON(_: _20.Params): unknown;
                fromPartial(_: Partial<_20.Params>): _20.Params;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GenesisState;
                fromJSON(object: any): _19.GenesisState;
                toJSON(message: _19.GenesisState): unknown;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            };
            SystemContract: {
                encode(message: _19.SystemContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SystemContract;
                fromJSON(object: any): _19.SystemContract;
                toJSON(message: _19.SystemContract): unknown;
                fromPartial(object: Partial<_19.SystemContract>): _19.SystemContract;
            };
            Code: {
                encode(message: _19.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Code;
                fromJSON(object: any): _19.Code;
                toJSON(message: _19.Code): unknown;
                fromPartial(object: Partial<_19.Code>): _19.Code;
            };
            Contract: {
                encode(message: _19.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Contract;
                fromJSON(object: any): _19.Contract;
                toJSON(message: _19.Contract): unknown;
                fromPartial(object: Partial<_19.Contract>): _19.Contract;
            };
            Sequence: {
                encode(message: _19.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Sequence;
                fromJSON(object: any): _19.Sequence;
                toJSON(message: _19.Sequence): unknown;
                fromPartial(object: Partial<_19.Sequence>): _19.Sequence;
            };
            ContractStorage: {
                encode(message: _18.ContractStorage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ContractStorage;
                fromJSON(object: any): _18.ContractStorage;
                toJSON(message: _18.ContractStorage): unknown;
                fromPartial(object: Partial<_18.ContractStorage>): _18.ContractStorage;
            };
            CodeMetadata: {
                encode(message: _18.CodeMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CodeMetadata;
                fromJSON(object: any): _18.CodeMetadata;
                toJSON(message: _18.CodeMetadata): unknown;
                fromPartial(object: Partial<_18.CodeMetadata>): _18.CodeMetadata;
            };
            CodeInfo: {
                encode(message: _18.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CodeInfo;
                fromJSON(object: any): _18.CodeInfo;
                toJSON(message: _18.CodeInfo): unknown;
                fromPartial(object: Partial<_18.CodeInfo>): _18.CodeInfo;
            };
            CodeOrigin: {
                encode(message: _18.CodeOrigin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CodeOrigin;
                fromJSON(object: any): _18.CodeOrigin;
                toJSON(message: _18.CodeOrigin): unknown;
                fromPartial(object: Partial<_18.CodeOrigin>): _18.CodeOrigin;
            };
            ContractInfo: {
                encode(message: _18.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ContractInfo;
                fromJSON(object: any): _18.ContractInfo;
                toJSON(message: _18.ContractInfo): unknown;
                fromPartial(object: Partial<_18.ContractInfo>): _18.ContractInfo;
            };
            AbsoluteTxPosition: {
                encode(message: _18.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AbsoluteTxPosition;
                fromJSON(object: any): _18.AbsoluteTxPosition;
                toJSON(message: _18.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_18.AbsoluteTxPosition>): _18.AbsoluteTxPosition;
            };
        };
    }
    namespace websrv {
        const v1: {
            MsgClientImpl: typeof _47.MsgClientImpl;
            QueryClientImpl: typeof _45.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                httpGet(request: _26.QueryHttpRequestGet): Promise<_26.QueryHttpResponseGet>;
                contractByRoute(request: _26.QueryContractByRouteRequest): Promise<_26.QueryContractByRouteResponse>;
                routeByContract(request: _26.QueryRouteByContractRequest): Promise<_26.QueryRouteByContractResponse>;
                params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                getAllOauthClients(request?: _26.QueryGetAllOauthClientsRequest): Promise<_26.QueryGetAllOauthClientsResponse>;
                getOauthClient(request: _26.QueryGetOauthClientRequest): Promise<_26.QueryGetOauthClientResponse>;
                getOauthClientsByOwner(request: _26.QueryGetOauthClientsByOwnerRequest): Promise<_26.QueryGetOauthClientsByOwnerResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerOAuthClient(value: _27.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editOAuthClient(value: _27.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregisterOAuthClient(value: _27.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerOAuthClient(value: _27.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: _27.MsgRegisterOAuthClient;
                    };
                    editOAuthClient(value: _27.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: _27.MsgEditOAuthClient;
                    };
                    deregisterOAuthClient(value: _27.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: _27.MsgDeregisterOAuthClient;
                    };
                };
                toJSON: {
                    registerOAuthClient(value: _27.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editOAuthClient(value: _27.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deregisterOAuthClient(value: _27.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerOAuthClient(value: any): {
                        typeUrl: string;
                        value: _27.MsgRegisterOAuthClient;
                    };
                    editOAuthClient(value: any): {
                        typeUrl: string;
                        value: _27.MsgEditOAuthClient;
                    };
                    deregisterOAuthClient(value: any): {
                        typeUrl: string;
                        value: _27.MsgDeregisterOAuthClient;
                    };
                };
                fromPartial: {
                    registerOAuthClient(value: _27.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: _27.MsgRegisterOAuthClient;
                    };
                    editOAuthClient(value: _27.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: _27.MsgEditOAuthClient;
                    };
                    deregisterOAuthClient(value: _27.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: _27.MsgDeregisterOAuthClient;
                    };
                };
            };
            AminoConverter: {
                "/mythos.websrv.v1.MsgRegisterOAuthClient": {
                    aminoType: string;
                    toAmino: ({ owner, domain }: _27.MsgRegisterOAuthClient) => {
                        owner: string;
                        domain: string;
                    };
                    fromAmino: ({ owner, domain }: {
                        owner: string;
                        domain: string;
                    }) => _27.MsgRegisterOAuthClient;
                };
                "/mythos.websrv.v1.MsgEditOAuthClient": {
                    aminoType: string;
                    toAmino: ({ owner, clientId, domain }: _27.MsgEditOAuthClient) => {
                        owner: string;
                        client_id: string;
                        domain: string;
                    };
                    fromAmino: ({ owner, client_id, domain }: {
                        owner: string;
                        client_id: string;
                        domain: string;
                    }) => _27.MsgEditOAuthClient;
                };
                "/mythos.websrv.v1.MsgDeregisterOAuthClient": {
                    aminoType: string;
                    toAmino: ({ owner, clientId }: _27.MsgDeregisterOAuthClient) => {
                        owner: string;
                        client_id: string;
                    };
                    fromAmino: ({ owner, client_id }: {
                        owner: string;
                        client_id: string;
                    }) => _27.MsgDeregisterOAuthClient;
                };
            };
            MsgRegisterOAuthClient: {
                encode(message: _27.MsgRegisterOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgRegisterOAuthClient;
                fromJSON(object: any): _27.MsgRegisterOAuthClient;
                toJSON(message: _27.MsgRegisterOAuthClient): unknown;
                fromPartial(object: Partial<_27.MsgRegisterOAuthClient>): _27.MsgRegisterOAuthClient;
            };
            MsgRegisterOAuthClientResponse: {
                encode(message: _27.MsgRegisterOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgRegisterOAuthClientResponse;
                fromJSON(object: any): _27.MsgRegisterOAuthClientResponse;
                toJSON(message: _27.MsgRegisterOAuthClientResponse): unknown;
                fromPartial(object: Partial<_27.MsgRegisterOAuthClientResponse>): _27.MsgRegisterOAuthClientResponse;
            };
            MsgEditOAuthClient: {
                encode(message: _27.MsgEditOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgEditOAuthClient;
                fromJSON(object: any): _27.MsgEditOAuthClient;
                toJSON(message: _27.MsgEditOAuthClient): unknown;
                fromPartial(object: Partial<_27.MsgEditOAuthClient>): _27.MsgEditOAuthClient;
            };
            MsgEditOAuthClientResponse: {
                encode(_: _27.MsgEditOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgEditOAuthClientResponse;
                fromJSON(_: any): _27.MsgEditOAuthClientResponse;
                toJSON(_: _27.MsgEditOAuthClientResponse): unknown;
                fromPartial(_: Partial<_27.MsgEditOAuthClientResponse>): _27.MsgEditOAuthClientResponse;
            };
            MsgDeregisterOAuthClient: {
                encode(message: _27.MsgDeregisterOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgDeregisterOAuthClient;
                fromJSON(object: any): _27.MsgDeregisterOAuthClient;
                toJSON(message: _27.MsgDeregisterOAuthClient): unknown;
                fromPartial(object: Partial<_27.MsgDeregisterOAuthClient>): _27.MsgDeregisterOAuthClient;
            };
            MsgDeregisterOAuthClientResponse: {
                encode(_: _27.MsgDeregisterOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgDeregisterOAuthClientResponse;
                fromJSON(_: any): _27.MsgDeregisterOAuthClientResponse;
                toJSON(_: _27.MsgDeregisterOAuthClientResponse): unknown;
                fromPartial(_: Partial<_27.MsgDeregisterOAuthClientResponse>): _27.MsgDeregisterOAuthClientResponse;
            };
            QueryContractByRouteRequest: {
                encode(message: _26.QueryContractByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryContractByRouteRequest;
                fromJSON(object: any): _26.QueryContractByRouteRequest;
                toJSON(message: _26.QueryContractByRouteRequest): unknown;
                fromPartial(object: Partial<_26.QueryContractByRouteRequest>): _26.QueryContractByRouteRequest;
            };
            QueryContractByRouteResponse: {
                encode(message: _26.QueryContractByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryContractByRouteResponse;
                fromJSON(object: any): _26.QueryContractByRouteResponse;
                toJSON(message: _26.QueryContractByRouteResponse): unknown;
                fromPartial(object: Partial<_26.QueryContractByRouteResponse>): _26.QueryContractByRouteResponse;
            };
            QueryRouteByContractRequest: {
                encode(message: _26.QueryRouteByContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryRouteByContractRequest;
                fromJSON(object: any): _26.QueryRouteByContractRequest;
                toJSON(message: _26.QueryRouteByContractRequest): unknown;
                fromPartial(object: Partial<_26.QueryRouteByContractRequest>): _26.QueryRouteByContractRequest;
            };
            QueryRouteByContractResponse: {
                encode(message: _26.QueryRouteByContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryRouteByContractResponse;
                fromJSON(object: any): _26.QueryRouteByContractResponse;
                toJSON(message: _26.QueryRouteByContractResponse): unknown;
                fromPartial(object: Partial<_26.QueryRouteByContractResponse>): _26.QueryRouteByContractResponse;
            };
            QueryHttpRequestGet: {
                encode(message: _26.QueryHttpRequestGet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryHttpRequestGet;
                fromJSON(object: any): _26.QueryHttpRequestGet;
                toJSON(message: _26.QueryHttpRequestGet): unknown;
                fromPartial(object: Partial<_26.QueryHttpRequestGet>): _26.QueryHttpRequestGet;
            };
            QueryHttpResponseGet: {
                encode(message: _26.QueryHttpResponseGet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryHttpResponseGet;
                fromJSON(object: any): _26.QueryHttpResponseGet;
                toJSON(message: _26.QueryHttpResponseGet): unknown;
                fromPartial(object: Partial<_26.QueryHttpResponseGet>): _26.QueryHttpResponseGet;
            };
            QueryParamsRequest: {
                encode(_: _26.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsRequest;
                fromJSON(_: any): _26.QueryParamsRequest;
                toJSON(_: _26.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _26.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsResponse;
                fromJSON(object: any): _26.QueryParamsResponse;
                toJSON(message: _26.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
            };
            OauthClientInfo: {
                encode(message: _26.OauthClientInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.OauthClientInfo;
                fromJSON(object: any): _26.OauthClientInfo;
                toJSON(message: _26.OauthClientInfo): unknown;
                fromPartial(object: Partial<_26.OauthClientInfo>): _26.OauthClientInfo;
            };
            QueryGetAllOauthClientsRequest: {
                encode(message: _26.QueryGetAllOauthClientsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryGetAllOauthClientsRequest;
                fromJSON(object: any): _26.QueryGetAllOauthClientsRequest;
                toJSON(message: _26.QueryGetAllOauthClientsRequest): unknown;
                fromPartial(object: Partial<_26.QueryGetAllOauthClientsRequest>): _26.QueryGetAllOauthClientsRequest;
            };
            QueryGetAllOauthClientsResponse: {
                encode(message: _26.QueryGetAllOauthClientsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryGetAllOauthClientsResponse;
                fromJSON(object: any): _26.QueryGetAllOauthClientsResponse;
                toJSON(message: _26.QueryGetAllOauthClientsResponse): unknown;
                fromPartial(object: Partial<_26.QueryGetAllOauthClientsResponse>): _26.QueryGetAllOauthClientsResponse;
            };
            QueryGetOauthClientRequest: {
                encode(message: _26.QueryGetOauthClientRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryGetOauthClientRequest;
                fromJSON(object: any): _26.QueryGetOauthClientRequest;
                toJSON(message: _26.QueryGetOauthClientRequest): unknown;
                fromPartial(object: Partial<_26.QueryGetOauthClientRequest>): _26.QueryGetOauthClientRequest;
            };
            QueryGetOauthClientResponse: {
                encode(message: _26.QueryGetOauthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryGetOauthClientResponse;
                fromJSON(object: any): _26.QueryGetOauthClientResponse;
                toJSON(message: _26.QueryGetOauthClientResponse): unknown;
                fromPartial(object: Partial<_26.QueryGetOauthClientResponse>): _26.QueryGetOauthClientResponse;
            };
            QueryGetOauthClientsByOwnerRequest: {
                encode(message: _26.QueryGetOauthClientsByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryGetOauthClientsByOwnerRequest;
                fromJSON(object: any): _26.QueryGetOauthClientsByOwnerRequest;
                toJSON(message: _26.QueryGetOauthClientsByOwnerRequest): unknown;
                fromPartial(object: Partial<_26.QueryGetOauthClientsByOwnerRequest>): _26.QueryGetOauthClientsByOwnerRequest;
            };
            QueryGetOauthClientsByOwnerResponse: {
                encode(message: _26.QueryGetOauthClientsByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryGetOauthClientsByOwnerResponse;
                fromJSON(object: any): _26.QueryGetOauthClientsByOwnerResponse;
                toJSON(message: _26.QueryGetOauthClientsByOwnerResponse): unknown;
                fromPartial(object: Partial<_26.QueryGetOauthClientsByOwnerResponse>): _26.QueryGetOauthClientsByOwnerResponse;
            };
            RegisterRouteProposal: {
                encode(message: _25.RegisterRouteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.RegisterRouteProposal;
                fromJSON(object: any): _25.RegisterRouteProposal;
                toJSON(message: _25.RegisterRouteProposal): unknown;
                fromPartial(object: Partial<_25.RegisterRouteProposal>): _25.RegisterRouteProposal;
            };
            DeregisterRouteProposal: {
                encode(message: _25.DeregisterRouteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DeregisterRouteProposal;
                fromJSON(object: any): _25.DeregisterRouteProposal;
                toJSON(message: _25.DeregisterRouteProposal): unknown;
                fromPartial(object: Partial<_25.DeregisterRouteProposal>): _25.DeregisterRouteProposal;
            };
            Params: {
                encode(message: _24.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Params;
                fromJSON(object: any): _24.Params;
                toJSON(message: _24.Params): unknown;
                fromPartial(object: Partial<_24.Params>): _24.Params;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromJSON(object: any): _23.GenesisState;
                toJSON(message: _23.GenesisState): unknown;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            mythos: {
                wasmx: {
                    v1: _46.MsgClientImpl;
                };
                websrv: {
                    v1: _47.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
            };
            mythos: {
                wasmx: {
                    v1: {
                        contractInfo(request: _21.QueryContractInfoRequest): Promise<_21.QueryContractInfoResponse>;
                        contractsByCode(request: _21.QueryContractsByCodeRequest): Promise<_21.QueryContractsByCodeResponse>;
                        allContractState(request: _21.QueryAllContractStateRequest): Promise<_21.QueryAllContractStateResponse>;
                        rawContractState(request: _21.QueryRawContractStateRequest): Promise<_21.QueryRawContractStateResponse>;
                        smartContractCall(request: _21.QuerySmartContractCallRequest): Promise<_21.QuerySmartContractCallResponse>;
                        code(request: _21.QueryCodeRequest): Promise<_21.QueryCodeResponse>;
                        codeInfo(request: _21.QueryCodeInfoRequest): Promise<_21.QueryCodeInfoResponse>;
                        codes(request?: _21.QueryCodesRequest): Promise<_21.QueryCodesResponse>;
                        params(request?: _21.QueryParamsRequest): Promise<_21.QueryParamsResponse>;
                        contractsByCreator(request: _21.QueryContractsByCreatorRequest): Promise<_21.QueryContractsByCreatorResponse>;
                    };
                };
                websrv: {
                    v1: {
                        httpGet(request: _26.QueryHttpRequestGet): Promise<_26.QueryHttpResponseGet>;
                        contractByRoute(request: _26.QueryContractByRouteRequest): Promise<_26.QueryContractByRouteResponse>;
                        routeByContract(request: _26.QueryRouteByContractRequest): Promise<_26.QueryRouteByContractResponse>;
                        params(request?: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        getAllOauthClients(request?: _26.QueryGetAllOauthClientsRequest): Promise<_26.QueryGetAllOauthClientsResponse>;
                        getOauthClient(request: _26.QueryGetOauthClientRequest): Promise<_26.QueryGetOauthClientResponse>;
                        getOauthClientsByOwner(request: _26.QueryGetOauthClientsByOwnerRequest): Promise<_26.QueryGetOauthClientsByOwnerResponse>;
                    };
                };
            };
        }>;
    };
}
