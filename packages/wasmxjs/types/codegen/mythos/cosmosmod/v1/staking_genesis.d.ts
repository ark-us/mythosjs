import { Params, ParamsSDKType, Validator, ValidatorSDKType, UnbondingDelegation, UnbondingDelegationSDKType, Redelegation, RedelegationSDKType } from "../../../cosmos/staking/v1beta1/staking";
import { LastValidatorPower, LastValidatorPowerSDKType } from "../../../cosmos/staking/v1beta1/genesis";
import * as _m0 from "protobufjs/minimal";
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
export declare const StakingGenesisState: {
    encode(message: StakingGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingGenesisState;
    fromJSON(object: any): StakingGenesisState;
    toJSON(message: StakingGenesisState): unknown;
    fromPartial(object: Partial<StakingGenesisState>): StakingGenesisState;
};
export declare const Delegation: {
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegation;
    fromJSON(object: any): Delegation;
    toJSON(message: Delegation): unknown;
    fromPartial(object: Partial<Delegation>): Delegation;
};
