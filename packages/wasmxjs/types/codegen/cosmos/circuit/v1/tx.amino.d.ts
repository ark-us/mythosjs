import { AminoMsg } from "@cosmjs/amino";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx";
export interface AminoMsgAuthorizeCircuitBreaker extends AminoMsg {
    type: "cosmos-sdk/MsgAuthorizeCircuitBreaker";
    value: {
        granter: string;
        grantee: string;
        permissions: {
            level: number;
            limit_type_urls: string[];
        };
    };
}
export interface AminoMsgTripCircuitBreaker extends AminoMsg {
    type: "cosmos-sdk/MsgTripCircuitBreaker";
    value: {
        authority: string;
        msg_type_urls: string[];
    };
}
export interface AminoMsgResetCircuitBreaker extends AminoMsg {
    type: "cosmos-sdk/MsgResetCircuitBreaker";
    value: {
        authority: string;
        msg_type_urls: string[];
    };
}
export declare const AminoConverter: {
    "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
        aminoType: string;
        toAmino: ({ granter, grantee, permissions }: MsgAuthorizeCircuitBreaker) => AminoMsgAuthorizeCircuitBreaker["value"];
        fromAmino: ({ granter, grantee, permissions }: AminoMsgAuthorizeCircuitBreaker["value"]) => MsgAuthorizeCircuitBreaker;
    };
    "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
        aminoType: string;
        toAmino: ({ authority, msgTypeUrls }: MsgTripCircuitBreaker) => AminoMsgTripCircuitBreaker["value"];
        fromAmino: ({ authority, msg_type_urls }: AminoMsgTripCircuitBreaker["value"]) => MsgTripCircuitBreaker;
    };
    "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
        aminoType: string;
        toAmino: ({ authority, msgTypeUrls }: MsgResetCircuitBreaker) => AminoMsgResetCircuitBreaker["value"];
        fromAmino: ({ authority, msg_type_urls }: AminoMsgResetCircuitBreaker["value"]) => MsgResetCircuitBreaker;
    };
};
