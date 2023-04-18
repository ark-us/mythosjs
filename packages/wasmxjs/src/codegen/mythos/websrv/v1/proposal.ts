import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** RegisterRouteProposal is a gov Content type to register a web server route */

export interface RegisterRouteProposal {
  /** title of the proposal */
  title: string;
  /** description of the proposal */

  description: string;
  /** Route path */

  path: string;
  /** Contract address in bech32 format */

  contractAddress: string;
}
/** RegisterRouteProposal is a gov Content type to register a web server route */

export interface RegisterRouteProposalSDKType {
  /** title of the proposal */
  title: string;
  /** description of the proposal */

  description: string;
  /** Route path */

  path: string;
  /** Contract address in bech32 format */

  contract_address: string;
}
/**
 * DisallowCosmosMessagesProposal is a gov Content type to remove a previously
 * allowed Cosmos message or query to be called from the EVM
 */

export interface DeregisterRouteProposal {
  /** title of the proposal */
  title: string;
  /** description of the proposal */

  description: string;
  /** Route path */

  path: string;
  /** Contract address in bech32 format */

  contractAddress: string;
}
/**
 * DisallowCosmosMessagesProposal is a gov Content type to remove a previously
 * allowed Cosmos message or query to be called from the EVM
 */

export interface DeregisterRouteProposalSDKType {
  /** title of the proposal */
  title: string;
  /** description of the proposal */

  description: string;
  /** Route path */

  path: string;
  /** Contract address in bech32 format */

  contract_address: string;
}

function createBaseRegisterRouteProposal(): RegisterRouteProposal {
  return {
    title: "",
    description: "",
    path: "",
    contractAddress: ""
  };
}

export const RegisterRouteProposal = {
  encode(message: RegisterRouteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }

    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRouteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRouteProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.path = reader.string();
          break;

        case 4:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisterRouteProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      path: isSet(object.path) ? String(object.path) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: RegisterRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.path !== undefined && (obj.path = message.path);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<RegisterRouteProposal>): RegisterRouteProposal {
    const message = createBaseRegisterRouteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.path = object.path ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseDeregisterRouteProposal(): DeregisterRouteProposal {
  return {
    title: "",
    description: "",
    path: "",
    contractAddress: ""
  };
}

export const DeregisterRouteProposal = {
  encode(message: DeregisterRouteProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }

    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterRouteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterRouteProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.path = reader.string();
          break;

        case 4:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeregisterRouteProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      path: isSet(object.path) ? String(object.path) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: DeregisterRouteProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.path !== undefined && (obj.path = message.path);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: Partial<DeregisterRouteProposal>): DeregisterRouteProposal {
    const message = createBaseDeregisterRouteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.path = object.path ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};