import * as _m0 from "protobufjs/minimal";
export interface MsgExecuteAtomicTxRequest {
    /** protobuf encoded transactions */
    txs: Uint8Array[];
    sender: Uint8Array;
}
export interface MsgExecuteAtomicTxRequestSDKType {
    /** protobuf encoded transactions */
    txs: Uint8Array[];
    sender: Uint8Array;
}
export declare const MsgExecuteAtomicTxRequest: {
    encode(message: MsgExecuteAtomicTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteAtomicTxRequest;
    fromJSON(object: any): MsgExecuteAtomicTxRequest;
    toJSON(message: MsgExecuteAtomicTxRequest): unknown;
    fromPartial(object: Partial<MsgExecuteAtomicTxRequest>): MsgExecuteAtomicTxRequest;
};
