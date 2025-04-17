/// <reference types="long" />
import { Deposit, DepositSDKType, Vote, VoteSDKType } from "../../../cosmos/gov/v1/gov";
import { GovProposal, GovProposalSDKType, GovParams, GovParamsSDKType } from "./gov";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GovGenesisState defines the gov module's genesis state. */
export interface GovGenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: Long;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: GovProposal[];
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: GovParams;
    /**
     * The constitution allows builders to lay a foundation and define purpose.
     * This is an immutable string set in genesis.
     * There are no amendments, to go outside of scope, just fork.
     * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
     *
     * Since: cosmos-sdk 0.50
     */
    constitution: string;
}
/** GovGenesisState defines the gov module's genesis state. */
export interface GovGenesisStateSDKType {
    /** starting_proposal_id is the ID of the starting proposal. */
    starting_proposal_id: Long;
    /** deposits defines all the deposits present at genesis. */
    deposits: DepositSDKType[];
    /** votes defines all the votes present at genesis. */
    votes: VoteSDKType[];
    /** proposals defines all the proposals present at genesis. */
    proposals: GovProposalSDKType[];
    /**
     * params defines all the paramaters of x/gov module.
     *
     * Since: cosmos-sdk 0.47
     */
    params?: GovParamsSDKType;
    /**
     * The constitution allows builders to lay a foundation and define purpose.
     * This is an immutable string set in genesis.
     * There are no amendments, to go outside of scope, just fork.
     * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
     *
     * Since: cosmos-sdk 0.50
     */
    constitution: string;
}
export declare const GovGenesisState: {
    encode(message: GovGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GovGenesisState;
    fromJSON(object: any): GovGenesisState;
    toJSON(message: GovGenesisState): unknown;
    fromPartial(object: Partial<GovGenesisState>): GovGenesisState;
};
