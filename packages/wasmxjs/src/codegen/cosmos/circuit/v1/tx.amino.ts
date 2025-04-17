import { permissions_LevelFromJSON } from "./types";
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
export const AminoConverter = {
  "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
    toAmino: ({
      granter,
      grantee,
      permissions
    }: MsgAuthorizeCircuitBreaker): AminoMsgAuthorizeCircuitBreaker["value"] => {
      return {
        granter,
        grantee,
        permissions: {
          level: permissions.level,
          limit_type_urls: permissions.limitTypeUrls
        }
      };
    },
    fromAmino: ({
      granter,
      grantee,
      permissions
    }: AminoMsgAuthorizeCircuitBreaker["value"]): MsgAuthorizeCircuitBreaker => {
      return {
        granter,
        grantee,
        permissions: {
          level: permissions_LevelFromJSON(permissions.level),
          limitTypeUrls: permissions.limit_type_urls
        }
      };
    }
  },
  "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgTripCircuitBreaker",
    toAmino: ({
      authority,
      msgTypeUrls
    }: MsgTripCircuitBreaker): AminoMsgTripCircuitBreaker["value"] => {
      return {
        authority,
        msg_type_urls: msgTypeUrls
      };
    },
    fromAmino: ({
      authority,
      msg_type_urls
    }: AminoMsgTripCircuitBreaker["value"]): MsgTripCircuitBreaker => {
      return {
        authority,
        msgTypeUrls: msg_type_urls
      };
    }
  },
  "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
    aminoType: "cosmos-sdk/MsgResetCircuitBreaker",
    toAmino: ({
      authority,
      msgTypeUrls
    }: MsgResetCircuitBreaker): AminoMsgResetCircuitBreaker["value"] => {
      return {
        authority,
        msg_type_urls: msgTypeUrls
      };
    },
    fromAmino: ({
      authority,
      msg_type_urls
    }: AminoMsgResetCircuitBreaker["value"]): MsgResetCircuitBreaker => {
      return {
        authority,
        msgTypeUrls: msg_type_urls
      };
    }
  }
};