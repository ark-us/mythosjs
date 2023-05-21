import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgStoreCode,
  MsgDeployCode,
} from "@ark-us/wasmxjs";

export const wasmTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/mythos.wasmx.v1.MsgExecuteContract", MsgExecuteContract],
  ["/mythos.wasmx.v1.MsgStoreCode", MsgStoreCode],
  ["/mythos.wasmx.v1.MsgDeployCode", MsgDeployCode],
  ["/mythos.wasmx.v1.MsgInstantiateContract", MsgInstantiateContract],
];

export interface MsgStoreCodeEncodeObject extends EncodeObject {
  readonly typeUrl: "/mythos.wasmx.v1.MsgStoreCode";
  readonly value: Partial<MsgStoreCode>;
}

export function isMsgStoreCodeEncodeObject(object: EncodeObject): object is MsgStoreCodeEncodeObject {
  return (object as MsgStoreCodeEncodeObject).typeUrl === "/mythos.wasmx.v1.MsgStoreCode";
}

export interface MsgDeployCodeEncodeObject extends EncodeObject {
  readonly typeUrl: "/mythos.wasmx.v1.MsgDeployCode";
  readonly value: Partial<MsgDeployCode>;
}

export function isMsgDeployCodeEncodeObject(object: EncodeObject): object is MsgDeployCodeEncodeObject {
  return (object as MsgDeployCodeEncodeObject).typeUrl === "/mythos.wasmx.v1.MsgDeployCode";
}

export interface MsgInstantiateContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/mythos.wasmx.v1.MsgInstantiateContract";
  readonly value: Partial<MsgInstantiateContract>;
}

export function isMsgInstantiateContractEncodeObject(
  object: EncodeObject,
): object is MsgInstantiateContractEncodeObject {
  return (
    (object as MsgInstantiateContractEncodeObject).typeUrl === "/mythos.wasmx.v1.MsgInstantiateContract"
  );
}

export interface MsgExecuteContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/mythos.wasmx.v1.MsgExecuteContract";
  readonly value: Partial<MsgExecuteContract>;
}

export function isMsgExecuteEncodeObject(object: EncodeObject): object is MsgExecuteContractEncodeObject {
  return (object as MsgExecuteContractEncodeObject).typeUrl === "/mythos.wasmx.v1.MsgExecuteContract";
}
