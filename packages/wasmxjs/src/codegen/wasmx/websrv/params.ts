import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */

export interface Params {
  oauthClientRegistrationOnlyEId: boolean;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  oauth_client_registration_only_e_id: boolean;
}

function createBaseParams(): Params {
  return {
    oauthClientRegistrationOnlyEId: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oauthClientRegistrationOnlyEId === true) {
      writer.uint32(8).bool(message.oauthClientRegistrationOnlyEId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.oauthClientRegistrationOnlyEId = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      oauthClientRegistrationOnlyEId: isSet(object.oauthClientRegistrationOnlyEId) ? Boolean(object.oauthClientRegistrationOnlyEId) : false
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.oauthClientRegistrationOnlyEId !== undefined && (obj.oauthClientRegistrationOnlyEId = message.oauthClientRegistrationOnlyEId);
    return obj;
  },

  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.oauthClientRegistrationOnlyEId = object.oauthClientRegistrationOnlyEId ?? false;
    return message;
  }

};