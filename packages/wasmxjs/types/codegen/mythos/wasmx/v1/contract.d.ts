/// <reference types="long" />
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export declare enum ContractStorageType {
    /** CoreConsensus - transaction execution effects; this must be the DEFAULT storage */
    CoreConsensus = 0,
    /** MetaConsensus - blocks, transactions - meta chain data */
    MetaConsensus = 1,
    /** SingleConsensus - node-specific storage that must NOT be used in deterministic operations */
    SingleConsensus = 2,
    Memory = 3,
    Transient = 4,
    UNRECOGNIZED = -1
}
export declare enum ContractStorageTypeSDKType {
    /** CoreConsensus - transaction execution effects; this must be the DEFAULT storage */
    CoreConsensus = 0,
    /** MetaConsensus - blocks, transactions - meta chain data */
    MetaConsensus = 1,
    /** SingleConsensus - node-specific storage that must NOT be used in deterministic operations */
    SingleConsensus = 2,
    Memory = 3,
    Transient = 4,
    UNRECOGNIZED = -1
}
export declare function contractStorageTypeFromJSON(object: any): ContractStorageType;
export declare function contractStorageTypeToJSON(object: ContractStorageType): string;
/** ContractStorage */
export interface ContractStoragePB {
    /** hex-encode key */
    key: Uint8Array;
    /** raw value */
    value: Uint8Array;
}
/** ContractStorage */
export interface ContractStoragePBSDKType {
    /** hex-encode key */
    key: Uint8Array;
    /** raw value */
    value: Uint8Array;
}
/** Metadata for each codeId */
export interface CodeMetadataPB {
    name: string;
    /** category paths e.g. "/dapps/history" */
    categ: string[];
    icon: string;
    /** off-chain identifier */
    author: string;
    site: string;
    abi: Uint8Array;
    jsonSchema: string;
    origin?: CodeOriginPB;
}
/** Metadata for each codeId */
export interface CodeMetadataPBSDKType {
    name: string;
    /** category paths e.g. "/dapps/history" */
    categ: string[];
    icon: string;
    /** off-chain identifier */
    author: string;
    site: string;
    abi: Uint8Array;
    json_schema: string;
    origin?: CodeOriginPBSDKType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoPB {
    /**
     * CodeHash is the unique identifier created by hashing the
     * wasm or interpreted code
     */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /**
     * deps can be hex-formatted contract addresses (32 bytes)
     * or versioned interface labels
     */
    deps: string[];
    /** Pinned contract */
    pinned: boolean;
    /** default is on, but some system contracts may have metering off */
    meteringOff: boolean;
    metadata?: CodeMetadataPB;
    /** for code that has a different runtime, like EVM */
    interpretedBytecodeDeployment: Uint8Array;
    interpretedBytecodeRuntime: Uint8Array;
    runtimeHash: Uint8Array;
    source: Uint8Array;
    sourceVerified: boolean;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoPBSDKType {
    /**
     * CodeHash is the unique identifier created by hashing the
     * wasm or interpreted code
     */
    code_hash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /**
     * deps can be hex-formatted contract addresses (32 bytes)
     * or versioned interface labels
     */
    deps: string[];
    /** Pinned contract */
    pinned: boolean;
    /** default is on, but some system contracts may have metering off */
    metering_off: boolean;
    metadata?: CodeMetadataPBSDKType;
    /** for code that has a different runtime, like EVM */
    interpreted_bytecode_deployment: Uint8Array;
    interpreted_bytecode_runtime: Uint8Array;
    runtime_hash: Uint8Array;
    source: Uint8Array;
    source_verified: boolean;
}
export interface CodeOriginPB {
    /** unique chain ID */
    chainId: string;
    /** hex-encoded address */
    address: string;
}
export interface CodeOriginPBSDKType {
    /** unique chain ID */
    chain_id: string;
    /** hex-encoded address */
    address: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoPB {
    /** CodeID is the reference to the stored Wasm code */
    codeId: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Each contract can set its storage type */
    storageType: ContractStorageType;
    /** Initialization message */
    initMessage: Uint8Array;
    /** factory/deployer address */
    provenance: string;
    ibcPortId: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoPBSDKType {
    /** CodeID is the reference to the stored Wasm code */
    code_id: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Each contract can set its storage type */
    storage_type: ContractStorageTypeSDKType;
    /** Initialization message */
    init_message: Uint8Array;
    /** factory/deployer address */
    provenance: string;
    ibc_port_id: string;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: Long;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    txIndex: Long;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionSDKType {
    /** BlockHeight is the block the contract was created at */
    block_height: Long;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    tx_index: Long;
}
export declare const ContractStoragePB: {
    encode(message: ContractStoragePB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractStoragePB;
    fromJSON(object: any): ContractStoragePB;
    toJSON(message: ContractStoragePB): unknown;
    fromPartial(object: Partial<ContractStoragePB>): ContractStoragePB;
};
export declare const CodeMetadataPB: {
    encode(message: CodeMetadataPB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeMetadataPB;
    fromJSON(object: any): CodeMetadataPB;
    toJSON(message: CodeMetadataPB): unknown;
    fromPartial(object: Partial<CodeMetadataPB>): CodeMetadataPB;
};
export declare const CodeInfoPB: {
    encode(message: CodeInfoPB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfoPB;
    fromJSON(object: any): CodeInfoPB;
    toJSON(message: CodeInfoPB): unknown;
    fromPartial(object: Partial<CodeInfoPB>): CodeInfoPB;
};
export declare const CodeOriginPB: {
    encode(message: CodeOriginPB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeOriginPB;
    fromJSON(object: any): CodeOriginPB;
    toJSON(message: CodeOriginPB): unknown;
    fromPartial(object: Partial<CodeOriginPB>): CodeOriginPB;
};
export declare const ContractInfoPB: {
    encode(message: ContractInfoPB, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoPB;
    fromJSON(object: any): ContractInfoPB;
    toJSON(message: ContractInfoPB): unknown;
    fromPartial(object: Partial<ContractInfoPB>): ContractInfoPB;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromJSON(object: any): AbsoluteTxPosition;
    toJSON(message: AbsoluteTxPosition): unknown;
    fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition;
};
