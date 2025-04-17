import { Params, ParamsSDKType, FeePool, FeePoolSDKType } from "../../../cosmos/distribution/v1beta1/distribution";
import { DelegatorWithdrawInfo, DelegatorWithdrawInfoSDKType, ValidatorOutstandingRewardsRecord, ValidatorOutstandingRewardsRecordSDKType, ValidatorAccumulatedCommissionRecord, ValidatorAccumulatedCommissionRecordSDKType, ValidatorHistoricalRewardsRecord, ValidatorHistoricalRewardsRecordSDKType, ValidatorCurrentRewardsRecord, ValidatorCurrentRewardsRecordSDKType, DelegatorStartingInfoRecord, DelegatorStartingInfoRecordSDKType, ValidatorSlashEventRecord, ValidatorSlashEventRecordSDKType } from "../../../cosmos/distribution/v1beta1/genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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

function createBaseDistributionGenesisState(): DistributionGenesisState {
  return {
    params: undefined,
    feePool: undefined,
    delegatorWithdrawInfos: [],
    previousProposer: "",
    outstandingRewards: [],
    validatorAccumulatedCommissions: [],
    validatorHistoricalRewards: [],
    validatorCurrentRewards: [],
    delegatorStartingInfos: [],
    validatorSlashEvents: [],
    baseDenom: "",
    rewardsDenom: ""
  };
}

export const DistributionGenesisState = {
  encode(message: DistributionGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.feePool !== undefined) {
      FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.delegatorWithdrawInfos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.previousProposer !== "") {
      writer.uint32(34).string(message.previousProposer);
    }

    for (const v of message.outstandingRewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.validatorAccumulatedCommissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.validatorHistoricalRewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.validatorCurrentRewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.delegatorStartingInfos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (message.baseDenom !== "") {
      writer.uint32(90).string(message.baseDenom);
    }

    if (message.rewardsDenom !== "") {
      writer.uint32(98).string(message.rewardsDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.feePool = FeePool.decode(reader, reader.uint32());
          break;

        case 3:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;

        case 4:
          message.previousProposer = reader.string();
          break;

        case 5:
          message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;

        case 6:
          message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;

        case 7:
          message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;

        case 8:
          message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;

        case 9:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;

        case 10:
          message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
          break;

        case 11:
          message.baseDenom = reader.string();
          break;

        case 12:
          message.rewardsDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistributionGenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feePool: isSet(object.feePool) ? FeePool.fromJSON(object.feePool) : undefined,
      delegatorWithdrawInfos: Array.isArray(object?.delegatorWithdrawInfos) ? object.delegatorWithdrawInfos.map((e: any) => DelegatorWithdrawInfo.fromJSON(e)) : [],
      previousProposer: isSet(object.previousProposer) ? String(object.previousProposer) : "",
      outstandingRewards: Array.isArray(object?.outstandingRewards) ? object.outstandingRewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
      validatorAccumulatedCommissions: Array.isArray(object?.validatorAccumulatedCommissions) ? object.validatorAccumulatedCommissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
      validatorHistoricalRewards: Array.isArray(object?.validatorHistoricalRewards) ? object.validatorHistoricalRewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
      validatorCurrentRewards: Array.isArray(object?.validatorCurrentRewards) ? object.validatorCurrentRewards.map((e: any) => ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
      delegatorStartingInfos: Array.isArray(object?.delegatorStartingInfos) ? object.delegatorStartingInfos.map((e: any) => DelegatorStartingInfoRecord.fromJSON(e)) : [],
      validatorSlashEvents: Array.isArray(object?.validatorSlashEvents) ? object.validatorSlashEvents.map((e: any) => ValidatorSlashEventRecord.fromJSON(e)) : [],
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      rewardsDenom: isSet(object.rewardsDenom) ? String(object.rewardsDenom) : ""
    };
  },

  toJSON(message: DistributionGenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.feePool !== undefined && (obj.feePool = message.feePool ? FeePool.toJSON(message.feePool) : undefined);

    if (message.delegatorWithdrawInfos) {
      obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
    } else {
      obj.delegatorWithdrawInfos = [];
    }

    message.previousProposer !== undefined && (obj.previousProposer = message.previousProposer);

    if (message.outstandingRewards) {
      obj.outstandingRewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.outstandingRewards = [];
    }

    if (message.validatorAccumulatedCommissions) {
      obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
    } else {
      obj.validatorAccumulatedCommissions = [];
    }

    if (message.validatorHistoricalRewards) {
      obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validatorHistoricalRewards = [];
    }

    if (message.validatorCurrentRewards) {
      obj.validatorCurrentRewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
    } else {
      obj.validatorCurrentRewards = [];
    }

    if (message.delegatorStartingInfos) {
      obj.delegatorStartingInfos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
    } else {
      obj.delegatorStartingInfos = [];
    }

    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
    } else {
      obj.validatorSlashEvents = [];
    }

    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.rewardsDenom !== undefined && (obj.rewardsDenom = message.rewardsDenom);
    return obj;
  },

  fromPartial(object: Partial<DistributionGenesisState>): DistributionGenesisState {
    const message = createBaseDistributionGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feePool = object.feePool !== undefined && object.feePool !== null ? FeePool.fromPartial(object.feePool) : undefined;
    message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previousProposer = object.previousProposer ?? "";
    message.outstandingRewards = object.outstandingRewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validatorHistoricalRewards = object.validatorHistoricalRewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validatorCurrentRewards = object.validatorCurrentRewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegatorStartingInfos = object.delegatorStartingInfos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
    message.baseDenom = object.baseDenom ?? "";
    message.rewardsDenom = object.rewardsDenom ?? "";
    return message;
  }

};