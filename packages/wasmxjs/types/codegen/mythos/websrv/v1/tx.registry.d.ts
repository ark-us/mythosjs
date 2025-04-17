import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterOAuthClient, MsgEditOAuthClient, MsgDeregisterOAuthClient, MsgRegisterRoute, MsgDeregisterRoute } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerOAuthClient(value: MsgRegisterOAuthClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        editOAuthClient(value: MsgEditOAuthClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        deregisterOAuthClient(value: MsgDeregisterOAuthClient): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerRoute(value: MsgRegisterRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
        deregisterRoute(value: MsgDeregisterRoute): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerOAuthClient(value: MsgRegisterOAuthClient): {
            typeUrl: string;
            value: MsgRegisterOAuthClient;
        };
        editOAuthClient(value: MsgEditOAuthClient): {
            typeUrl: string;
            value: MsgEditOAuthClient;
        };
        deregisterOAuthClient(value: MsgDeregisterOAuthClient): {
            typeUrl: string;
            value: MsgDeregisterOAuthClient;
        };
        registerRoute(value: MsgRegisterRoute): {
            typeUrl: string;
            value: MsgRegisterRoute;
        };
        deregisterRoute(value: MsgDeregisterRoute): {
            typeUrl: string;
            value: MsgDeregisterRoute;
        };
    };
    toJSON: {
        registerOAuthClient(value: MsgRegisterOAuthClient): {
            typeUrl: string;
            value: unknown;
        };
        editOAuthClient(value: MsgEditOAuthClient): {
            typeUrl: string;
            value: unknown;
        };
        deregisterOAuthClient(value: MsgDeregisterOAuthClient): {
            typeUrl: string;
            value: unknown;
        };
        registerRoute(value: MsgRegisterRoute): {
            typeUrl: string;
            value: unknown;
        };
        deregisterRoute(value: MsgDeregisterRoute): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        registerOAuthClient(value: any): {
            typeUrl: string;
            value: MsgRegisterOAuthClient;
        };
        editOAuthClient(value: any): {
            typeUrl: string;
            value: MsgEditOAuthClient;
        };
        deregisterOAuthClient(value: any): {
            typeUrl: string;
            value: MsgDeregisterOAuthClient;
        };
        registerRoute(value: any): {
            typeUrl: string;
            value: MsgRegisterRoute;
        };
        deregisterRoute(value: any): {
            typeUrl: string;
            value: MsgDeregisterRoute;
        };
    };
    fromPartial: {
        registerOAuthClient(value: MsgRegisterOAuthClient): {
            typeUrl: string;
            value: MsgRegisterOAuthClient;
        };
        editOAuthClient(value: MsgEditOAuthClient): {
            typeUrl: string;
            value: MsgEditOAuthClient;
        };
        deregisterOAuthClient(value: MsgDeregisterOAuthClient): {
            typeUrl: string;
            value: MsgDeregisterOAuthClient;
        };
        registerRoute(value: MsgRegisterRoute): {
            typeUrl: string;
            value: MsgRegisterRoute;
        };
        deregisterRoute(value: MsgDeregisterRoute): {
            typeUrl: string;
            value: MsgDeregisterRoute;
        };
    };
};
