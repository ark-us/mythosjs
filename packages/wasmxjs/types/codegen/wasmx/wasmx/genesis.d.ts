import { Params, ParamsSDKType } from "./params";
import { CodeInfo, CodeInfoSDKType, CodeMetadata, CodeMetadataSDKType, ContractInfo, ContractInfoSDKType, ContractStorage, ContractStorageSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
    params?: Params;
    /** bootstrap address */
    bootstrapAccountAddress: string;
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
    initMessage: Uint8Array;
    pinned: boolean;
    native: boolean;
}
export interface SystemContractSDKType {
    address: string;
    label: string;
    init_message: Uint8Array;
    pinned: boolean;
    native: boolean;
}
/** Code - for importing and exporting code data */
export interface Code {
    codeId: Long;
    codeInfo?: CodeInfo;
    codeBytes: Uint8Array;
    codeMetadata?: CodeMetadata;
}
/** Code - for importing and exporting code data */
export interface CodeSDKType {
    code_id: Long;
    code_info?: CodeInfoSDKType;
    code_bytes: Uint8Array;
    code_metadata?: CodeMetadataSDKType;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo?: ContractInfo;
    contractState: ContractStorage[];
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: string;
    contract_info?: ContractInfoSDKType;
    contract_state: ContractStorageSDKType[];
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
