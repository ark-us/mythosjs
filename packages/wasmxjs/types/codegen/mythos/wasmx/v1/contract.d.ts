import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** ContractStorage */
export interface ContractStorage {
    /** hex-encode key */
    key: Uint8Array;
    /** raw value */
    value: Uint8Array;
}
/** ContractStorage */
export interface ContractStorageSDKType {
    /** hex-encode key */
    key: Uint8Array;
    /** raw value */
    value: Uint8Array;
}
/** Metadata for each codeId */
export interface CodeMetadata {
    name: string;
    /** category paths e.g. "/dapps/history" */
    categ: string[];
    icon: string;
    /** off-chain identifier */
    author: string;
    site: string;
    abi: string;
    jsonSchema: string;
    origin?: CodeOrigin;
}
/** Metadata for each codeId */
export interface CodeMetadataSDKType {
    name: string;
    /** category paths e.g. "/dapps/history" */
    categ: string[];
    icon: string;
    /** off-chain identifier */
    author: string;
    site: string;
    abi: string;
    json_schema: string;
    origin?: CodeOriginSDKType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    /** CodeHash is the unique identifier created by hashing the wasm code */
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
    metadata?: CodeMetadata;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
    /** CodeHash is the unique identifier created by hashing the wasm code */
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
    metadata?: CodeMetadataSDKType;
}
export interface CodeOrigin {
    /** unique chain ID */
    chainId: string;
    /** hex-encoded address */
    address: string;
}
export interface CodeOriginSDKType {
    /** unique chain ID */
    chain_id: string;
    /** hex-encoded address */
    address: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    codeId: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Initialization message */
    initMessage: Uint8Array;
    ibcPortId: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
    /** CodeID is the reference to the stored Wasm code */
    code_id: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Initialization message */
    init_message: Uint8Array;
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
export declare const ContractStorage: {
    encode(message: ContractStorage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractStorage;
    fromJSON(object: any): ContractStorage;
    toJSON(message: ContractStorage): unknown;
    fromPartial(object: Partial<ContractStorage>): ContractStorage;
};
export declare const CodeMetadata: {
    encode(message: CodeMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeMetadata;
    fromJSON(object: any): CodeMetadata;
    toJSON(message: CodeMetadata): unknown;
    fromPartial(object: Partial<CodeMetadata>): CodeMetadata;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial(object: Partial<CodeInfo>): CodeInfo;
};
export declare const CodeOrigin: {
    encode(message: CodeOrigin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeOrigin;
    fromJSON(object: any): CodeOrigin;
    toJSON(message: CodeOrigin): unknown;
    fromPartial(object: Partial<CodeOrigin>): CodeOrigin;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial(object: Partial<ContractInfo>): ContractInfo;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromJSON(object: any): AbsoluteTxPosition;
    toJSON(message: AbsoluteTxPosition): unknown;
    fromPartial(object: Partial<AbsoluteTxPosition>): AbsoluteTxPosition;
};
