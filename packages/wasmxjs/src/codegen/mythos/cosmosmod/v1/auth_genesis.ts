import { Params, ParamsSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** BankGenesisState defines the bank module's genesis state. */

export interface AuthGenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** accounts are the accounts present at genesis. */

  accounts: Any[];
  baseAccountTypeurl: string;
  moduleAccountTypeurl: string;
}
/** BankGenesisState defines the bank module's genesis state. */

export interface AuthGenesisStateSDKType {
  /** params defines all the parameters of the module. */
  params?: ParamsSDKType;
  /** accounts are the accounts present at genesis. */

  accounts: AnySDKType[];
  base_account_typeurl: string;
  module_account_typeurl: string;
}

function createBaseAuthGenesisState(): AuthGenesisState {
  return {
    params: undefined,
    accounts: [],
    baseAccountTypeurl: "",
    moduleAccountTypeurl: ""
  };
}

export const AuthGenesisState = {
  encode(message: AuthGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.baseAccountTypeurl !== "") {
      writer.uint32(26).string(message.baseAccountTypeurl);
    }

    if (message.moduleAccountTypeurl !== "") {
      writer.uint32(34).string(message.moduleAccountTypeurl);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.baseAccountTypeurl = reader.string();
          break;

        case 4:
          message.moduleAccountTypeurl = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AuthGenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [],
      baseAccountTypeurl: isSet(object.baseAccountTypeurl) ? String(object.baseAccountTypeurl) : "",
      moduleAccountTypeurl: isSet(object.moduleAccountTypeurl) ? String(object.moduleAccountTypeurl) : ""
    };
  },

  toJSON(message: AuthGenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }

    message.baseAccountTypeurl !== undefined && (obj.baseAccountTypeurl = message.baseAccountTypeurl);
    message.moduleAccountTypeurl !== undefined && (obj.moduleAccountTypeurl = message.moduleAccountTypeurl);
    return obj;
  },

  fromPartial(object: Partial<AuthGenesisState>): AuthGenesisState {
    const message = createBaseAuthGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    message.baseAccountTypeurl = object.baseAccountTypeurl ?? "";
    message.moduleAccountTypeurl = object.moduleAccountTypeurl ?? "";
    return message;
  }

};