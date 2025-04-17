import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
export interface MsgSetAccount {
    account?: Any;
}
export interface MsgSetAccountSDKType {
    account?: AnySDKType;
}
export interface QueryAccountResponse {
    account?: Any;
}
export interface QueryAccountResponseSDKType {
    account?: AnySDKType;
}
export interface QueryHasAccountResponse {
    found: boolean;
}
export interface QueryHasAccountResponseSDKType {
    found: boolean;
}
export declare const MsgSetAccount: {
    encode(message: MsgSetAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAccount;
    fromJSON(object: any): MsgSetAccount;
    toJSON(message: MsgSetAccount): unknown;
    fromPartial(object: Partial<MsgSetAccount>): MsgSetAccount;
};
export declare const QueryAccountResponse: {
    encode(message: QueryAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse;
    fromJSON(object: any): QueryAccountResponse;
    toJSON(message: QueryAccountResponse): unknown;
    fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryHasAccountResponse: {
    encode(message: QueryHasAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHasAccountResponse;
    fromJSON(object: any): QueryHasAccountResponse;
    toJSON(message: QueryHasAccountResponse): unknown;
    fromPartial(object: Partial<QueryHasAccountResponse>): QueryHasAccountResponse;
};
