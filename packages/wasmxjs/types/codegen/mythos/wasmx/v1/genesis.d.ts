/// <reference types="long" />
import { Params, ParamsSDKType } from "./params";
import { Role, RoleSDKType, SystemContractRole, SystemContractRoleSDKType } from "./role";
import { ContractStorageType, ContractStorageTypeSDKType, CodeMetadataPB, CodeMetadataPBSDKType, ContractStoragePB, ContractStoragePBSDKType, CodeInfoPB, CodeInfoPBSDKType, ContractInfoPB, ContractInfoPBSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
    params?: Params;
    /** bootstrap address */
    bootstrapAccountAddress: string;
    roles: Role[];
    systemContracts: SystemContract[];
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
    /**
     * not recommended
     * initiate pinned/AOT compiled contracts from a provided folder
     * instead of compiling the contracts from wasm
     */
    compiledFolderPath: string;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    /** bootstrap address */
    bootstrap_account_address: string;
    roles: RoleSDKType[];
    system_contracts: SystemContractSDKType[];
    codes: CodeSDKType[];
    contracts: ContractSDKType[];
    sequences: SequenceSDKType[];
    /**
     * not recommended
     * initiate pinned/AOT compiled contracts from a provided folder
     * instead of compiling the contracts from wasm
     */
    compiled_folder_path: string;
}
export interface SystemContract {
    address: string;
    label: string;
    storageType: ContractStorageType;
    initMessage: Uint8Array;
    pinned: boolean;
    native: boolean;
    /** some system contracts may be aot compiled with metering off */
    meteringOff: boolean;
    role?: SystemContractRole;
    /**
     * deps can be hex-formatted contract addresses (32 bytes)
     * or versioned interface labels
     */
    deps: string[];
    metadata?: CodeMetadataPB;
    contractState: ContractStoragePB[];
    source: Uint8Array;
}
export interface SystemContractSDKType {
    address: string;
    label: string;
    storage_type: ContractStorageTypeSDKType;
    init_message: Uint8Array;
    pinned: boolean;
    native: boolean;
    /** some system contracts may be aot compiled with metering off */
    metering_off: boolean;
    role?: SystemContractRoleSDKType;
    /**
     * deps can be hex-formatted contract addresses (32 bytes)
     * or versioned interface labels
     */
    deps: string[];
    metadata?: CodeMetadataPBSDKType;
    contract_state: ContractStoragePBSDKType[];
    source: Uint8Array;
}
/** Code - for importing and exporting code data */
export interface Code {
    codeId: Long;
    codeInfo?: CodeInfoPB;
    codeBytes: Uint8Array;
}
/** Code - for importing and exporting code data */
export interface CodeSDKType {
    code_id: Long;
    code_info?: CodeInfoPBSDKType;
    code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo?: ContractInfoPB;
    contractState: ContractStoragePB[];
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: string;
    contract_info?: ContractInfoPBSDKType;
    contract_state: ContractStoragePBSDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
    idKey: Uint8Array;
    value: Long;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
    id_key: Uint8Array;
    value: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const SystemContract: {
    encode(message: SystemContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SystemContract;
    fromJSON(object: any): SystemContract;
    toJSON(message: SystemContract): unknown;
    fromPartial(object: Partial<SystemContract>): SystemContract;
};
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial(object: Partial<Code>): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: Partial<Contract>): Contract;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial(object: Partial<Sequence>): Sequence;
};
