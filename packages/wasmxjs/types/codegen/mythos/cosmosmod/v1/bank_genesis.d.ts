/// <reference types="long" />
import { Params, ParamsSDKType, SendEnabled, SendEnabledSDKType, Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { Balance, BalanceSDKType } from "../../../cosmos/bank/v1beta1/genesis";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** BankGenesisState defines the bank module's genesis state. */
export interface BankGenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** balances is an array containing the balances of all the accounts. */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: Coin[];
    /** denom_metadata defines the metadata of the different coins. */
    denomInfo: DenomDeploymentInfo[];
    /**
     * send_enabled defines the denoms where send is enabled or disabled.
     *
     * Since: cosmos-sdk 0.47
     */
    sendEnabled: SendEnabled[];
}
/** BankGenesisState defines the bank module's genesis state. */
export interface BankGenesisStateSDKType {
    /** params defines all the parameters of the module. */
    params?: ParamsSDKType;
    /** balances is an array containing the balances of all the accounts. */
    balances: BalanceSDKType[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: CoinSDKType[];
    /** denom_metadata defines the metadata of the different coins. */
    denom_info: DenomDeploymentInfoSDKType[];
    /**
     * send_enabled defines the denoms where send is enabled or disabled.
     *
     * Since: cosmos-sdk 0.47
     */
    send_enabled: SendEnabledSDKType[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface DenomDeploymentInfo {
    metadata?: Metadata;
    codeId: Long;
    admins: string[];
    minters: string[];
    contract: string;
    baseDenom: string;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface DenomDeploymentInfoSDKType {
    metadata?: MetadataSDKType;
    code_id: Long;
    admins: string[];
    minters: string[];
    contract: string;
    base_denom: string;
}
export declare const BankGenesisState: {
    encode(message: BankGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BankGenesisState;
    fromJSON(object: any): BankGenesisState;
    toJSON(message: BankGenesisState): unknown;
    fromPartial(object: Partial<BankGenesisState>): BankGenesisState;
};
export declare const DenomDeploymentInfo: {
    encode(message: DenomDeploymentInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomDeploymentInfo;
    fromJSON(object: any): DenomDeploymentInfo;
    toJSON(message: DenomDeploymentInfo): unknown;
    fromPartial(object: Partial<DenomDeploymentInfo>): DenomDeploymentInfo;
};
