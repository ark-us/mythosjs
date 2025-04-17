import { StakingGenesisState, StakingGenesisStateSDKType } from "./staking_genesis";
import { BankGenesisState, BankGenesisStateSDKType } from "./bank_genesis";
import { GovGenesisState, GovGenesisStateSDKType } from "./gov_genesis";
import { AuthGenesisState, AuthGenesisStateSDKType } from "./auth_genesis";
import { GenesisState as GenesisState1 } from "../../../cosmos/slashing/v1beta1/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../../cosmos/slashing/v1beta1/genesis";
import { DistributionGenesisState, DistributionGenesisStateSDKType } from "./distribution_genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the cosmosmod module's genesis state. */

export interface GenesisState {
  staking?: StakingGenesisState;
  bank?: BankGenesisState;
  gov?: GovGenesisState;
  auth?: AuthGenesisState;
  slashing?: GenesisState1;
  distribution?: DistributionGenesisState;
}
/** GenesisState defines the cosmosmod module's genesis state. */

export interface GenesisStateSDKType {
  staking?: StakingGenesisStateSDKType;
  bank?: BankGenesisStateSDKType;
  gov?: GovGenesisStateSDKType;
  auth?: AuthGenesisStateSDKType;
  slashing?: GenesisState1SDKType;
  distribution?: DistributionGenesisStateSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    staking: undefined,
    bank: undefined,
    gov: undefined,
    auth: undefined,
    slashing: undefined,
    distribution: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staking !== undefined) {
      StakingGenesisState.encode(message.staking, writer.uint32(10).fork()).ldelim();
    }

    if (message.bank !== undefined) {
      BankGenesisState.encode(message.bank, writer.uint32(18).fork()).ldelim();
    }

    if (message.gov !== undefined) {
      GovGenesisState.encode(message.gov, writer.uint32(26).fork()).ldelim();
    }

    if (message.auth !== undefined) {
      AuthGenesisState.encode(message.auth, writer.uint32(34).fork()).ldelim();
    }

    if (message.slashing !== undefined) {
      GenesisState1.encode(message.slashing, writer.uint32(42).fork()).ldelim();
    }

    if (message.distribution !== undefined) {
      DistributionGenesisState.encode(message.distribution, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.staking = StakingGenesisState.decode(reader, reader.uint32());
          break;

        case 2:
          message.bank = BankGenesisState.decode(reader, reader.uint32());
          break;

        case 3:
          message.gov = GovGenesisState.decode(reader, reader.uint32());
          break;

        case 4:
          message.auth = AuthGenesisState.decode(reader, reader.uint32());
          break;

        case 5:
          message.slashing = GenesisState1.decode(reader, reader.uint32());
          break;

        case 6:
          message.distribution = DistributionGenesisState.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      staking: isSet(object.staking) ? StakingGenesisState.fromJSON(object.staking) : undefined,
      bank: isSet(object.bank) ? BankGenesisState.fromJSON(object.bank) : undefined,
      gov: isSet(object.gov) ? GovGenesisState.fromJSON(object.gov) : undefined,
      auth: isSet(object.auth) ? AuthGenesisState.fromJSON(object.auth) : undefined,
      slashing: isSet(object.slashing) ? GenesisState1.fromJSON(object.slashing) : undefined,
      distribution: isSet(object.distribution) ? DistributionGenesisState.fromJSON(object.distribution) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.staking !== undefined && (obj.staking = message.staking ? StakingGenesisState.toJSON(message.staking) : undefined);
    message.bank !== undefined && (obj.bank = message.bank ? BankGenesisState.toJSON(message.bank) : undefined);
    message.gov !== undefined && (obj.gov = message.gov ? GovGenesisState.toJSON(message.gov) : undefined);
    message.auth !== undefined && (obj.auth = message.auth ? AuthGenesisState.toJSON(message.auth) : undefined);
    message.slashing !== undefined && (obj.slashing = message.slashing ? GenesisState1.toJSON(message.slashing) : undefined);
    message.distribution !== undefined && (obj.distribution = message.distribution ? DistributionGenesisState.toJSON(message.distribution) : undefined);
    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.staking = object.staking !== undefined && object.staking !== null ? StakingGenesisState.fromPartial(object.staking) : undefined;
    message.bank = object.bank !== undefined && object.bank !== null ? BankGenesisState.fromPartial(object.bank) : undefined;
    message.gov = object.gov !== undefined && object.gov !== null ? GovGenesisState.fromPartial(object.gov) : undefined;
    message.auth = object.auth !== undefined && object.auth !== null ? AuthGenesisState.fromPartial(object.auth) : undefined;
    message.slashing = object.slashing !== undefined && object.slashing !== null ? GenesisState1.fromPartial(object.slashing) : undefined;
    message.distribution = object.distribution !== undefined && object.distribution !== null ? DistributionGenesisState.fromPartial(object.distribution) : undefined;
    return message;
  }

};