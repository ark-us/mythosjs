import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgDeployCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract, MsgCompileContract } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array;
        };
        deployCode(value: MsgDeployCode): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeWithOriginContract(value: MsgExecuteWithOriginContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeDelegateContract(value: MsgExecuteDelegateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        compileContract(value: MsgCompileContract): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        deployCode(value: MsgDeployCode): {
            typeUrl: string;
            value: MsgDeployCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        executeWithOriginContract(value: MsgExecuteWithOriginContract): {
            typeUrl: string;
            value: MsgExecuteWithOriginContract;
        };
        executeDelegateContract(value: MsgExecuteDelegateContract): {
            typeUrl: string;
            value: MsgExecuteDelegateContract;
        };
        compileContract(value: MsgCompileContract): {
            typeUrl: string;
            value: MsgCompileContract;
        };
    };
    toJSON: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: unknown;
        };
        deployCode(value: MsgDeployCode): {
            typeUrl: string;
            value: unknown;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: unknown;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: unknown;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: unknown;
        };
        executeWithOriginContract(value: MsgExecuteWithOriginContract): {
            typeUrl: string;
            value: unknown;
        };
        executeDelegateContract(value: MsgExecuteDelegateContract): {
            typeUrl: string;
            value: unknown;
        };
        compileContract(value: MsgCompileContract): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        storeCode(value: any): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        deployCode(value: any): {
            typeUrl: string;
            value: MsgDeployCode;
        };
        instantiateContract(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: any): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        executeWithOriginContract(value: any): {
            typeUrl: string;
            value: MsgExecuteWithOriginContract;
        };
        executeDelegateContract(value: any): {
            typeUrl: string;
            value: MsgExecuteDelegateContract;
        };
        compileContract(value: any): {
            typeUrl: string;
            value: MsgCompileContract;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        deployCode(value: MsgDeployCode): {
            typeUrl: string;
            value: MsgDeployCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        executeWithOriginContract(value: MsgExecuteWithOriginContract): {
            typeUrl: string;
            value: MsgExecuteWithOriginContract;
        };
        executeDelegateContract(value: MsgExecuteDelegateContract): {
            typeUrl: string;
            value: MsgExecuteDelegateContract;
        };
        compileContract(value: MsgCompileContract): {
            typeUrl: string;
            value: MsgCompileContract;
        };
    };
};
