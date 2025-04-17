import { Deposit, DepositSDKType, Vote, VoteSDKType } from "../../../cosmos/gov/v1/gov";
import { GovProposal, GovProposalSDKType, GovParams, GovParamsSDKType } from "./gov";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../helpers";
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

function createBaseGovGenesisState(): GovGenesisState {
  return {
    startingProposalId: Long.UZERO,
    deposits: [],
    votes: [],
    proposals: [],
    params: undefined,
    constitution: ""
  };
}

export const GovGenesisState = {
  encode(message: GovGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.startingProposalId.isZero()) {
      writer.uint32(8).uint64(message.startingProposalId);
    }

    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.proposals) {
      GovProposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.params !== undefined) {
      GovParams.encode(message.params, writer.uint32(66).fork()).ldelim();
    }

    if (message.constitution !== "") {
      writer.uint32(74).string(message.constitution);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.startingProposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;

        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;

        case 4:
          message.proposals.push(GovProposal.decode(reader, reader.uint32()));
          break;

        case 8:
          message.params = GovParams.decode(reader, reader.uint32());
          break;

        case 9:
          message.constitution = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GovGenesisState {
    return {
      startingProposalId: isSet(object.startingProposalId) ? Long.fromValue(object.startingProposalId) : Long.UZERO,
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => GovProposal.fromJSON(e)) : [],
      params: isSet(object.params) ? GovParams.fromJSON(object.params) : undefined,
      constitution: isSet(object.constitution) ? String(object.constitution) : ""
    };
  },

  toJSON(message: GovGenesisState): unknown {
    const obj: any = {};
    message.startingProposalId !== undefined && (obj.startingProposalId = (message.startingProposalId || Long.UZERO).toString());

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }

    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? GovProposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }

    message.params !== undefined && (obj.params = message.params ? GovParams.toJSON(message.params) : undefined);
    message.constitution !== undefined && (obj.constitution = message.constitution);
    return obj;
  },

  fromPartial(object: Partial<GovGenesisState>): GovGenesisState {
    const message = createBaseGovGenesisState();
    message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? Long.fromValue(object.startingProposalId) : Long.UZERO;
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => GovProposal.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? GovParams.fromPartial(object.params) : undefined;
    message.constitution = object.constitution ?? "";
    return message;
  }

};