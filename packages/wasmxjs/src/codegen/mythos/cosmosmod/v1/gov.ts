import { ProposalStatus, ProposalStatusSDKType, TallyResult, TallyResultSDKType, proposalStatusFromJSON, proposalStatusToJSON } from "../../../cosmos/gov/v1/gov";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, fromJsonTimestamp, base64FromBytes, fromTimestamp } from "../../../helpers";
/** Proposal the same as govv1.Proposal, except messages are raw bytes */

export interface GovProposal {
  /** id defines the unique id of the proposal. */
  id: Long;
  /** messages are the arbitrary messages to be executed if the proposal passes. */

  messages: Uint8Array[];
  /** status defines the proposal status. */

  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */

  finalTallyResult?: TallyResult;
  /** submit_time is the time of proposal submission. */

  submitTime?: Timestamp;
  /** deposit_end_time is the end time for deposition. */

  depositEndTime?: Timestamp;
  /** total_deposit is the total deposit on the proposal. */

  totalDeposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */

  votingStartTime?: Timestamp;
  /** voting_end_time is the end time of voting on a proposal. */

  votingEndTime?: Timestamp;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
   */

  metadata: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  summary: string;
  /**
   * proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */

  proposer: string;
  /**
   * expedited defines if the proposal is expedited
   * 
   * Since: cosmos-sdk 0.50
   */

  expedited: boolean;
  /**
   * failed_reason defines the reason why the proposal failed
   * 
   * Since: cosmos-sdk 0.50
   */

  failedReason: string;
}
/** Proposal the same as govv1.Proposal, except messages are raw bytes */

export interface GovProposalSDKType {
  /** id defines the unique id of the proposal. */
  id: Long;
  /** messages are the arbitrary messages to be executed if the proposal passes. */

  messages: Uint8Array[];
  /** status defines the proposal status. */

  status: ProposalStatusSDKType;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */

  final_tally_result?: TallyResultSDKType;
  /** submit_time is the time of proposal submission. */

  submit_time?: TimestampSDKType;
  /** deposit_end_time is the end time for deposition. */

  deposit_end_time?: TimestampSDKType;
  /** total_deposit is the total deposit on the proposal. */

  total_deposit: CoinSDKType[];
  /** voting_start_time is the starting time to vote on a proposal. */

  voting_start_time?: TimestampSDKType;
  /** voting_end_time is the end time of voting on a proposal. */

  voting_end_time?: TimestampSDKType;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here:
   * https://docs.cosmos.network/v0.47/modules/gov#proposal-3
   */

  metadata: string;
  /**
   * title is the title of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  title: string;
  /**
   * summary is a short summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  summary: string;
  /**
   * proposer is the address of the proposal sumbitter
   * 
   * Since: cosmos-sdk 0.47
   */

  proposer: string;
  /**
   * expedited defines if the proposal is expedited
   * 
   * Since: cosmos-sdk 0.50
   */

  expedited: boolean;
  /**
   * failed_reason defines the reason why the proposal failed
   * 
   * Since: cosmos-sdk 0.50
   */

  failed_reason: string;
}
/** MsgSubmitProposal the same as govv1.MsgSubmitProposal, except messages are raw bytes */

export interface MsgSubmitProposal {
  /** messages are the arbitrary messages to be executed if proposal passes. */
  messages: Uint8Array[];
  /** initial_deposit is the deposit value that must be paid at proposal submission. */

  initialDeposit: Coin[];
  /** proposer is the account address of the proposer. */

  proposer: string;
  /** metadata is any arbitrary metadata attached to the proposal. */

  metadata: string;
  /**
   * title is the title of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */

  title: string;
  /**
   * summary is the summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  summary: string;
  /**
   * expedited defines if the proposal is expedited or not
   * 
   * Since: cosmos-sdk 0.50
   */

  expedited: boolean;
}
/** MsgSubmitProposal the same as govv1.MsgSubmitProposal, except messages are raw bytes */

export interface MsgSubmitProposalSDKType {
  /** messages are the arbitrary messages to be executed if proposal passes. */
  messages: Uint8Array[];
  /** initial_deposit is the deposit value that must be paid at proposal submission. */

  initial_deposit: CoinSDKType[];
  /** proposer is the account address of the proposer. */

  proposer: string;
  /** metadata is any arbitrary metadata attached to the proposal. */

  metadata: string;
  /**
   * title is the title of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */

  title: string;
  /**
   * summary is the summary of the proposal
   * 
   * Since: cosmos-sdk 0.47
   */

