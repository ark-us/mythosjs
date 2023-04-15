import * as _29 from "./wasmx/contract";
import * as _30 from "./wasmx/genesis";
import * as _31 from "./wasmx/params";
import * as _32 from "./wasmx/query";
import * as _33 from "./wasmx/tx";
import * as _34 from "./websrv/genesis";
import * as _35 from "./websrv/params";
import * as _36 from "./websrv/proposal";
import * as _37 from "./websrv/query";
import * as _38 from "./websrv/tx";
import * as _44 from "./wasmx/query.rpc.Query";
import * as _45 from "./websrv/query.rpc.Query";
import * as _46 from "./wasmx/tx.rpc.msg";
import * as _47 from "./websrv/tx.rpc.msg";
export declare namespace wasmx {
    const wasmx: {
        MsgClientImpl: typeof _46.MsgClientImpl;
        QueryClientImpl: typeof _44.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            contractInfo(request: _32.QueryContractInfoRequest): Promise<_32.QueryContractInfoResponse>;
            contractsByCode(request: _32.QueryContractsByCodeRequest): Promise<_32.QueryContractsByCodeResponse>;
            allContractState(request: _32.QueryAllContractStateRequest): Promise<_32.QueryAllContractStateResponse>;
            rawContractState(request: _32.QueryRawContractStateRequest): Promise<_32.QueryRawContractStateResponse>;
            smartContractCall(request: _32.QuerySmartContractCallRequest): Promise<_32.QuerySmartContractCallResponse>;
            code(request: _32.QueryCodeRequest): Promise<_32.QueryCodeResponse>;
            codes(request?: _32.QueryCodesRequest): Promise<_32.QueryCodesResponse>;
            params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
            contractsByCreator(request: _32.QueryContractsByCreatorRequest): Promise<_32.QueryContractsByCreatorResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                storeCode(value: _33.MsgStoreCode): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                storeCodeEvm(value: _33.MsgStoreCodeEvm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateContract(value: _33.MsgInstantiateContract): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateContract2(value: _33.MsgInstantiateContract2): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeContract(value: _33.MsgExecuteContract): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeWithOriginContract(value: _33.MsgExecuteWithOriginContract): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                executeDelegateContract(value: _33.MsgExecuteDelegateContract): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                compileContract(value: _33.MsgCompileContract): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                storeCode(value: _33.MsgStoreCode): {
                    typeUrl: string;
                    value: _33.MsgStoreCode;
                };
                storeCodeEvm(value: _33.MsgStoreCodeEvm): {
                    typeUrl: string;
                    value: _33.MsgStoreCodeEvm;
                };
                instantiateContract(value: _33.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _33.MsgInstantiateContract;
                };
                instantiateContract2(value: _33.MsgInstantiateContract2): {
                    typeUrl: string;
                    value: _33.MsgInstantiateContract2;
                };
                executeContract(value: _33.MsgExecuteContract): {
                    typeUrl: string;
                    value: _33.MsgExecuteContract;
                };
                executeWithOriginContract(value: _33.MsgExecuteWithOriginContract): {
                    typeUrl: string;
                    value: _33.MsgExecuteWithOriginContract;
                };
                executeDelegateContract(value: _33.MsgExecuteDelegateContract): {
                    typeUrl: string;
                    value: _33.MsgExecuteDelegateContract;
                };
                compileContract(value: _33.MsgCompileContract): {
                    typeUrl: string;
                    value: _33.MsgCompileContract;
                };
            };
            toJSON: {
                storeCode(value: _33.MsgStoreCode): {
                    typeUrl: string;
                    value: unknown;
                };
                storeCodeEvm(value: _33.MsgStoreCodeEvm): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract(value: _33.MsgInstantiateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                instantiateContract2(value: _33.MsgInstantiateContract2): {
                    typeUrl: string;
                    value: unknown;
                };
                executeContract(value: _33.MsgExecuteContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeWithOriginContract(value: _33.MsgExecuteWithOriginContract): {
                    typeUrl: string;
                    value: unknown;
                };
                executeDelegateContract(value: _33.MsgExecuteDelegateContract): {
                    typeUrl: string;
                    value: unknown;
                };
                compileContract(value: _33.MsgCompileContract): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                storeCode(value: any): {
                    typeUrl: string;
                    value: _33.MsgStoreCode;
                };
                storeCodeEvm(value: any): {
                    typeUrl: string;
                    value: _33.MsgStoreCodeEvm;
                };
                instantiateContract(value: any): {
                    typeUrl: string;
                    value: _33.MsgInstantiateContract;
                };
                instantiateContract2(value: any): {
                    typeUrl: string;
                    value: _33.MsgInstantiateContract2;
                };
                executeContract(value: any): {
                    typeUrl: string;
                    value: _33.MsgExecuteContract;
                };
                executeWithOriginContract(value: any): {
                    typeUrl: string;
                    value: _33.MsgExecuteWithOriginContract;
                };
                executeDelegateContract(value: any): {
                    typeUrl: string;
                    value: _33.MsgExecuteDelegateContract;
                };
                compileContract(value: any): {
                    typeUrl: string;
                    value: _33.MsgCompileContract;
                };
            };
            fromPartial: {
                storeCode(value: _33.MsgStoreCode): {
                    typeUrl: string;
                    value: _33.MsgStoreCode;
                };
                storeCodeEvm(value: _33.MsgStoreCodeEvm): {
                    typeUrl: string;
                    value: _33.MsgStoreCodeEvm;
                };
                instantiateContract(value: _33.MsgInstantiateContract): {
                    typeUrl: string;
                    value: _33.MsgInstantiateContract;
                };
                instantiateContract2(value: _33.MsgInstantiateContract2): {
                    typeUrl: string;
                    value: _33.MsgInstantiateContract2;
                };
                executeContract(value: _33.MsgExecuteContract): {
                    typeUrl: string;
                    value: _33.MsgExecuteContract;
                };
                executeWithOriginContract(value: _33.MsgExecuteWithOriginContract): {
                    typeUrl: string;
                    value: _33.MsgExecuteWithOriginContract;
                };
                executeDelegateContract(value: _33.MsgExecuteDelegateContract): {
                    typeUrl: string;
                    value: _33.MsgExecuteDelegateContract;
                };
                compileContract(value: _33.MsgCompileContract): {
                    typeUrl: string;
                    value: _33.MsgCompileContract;
                };
            };
        };
        AminoConverter: {
            "/wasmx.wasmx.MsgStoreCode": {
                aminoType: string;
                toAmino: ({ sender, wasmByteCode }: _33.MsgStoreCode) => {
                    sender: string;
                    wasm_byte_code: Uint8Array;
                };
                fromAmino: ({ sender, wasm_byte_code }: {
                    sender: string;
                    wasm_byte_code: Uint8Array;
                }) => _33.MsgStoreCode;
            };
            "/wasmx.wasmx.MsgStoreCodeEvm": {
                aminoType: string;
                toAmino: ({ sender, evmByteCode }: _33.MsgStoreCodeEvm) => {
                    sender: string;
                    evm_byte_code: Uint8Array;
                };
                fromAmino: ({ sender, evm_byte_code }: {
                    sender: string;
                    evm_byte_code: Uint8Array;
                }) => _33.MsgStoreCodeEvm;
            };
            "/wasmx.wasmx.MsgInstantiateContract": {
                aminoType: string;
                toAmino: ({ sender, codeId, label, msg, funds }: _33.MsgInstantiateContract) => {
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
                }) => _33.MsgInstantiateContract;
            };
            "/wasmx.wasmx.MsgInstantiateContract2": {
                aminoType: string;
                toAmino: ({ sender, codeId, label, msg, funds, salt, fixMsg }: _33.MsgInstantiateContract2) => {
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
                }) => _33.MsgInstantiateContract2;
            };
            "/wasmx.wasmx.MsgExecuteContract": {
                aminoType: string;
                toAmino: ({ sender, contract, msg, funds, dependencies }: _33.MsgExecuteContract) => {
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
                }) => _33.MsgExecuteContract;
            };
            "/wasmx.wasmx.MsgExecuteWithOriginContract": {
                aminoType: string;
                toAmino: ({ origin, sender, contract, msg, funds }: _33.MsgExecuteWithOriginContract) => {
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
                }) => _33.MsgExecuteWithOriginContract;
            };
            "/wasmx.wasmx.MsgExecuteDelegateContract": {
                aminoType: string;
                toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: _33.MsgExecuteDelegateContract) => {
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
                }) => _33.MsgExecuteDelegateContract;
            };
            "/wasmx.wasmx.MsgCompileContract": {
                aminoType: string;
                toAmino: ({ sender, codeId }: _33.MsgCompileContract) => {
                    sender: string;
                    codeId: string;
                };
                fromAmino: ({ sender, codeId }: {
                    sender: string;
                    codeId: string;
                }) => _33.MsgCompileContract;
            };
        };
        MsgStoreCode: {
            encode(message: _33.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgStoreCode;
            fromJSON(object: any): _33.MsgStoreCode;
            toJSON(message: _33.MsgStoreCode): unknown;
            fromPartial(object: Partial<_33.MsgStoreCode>): _33.MsgStoreCode;
        };
        MsgStoreCodeResponse: {
            encode(message: _33.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgStoreCodeResponse;
            fromJSON(object: any): _33.MsgStoreCodeResponse;
            toJSON(message: _33.MsgStoreCodeResponse): unknown;
            fromPartial(object: Partial<_33.MsgStoreCodeResponse>): _33.MsgStoreCodeResponse;
        };
        MsgStoreCodeEvm: {
            encode(message: _33.MsgStoreCodeEvm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgStoreCodeEvm;
            fromJSON(object: any): _33.MsgStoreCodeEvm;
            toJSON(message: _33.MsgStoreCodeEvm): unknown;
            fromPartial(object: Partial<_33.MsgStoreCodeEvm>): _33.MsgStoreCodeEvm;
        };
        MsgStoreCodeEvmResponse: {
            encode(message: _33.MsgStoreCodeEvmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgStoreCodeEvmResponse;
            fromJSON(object: any): _33.MsgStoreCodeEvmResponse;
            toJSON(message: _33.MsgStoreCodeEvmResponse): unknown;
            fromPartial(object: Partial<_33.MsgStoreCodeEvmResponse>): _33.MsgStoreCodeEvmResponse;
        };
        MsgInstantiateContract: {
            encode(message: _33.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgInstantiateContract;
            fromJSON(object: any): _33.MsgInstantiateContract;
            toJSON(message: _33.MsgInstantiateContract): unknown;
            fromPartial(object: Partial<_33.MsgInstantiateContract>): _33.MsgInstantiateContract;
        };
        MsgInstantiateContract2: {
            encode(message: _33.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgInstantiateContract2;
            fromJSON(object: any): _33.MsgInstantiateContract2;
            toJSON(message: _33.MsgInstantiateContract2): unknown;
            fromPartial(object: Partial<_33.MsgInstantiateContract2>): _33.MsgInstantiateContract2;
        };
        MsgInstantiateContractResponse: {
            encode(message: _33.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgInstantiateContractResponse;
            fromJSON(object: any): _33.MsgInstantiateContractResponse;
            toJSON(message: _33.MsgInstantiateContractResponse): unknown;
            fromPartial(object: Partial<_33.MsgInstantiateContractResponse>): _33.MsgInstantiateContractResponse;
        };
        MsgInstantiateContract2Response: {
            encode(message: _33.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgInstantiateContract2Response;
            fromJSON(object: any): _33.MsgInstantiateContract2Response;
            toJSON(message: _33.MsgInstantiateContract2Response): unknown;
            fromPartial(object: Partial<_33.MsgInstantiateContract2Response>): _33.MsgInstantiateContract2Response;
        };
        MsgExecuteContract: {
            encode(message: _33.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgExecuteContract;
            fromJSON(object: any): _33.MsgExecuteContract;
            toJSON(message: _33.MsgExecuteContract): unknown;
            fromPartial(object: Partial<_33.MsgExecuteContract>): _33.MsgExecuteContract;
        };
        MsgExecuteContractResponse: {
            encode(message: _33.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgExecuteContractResponse;
            fromJSON(object: any): _33.MsgExecuteContractResponse;
            toJSON(message: _33.MsgExecuteContractResponse): unknown;
            fromPartial(object: Partial<_33.MsgExecuteContractResponse>): _33.MsgExecuteContractResponse;
        };
        MsgExecuteWithOriginContract: {
            encode(message: _33.MsgExecuteWithOriginContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgExecuteWithOriginContract;
            fromJSON(object: any): _33.MsgExecuteWithOriginContract;
            toJSON(message: _33.MsgExecuteWithOriginContract): unknown;
            fromPartial(object: Partial<_33.MsgExecuteWithOriginContract>): _33.MsgExecuteWithOriginContract;
        };
        MsgExecuteDelegateContract: {
            encode(message: _33.MsgExecuteDelegateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgExecuteDelegateContract;
            fromJSON(object: any): _33.MsgExecuteDelegateContract;
            toJSON(message: _33.MsgExecuteDelegateContract): unknown;
            fromPartial(object: Partial<_33.MsgExecuteDelegateContract>): _33.MsgExecuteDelegateContract;
        };
        MsgExecuteDelegateContractResponse: {
            encode(message: _33.MsgExecuteDelegateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgExecuteDelegateContractResponse;
            fromJSON(object: any): _33.MsgExecuteDelegateContractResponse;
            toJSON(message: _33.MsgExecuteDelegateContractResponse): unknown;
            fromPartial(object: Partial<_33.MsgExecuteDelegateContractResponse>): _33.MsgExecuteDelegateContractResponse;
        };
        MsgCompileContract: {
            encode(message: _33.MsgCompileContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgCompileContract;
            fromJSON(object: any): _33.MsgCompileContract;
            toJSON(message: _33.MsgCompileContract): unknown;
            fromPartial(object: Partial<_33.MsgCompileContract>): _33.MsgCompileContract;
        };
        MsgCompileContractResponse: {
            encode(_: _33.MsgCompileContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgCompileContractResponse;
            fromJSON(_: any): _33.MsgCompileContractResponse;
            toJSON(_: _33.MsgCompileContractResponse): unknown;
            fromPartial(_: Partial<_33.MsgCompileContractResponse>): _33.MsgCompileContractResponse;
        };
        QueryContractInfoRequest: {
            encode(message: _32.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryContractInfoRequest;
            fromJSON(object: any): _32.QueryContractInfoRequest;
            toJSON(message: _32.QueryContractInfoRequest): unknown;
            fromPartial(object: Partial<_32.QueryContractInfoRequest>): _32.QueryContractInfoRequest;
        };
        QueryContractInfoResponse: {
            encode(message: _32.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryContractInfoResponse;
            fromJSON(object: any): _32.QueryContractInfoResponse;
            toJSON(message: _32.QueryContractInfoResponse): unknown;
            fromPartial(object: Partial<_32.QueryContractInfoResponse>): _32.QueryContractInfoResponse;
        };
        QueryContractsByCodeRequest: {
            encode(message: _32.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryContractsByCodeRequest;
            fromJSON(object: any): _32.QueryContractsByCodeRequest;
            toJSON(message: _32.QueryContractsByCodeRequest): unknown;
            fromPartial(object: Partial<_32.QueryContractsByCodeRequest>): _32.QueryContractsByCodeRequest;
        };
        QueryContractsByCodeResponse: {
            encode(message: _32.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryContractsByCodeResponse;
            fromJSON(object: any): _32.QueryContractsByCodeResponse;
            toJSON(message: _32.QueryContractsByCodeResponse): unknown;
            fromPartial(object: Partial<_32.QueryContractsByCodeResponse>): _32.QueryContractsByCodeResponse;
        };
        QueryAllContractStateRequest: {
            encode(message: _32.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryAllContractStateRequest;
            fromJSON(object: any): _32.QueryAllContractStateRequest;
            toJSON(message: _32.QueryAllContractStateRequest): unknown;
            fromPartial(object: Partial<_32.QueryAllContractStateRequest>): _32.QueryAllContractStateRequest;
        };
        QueryAllContractStateResponse: {
            encode(message: _32.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryAllContractStateResponse;
            fromJSON(object: any): _32.QueryAllContractStateResponse;
            toJSON(message: _32.QueryAllContractStateResponse): unknown;
            fromPartial(object: Partial<_32.QueryAllContractStateResponse>): _32.QueryAllContractStateResponse;
        };
        QueryRawContractStateRequest: {
            encode(message: _32.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryRawContractStateRequest;
            fromJSON(object: any): _32.QueryRawContractStateRequest;
            toJSON(message: _32.QueryRawContractStateRequest): unknown;
            fromPartial(object: Partial<_32.QueryRawContractStateRequest>): _32.QueryRawContractStateRequest;
        };
        QueryRawContractStateResponse: {
            encode(message: _32.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryRawContractStateResponse;
            fromJSON(object: any): _32.QueryRawContractStateResponse;
            toJSON(message: _32.QueryRawContractStateResponse): unknown;
            fromPartial(object: Partial<_32.QueryRawContractStateResponse>): _32.QueryRawContractStateResponse;
        };
        QuerySmartContractCallRequest: {
            encode(message: _32.QuerySmartContractCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QuerySmartContractCallRequest;
            fromJSON(object: any): _32.QuerySmartContractCallRequest;
            toJSON(message: _32.QuerySmartContractCallRequest): unknown;
            fromPartial(object: Partial<_32.QuerySmartContractCallRequest>): _32.QuerySmartContractCallRequest;
        };
        QuerySmartContractCallResponse: {
            encode(message: _32.QuerySmartContractCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QuerySmartContractCallResponse;
            fromJSON(object: any): _32.QuerySmartContractCallResponse;
            toJSON(message: _32.QuerySmartContractCallResponse): unknown;
            fromPartial(object: Partial<_32.QuerySmartContractCallResponse>): _32.QuerySmartContractCallResponse;
        };
        QueryCodeRequest: {
            encode(message: _32.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryCodeRequest;
            fromJSON(object: any): _32.QueryCodeRequest;
            toJSON(message: _32.QueryCodeRequest): unknown;
            fromPartial(object: Partial<_32.QueryCodeRequest>): _32.QueryCodeRequest;
        };
        CodeInfoResponse: {
            encode(message: _32.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.CodeInfoResponse;
            fromJSON(object: any): _32.CodeInfoResponse;
            toJSON(message: _32.CodeInfoResponse): unknown;
            fromPartial(object: Partial<_32.CodeInfoResponse>): _32.CodeInfoResponse;
        };
        QueryCodeResponse: {
            encode(message: _32.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryCodeResponse;
            fromJSON(object: any): _32.QueryCodeResponse;
            toJSON(message: _32.QueryCodeResponse): unknown;
            fromPartial(object: Partial<_32.QueryCodeResponse>): _32.QueryCodeResponse;
        };
        QueryCodesRequest: {
            encode(message: _32.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryCodesRequest;
            fromJSON(object: any): _32.QueryCodesRequest;
            toJSON(message: _32.QueryCodesRequest): unknown;
            fromPartial(object: Partial<_32.QueryCodesRequest>): _32.QueryCodesRequest;
        };
        QueryCodesResponse: {
            encode(message: _32.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryCodesResponse;
            fromJSON(object: any): _32.QueryCodesResponse;
            toJSON(message: _32.QueryCodesResponse): unknown;
            fromPartial(object: Partial<_32.QueryCodesResponse>): _32.QueryCodesResponse;
        };
        QueryParamsRequest: {
            encode(_: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsRequest;
            fromJSON(_: any): _32.QueryParamsRequest;
            toJSON(_: _32.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsResponse;
            fromJSON(object: any): _32.QueryParamsResponse;
            toJSON(message: _32.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
        };
        QueryContractsByCreatorRequest: {
            encode(message: _32.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryContractsByCreatorRequest;
            fromJSON(object: any): _32.QueryContractsByCreatorRequest;
            toJSON(message: _32.QueryContractsByCreatorRequest): unknown;
            fromPartial(object: Partial<_32.QueryContractsByCreatorRequest>): _32.QueryContractsByCreatorRequest;
        };
        QueryContractsByCreatorResponse: {
            encode(message: _32.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryContractsByCreatorResponse;
            fromJSON(object: any): _32.QueryContractsByCreatorResponse;
            toJSON(message: _32.QueryContractsByCreatorResponse): unknown;
            fromPartial(object: Partial<_32.QueryContractsByCreatorResponse>): _32.QueryContractsByCreatorResponse;
        };
        Params: {
            encode(_: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Params;
            fromJSON(_: any): _31.Params;
            toJSON(_: _31.Params): unknown;
            fromPartial(_: Partial<_31.Params>): _31.Params;
        };
        GenesisState: {
            encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
            fromJSON(object: any): _30.GenesisState;
            toJSON(message: _30.GenesisState): unknown;
            fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
        };
        SystemContract: {
            encode(message: _30.SystemContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.SystemContract;
            fromJSON(object: any): _30.SystemContract;
            toJSON(message: _30.SystemContract): unknown;
            fromPartial(object: Partial<_30.SystemContract>): _30.SystemContract;
        };
        Code: {
            encode(message: _30.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Code;
            fromJSON(object: any): _30.Code;
            toJSON(message: _30.Code): unknown;
            fromPartial(object: Partial<_30.Code>): _30.Code;
        };
        Contract: {
            encode(message: _30.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Contract;
            fromJSON(object: any): _30.Contract;
            toJSON(message: _30.Contract): unknown;
            fromPartial(object: Partial<_30.Contract>): _30.Contract;
        };
        Sequence: {
            encode(message: _30.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Sequence;
            fromJSON(object: any): _30.Sequence;
            toJSON(message: _30.Sequence): unknown;
            fromPartial(object: Partial<_30.Sequence>): _30.Sequence;
        };
        ContractStorage: {
            encode(message: _29.ContractStorage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ContractStorage;
            fromJSON(object: any): _29.ContractStorage;
            toJSON(message: _29.ContractStorage): unknown;
            fromPartial(object: Partial<_29.ContractStorage>): _29.ContractStorage;
        };
        CodeInfo: {
            encode(message: _29.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CodeInfo;
            fromJSON(object: any): _29.CodeInfo;
            toJSON(message: _29.CodeInfo): unknown;
            fromPartial(object: Partial<_29.CodeInfo>): _29.CodeInfo;
        };
        CodeMetadata: {
            encode(message: _29.CodeMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CodeMetadata;
            fromJSON(object: any): _29.CodeMetadata;
            toJSON(message: _29.CodeMetadata): unknown;
            fromPartial(object: Partial<_29.CodeMetadata>): _29.CodeMetadata;
        };
        ContractInfo: {
            encode(message: _29.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ContractInfo;
            fromJSON(object: any): _29.ContractInfo;
            toJSON(message: _29.ContractInfo): unknown;
            fromPartial(object: Partial<_29.ContractInfo>): _29.ContractInfo;
        };
        AbsoluteTxPosition: {
            encode(message: _29.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.AbsoluteTxPosition;
            fromJSON(object: any): _29.AbsoluteTxPosition;
            toJSON(message: _29.AbsoluteTxPosition): unknown;
            fromPartial(object: Partial<_29.AbsoluteTxPosition>): _29.AbsoluteTxPosition;
        };
    };
    const websrv: {
        MsgClientImpl: typeof _47.MsgClientImpl;
        QueryClientImpl: typeof _45.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            httpGet(request: _37.QueryHttpRequestGet): Promise<_37.QueryHttpResponseGet>;
            contractByRoute(request: _37.QueryContractByRouteRequest): Promise<_37.QueryContractByRouteResponse>;
            routeByContract(request: _37.QueryRouteByContractRequest): Promise<_37.QueryRouteByContractResponse>;
            params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
            getAllOauthClients(request?: _37.QueryGetAllOauthClientsRequest): Promise<_37.QueryGetAllOauthClientsResponse>;
            getOauthClient(request: _37.QueryGetOauthClientRequest): Promise<_37.QueryGetOauthClientResponse>;
            getOauthClientsByOwner(request: _37.QueryGetOauthClientsByOwnerRequest): Promise<_37.QueryGetOauthClientsByOwnerResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerOAuthClient(value: _38.MsgRegisterOAuthClient): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                editOAuthClient(value: _38.MsgEditOAuthClient): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deregisterOAuthClient(value: _38.MsgDeregisterOAuthClient): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerOAuthClient(value: _38.MsgRegisterOAuthClient): {
                    typeUrl: string;
                    value: _38.MsgRegisterOAuthClient;
                };
                editOAuthClient(value: _38.MsgEditOAuthClient): {
                    typeUrl: string;
                    value: _38.MsgEditOAuthClient;
                };
                deregisterOAuthClient(value: _38.MsgDeregisterOAuthClient): {
                    typeUrl: string;
                    value: _38.MsgDeregisterOAuthClient;
                };
            };
            toJSON: {
                registerOAuthClient(value: _38.MsgRegisterOAuthClient): {
                    typeUrl: string;
                    value: unknown;
                };
                editOAuthClient(value: _38.MsgEditOAuthClient): {
                    typeUrl: string;
                    value: unknown;
                };
                deregisterOAuthClient(value: _38.MsgDeregisterOAuthClient): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                registerOAuthClient(value: any): {
                    typeUrl: string;
                    value: _38.MsgRegisterOAuthClient;
                };
                editOAuthClient(value: any): {
                    typeUrl: string;
                    value: _38.MsgEditOAuthClient;
                };
                deregisterOAuthClient(value: any): {
                    typeUrl: string;
                    value: _38.MsgDeregisterOAuthClient;
                };
            };
            fromPartial: {
                registerOAuthClient(value: _38.MsgRegisterOAuthClient): {
                    typeUrl: string;
                    value: _38.MsgRegisterOAuthClient;
                };
                editOAuthClient(value: _38.MsgEditOAuthClient): {
                    typeUrl: string;
                    value: _38.MsgEditOAuthClient;
                };
                deregisterOAuthClient(value: _38.MsgDeregisterOAuthClient): {
                    typeUrl: string;
                    value: _38.MsgDeregisterOAuthClient;
                };
            };
        };
        AminoConverter: {
            "/wasmx.websrv.MsgRegisterOAuthClient": {
                aminoType: string;
                toAmino: ({ owner, domain }: _38.MsgRegisterOAuthClient) => {
                    owner: string;
                    domain: string;
                };
                fromAmino: ({ owner, domain }: {
                    owner: string;
                    domain: string;
                }) => _38.MsgRegisterOAuthClient;
            };
            "/wasmx.websrv.MsgEditOAuthClient": {
                aminoType: string;
                toAmino: ({ owner, clientId, domain }: _38.MsgEditOAuthClient) => {
                    owner: string;
                    client_id: string;
                    domain: string;
                };
                fromAmino: ({ owner, client_id, domain }: {
                    owner: string;
                    client_id: string;
                    domain: string;
                }) => _38.MsgEditOAuthClient;
            };
            "/wasmx.websrv.MsgDeregisterOAuthClient": {
                aminoType: string;
                toAmino: ({ owner, clientId }: _38.MsgDeregisterOAuthClient) => {
                    owner: string;
                    client_id: string;
                };
                fromAmino: ({ owner, client_id }: {
                    owner: string;
                    client_id: string;
                }) => _38.MsgDeregisterOAuthClient;
            };
        };
        MsgRegisterOAuthClient: {
            encode(message: _38.MsgRegisterOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgRegisterOAuthClient;
            fromJSON(object: any): _38.MsgRegisterOAuthClient;
            toJSON(message: _38.MsgRegisterOAuthClient): unknown;
            fromPartial(object: Partial<_38.MsgRegisterOAuthClient>): _38.MsgRegisterOAuthClient;
        };
        MsgRegisterOAuthClientResponse: {
            encode(message: _38.MsgRegisterOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgRegisterOAuthClientResponse;
            fromJSON(object: any): _38.MsgRegisterOAuthClientResponse;
            toJSON(message: _38.MsgRegisterOAuthClientResponse): unknown;
            fromPartial(object: Partial<_38.MsgRegisterOAuthClientResponse>): _38.MsgRegisterOAuthClientResponse;
        };
        MsgEditOAuthClient: {
            encode(message: _38.MsgEditOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditOAuthClient;
            fromJSON(object: any): _38.MsgEditOAuthClient;
            toJSON(message: _38.MsgEditOAuthClient): unknown;
            fromPartial(object: Partial<_38.MsgEditOAuthClient>): _38.MsgEditOAuthClient;
        };
        MsgEditOAuthClientResponse: {
            encode(_: _38.MsgEditOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditOAuthClientResponse;
            fromJSON(_: any): _38.MsgEditOAuthClientResponse;
            toJSON(_: _38.MsgEditOAuthClientResponse): unknown;
            fromPartial(_: Partial<_38.MsgEditOAuthClientResponse>): _38.MsgEditOAuthClientResponse;
        };
        MsgDeregisterOAuthClient: {
            encode(message: _38.MsgDeregisterOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDeregisterOAuthClient;
            fromJSON(object: any): _38.MsgDeregisterOAuthClient;
            toJSON(message: _38.MsgDeregisterOAuthClient): unknown;
            fromPartial(object: Partial<_38.MsgDeregisterOAuthClient>): _38.MsgDeregisterOAuthClient;
        };
        MsgDeregisterOAuthClientResponse: {
            encode(_: _38.MsgDeregisterOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDeregisterOAuthClientResponse;
            fromJSON(_: any): _38.MsgDeregisterOAuthClientResponse;
            toJSON(_: _38.MsgDeregisterOAuthClientResponse): unknown;
            fromPartial(_: Partial<_38.MsgDeregisterOAuthClientResponse>): _38.MsgDeregisterOAuthClientResponse;
        };
        QueryContractByRouteRequest: {
            encode(message: _37.QueryContractByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryContractByRouteRequest;
            fromJSON(object: any): _37.QueryContractByRouteRequest;
            toJSON(message: _37.QueryContractByRouteRequest): unknown;
            fromPartial(object: Partial<_37.QueryContractByRouteRequest>): _37.QueryContractByRouteRequest;
        };
        QueryContractByRouteResponse: {
            encode(message: _37.QueryContractByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryContractByRouteResponse;
            fromJSON(object: any): _37.QueryContractByRouteResponse;
            toJSON(message: _37.QueryContractByRouteResponse): unknown;
            fromPartial(object: Partial<_37.QueryContractByRouteResponse>): _37.QueryContractByRouteResponse;
        };
        QueryRouteByContractRequest: {
            encode(message: _37.QueryRouteByContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryRouteByContractRequest;
            fromJSON(object: any): _37.QueryRouteByContractRequest;
            toJSON(message: _37.QueryRouteByContractRequest): unknown;
            fromPartial(object: Partial<_37.QueryRouteByContractRequest>): _37.QueryRouteByContractRequest;
        };
        QueryRouteByContractResponse: {
            encode(message: _37.QueryRouteByContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryRouteByContractResponse;
            fromJSON(object: any): _37.QueryRouteByContractResponse;
            toJSON(message: _37.QueryRouteByContractResponse): unknown;
            fromPartial(object: Partial<_37.QueryRouteByContractResponse>): _37.QueryRouteByContractResponse;
        };
        QueryHttpRequestGet: {
            encode(message: _37.QueryHttpRequestGet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryHttpRequestGet;
            fromJSON(object: any): _37.QueryHttpRequestGet;
            toJSON(message: _37.QueryHttpRequestGet): unknown;
            fromPartial(object: Partial<_37.QueryHttpRequestGet>): _37.QueryHttpRequestGet;
        };
        QueryHttpResponseGet: {
            encode(message: _37.QueryHttpResponseGet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryHttpResponseGet;
            fromJSON(object: any): _37.QueryHttpResponseGet;
            toJSON(message: _37.QueryHttpResponseGet): unknown;
            fromPartial(object: Partial<_37.QueryHttpResponseGet>): _37.QueryHttpResponseGet;
        };
        QueryParamsRequest: {
            encode(_: _37.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsRequest;
            fromJSON(_: any): _37.QueryParamsRequest;
            toJSON(_: _37.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_37.QueryParamsRequest>): _37.QueryParamsRequest;
        };
        QueryParamsResponse: {
            encode(message: _37.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsResponse;
            fromJSON(object: any): _37.QueryParamsResponse;
            toJSON(message: _37.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_37.QueryParamsResponse>): _37.QueryParamsResponse;
        };
        OauthClientInfo: {
            encode(message: _37.OauthClientInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.OauthClientInfo;
            fromJSON(object: any): _37.OauthClientInfo;
            toJSON(message: _37.OauthClientInfo): unknown;
            fromPartial(object: Partial<_37.OauthClientInfo>): _37.OauthClientInfo;
        };
        QueryGetAllOauthClientsRequest: {
            encode(message: _37.QueryGetAllOauthClientsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryGetAllOauthClientsRequest;
            fromJSON(object: any): _37.QueryGetAllOauthClientsRequest;
            toJSON(message: _37.QueryGetAllOauthClientsRequest): unknown;
            fromPartial(object: Partial<_37.QueryGetAllOauthClientsRequest>): _37.QueryGetAllOauthClientsRequest;
        };
        QueryGetAllOauthClientsResponse: {
            encode(message: _37.QueryGetAllOauthClientsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryGetAllOauthClientsResponse;
            fromJSON(object: any): _37.QueryGetAllOauthClientsResponse;
            toJSON(message: _37.QueryGetAllOauthClientsResponse): unknown;
            fromPartial(object: Partial<_37.QueryGetAllOauthClientsResponse>): _37.QueryGetAllOauthClientsResponse;
        };
        QueryGetOauthClientRequest: {
            encode(message: _37.QueryGetOauthClientRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryGetOauthClientRequest;
            fromJSON(object: any): _37.QueryGetOauthClientRequest;
            toJSON(message: _37.QueryGetOauthClientRequest): unknown;
            fromPartial(object: Partial<_37.QueryGetOauthClientRequest>): _37.QueryGetOauthClientRequest;
        };
        QueryGetOauthClientResponse: {
            encode(message: _37.QueryGetOauthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryGetOauthClientResponse;
            fromJSON(object: any): _37.QueryGetOauthClientResponse;
            toJSON(message: _37.QueryGetOauthClientResponse): unknown;
            fromPartial(object: Partial<_37.QueryGetOauthClientResponse>): _37.QueryGetOauthClientResponse;
        };
        QueryGetOauthClientsByOwnerRequest: {
            encode(message: _37.QueryGetOauthClientsByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryGetOauthClientsByOwnerRequest;
            fromJSON(object: any): _37.QueryGetOauthClientsByOwnerRequest;
            toJSON(message: _37.QueryGetOauthClientsByOwnerRequest): unknown;
            fromPartial(object: Partial<_37.QueryGetOauthClientsByOwnerRequest>): _37.QueryGetOauthClientsByOwnerRequest;
        };
        QueryGetOauthClientsByOwnerResponse: {
            encode(message: _37.QueryGetOauthClientsByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryGetOauthClientsByOwnerResponse;
            fromJSON(object: any): _37.QueryGetOauthClientsByOwnerResponse;
            toJSON(message: _37.QueryGetOauthClientsByOwnerResponse): unknown;
            fromPartial(object: Partial<_37.QueryGetOauthClientsByOwnerResponse>): _37.QueryGetOauthClientsByOwnerResponse;
        };
        RegisterRouteProposal: {
            encode(message: _36.RegisterRouteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RegisterRouteProposal;
            fromJSON(object: any): _36.RegisterRouteProposal;
            toJSON(message: _36.RegisterRouteProposal): unknown;
            fromPartial(object: Partial<_36.RegisterRouteProposal>): _36.RegisterRouteProposal;
        };
        DeregisterRouteProposal: {
            encode(message: _36.DeregisterRouteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DeregisterRouteProposal;
            fromJSON(object: any): _36.DeregisterRouteProposal;
            toJSON(message: _36.DeregisterRouteProposal): unknown;
            fromPartial(object: Partial<_36.DeregisterRouteProposal>): _36.DeregisterRouteProposal;
        };
        Params: {
            encode(message: _35.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Params;
            fromJSON(object: any): _35.Params;
            toJSON(message: _35.Params): unknown;
            fromPartial(object: Partial<_35.Params>): _35.Params;
        };
        GenesisState: {
            encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
            fromJSON(object: any): _34.GenesisState;
            toJSON(message: _34.GenesisState): unknown;
            fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            wasmx: {
                wasmx: _46.MsgClientImpl;
                websrv: _47.MsgClientImpl;
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
            wasmx: {
                wasmx: {
                    contractInfo(request: _32.QueryContractInfoRequest): Promise<_32.QueryContractInfoResponse>;
                    contractsByCode(request: _32.QueryContractsByCodeRequest): Promise<_32.QueryContractsByCodeResponse>;
                    allContractState(request: _32.QueryAllContractStateRequest): Promise<_32.QueryAllContractStateResponse>;
                    rawContractState(request: _32.QueryRawContractStateRequest): Promise<_32.QueryRawContractStateResponse>;
                    smartContractCall(request: _32.QuerySmartContractCallRequest): Promise<_32.QuerySmartContractCallResponse>;
                    code(request: _32.QueryCodeRequest): Promise<_32.QueryCodeResponse>;
                    codes(request?: _32.QueryCodesRequest): Promise<_32.QueryCodesResponse>;
                    params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                    contractsByCreator(request: _32.QueryContractsByCreatorRequest): Promise<_32.QueryContractsByCreatorResponse>;
                };
                websrv: {
                    httpGet(request: _37.QueryHttpRequestGet): Promise<_37.QueryHttpResponseGet>;
                    contractByRoute(request: _37.QueryContractByRouteRequest): Promise<_37.QueryContractByRouteResponse>;
                    routeByContract(request: _37.QueryRouteByContractRequest): Promise<_37.QueryRouteByContractResponse>;
                    params(request?: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                    getAllOauthClients(request?: _37.QueryGetAllOauthClientsRequest): Promise<_37.QueryGetAllOauthClientsResponse>;
                    getOauthClient(request: _37.QueryGetOauthClientRequest): Promise<_37.QueryGetOauthClientResponse>;
                    getOauthClientsByOwner(request: _37.QueryGetOauthClientsByOwnerRequest): Promise<_37.QueryGetOauthClientsByOwnerResponse>;
                };
            };
        }>;
    };
}
