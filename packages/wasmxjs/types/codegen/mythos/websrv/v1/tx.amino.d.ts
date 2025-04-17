import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterOAuthClient, MsgEditOAuthClient, MsgDeregisterOAuthClient, MsgRegisterRoute, MsgDeregisterRoute } from "./tx";
export interface AminoMsgRegisterOAuthClient extends AminoMsg {
    type: "/mythos.websrv.v1.MsgRegisterOAuthClient";
    value: {
        owner: string;
        domain: string;
    };
}
export interface AminoMsgEditOAuthClient extends AminoMsg {
    type: "/mythos.websrv.v1.MsgEditOAuthClient";
    value: {
        owner: string;
        client_id: string;
        domain: string;
    };
}
export interface AminoMsgDeregisterOAuthClient extends AminoMsg {
    type: "/mythos.websrv.v1.MsgDeregisterOAuthClient";
    value: {
        owner: string;
        client_id: string;
    };
}
export interface AminoMsgRegisterRoute extends AminoMsg {
    type: "/mythos.websrv.v1.MsgRegisterRoute";
    value: {
        authority: string;
        title: string;
        description: string;
        path: string;
        contract_address: string;
    };
}
export interface AminoMsgDeregisterRoute extends AminoMsg {
    type: "/mythos.websrv.v1.MsgDeregisterRoute";
    value: {
        authority: string;
        title: string;
        description: string;
        path: string;
        contract_address: string;
    };
}
export declare const AminoConverter: {
    "/mythos.websrv.v1.MsgRegisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, domain }: MsgRegisterOAuthClient) => AminoMsgRegisterOAuthClient["value"];
        fromAmino: ({ owner, domain }: AminoMsgRegisterOAuthClient["value"]) => MsgRegisterOAuthClient;
    };
    "/mythos.websrv.v1.MsgEditOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId, domain }: MsgEditOAuthClient) => AminoMsgEditOAuthClient["value"];
        fromAmino: ({ owner, client_id, domain }: AminoMsgEditOAuthClient["value"]) => MsgEditOAuthClient;
    };
    "/mythos.websrv.v1.MsgDeregisterOAuthClient": {
        aminoType: string;
        toAmino: ({ owner, clientId }: MsgDeregisterOAuthClient) => AminoMsgDeregisterOAuthClient["value"];
        fromAmino: ({ owner, client_id }: AminoMsgDeregisterOAuthClient["value"]) => MsgDeregisterOAuthClient;
    };
    "/mythos.websrv.v1.MsgRegisterRoute": {
        aminoType: string;
        toAmino: ({ authority, title, description, path, contractAddress }: MsgRegisterRoute) => AminoMsgRegisterRoute["value"];
        fromAmino: ({ authority, title, description, path, contract_address }: AminoMsgRegisterRoute["value"]) => MsgRegisterRoute;
    };
    "/mythos.websrv.v1.MsgDeregisterRoute": {
        aminoType: string;
        toAmino: ({ authority, title, description, path, contractAddress }: MsgDeregisterRoute) => AminoMsgDeregisterRoute["value"];
        fromAmino: ({ authority, title, description, path, contract_address }: AminoMsgDeregisterRoute["value"]) => MsgDeregisterRoute;
    };
};