  summary: string;
  /**
   * expedited defines if the proposal is expedited or not
   * 
   * Since: cosmos-sdk 0.50
   */

  expedited: boolean;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

export interface QueryProposalResponse {
  /** proposal is the requested governance proposal. */
  proposal?: GovProposal;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

export interface QueryProposalResponseSDKType {
  /** proposal is the requested governance proposal. */
  proposal?: GovProposalSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

export interface QueryProposalsResponse {
  /** proposals defines all the requested governance proposals. */
  proposals: GovProposal[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

export interface QueryProposalsResponseSDKType {
  /** proposals defines all the requested governance proposals. */
  proposals: GovProposalSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/**
 * Params defines the parameters for the x/gov module.
 * Since: cosmos-sdk 0.47
 * same as govv1.Params, except that Duration is replaced by uint64 milliseconds
 */

export interface GovParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */

  maxDepositPeriod: Long;
  /** Duration of the voting period. */

  votingPeriod: Long;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */

  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */

  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */

  vetoThreshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */

  minInitialDepositRatio: string;
  /**
   * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
   * 
   * Since: cosmos-sdk 0.50
   */

  proposalCancelRatio: string;
  /**
   * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
   * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
   * 
   * Since: cosmos-sdk 0.50
   */

  proposalCancelDest: string;
  /**
   * Duration of the voting period of an expedited proposal.
   * Since: cosmos-sdk 0.50
   */

  expeditedVotingPeriod: Long;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
   * 
   * Since: cosmos-sdk 0.50
   */

  expeditedThreshold: string;
  /** Minimum expedited deposit for a proposal to enter voting period. */

  expeditedMinDeposit: Coin[];
  /** burn deposits if a proposal does not meet quorum */

  burnVoteQuorum: boolean;
  /** burn deposits if the proposal does not enter voting period */

  burnProposalDepositPrevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */

  burnVoteVeto: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
   * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   */

  minDepositRatio: string;
}
/**
 * Params defines the parameters for the x/gov module.
 * Since: cosmos-sdk 0.47
 * same as govv1.Params, except that Duration is replaced by uint64 milliseconds
 */

export interface GovParamsSDKType {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit: CoinSDKType[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */

  max_deposit_period: Long;
  /** Duration of the voting period. */

  voting_period: Long;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   */

  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */

  threshold: string;
  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   */

  veto_threshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */

  min_initial_deposit_ratio: string;
  /**
   * The cancel ratio which will not be returned back to the depositors when a proposal is cancelled.
   * 
   * Since: cosmos-sdk 0.50
   */

  proposal_cancel_ratio: string;
  /**
   * The address which will receive (proposal_cancel_ratio * deposit) proposal deposits.
   * If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned.
   * 
   * Since: cosmos-sdk 0.50
   */

  proposal_cancel_dest: string;
  /**
   * Duration of the voting period of an expedited proposal.
   * Since: cosmos-sdk 0.50
   */

  expedited_voting_period: Long;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.67.
   * 
   * Since: cosmos-sdk 0.50
   */

  expedited_threshold: string;
  /** Minimum expedited deposit for a proposal to enter voting period. */

  expedited_min_deposit: CoinSDKType[];
  /** burn deposits if a proposal does not meet quorum */

  burn_vote_quorum: boolean;
  /** burn deposits if the proposal does not enter voting period */

  burn_proposal_deposit_prevote: boolean;
  /** burn deposits if quorum with vote type no_veto is met */

  burn_vote_veto: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that must be met when making a deposit.
   * Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   * 
   * Since: cosmos-sdk 0.50
   */

  min_deposit_ratio: string;
}
export interface ProposalOption {
  proposer: string;
  /** messages are the arbitrary messages to be executed if proposal passes. */

  messages: Uint8Array[];
  amount: Uint8Array;
  arbitrationAmount: Uint8Array;
  weight: Uint8Array;
  title: string;
  summary: string;
  metadata: string;
}
export interface ProposalOptionSDKType {
  proposer: string;
  /** messages are the arbitrary messages to be executed if proposal passes. */

  messages: Uint8Array[];
  amount: Uint8Array;
  arbitration_amount: Uint8Array;
  weight: Uint8Array;
  title: string;
  summary: string;
  metadata: string;
}
export interface ProposalVoteStatus {
  /** status defines the proposal status. */
  status: ProposalStatus;
  xi: number;
  yi: number;
  changed: boolean;
}
export interface ProposalVoteStatusSDKType {
  /** status defines the proposal status. */
  status: ProposalStatusSDKType;
  xi: number;
  yi: number;
  changed: boolean;
}
/** ProposalExtended */

export interface ProposalExtended {
  id: Long;
  /** status defines the proposal status. */

  status: ProposalStatus;
  /** submit_time is the time of proposal submission. */

  submitTime?: Timestamp;
  /** deposit_end_time is the end time for deposition. */

  depositEndTime?: Timestamp;
  /** voting_start_time is the starting time to vote on a proposal. */

  votingStartTime?: Timestamp;
  /** voting_end_time is the end time of voting on a proposal. */

  votingEndTime?: Timestamp;
  metadata: string;
  title: string;
  summary: string;
  proposer: string;
  failedReason: string;
  x: Long;
  y: Long;
  denom: string;
  options: ProposalOption[];
  voteStatus?: ProposalVoteStatus;
  winner: number;
}
/** ProposalExtended */

export interface ProposalExtendedSDKType {
  id: Long;
  /** status defines the proposal status. */

  status: ProposalStatusSDKType;
  /** submit_time is the time of proposal submission. */

  submit_time?: TimestampSDKType;
  /** deposit_end_time is the end time for deposition. */

  deposit_end_time?: TimestampSDKType;
  /** voting_start_time is the starting time to vote on a proposal. */

  voting_start_time?: TimestampSDKType;
  /** voting_end_time is the end time of voting on a proposal. */

  voting_end_time?: TimestampSDKType;
  metadata: string;
  title: string;
  summary: string;
  proposer: string;
  failed_reason: string;
  x: Long;
  y: Long;
  denom: string;
  options: ProposalOptionSDKType[];
  vote_status?: ProposalVoteStatusSDKType;
  winner: number;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  params?: GovParams;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  params?: GovParamsSDKType;
}
export interface QueryProposalExtendedResponse {
  proposal?: ProposalExtended;
}
export interface QueryProposalExtendedResponseSDKType {
  proposal?: ProposalExtendedSDKType;
}

function createBaseGovProposal(): GovProposal {
  return {
    id: Long.UZERO,
    messages: [],
    status: 0,
    finalTallyResult: undefined,
    submitTime: undefined,
    depositEndTime: undefined,
    totalDeposit: [],
    votingStartTime: undefined,
    votingEndTime: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: "",
    expedited: false,
    failedReason: ""
  };
}

export const GovProposal = {
  encode(message: GovProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    for (const v of message.messages) {
      writer.uint32(18).bytes(v!);
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }

    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }

    if (message.submitTime !== undefined) {
      Timestamp.encode(message.submitTime, writer.uint32(42).fork()).ldelim();
    }

    if (message.depositEndTime !== undefined) {
      Timestamp.encode(message.depositEndTime, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.votingStartTime !== undefined) {
      Timestamp.encode(message.votingStartTime, writer.uint32(66).fork()).ldelim();
    }

    if (message.votingEndTime !== undefined) {
      Timestamp.encode(message.votingEndTime, writer.uint32(74).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }

    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }

    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }

    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
    }

    if (message.expedited === true) {
      writer.uint32(112).bool(message.expedited);
    }

    if (message.failedReason !== "") {
      writer.uint32(122).string(message.failedReason);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.messages.push(reader.bytes());
          break;

        case 3:
          message.status = (reader.int32() as any);
          break;

        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;

        case 5:
          message.submitTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.depositEndTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.votingStartTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 9:
          message.votingEndTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 10:
          message.metadata = reader.string();
          break;

        case 11:
          message.title = reader.string();
          break;

        case 12:
          message.summary = reader.string();
          break;

        case 13:
          message.proposer = reader.string();
          break;

        case 14:
          message.expedited = reader.bool();
          break;

        case 15:
          message.failedReason = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GovProposal {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => bytesFromBase64(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      finalTallyResult: isSet(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : undefined,
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : undefined,
      depositEndTime: isSet(object.depositEndTime) ? fromJsonTimestamp(object.depositEndTime) : undefined,
      totalDeposit: Array.isArray(object?.totalDeposit) ? object.totalDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      votingStartTime: isSet(object.votingStartTime) ? fromJsonTimestamp(object.votingStartTime) : undefined,
      votingEndTime: isSet(object.votingEndTime) ? fromJsonTimestamp(object.votingEndTime) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      expedited: isSet(object.expedited) ? Boolean(object.expedited) : false,
      failedReason: isSet(object.failedReason) ? String(object.failedReason) : ""
    };
  },

  toJSON(message: GovProposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());

    if (message.messages) {
      obj.messages = message.messages.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.messages = [];
    }

    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined && (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : undefined);
    message.submitTime !== undefined && (obj.submitTime = fromTimestamp(message.submitTime).toISOString());
    message.depositEndTime !== undefined && (obj.depositEndTime = fromTimestamp(message.depositEndTime).toISOString());

    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDeposit = [];
    }

    message.votingStartTime !== undefined && (obj.votingStartTime = fromTimestamp(message.votingStartTime).toISOString());
    message.votingEndTime !== undefined && (obj.votingEndTime = fromTimestamp(message.votingEndTime).toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.expedited !== undefined && (obj.expedited = message.expedited);
    message.failedReason !== undefined && (obj.failedReason = message.failedReason);
    return obj;
  },

  fromPartial(object: Partial<GovProposal>): GovProposal {
    const message = createBaseGovProposal();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.messages = object.messages?.map(e => e) || [];
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? Timestamp.fromPartial(object.submitTime) : undefined;
    message.depositEndTime = object.depositEndTime !== undefined && object.depositEndTime !== null ? Timestamp.fromPartial(object.depositEndTime) : undefined;
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime !== undefined && object.votingStartTime !== null ? Timestamp.fromPartial(object.votingStartTime) : undefined;
    message.votingEndTime = object.votingEndTime !== undefined && object.votingEndTime !== null ? Timestamp.fromPartial(object.votingEndTime) : undefined;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    message.expedited = object.expedited ?? false;
    message.failedReason = object.failedReason ?? "";
    return message;
  }

};

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    messages: [],
    initialDeposit: [],
    proposer: "",
    metadata: "",
    title: "",
    summary: "",
    expedited: false
  };
}

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      writer.uint32(10).bytes(v!);
    }

    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }

    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }

    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }

    if (message.summary !== "") {
      writer.uint32(50).string(message.summary);
    }

    if (message.expedited === true) {
      writer.uint32(56).bool(message.expedited);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.messages.push(reader.bytes());
          break;

        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.proposer = reader.string();
          break;

        case 4:
          message.metadata = reader.string();
          break;

        case 5:
          message.title = reader.string();
          break;

        case 6:
          message.summary = reader.string();
          break;

        case 7:
          message.expedited = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    return {
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => bytesFromBase64(e)) : [],
      initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      expedited: isSet(object.expedited) ? Boolean(object.expedited) : false
    };
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};

    if (message.messages) {
      obj.messages = message.messages.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.messages = [];
    }

    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialDeposit = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.expedited !== undefined && (obj.expedited = message.expedited);
    return obj;
  },

  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map(e => e) || [];
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.expedited = object.expedited ?? false;
    return message;
  }

};

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}

