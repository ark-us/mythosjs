/// <reference types="long" />
import { RequestProcessProposal, RequestProcessProposalSDKType } from "../../../tendermint/abci/types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface RequestPing {
}
export interface RequestPingSDKType {
}
export interface RequestBroadcastTx {
    tx: Uint8Array;
}
export interface RequestBroadcastTxSDKType {
    tx: Uint8Array;
}
export interface ResponsePing {
}
export interface ResponsePingSDKType {
}
export interface ResponseBroadcastTx {
    checkTx?: ResponseCheckTx;
    txResult?: ExecTxResult;
}
export interface ResponseBroadcastTxSDKType {
    check_tx?: ResponseCheckTxSDKType;
    tx_result?: ExecTxResultSDKType;
}
/** tendermint.abci.ResponseCheckTx */
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
/** tendermint.abci.ResponseCheckTx */
export interface ResponseCheckTxSDKType {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    events: EventSDKType[];
    codespace: string;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 *
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 * tendermint.abci.ExecTxResult
 */
export interface ExecTxResult {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: Long;
    gasUsed: Long;
    events: Event[];
    codespace: string;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 *
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 * tendermint.abci.ExecTxResult
 */
export interface ExecTxResultSDKType {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gas_wanted: Long;
    gas_used: Long;
    events: EventSDKType[];
    codespace: string;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
    type: string;
    attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
}
export interface RequestProcessProposalWithMetaInfo_MetainfoEntry {
    key: string;
    value: string;
}
export interface RequestProcessProposalWithMetaInfo_MetainfoEntrySDKType {
    key: string;
    value: string;
}
export interface RequestProcessProposalWithMetaInfo {
    request?: RequestProcessProposal;
    optimisticExecution: boolean;
    metainfo: {
        [key: string]: string;
    };
}
export interface RequestProcessProposalWithMetaInfoSDKType {
    request?: RequestProcessProposalSDKType;
    optimistic_execution: boolean;
    metainfo: {
        [key: string]: string;
    };
}
export interface TendermintValidator {
    /** bech32 operator address */
    operatorAddress: string;
    /** hex-format address derived from consensus public key */
    hexAddress: string;
    pubKey?: Any;
    votingPower: Long;
    proposerPriority: Long;
}
export interface TendermintValidatorSDKType {
    /** bech32 operator address */
    operator_address: string;
    /** hex-format address derived from consensus public key */
    hex_address: string;
    pub_key?: AnySDKType;
    voting_power: Long;
    proposer_priority: Long;
}
export interface TendermintValidators {
    validators: TendermintValidator[];
}
export interface TendermintValidatorsSDKType {
    validators: TendermintValidatorSDKType[];
}
export interface ValidatorSet {
    validators: TendermintValidator[];
    proposer?: TendermintValidator;
}
export interface ValidatorSetSDKType {
    validators: TendermintValidatorSDKType[];
    proposer?: TendermintValidatorSDKType;
}
export declare const RequestPing: {
    encode(_: RequestPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing;
    fromJSON(_: any): RequestPing;
    toJSON(_: RequestPing): unknown;
    fromPartial(_: Partial<RequestPing>): RequestPing;
};
export declare const RequestBroadcastTx: {
    encode(message: RequestBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx;
    fromJSON(object: any): RequestBroadcastTx;
    toJSON(message: RequestBroadcastTx): unknown;
    fromPartial(object: Partial<RequestBroadcastTx>): RequestBroadcastTx;
};
export declare const ResponsePing: {
    encode(_: ResponsePing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing;
    fromJSON(_: any): ResponsePing;
    toJSON(_: ResponsePing): unknown;
    fromPartial(_: Partial<ResponsePing>): ResponsePing;
};
export declare const ResponseBroadcastTx: {
    encode(message: ResponseBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx;
    fromJSON(object: any): ResponseBroadcastTx;
    toJSON(message: ResponseBroadcastTx): unknown;
    fromPartial(object: Partial<ResponseBroadcastTx>): ResponseBroadcastTx;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx;
};
export declare const ExecTxResult: {
    encode(message: ExecTxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecTxResult;
    fromJSON(object: any): ExecTxResult;
    toJSON(message: ExecTxResult): unknown;
    fromPartial(object: Partial<ExecTxResult>): ExecTxResult;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    fromPartial(object: Partial<Event>): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): unknown;
    fromPartial(object: Partial<EventAttribute>): EventAttribute;
};
export declare const RequestProcessProposalWithMetaInfo_MetainfoEntry: {
    encode(message: RequestProcessProposalWithMetaInfo_MetainfoEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposalWithMetaInfo_MetainfoEntry;
    fromJSON(object: any): RequestProcessProposalWithMetaInfo_MetainfoEntry;
    toJSON(message: RequestProcessProposalWithMetaInfo_MetainfoEntry): unknown;
    fromPartial(object: Partial<RequestProcessProposalWithMetaInfo_MetainfoEntry>): RequestProcessProposalWithMetaInfo_MetainfoEntry;
};
export declare const RequestProcessProposalWithMetaInfo: {
    encode(message: RequestProcessProposalWithMetaInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestProcessProposalWithMetaInfo;
    fromJSON(object: any): RequestProcessProposalWithMetaInfo;
    toJSON(message: RequestProcessProposalWithMetaInfo): unknown;
    fromPartial(object: Partial<RequestProcessProposalWithMetaInfo>): RequestProcessProposalWithMetaInfo;
};
export declare const TendermintValidator: {
    encode(message: TendermintValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TendermintValidator;
    fromJSON(object: any): TendermintValidator;
    toJSON(message: TendermintValidator): unknown;
    fromPartial(object: Partial<TendermintValidator>): TendermintValidator;
};
export declare const TendermintValidators: {
    encode(message: TendermintValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TendermintValidators;
    fromJSON(object: any): TendermintValidators;
    toJSON(message: TendermintValidators): unknown;
    fromPartial(object: Partial<TendermintValidators>): TendermintValidators;
};
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet;
    fromJSON(object: any): ValidatorSet;
    toJSON(message: ValidatorSet): unknown;
    fromPartial(object: Partial<ValidatorSet>): ValidatorSet;
};
