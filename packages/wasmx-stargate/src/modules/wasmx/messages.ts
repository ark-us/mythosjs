import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgStoreCode,
} from "@ark-us/wasmxjs";

export const wasmTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/wasmx.wasmx.MsgExecuteContract", MsgExecuteContract],
  ["/wasmx.wasmx.MsgStoreCode", MsgStoreCode],
  ["/wasmx.wasmx.MsgInstantiateContract", MsgInstantiateContract],
];

export interface MsgStoreCodeEncodeObject extends EncodeObject {
  readonly typeUrl: "/wasmx.wasmx.MsgStoreCode";
  readonly value: Partial<MsgStoreCode>;
}

export function isMsgStoreCodeEncodeObject(object: EncodeObject): object is MsgStoreCodeEncodeObject {
  return (object as MsgStoreCodeEncodeObject).typeUrl === "/wasmx.wasmx.MsgStoreCode";
}

export interface MsgInstantiateContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/wasmx.wasmx.MsgInstantiateContract";
  readonly value: Partial<MsgInstantiateContract>;
}

export function isMsgInstantiateContractEncodeObject(
  object: EncodeObject,
): object is MsgInstantiateContractEncodeObject {
  return (
    (object as MsgInstantiateContractEncodeObject).typeUrl === "/wasmx.wasmx.MsgInstantiateContract"
  );
}

export interface MsgExecuteContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/wasmx.wasmx.MsgExecuteContract";
  readonly value: Partial<MsgExecuteContract>;
}

export function isMsgExecuteEncodeObject(object: EncodeObject): object is MsgExecuteContractEncodeObject {
  return (object as MsgExecuteContractEncodeObject).typeUrl === "/wasmx.wasmx.MsgExecuteContract";
}
