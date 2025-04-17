/// <reference types="long" />
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * InitGenesisResponse is the InitGenesis response expected from smart contracts
 * that act as modules
 */
export interface InitGenesisResponse {
    updates: ValidatorUpdate[];
}
/**
 * InitGenesisResponse is the InitGenesis response expected from smart contracts
 * that act as modules
 */
export interface InitGenesisResponseSDKType {
    updates: ValidatorUpdateSDKType[];
}
export interface ValidatorUpdate {
    pubKey?: Any;
    power: Long;
}
export interface ValidatorUpdateSDKType {
    pub_key?: AnySDKType;
    power: Long;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface QueryTotalSupplyResponse {
    supply?: Coin;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface QueryTotalSupplyResponseSDKType {
    supply?: CoinSDKType;
}
export declare const InitGenesisResponse: {
    encode(message: InitGenesisResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitGenesisResponse;
    fromJSON(object: any): InitGenesisResponse;
    toJSON(message: InitGenesisResponse): unknown;
    fromPartial(object: Partial<InitGenesisResponse>): InitGenesisResponse;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): unknown;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
};
