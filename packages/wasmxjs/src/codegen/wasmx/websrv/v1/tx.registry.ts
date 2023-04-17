import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterOAuthClient, MsgEditOAuthClient, MsgDeregisterOAuthClient } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/wasmx.websrv.v1.MsgRegisterOAuthClient", MsgRegisterOAuthClient], ["/wasmx.websrv.v1.MsgEditOAuthClient", MsgEditOAuthClient], ["/wasmx.websrv.v1.MsgDeregisterOAuthClient", MsgDeregisterOAuthClient]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.encode(value).finish()
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.encode(value).finish()
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgRegisterOAuthClient",
        value
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgEditOAuthClient",
        value
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgDeregisterOAuthClient",
        value
      };
    }

  },
  toJSON: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.toJSON(value)
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.toJSON(value)
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.toJSON(value)
      };
    }

  },
  fromJSON: {
    registerOAuthClient(value: any) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.fromJSON(value)
      };
    },

    editOAuthClient(value: any) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.fromJSON(value)
      };
    },

    deregisterOAuthClient(value: any) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.fromJSON(value)
      };
    }

  },
  fromPartial: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.fromPartial(value)
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.fromPartial(value)
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/wasmx.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.fromPartial(value)
      };
    }

  }
};