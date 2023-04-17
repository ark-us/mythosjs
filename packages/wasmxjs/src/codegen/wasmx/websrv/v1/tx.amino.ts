import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/wasmx.websrv.v1.MsgRegisterOAuthClient": {
    aminoType: "/wasmx.websrv.v1.MsgRegisterOAuthClient",
    toAmino: ({
      owner,
      domain
    }: MsgRegisterOAuthClient): AminoMsgRegisterOAuthClient["value"] => {
      return {
        owner,
        domain
      };
    },
    fromAmino: ({
      owner,
      domain
    }: AminoMsgRegisterOAuthClient["value"]): MsgRegisterOAuthClient => {
      return {
        owner,
        domain
      };
    }
  },
  "/wasmx.websrv.v1.MsgEditOAuthClient": {
    aminoType: "/wasmx.websrv.v1.MsgEditOAuthClient",
    toAmino: ({
      owner,
      clientId,
      domain
    }: MsgEditOAuthClient): AminoMsgEditOAuthClient["value"] => {
      return {
        owner,
        client_id: clientId.toString(),
        domain
      };
    },
    fromAmino: ({
      owner,
      client_id,
      domain
    }: AminoMsgEditOAuthClient["value"]): MsgEditOAuthClient => {
      return {
        owner,
        clientId: Long.fromString(client_id),
        domain
      };
    }
  },
  "/wasmx.websrv.v1.MsgDeregisterOAuthClient": {
    aminoType: "/wasmx.websrv.v1.MsgDeregisterOAuthClient",
    toAmino: ({
      owner,
      clientId
    }: MsgDeregisterOAuthClient): AminoMsgDeregisterOAuthClient["value"] => {
      return {
        owner,
        client_id: clientId.toString()
      };
    },
    fromAmino: ({
      owner,
      client_id
    }: AminoMsgDeregisterOAuthClient["value"]): MsgDeregisterOAuthClient => {
      return {
        owner,
        clientId: Long.fromString(client_id)
      };
    }
  }
};