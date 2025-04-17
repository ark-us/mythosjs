import { StakingGenesisState, StakingGenesisStateSDKType } from "./staking_genesis";
import { BankGenesisState, BankGenesisStateSDKType } from "./bank_genesis";
import { GovGenesisState, GovGenesisStateSDKType } from "./gov_genesis";
import { AuthGenesisState, AuthGenesisStateSDKType } from "./auth_genesis";
import { GenesisState as GenesisState1 } from "../../../cosmos/slashing/v1beta1/genesis";
import { GenesisStateSDKType as GenesisState1SDKType } from "../../../cosmos/slashing/v1beta1/genesis";
import { DistributionGenesisState, DistributionGenesisStateSDKType } from "./distribution_genesis";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
