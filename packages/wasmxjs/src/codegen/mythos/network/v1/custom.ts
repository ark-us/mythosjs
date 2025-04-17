import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, isSet, base64FromBytes } from "../../../helpers";
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

function createBaseMsgExecuteAtomicTxRequest(): MsgExecuteAtomicTxRequest {
  return {
    txs: [],
    sender: new Uint8Array()
  };
}

export const MsgExecuteAtomicTxRequest = {
  encode(message: MsgExecuteAtomicTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }

    if (message.sender.length !== 0) {
      writer.uint32(18).bytes(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteAtomicTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteAtomicTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;

        case 2:
          message.sender = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteAtomicTxRequest {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },

  toJSON(message: MsgExecuteAtomicTxRequest): unknown {
    const obj: any = {};

    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }

    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial(object: Partial<MsgExecuteAtomicTxRequest>): MsgExecuteAtomicTxRequest {
    const message = createBaseMsgExecuteAtomicTxRequest();
    message.txs = object.txs?.map(e => e) || [];
    message.sender = object.sender ?? new Uint8Array();
    return message;
  }

};