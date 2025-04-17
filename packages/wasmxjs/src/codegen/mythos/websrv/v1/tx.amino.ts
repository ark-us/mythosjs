import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/mythos.websrv.v1.MsgRegisterOAuthClient": {
    aminoType: "/mythos.websrv.v1.MsgRegisterOAuthClient",
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
  "/mythos.websrv.v1.MsgEditOAuthClient": {
    aminoType: "/mythos.websrv.v1.MsgEditOAuthClient",
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
  "/mythos.websrv.v1.MsgDeregisterOAuthClient": {
    aminoType: "/mythos.websrv.v1.MsgDeregisterOAuthClient",
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
  },
  "/mythos.websrv.v1.MsgRegisterRoute": {
    aminoType: "/mythos.websrv.v1.MsgRegisterRoute",
    toAmino: ({
      authority,
      title,
      description,
      path,
      contractAddress
    }: MsgRegisterRoute): AminoMsgRegisterRoute["value"] => {
      return {
        authority,
        title,
        description,
        path,
        contract_address: contractAddress
      };
    },
    fromAmino: ({
      authority,
      title,
      description,
      path,
      contract_address
    }: AminoMsgRegisterRoute["value"]): MsgRegisterRoute => {
      return {
        authority,
        title,
        description,
        path,
        contractAddress: contract_address
      };
    }
  },
  "/mythos.websrv.v1.MsgDeregisterRoute": {
    aminoType: "/mythos.websrv.v1.MsgDeregisterRoute",
    toAmino: ({
      authority,
      title,
      description,
      path,
      contractAddress
    }: MsgDeregisterRoute): AminoMsgDeregisterRoute["value"] => {
      return {
        authority,
        title,
        description,
        path,
        contract_address: contractAddress
      };
    },
    fromAmino: ({
      authority,
      title,
      description,
      path,
      contract_address
    }: AminoMsgDeregisterRoute["value"]): MsgDeregisterRoute => {
      return {
        authority,
        title,
        description,
        path,
        contractAddress: contract_address
      };
    }
  }
};