export const QueryProposalResponse = {
  encode(message: QueryProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      GovProposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = GovProposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? GovProposal.fromJSON(object.proposal) : undefined
    };
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? GovProposal.toJSON(message.proposal) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? GovProposal.fromPartial(object.proposal) : undefined;
    return message;
  }

};

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}

export const QueryProposalsResponse = {
  encode(message: QueryProposalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposals) {
      GovProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposals.push(GovProposal.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => GovProposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};

    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? GovProposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => GovProposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseGovParams(): GovParams {
  return {
    minDeposit: [],
    maxDepositPeriod: Long.ZERO,
    votingPeriod: Long.ZERO,
    quorum: "",
    threshold: "",
    vetoThreshold: "",
    minInitialDepositRatio: "",
    proposalCancelRatio: "",
    proposalCancelDest: "",
    expeditedVotingPeriod: Long.ZERO,
    expeditedThreshold: "",
    expeditedMinDeposit: [],
    burnVoteQuorum: false,
    burnProposalDepositPrevote: false,
    burnVoteVeto: false,
    minDepositRatio: ""
  };
}

export const GovParams = {
  encode(message: GovParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.maxDepositPeriod.isZero()) {
      writer.uint32(16).int64(message.maxDepositPeriod);
    }

    if (!message.votingPeriod.isZero()) {
      writer.uint32(24).int64(message.votingPeriod);
    }

    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }

    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }

    if (message.vetoThreshold !== "") {
      writer.uint32(50).string(message.vetoThreshold);
    }

    if (message.minInitialDepositRatio !== "") {
      writer.uint32(58).string(message.minInitialDepositRatio);
    }

    if (message.proposalCancelRatio !== "") {
      writer.uint32(66).string(message.proposalCancelRatio);
    }

    if (message.proposalCancelDest !== "") {
      writer.uint32(74).string(message.proposalCancelDest);
    }

    if (!message.expeditedVotingPeriod.isZero()) {
      writer.uint32(80).int64(message.expeditedVotingPeriod);
    }

    if (message.expeditedThreshold !== "") {
      writer.uint32(90).string(message.expeditedThreshold);
    }

    for (const v of message.expeditedMinDeposit) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }

    if (message.burnVoteQuorum === true) {
      writer.uint32(104).bool(message.burnVoteQuorum);
    }

    if (message.burnProposalDepositPrevote === true) {
      writer.uint32(112).bool(message.burnProposalDepositPrevote);
    }

    if (message.burnVoteVeto === true) {
      writer.uint32(120).bool(message.burnVoteVeto);
    }

    if (message.minDepositRatio !== "") {
      writer.uint32(130).string(message.minDepositRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.maxDepositPeriod = (reader.int64() as Long);
          break;

        case 3:
          message.votingPeriod = (reader.int64() as Long);
          break;

        case 4:
          message.quorum = reader.string();
          break;

        case 5:
          message.threshold = reader.string();
          break;

        case 6:
          message.vetoThreshold = reader.string();
          break;

        case 7:
          message.minInitialDepositRatio = reader.string();
          break;

        case 8:
          message.proposalCancelRatio = reader.string();
          break;

        case 9:
          message.proposalCancelDest = reader.string();
          break;

        case 10:
          message.expeditedVotingPeriod = (reader.int64() as Long);
          break;

        case 11:
          message.expeditedThreshold = reader.string();
          break;

        case 12:
          message.expeditedMinDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 13:
          message.burnVoteQuorum = reader.bool();
          break;

        case 14:
          message.burnProposalDepositPrevote = reader.bool();
          break;

        case 15:
          message.burnVoteVeto = reader.bool();
          break;

        case 16:
          message.minDepositRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GovParams {
    return {
      minDeposit: Array.isArray(object?.minDeposit) ? object.minDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      maxDepositPeriod: isSet(object.maxDepositPeriod) ? Long.fromValue(object.maxDepositPeriod) : Long.ZERO,
      votingPeriod: isSet(object.votingPeriod) ? Long.fromValue(object.votingPeriod) : Long.ZERO,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      vetoThreshold: isSet(object.vetoThreshold) ? String(object.vetoThreshold) : "",
      minInitialDepositRatio: isSet(object.minInitialDepositRatio) ? String(object.minInitialDepositRatio) : "",
      proposalCancelRatio: isSet(object.proposalCancelRatio) ? String(object.proposalCancelRatio) : "",
      proposalCancelDest: isSet(object.proposalCancelDest) ? String(object.proposalCancelDest) : "",
      expeditedVotingPeriod: isSet(object.expeditedVotingPeriod) ? Long.fromValue(object.expeditedVotingPeriod) : Long.ZERO,
      expeditedThreshold: isSet(object.expeditedThreshold) ? String(object.expeditedThreshold) : "",
      expeditedMinDeposit: Array.isArray(object?.expeditedMinDeposit) ? object.expeditedMinDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      burnVoteQuorum: isSet(object.burnVoteQuorum) ? Boolean(object.burnVoteQuorum) : false,
      burnProposalDepositPrevote: isSet(object.burnProposalDepositPrevote) ? Boolean(object.burnProposalDepositPrevote) : false,
      burnVoteVeto: isSet(object.burnVoteVeto) ? Boolean(object.burnVoteVeto) : false,
      minDepositRatio: isSet(object.minDepositRatio) ? String(object.minDepositRatio) : ""
    };
  },

  toJSON(message: GovParams): unknown {
    const obj: any = {};

    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minDeposit = [];
    }

    message.maxDepositPeriod !== undefined && (obj.maxDepositPeriod = (message.maxDepositPeriod || Long.ZERO).toString());
    message.votingPeriod !== undefined && (obj.votingPeriod = (message.votingPeriod || Long.ZERO).toString());
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined && (obj.vetoThreshold = message.vetoThreshold);
    message.minInitialDepositRatio !== undefined && (obj.minInitialDepositRatio = message.minInitialDepositRatio);
    message.proposalCancelRatio !== undefined && (obj.proposalCancelRatio = message.proposalCancelRatio);
    message.proposalCancelDest !== undefined && (obj.proposalCancelDest = message.proposalCancelDest);
    message.expeditedVotingPeriod !== undefined && (obj.expeditedVotingPeriod = (message.expeditedVotingPeriod || Long.ZERO).toString());
    message.expeditedThreshold !== undefined && (obj.expeditedThreshold = message.expeditedThreshold);

    if (message.expeditedMinDeposit) {
      obj.expeditedMinDeposit = message.expeditedMinDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.expeditedMinDeposit = [];
    }

    message.burnVoteQuorum !== undefined && (obj.burnVoteQuorum = message.burnVoteQuorum);
    message.burnProposalDepositPrevote !== undefined && (obj.burnProposalDepositPrevote = message.burnProposalDepositPrevote);
    message.burnVoteVeto !== undefined && (obj.burnVoteVeto = message.burnVoteVeto);
    message.minDepositRatio !== undefined && (obj.minDepositRatio = message.minDepositRatio);
    return obj;
  },

  fromPartial(object: Partial<GovParams>): GovParams {
    const message = createBaseGovParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? Long.fromValue(object.maxDepositPeriod) : Long.ZERO;
    message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? Long.fromValue(object.votingPeriod) : Long.ZERO;
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    message.proposalCancelRatio = object.proposalCancelRatio ?? "";
    message.proposalCancelDest = object.proposalCancelDest ?? "";
    message.expeditedVotingPeriod = object.expeditedVotingPeriod !== undefined && object.expeditedVotingPeriod !== null ? Long.fromValue(object.expeditedVotingPeriod) : Long.ZERO;
    message.expeditedThreshold = object.expeditedThreshold ?? "";
    message.expeditedMinDeposit = object.expeditedMinDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.burnVoteQuorum = object.burnVoteQuorum ?? false;
    message.burnProposalDepositPrevote = object.burnProposalDepositPrevote ?? false;
    message.burnVoteVeto = object.burnVoteVeto ?? false;
    message.minDepositRatio = object.minDepositRatio ?? "";
    return message;
  }

};

