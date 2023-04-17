import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterOAuthClient, MsgEditOAuthClient, MsgDeregisterOAuthClient } from "./tx";
export interface AminoMsgRegisterOAuthClient extends AminoMsg {
    type: "/wasmx.websrv.v1.MsgRegisterOAuthClient";
    value: {
        owner: string;
        domain: string;
    };
}
export interface AminoMsgEditOAuthClient extends AminoMsg {
    type: "/wasmx.websrv.v1.MsgEditOAuthClient";
    value: {
        owner: string;
        client_id: string;
        domain: string;
    };
}
export interface AminoMsgDeregisterOAuthClient extends AminoMsg {
    type: "/wasmx.websrv.v1.MsgDeregisterOAuthClient";
    value: {
        owner: string;
        client_id: string;
    };
}
export declare const AminoConverter: {
    "/wasmx.websrv.v1.MsgRegisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, domain }: MsgRegisterOAuthClient) => AminoMsgRegisterOAuthClient["value"];
        fromAmino: ({ owner, domain }: AminoMsgRegisterOAuthClient["value"]) => MsgRegisterOAuthClient;
    };
    "/wasmx.websrv.v1.MsgEditOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId, domain }: MsgEditOAuthClient) => AminoMsgEditOAuthClient["value"];
        fromAmino: ({ owner, client_id, domain }: AminoMsgEditOAuthClient["value"]) => MsgEditOAuthClient;
    };
    "/wasmx.websrv.v1.MsgDeregisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId }: MsgDeregisterOAuthClient) => AminoMsgDeregisterOAuthClient["value"];
        fromAmino: ({ owner, client_id }: AminoMsgDeregisterOAuthClient["value"]) => MsgDeregisterOAuthClient;
    };
};
