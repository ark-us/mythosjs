import { Params, ParamsSDKType, FeePool, FeePoolSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { DelegatorWithdrawInfo, DelegatorWithdrawInfoSDKType, ValidatorOutstandingRewardsRecord, ValidatorOutstandingRewardsRecordSDKType, ValidatorAccumulatedCommissionRecord, ValidatorAccumulatedCommissionRecordSDKType, ValidatorHistoricalRewardsRecord, ValidatorHistoricalRewardsRecordSDKType, ValidatorCurrentRewardsRecord, ValidatorCurrentRewardsRecordSDKType, DelegatorStartingInfoRecord, DelegatorStartingInfoRecordSDKType, ValidatorSlashEventRecord, ValidatorSlashEventRecordSDKType } from "../../../cosmos/distribution/v1beta1/genesis";
import * as _m0 from "protobufjs/minimal";
/** DistributionGenesisState defines the distribution module's genesis state. */
export interface DistributionGenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** fee_pool defines the fee pool at genesis. */
    feePool?: FeePool;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegatorWithdrawInfos: DelegatorWithdrawInfo[];
    /** fee_pool defines the previous proposer at genesis. */
    previousProposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstandingRewards: ValidatorOutstandingRewardsRecord[];
    /** fee_pool defines the accumulated commissions of all validators at genesis. */
    validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegatorStartingInfos: DelegatorStartingInfoRecord[];
    /** fee_pool defines the validator slash events at genesis. */
    validatorSlashEvents: ValidatorSlashEventRecord[];
    baseDenom: string;
    rewardsDenom: string;
}
/** DistributionGenesisState defines the distribution module's genesis state. */
export interface DistributionGenesisStateSDKType {
    /** params defines all the parameters of the module. */
    params?: ParamsSDKType;
    /** fee_pool defines the fee pool at genesis. */
    fee_pool?: FeePoolSDKType;
    /** fee_pool defines the delegator withdraw infos at genesis. */
    delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
    /** fee_pool defines the previous proposer at genesis. */
    previous_proposer: string;
    /** fee_pool defines the outstanding rewards of all validators at genesis. */
    outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
    /** fee_pool defines the accumulated commissions of all validators at genesis. */
    validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
    /** fee_pool defines the historical rewards of all validators at genesis. */
    validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
    /** fee_pool defines the current rewards of all validators at genesis. */
    validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
    /** fee_pool defines the delegator starting infos at genesis. */
    delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
    /** fee_pool defines the validator slash events at genesis. */
    validator_slash_events: ValidatorSlashEventRecordSDKType[];
    base_denom: string;
    rewards_denom: string;
}
export declare const DistributionGenesisState: {
    encode(message: DistributionGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionGenesisState;
    fromJSON(object: any): DistributionGenesisState;
    toJSON(message: DistributionGenesisState): unknown;
    fromPartial(object: Partial<DistributionGenesisState>): DistributionGenesisState;
};