function createBaseProposalOption(): ProposalOption {
  return {
    proposer: "",
    messages: [],
    amount: new Uint8Array(),
    arbitrationAmount: new Uint8Array(),
    weight: new Uint8Array(),
    title: "",
    summary: "",
    metadata: ""
  };
}

export const ProposalOption = {
  encode(message: ProposalOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }

    for (const v of message.messages) {
      writer.uint32(18).bytes(v!);
    }

    if (message.amount.length !== 0) {
      writer.uint32(26).bytes(message.amount);
    }

    if (message.arbitrationAmount.length !== 0) {
      writer.uint32(34).bytes(message.arbitrationAmount);
    }

    if (message.weight.length !== 0) {
      writer.uint32(42).bytes(message.weight);
    }

    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }

    if (message.summary !== "") {
      writer.uint32(58).string(message.summary);
    }

    if (message.metadata !== "") {
      writer.uint32(66).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;

        case 2:
          message.messages.push(reader.bytes());
          break;

        case 3:
          message.amount = reader.bytes();
          break;

        case 4:
          message.arbitrationAmount = reader.bytes();
          break;

        case 5:
          message.weight = reader.bytes();
          break;

        case 6:
          message.title = reader.string();
          break;

        case 7:
          message.summary = reader.string();
          break;

        case 8:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProposalOption {
    return {
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => bytesFromBase64(e)) : [],
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
      arbitrationAmount: isSet(object.arbitrationAmount) ? bytesFromBase64(object.arbitrationAmount) : new Uint8Array(),
      weight: isSet(object.weight) ? bytesFromBase64(object.weight) : new Uint8Array(),
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: ProposalOption): unknown {
    const obj: any = {};
    message.proposer !== undefined && (obj.proposer = message.proposer);

    if (message.messages) {
      obj.messages = message.messages.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.messages = [];
    }

    message.amount !== undefined && (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    message.arbitrationAmount !== undefined && (obj.arbitrationAmount = base64FromBytes(message.arbitrationAmount !== undefined ? message.arbitrationAmount : new Uint8Array()));
    message.weight !== undefined && (obj.weight = base64FromBytes(message.weight !== undefined ? message.weight : new Uint8Array()));
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: Partial<ProposalOption>): ProposalOption {
    const message = createBaseProposalOption();
    message.proposer = object.proposer ?? "";
    message.messages = object.messages?.map(e => e) || [];
    message.amount = object.amount ?? new Uint8Array();
    message.arbitrationAmount = object.arbitrationAmount ?? new Uint8Array();
    message.weight = object.weight ?? new Uint8Array();
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  }

};

function createBaseProposalVoteStatus(): ProposalVoteStatus {
  return {
    status: 0,
    xi: 0,
    yi: 0,
    changed: false
  };
}

export const ProposalVoteStatus = {
  encode(message: ProposalVoteStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }

    if (message.xi !== 0) {
      writer.uint32(16).uint32(message.xi);
    }

    if (message.yi !== 0) {
      writer.uint32(24).uint32(message.yi);
    }

    if (message.changed === true) {
      writer.uint32(32).bool(message.changed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalVoteStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalVoteStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = (reader.int32() as any);
          break;

        case 2:
          message.xi = reader.uint32();
          break;

        case 3:
          message.yi = reader.uint32();
          break;

        case 4:
          message.changed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProposalVoteStatus {
    return {
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      xi: isSet(object.xi) ? Number(object.xi) : 0,
      yi: isSet(object.yi) ? Number(object.yi) : 0,
      changed: isSet(object.changed) ? Boolean(object.changed) : false
    };
  },

  toJSON(message: ProposalVoteStatus): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.xi !== undefined && (obj.xi = Math.round(message.xi));
    message.yi !== undefined && (obj.yi = Math.round(message.yi));
    message.changed !== undefined && (obj.changed = message.changed);
    return obj;
  },

  fromPartial(object: Partial<ProposalVoteStatus>): ProposalVoteStatus {
    const message = createBaseProposalVoteStatus();
    message.status = object.status ?? 0;
    message.xi = object.xi ?? 0;
    message.yi = object.yi ?? 0;
    message.changed = object.changed ?? false;
    return message;
  }

};

function createBaseProposalExtended(): ProposalExtended {
  return {
    id: Long.UZERO,
    status: 0,
    submitTime: undefined,
    depositEndTime: undefined,
    votingStartTime: undefined,
    votingEndTime: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: "",
    failedReason: "",
    x: Long.UZERO,
    y: Long.UZERO,
    denom: "",
    options: [],
    voteStatus: undefined,
    winner: 0
  };
}

export const ProposalExtended = {
  encode(message: ProposalExtended, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }

    if (message.submitTime !== undefined) {
      Timestamp.encode(message.submitTime, writer.uint32(26).fork()).ldelim();
    }

    if (message.depositEndTime !== undefined) {
      Timestamp.encode(message.depositEndTime, writer.uint32(34).fork()).ldelim();
    }

    if (message.votingStartTime !== undefined) {
      Timestamp.encode(message.votingStartTime, writer.uint32(42).fork()).ldelim();
    }

    if (message.votingEndTime !== undefined) {
      Timestamp.encode(message.votingEndTime, writer.uint32(50).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(58).string(message.metadata);
    }

    if (message.title !== "") {
      writer.uint32(66).string(message.title);
    }

    if (message.summary !== "") {
      writer.uint32(74).string(message.summary);
    }

    if (message.proposer !== "") {
      writer.uint32(82).string(message.proposer);
    }

    if (message.failedReason !== "") {
      writer.uint32(90).string(message.failedReason);
    }

    if (!message.x.isZero()) {
      writer.uint32(96).uint64(message.x);
    }

    if (!message.y.isZero()) {
      writer.uint32(104).uint64(message.y);
    }

    if (message.denom !== "") {
      writer.uint32(114).string(message.denom);
    }

    for (const v of message.options) {
      ProposalOption.encode(v!, writer.uint32(122).fork()).ldelim();
    }

    if (message.voteStatus !== undefined) {
      ProposalVoteStatus.encode(message.voteStatus, writer.uint32(130).fork()).ldelim();
    }

    if (message.winner !== 0) {
      writer.uint32(136).uint32(message.winner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalExtended {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalExtended();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.status = (reader.int32() as any);
          break;

        case 3:
          message.submitTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.depositEndTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 5:
          message.votingStartTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 6:
          message.votingEndTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 7:
          message.metadata = reader.string();
          break;

        case 8:
          message.title = reader.string();
          break;

        case 9:
          message.summary = reader.string();
          break;

        case 10:
          message.proposer = reader.string();
          break;

        case 11:
          message.failedReason = reader.string();
          break;

        case 12:
          message.x = (reader.uint64() as Long);
          break;

        case 13:
          message.y = (reader.uint64() as Long);
          break;

        case 14:
          message.denom = reader.string();
          break;

        case 15:
          message.options.push(ProposalOption.decode(reader, reader.uint32()));
          break;

        case 16:
          message.voteStatus = ProposalVoteStatus.decode(reader, reader.uint32());
          break;

        case 17:
          message.winner = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProposalExtended {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : undefined,
      depositEndTime: isSet(object.depositEndTime) ? fromJsonTimestamp(object.depositEndTime) : undefined,
      votingStartTime: isSet(object.votingStartTime) ? fromJsonTimestamp(object.votingStartTime) : undefined,
      votingEndTime: isSet(object.votingEndTime) ? fromJsonTimestamp(object.votingEndTime) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      failedReason: isSet(object.failedReason) ? String(object.failedReason) : "",
      x: isSet(object.x) ? Long.fromValue(object.x) : Long.UZERO,
      y: isSet(object.y) ? Long.fromValue(object.y) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => ProposalOption.fromJSON(e)) : [],
      voteStatus: isSet(object.voteStatus) ? ProposalVoteStatus.fromJSON(object.voteStatus) : undefined,
      winner: isSet(object.winner) ? Number(object.winner) : 0
    };
  },

  toJSON(message: ProposalExtended): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.submitTime !== undefined && (obj.submitTime = fromTimestamp(message.submitTime).toISOString());
    message.depositEndTime !== undefined && (obj.depositEndTime = fromTimestamp(message.depositEndTime).toISOString());
    message.votingStartTime !== undefined && (obj.votingStartTime = fromTimestamp(message.votingStartTime).toISOString());
    message.votingEndTime !== undefined && (obj.votingEndTime = fromTimestamp(message.votingEndTime).toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.failedReason !== undefined && (obj.failedReason = message.failedReason);
    message.x !== undefined && (obj.x = (message.x || Long.UZERO).toString());
    message.y !== undefined && (obj.y = (message.y || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);

    if (message.options) {
      obj.options = message.options.map(e => e ? ProposalOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.voteStatus !== undefined && (obj.voteStatus = message.voteStatus ? ProposalVoteStatus.toJSON(message.voteStatus) : undefined);
    message.winner !== undefined && (obj.winner = Math.round(message.winner));
    return obj;
  },

  fromPartial(object: Partial<ProposalExtended>): ProposalExtended {
    const message = createBaseProposalExtended();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    message.submitTime = object.submitTime !== undefined && object.submitTime !== null ? Timestamp.fromPartial(object.submitTime) : undefined;
    message.depositEndTime = object.depositEndTime !== undefined && object.depositEndTime !== null ? Timestamp.fromPartial(object.depositEndTime) : undefined;
    message.votingStartTime = object.votingStartTime !== undefined && object.votingStartTime !== null ? Timestamp.fromPartial(object.votingStartTime) : undefined;
    message.votingEndTime = object.votingEndTime !== undefined && object.votingEndTime !== null ? Timestamp.fromPartial(object.votingEndTime) : undefined;
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    message.failedReason = object.failedReason ?? "";
    message.x = object.x !== undefined && object.x !== null ? Long.fromValue(object.x) : Long.UZERO;
    message.y = object.y !== undefined && object.y !== null ? Long.fromValue(object.y) : Long.UZERO;
    message.denom = object.denom ?? "";
    message.options = object.options?.map(e => ProposalOption.fromPartial(e)) || [];
    message.voteStatus = object.voteStatus !== undefined && object.voteStatus !== null ? ProposalVoteStatus.fromPartial(object.voteStatus) : undefined;
    message.winner = object.winner ?? 0;
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      GovParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = GovParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? GovParams.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? GovParams.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? GovParams.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryProposalExtendedResponse(): QueryProposalExtendedResponse {
  return {
    proposal: undefined
  };
}

export const QueryProposalExtendedResponse = {
  encode(message: QueryProposalExtendedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      ProposalExtended.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalExtendedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalExtendedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = ProposalExtended.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalExtendedResponse {
    return {
      proposal: isSet(object.proposal) ? ProposalExtended.fromJSON(object.proposal) : undefined
    };
  },

  toJSON(message: QueryProposalExtendedResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? ProposalExtended.toJSON(message.proposal) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryProposalExtendedResponse>): QueryProposalExtendedResponse {
    const message = createBaseQueryProposalExtendedResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? ProposalExtended.fromPartial(object.proposal) : undefined;
    return message;
  }

};