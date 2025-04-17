/// <reference types="long" />
import { ProposalStatus, ProposalStatusSDKType, TallyResult, TallyResultSDKType } from "../../../cosmos/gov/v1/gov";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
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
export declare const GovProposal: {
    encode(message: GovProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GovProposal;
    fromJSON(object: any): GovProposal;
    toJSON(message: GovProposal): unknown;
    fromPartial(object: Partial<GovProposal>): GovProposal;
};
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse;
};
export declare const GovParams: {
    encode(message: GovParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GovParams;
    fromJSON(object: any): GovParams;
    toJSON(message: GovParams): unknown;
    fromPartial(object: Partial<GovParams>): GovParams;
};
export declare const ProposalOption: {
    encode(message: ProposalOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalOption;
    fromJSON(object: any): ProposalOption;
    toJSON(message: ProposalOption): unknown;
    fromPartial(object: Partial<ProposalOption>): ProposalOption;
};
export declare const ProposalVoteStatus: {
    encode(message: ProposalVoteStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalVoteStatus;
    fromJSON(object: any): ProposalVoteStatus;
    toJSON(message: ProposalVoteStatus): unknown;
    fromPartial(object: Partial<ProposalVoteStatus>): ProposalVoteStatus;
};
export declare const ProposalExtended: {
    encode(message: ProposalExtended, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalExtended;
    fromJSON(object: any): ProposalExtended;
    toJSON(message: ProposalExtended): unknown;
    fromPartial(object: Partial<ProposalExtended>): ProposalExtended;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryProposalExtendedResponse: {
    encode(message: QueryProposalExtendedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalExtendedResponse;
    fromJSON(object: any): QueryProposalExtendedResponse;
    toJSON(message: QueryProposalExtendedResponse): unknown;
    fromPartial(object: Partial<QueryProposalExtendedResponse>): QueryProposalExtendedResponse;
};
