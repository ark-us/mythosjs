import { ContractStorageType, ContractStorageTypeSDKType, CodeInfoPB, CodeInfoPBSDKType, ContractInfoPB, ContractInfoPBSDKType, contractStorageTypeFromJSON, contractStorageTypeToJSON } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
export enum RoleChangedActionType {
  Replace = 0,
  Add = 1,
  Remove = 2,
  UNRECOGNIZED = -1,
}
export enum RoleChangedActionTypeSDKType {
  Replace = 0,
  Add = 1,
  Remove = 2,
  UNRECOGNIZED = -1,
}
export function roleChangedActionTypeFromJSON(object: any): RoleChangedActionType {
  switch (object) {
    case 0:
    case "Replace":
      return RoleChangedActionType.Replace;

    case 1:
    case "Add":
      return RoleChangedActionType.Add;

    case 2:
    case "Remove":
      return RoleChangedActionType.Remove;

    case -1:
    case "UNRECOGNIZED":
    default:
      return RoleChangedActionType.UNRECOGNIZED;
  }
}
export function roleChangedActionTypeToJSON(object: RoleChangedActionType): string {
  switch (object) {
    case RoleChangedActionType.Replace:
      return "Replace";

    case RoleChangedActionType.Add:
      return "Add";

    case RoleChangedActionType.Remove:
      return "Remove";

    case RoleChangedActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** RegisterRouteProposal is a gov Content type to register a web server route */

export interface RoleChanged {
  /** smart contract role */
  role: string;
  /** smart contract label */

  label: string;
  /** contract address in bech32 format */

  contractAddress: string;
  actionType: RoleChangedActionType;
}
/** RegisterRouteProposal is a gov Content type to register a web server route */

export interface RoleChangedSDKType {
  /** smart contract role */
  role: string;
  /** smart contract label */

  label: string;
  /** contract address in bech32 format */

  contract_address: string;
  action_type: RoleChangedActionTypeSDKType;
}
export interface Role {
  /** smart contract role */
  role: string;
  storageType: ContractStorageType;
  primary: number;
  multiple: boolean;
  labels: string[];
  /** contract address in bech32 format */

  addresses: string[];
}
export interface RoleSDKType {
  /** smart contract role */
  role: string;
  storage_type: ContractStorageTypeSDKType;
  primary: number;
  multiple: boolean;
  labels: string[];
  /** contract address in bech32 format */

  addresses: string[];
}
export interface SystemContractRole {
  role: string;
  label: string;
  primary: boolean;
}
export interface SystemContractRoleSDKType {
  role: string;
  label: string;
  primary: boolean;
}
export interface SystemBootstrapData {
  /** bech32 address of contract for roles */
  roleAddress: string;
  roleRegistryId: Long;
  roleRegistryCodeInfo?: CodeInfoPB;
  roleRegistryContractInfo?: ContractInfoPB;
  /** bech32 address of contract for contract data storage */

  codeRegistryAddress: string;
  codeRegistryId: Long;
  codeRegistryCodeInfo?: CodeInfoPB;
  codeRegistryContractInfo?: ContractInfoPB;
}
export interface SystemBootstrapDataSDKType {
  /** bech32 address of contract for roles */
  role_address: string;
  role_registry_id: Long;
  role_registry_code_info?: CodeInfoPBSDKType;
  role_registry_contract_info?: ContractInfoPBSDKType;
  /** bech32 address of contract for contract data storage */

  code_registry_address: string;
  code_registry_id: Long;
  code_registry_code_info?: CodeInfoPBSDKType;
  code_registry_contract_info?: ContractInfoPBSDKType;
}

function createBaseRoleChanged(): RoleChanged {
  return {
    role: "",
    label: "",
    contractAddress: "",
    actionType: 0
  };
}

export const RoleChanged = {
  encode(message: RoleChanged, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }

    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }

    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }

    if (message.actionType !== 0) {
      writer.uint32(32).int32(message.actionType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleChanged {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleChanged();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;

        case 2:
          message.label = reader.string();
          break;

        case 3:
          message.contractAddress = reader.string();
          break;

        case 4:
          message.actionType = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RoleChanged {
    return {
      role: isSet(object.role) ? String(object.role) : "",
      label: isSet(object.label) ? String(object.label) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      actionType: isSet(object.actionType) ? roleChangedActionTypeFromJSON(object.actionType) : 0
    };
  },

  toJSON(message: RoleChanged): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    message.label !== undefined && (obj.label = message.label);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.actionType !== undefined && (obj.actionType = roleChangedActionTypeToJSON(message.actionType));
    return obj;
  },

  fromPartial(object: Partial<RoleChanged>): RoleChanged {
    const message = createBaseRoleChanged();
    message.role = object.role ?? "";
    message.label = object.label ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.actionType = object.actionType ?? 0;
    return message;
  }

};

function createBaseRole(): Role {
  return {
    role: "",
    storageType: 0,
    primary: 0,
    multiple: false,
    labels: [],
    addresses: []
  };
}

export const Role = {
  encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }

    if (message.storageType !== 0) {
      writer.uint32(16).int32(message.storageType);
    }

    if (message.primary !== 0) {
      writer.uint32(24).int32(message.primary);
    }

    if (message.multiple === true) {
      writer.uint32(32).bool(message.multiple);
    }

    for (const v of message.labels) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.addresses) {
      writer.uint32(50).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Role {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRole();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;

        case 2:
          message.storageType = (reader.int32() as any);
          break;

        case 3:
          message.primary = reader.int32();
          break;

        case 4:
          message.multiple = reader.bool();
          break;

        case 5:
          message.labels.push(reader.string());
          break;

        case 6:
          message.addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Role {
    return {
      role: isSet(object.role) ? String(object.role) : "",
      storageType: isSet(object.storageType) ? contractStorageTypeFromJSON(object.storageType) : 0,
      primary: isSet(object.primary) ? Number(object.primary) : 0,
      multiple: isSet(object.multiple) ? Boolean(object.multiple) : false,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => String(e)) : [],
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    message.storageType !== undefined && (obj.storageType = contractStorageTypeToJSON(message.storageType));
    message.primary !== undefined && (obj.primary = Math.round(message.primary));
    message.multiple !== undefined && (obj.multiple = message.multiple);

    if (message.labels) {
      obj.labels = message.labels.map(e => e);
    } else {
      obj.labels = [];
    }

    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Role>): Role {
    const message = createBaseRole();
    message.role = object.role ?? "";
    message.storageType = object.storageType ?? 0;
    message.primary = object.primary ?? 0;
    message.multiple = object.multiple ?? false;
    message.labels = object.labels?.map(e => e) || [];
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  }

};

function createBaseSystemContractRole(): SystemContractRole {
  return {
    role: "",
    label: "",
    primary: false
  };
}

export const SystemContractRole = {
  encode(message: SystemContractRole, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }

    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }

    if (message.primary === true) {
      writer.uint32(24).bool(message.primary);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemContractRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemContractRole();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;

        case 2:
          message.label = reader.string();
          break;

        case 3:
          message.primary = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SystemContractRole {
    return {
      role: isSet(object.role) ? String(object.role) : "",
      label: isSet(object.label) ? String(object.label) : "",
      primary: isSet(object.primary) ? Boolean(object.primary) : false
    };
  },

  toJSON(message: SystemContractRole): unknown {
    const obj: any = {};
    message.role !== undefined && (obj.role = message.role);
    message.label !== undefined && (obj.label = message.label);
    message.primary !== undefined && (obj.primary = message.primary);
    return obj;
  },

  fromPartial(object: Partial<SystemContractRole>): SystemContractRole {
    const message = createBaseSystemContractRole();
    message.role = object.role ?? "";
    message.label = object.label ?? "";
    message.primary = object.primary ?? false;
    return message;
  }

};

function createBaseSystemBootstrapData(): SystemBootstrapData {
  return {
    roleAddress: "",
    roleRegistryId: Long.UZERO,
    roleRegistryCodeInfo: undefined,
    roleRegistryContractInfo: undefined,
    codeRegistryAddress: "",
    codeRegistryId: Long.UZERO,
    codeRegistryCodeInfo: undefined,
    codeRegistryContractInfo: undefined
  };
}

export const SystemBootstrapData = {
  encode(message: SystemBootstrapData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.roleAddress !== "") {
      writer.uint32(10).string(message.roleAddress);
    }

    if (!message.roleRegistryId.isZero()) {
      writer.uint32(16).uint64(message.roleRegistryId);
    }

    if (message.roleRegistryCodeInfo !== undefined) {
      CodeInfoPB.encode(message.roleRegistryCodeInfo, writer.uint32(26).fork()).ldelim();
    }

    if (message.roleRegistryContractInfo !== undefined) {
      ContractInfoPB.encode(message.roleRegistryContractInfo, writer.uint32(34).fork()).ldelim();
    }

    if (message.codeRegistryAddress !== "") {
      writer.uint32(42).string(message.codeRegistryAddress);
    }

    if (!message.codeRegistryId.isZero()) {
      writer.uint32(48).uint64(message.codeRegistryId);
    }

    if (message.codeRegistryCodeInfo !== undefined) {
      CodeInfoPB.encode(message.codeRegistryCodeInfo, writer.uint32(58).fork()).ldelim();
    }

    if (message.codeRegistryContractInfo !== undefined) {
      ContractInfoPB.encode(message.codeRegistryContractInfo, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemBootstrapData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemBootstrapData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.roleAddress = reader.string();
          break;

        case 2:
          message.roleRegistryId = (reader.uint64() as Long);
          break;

        case 3:
          message.roleRegistryCodeInfo = CodeInfoPB.decode(reader, reader.uint32());
          break;

        case 4:
          message.roleRegistryContractInfo = ContractInfoPB.decode(reader, reader.uint32());
          break;

        case 5:
          message.codeRegistryAddress = reader.string();
          break;

        case 6:
          message.codeRegistryId = (reader.uint64() as Long);
          break;

        case 7:
          message.codeRegistryCodeInfo = CodeInfoPB.decode(reader, reader.uint32());
          break;

        case 8:
          message.codeRegistryContractInfo = ContractInfoPB.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SystemBootstrapData {
    return {
      roleAddress: isSet(object.roleAddress) ? String(object.roleAddress) : "",
      roleRegistryId: isSet(object.roleRegistryId) ? Long.fromValue(object.roleRegistryId) : Long.UZERO,
      roleRegistryCodeInfo: isSet(object.roleRegistryCodeInfo) ? CodeInfoPB.fromJSON(object.roleRegistryCodeInfo) : undefined,
      roleRegistryContractInfo: isSet(object.roleRegistryContractInfo) ? ContractInfoPB.fromJSON(object.roleRegistryContractInfo) : undefined,
      codeRegistryAddress: isSet(object.codeRegistryAddress) ? String(object.codeRegistryAddress) : "",
      codeRegistryId: isSet(object.codeRegistryId) ? Long.fromValue(object.codeRegistryId) : Long.UZERO,
      codeRegistryCodeInfo: isSet(object.codeRegistryCodeInfo) ? CodeInfoPB.fromJSON(object.codeRegistryCodeInfo) : undefined,
      codeRegistryContractInfo: isSet(object.codeRegistryContractInfo) ? ContractInfoPB.fromJSON(object.codeRegistryContractInfo) : undefined
    };
  },

  toJSON(message: SystemBootstrapData): unknown {
    const obj: any = {};
    message.roleAddress !== undefined && (obj.roleAddress = message.roleAddress);
    message.roleRegistryId !== undefined && (obj.roleRegistryId = (message.roleRegistryId || Long.UZERO).toString());
    message.roleRegistryCodeInfo !== undefined && (obj.roleRegistryCodeInfo = message.roleRegistryCodeInfo ? CodeInfoPB.toJSON(message.roleRegistryCodeInfo) : undefined);
    message.roleRegistryContractInfo !== undefined && (obj.roleRegistryContractInfo = message.roleRegistryContractInfo ? ContractInfoPB.toJSON(message.roleRegistryContractInfo) : undefined);
    message.codeRegistryAddress !== undefined && (obj.codeRegistryAddress = message.codeRegistryAddress);
    message.codeRegistryId !== undefined && (obj.codeRegistryId = (message.codeRegistryId || Long.UZERO).toString());
    message.codeRegistryCodeInfo !== undefined && (obj.codeRegistryCodeInfo = message.codeRegistryCodeInfo ? CodeInfoPB.toJSON(message.codeRegistryCodeInfo) : undefined);
    message.codeRegistryContractInfo !== undefined && (obj.codeRegistryContractInfo = message.codeRegistryContractInfo ? ContractInfoPB.toJSON(message.codeRegistryContractInfo) : undefined);
    return obj;
  },

  fromPartial(object: Partial<SystemBootstrapData>): SystemBootstrapData {
    const message = createBaseSystemBootstrapData();
    message.roleAddress = object.roleAddress ?? "";
    message.roleRegistryId = object.roleRegistryId !== undefined && object.roleRegistryId !== null ? Long.fromValue(object.roleRegistryId) : Long.UZERO;
    message.roleRegistryCodeInfo = object.roleRegistryCodeInfo !== undefined && object.roleRegistryCodeInfo !== null ? CodeInfoPB.fromPartial(object.roleRegistryCodeInfo) : undefined;
    message.roleRegistryContractInfo = object.roleRegistryContractInfo !== undefined && object.roleRegistryContractInfo !== null ? ContractInfoPB.fromPartial(object.roleRegistryContractInfo) : undefined;
    message.codeRegistryAddress = object.codeRegistryAddress ?? "";
    message.codeRegistryId = object.codeRegistryId !== undefined && object.codeRegistryId !== null ? Long.fromValue(object.codeRegistryId) : Long.UZERO;
    message.codeRegistryCodeInfo = object.codeRegistryCodeInfo !== undefined && object.codeRegistryCodeInfo !== null ? CodeInfoPB.fromPartial(object.codeRegistryCodeInfo) : undefined;
    message.codeRegistryContractInfo = object.codeRegistryContractInfo !== undefined && object.codeRegistryContractInfo !== null ? ContractInfoPB.fromPartial(object.codeRegistryContractInfo) : undefined;
    return message;
  }

};