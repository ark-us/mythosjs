import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterOAuthClient, MsgEditOAuthClient, MsgDeregisterOAuthClient, MsgRegisterRoute, MsgDeregisterRoute } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/mythos.websrv.v1.MsgRegisterOAuthClient", MsgRegisterOAuthClient], ["/mythos.websrv.v1.MsgEditOAuthClient", MsgEditOAuthClient], ["/mythos.websrv.v1.MsgDeregisterOAuthClient", MsgDeregisterOAuthClient], ["/mythos.websrv.v1.MsgRegisterRoute", MsgRegisterRoute], ["/mythos.websrv.v1.MsgDeregisterRoute", MsgDeregisterRoute]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.encode(value).finish()
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.encode(value).finish()
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.encode(value).finish()
      };
    },

    registerRoute(value: MsgRegisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterRoute",
        value: MsgRegisterRoute.encode(value).finish()
      };
    },

    deregisterRoute(value: MsgDeregisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterRoute",
        value: MsgDeregisterRoute.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterOAuthClient",
        value
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgEditOAuthClient",
        value
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterOAuthClient",
        value
      };
    },

    registerRoute(value: MsgRegisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterRoute",
        value
      };
    },

    deregisterRoute(value: MsgDeregisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterRoute",
        value
      };
    }

  },
  toJSON: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.toJSON(value)
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.toJSON(value)
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.toJSON(value)
      };
    },

    registerRoute(value: MsgRegisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterRoute",
        value: MsgRegisterRoute.toJSON(value)
      };
    },

    deregisterRoute(value: MsgDeregisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterRoute",
        value: MsgDeregisterRoute.toJSON(value)
      };
    }

  },
  fromJSON: {
    registerOAuthClient(value: any) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.fromJSON(value)
      };
    },

    editOAuthClient(value: any) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.fromJSON(value)
      };
    },

    deregisterOAuthClient(value: any) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.fromJSON(value)
      };
    },

    registerRoute(value: any) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterRoute",
        value: MsgRegisterRoute.fromJSON(value)
      };
    },

    deregisterRoute(value: any) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterRoute",
        value: MsgDeregisterRoute.fromJSON(value)
      };
    }

  },
  fromPartial: {
    registerOAuthClient(value: MsgRegisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterOAuthClient",
        value: MsgRegisterOAuthClient.fromPartial(value)
      };
    },

    editOAuthClient(value: MsgEditOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgEditOAuthClient",
        value: MsgEditOAuthClient.fromPartial(value)
      };
    },

    deregisterOAuthClient(value: MsgDeregisterOAuthClient) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterOAuthClient",
        value: MsgDeregisterOAuthClient.fromPartial(value)
      };
    },

    registerRoute(value: MsgRegisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgRegisterRoute",
        value: MsgRegisterRoute.fromPartial(value)
      };
    },

    deregisterRoute(value: MsgDeregisterRoute) {
      return {
        typeUrl: "/mythos.websrv.v1.MsgDeregisterRoute",
        value: MsgDeregisterRoute.fromPartial(value)
      };
    }

  }
};