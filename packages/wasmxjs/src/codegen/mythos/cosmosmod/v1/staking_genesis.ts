import { Params, ParamsSDKType, Validator, ValidatorSDKType, UnbondingDelegation, UnbondingDelegationSDKType, Redelegation, RedelegationSDKType } from "../../../cosmos/staking/v1beta1/staking";
import { LastValidatorPower, LastValidatorPowerSDKType } from "../../../cosmos/staking/v1beta1/genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** StakingGenesisState defines the staking module's genesis state. */

export interface StakingGenesisState {
  /** params defines all the parameters of related to deposit. */
  params?: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */

  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */

  lastValidatorPowers: LastValidatorPower[];
  /** validators defines the validator set at genesis. */

  validators: Validator[];
  /** delegations defines the delegations active at genesis. */

  delegations: Delegation[];
  /**
   * TODO update this to what we need
   * unbonding_delegations defines the unbonding delegations active at genesis.
   */

  unbondingDelegations: UnbondingDelegation[];
  /**
   * TODO update this to what we need
   * redelegations defines the redelegations active at genesis.
   */

  redelegations: Redelegation[];
  /** exported defines a bool to identify whether the chain dealing with exported or initialized genesis. */

  exported: boolean;
  baseDenom: string;
}
/** StakingGenesisState defines the staking module's genesis state. */

export interface StakingGenesisStateSDKType {
  /** params defines all the parameters of related to deposit. */
  params?: ParamsSDKType;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */

  last_total_power: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */

  last_validator_powers: LastValidatorPowerSDKType[];
  /** validators defines the validator set at genesis. */

  validators: ValidatorSDKType[];
  /** delegations defines the delegations active at genesis. */

  delegations: DelegationSDKType[];
  /**
   * TODO update this to what we need
   * unbonding_delegations defines the unbonding delegations active at genesis.
   */

  unbonding_delegations: UnbondingDelegationSDKType[];
  /**
   * TODO update this to what we need
   * redelegations defines the redelegations active at genesis.
   */

  redelegations: RedelegationSDKType[];
  /** exported defines a bool to identify whether the chain dealing with exported or initialized genesis. */

  exported: boolean;
  base_denom: string;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

export interface Delegation {
  /** delegator_address is the encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the encoded address of the validator. */

  validatorAddress: string;
  /** delegated amount */

  amount: Uint8Array;
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */

export interface DelegationSDKType {
  /** delegator_address is the encoded address of the delegator. */
  delegator_address: string;
  /** validator_address is the encoded address of the validator. */

  validator_address: string;
  /** delegated amount */

  amount: Uint8Array;
}

function createBaseStakingGenesisState(): StakingGenesisState {
  return {
    params: undefined,
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false,
    baseDenom: ""
  };
}

export const StakingGenesisState = {
  encode(message: StakingGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }

    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }

    if (message.baseDenom !== "") {
      writer.uint32(74).string(message.baseDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.lastTotalPower = reader.bytes();
          break;

        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;

        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;

        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;

        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;

        case 8:
          message.exported = reader.bool();
          break;

        case 9:
          message.baseDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StakingGenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      lastTotalPower: isSet(object.lastTotalPower) ? bytesFromBase64(object.lastTotalPower) : new Uint8Array(),
      lastValidatorPowers: Array.isArray(object?.lastValidatorPowers) ? object.lastValidatorPowers.map((e: any) => LastValidatorPower.fromJSON(e)) : [],
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      unbondingDelegations: Array.isArray(object?.unbondingDelegations) ? object.unbondingDelegations.map((e: any) => UnbondingDelegation.fromJSON(e)) : [],
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => Redelegation.fromJSON(e)) : [],
      exported: isSet(object.exported) ? Boolean(object.exported) : false,
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },

  toJSON(message: StakingGenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.lastTotalPower !== undefined && (obj.lastTotalPower = base64FromBytes(message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array()));

    if (message.lastValidatorPowers) {
      obj.lastValidatorPowers = message.lastValidatorPowers.map(e => e ? LastValidatorPower.toJSON(e) : undefined);
    } else {
      obj.lastValidatorPowers = [];
    }

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }

    if (message.unbondingDelegations) {
      obj.unbondingDelegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingDelegations = [];
    }

    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? Redelegation.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }

    message.exported !== undefined && (obj.exported = message.exported);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object: Partial<StakingGenesisState>): StakingGenesisState {
    const message = createBaseStakingGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map(e => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    message.baseDenom = object.baseDenom ?? "";
    return message;
  }

};

function createBaseDelegation(): Delegation {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    amount: new Uint8Array()
  };
}

export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }

    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }

    if (message.amount.length !== 0) {
      writer.uint32(26).bytes(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;

        case 2:
          message.validatorAddress = reader.string();
          break;

        case 3:
          message.amount = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Delegation {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array()
    };
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined && (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<Delegation>): Delegation {
    const message = createBaseDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.amount = object.amount ?? new Uint8Array();
    return message;
  }

};