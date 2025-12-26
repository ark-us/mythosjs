/// <reference types="long" />
import { ContractStorageType, ContractStorageTypeSDKType, CodeInfoPB, CodeInfoPBSDKType, ContractInfoPB, ContractInfoPBSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export declare enum RoleChangedActionType {
    Replace = 0,
    Add = 1,
    Remove = 2,
    UNRECOGNIZED = -1
}
export declare enum RoleChangedActionTypeSDKType {
    Replace = 0,
    Add = 1,
    Remove = 2,
    UNRECOGNIZED = -1
}
export declare function roleChangedActionTypeFromJSON(object: any): RoleChangedActionType;
export declare function roleChangedActionTypeToJSON(object: RoleChangedActionType): string;
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
export declare const RoleChanged: {
    encode(message: RoleChanged, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoleChanged;
    fromJSON(object: any): RoleChanged;
    toJSON(message: RoleChanged): unknown;
    fromPartial(object: Partial<RoleChanged>): RoleChanged;
};
export declare const Role: {
    encode(message: Role, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Role;
    fromJSON(object: any): Role;
    toJSON(message: Role): unknown;
    fromPartial(object: Partial<Role>): Role;
};
export declare const SystemContractRole: {
    encode(message: SystemContractRole, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemContractRole;
    fromJSON(object: any): SystemContractRole;
    toJSON(message: SystemContractRole): unknown;
    fromPartial(object: Partial<SystemContractRole>): SystemContractRole;
};
export declare const SystemBootstrapData: {
    encode(message: SystemBootstrapData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemBootstrapData;
    fromJSON(object: any): SystemBootstrapData;
    toJSON(message: SystemBootstrapData): unknown;
    fromPartial(object: Partial<SystemBootstrapData>): SystemBootstrapData;
};
