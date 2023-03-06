import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
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
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
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
    };
    toJSON: {
        storeCode(value: MsgStoreCode): {
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
    };
    fromJSON: {
        storeCode(value: any): {
            typeUrl: string;
            value: MsgStoreCode;
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
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
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
    };
};
