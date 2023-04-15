import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../helpers";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeSDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
    /** CodeID is the reference to the stored WASM code */
    code_id: Long;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/** MsgStoreCodeEvm submit Wasm code to the system */
export interface MsgStoreCodeEvm {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** EVM bytecode */
    evmByteCode: Uint8Array;
}
/** MsgStoreCodeEvm submit Wasm code to the system */
export interface MsgStoreCodeEvmSDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** EVM bytecode */
    evm_byte_code: Uint8Array;
}
/** MsgStoreCodeEvmResponse returns store result data. */
export interface MsgStoreCodeEvmResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/** MsgStoreCodeEvmResponse returns store result data. */
export interface MsgStoreCodeEvmResponseSDKType {
    /** CodeID is the reference to the stored WASM code */
    code_id: Long;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: Long;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinSDKType[];
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    codeId: Long;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2SDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    code_id: Long;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinSDKType[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fix_msg: boolean;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseSDKType {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
    /**
     * Array of either hex-encoded contract addresses or contract labels
     * on which the execution of this message depends on
     */
    dependencies: string[];
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractSDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: CoinSDKType[];
    /**
     * Array of either hex-encoded contract addresses or contract labels
     * on which the execution of this message depends on
     */
    dependencies: string[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/**
 * MsgExecuteWithOriginContract forwards a message data from a smart contract
 * to another smart contract
 */
export interface MsgExecuteWithOriginContract {
    /** Origin is the actor that originally signed the message */
    origin: string;
    /** Sender is the the smart contract that sent the messages */
    sender: string;
    /** Contract is the address of the smart contract that receives the message */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
/**
 * MsgExecuteWithOriginContract forwards a message data from a smart contract
 * to another smart contract
 */
export interface MsgExecuteWithOriginContractSDKType {
    /** Origin is the actor that originally signed the message */
    origin: string;
    /** Sender is the the smart contract that sent the messages */
    sender: string;
    /** Contract is the address of the smart contract that receives the message */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: CoinSDKType[];
}
/** MsgExecuteDelegateContract submits the given message data to a smart contract */
export interface MsgExecuteDelegateContract {
    /** Origin is the actor that originally signed the message */
    origin: string;
    /** Sender is the storage contract, equivalent to the address that triggers the message (signer) */
    sender: string;
    /** Caller is the address that will be used as sender */
    caller: string;
    /** CodeContract is the address of the smart contract whose binary is used */
    codeContract: string;
    /** StorageContract is the address of the smart contract whose storage is used */
    storageContract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
/** MsgExecuteDelegateContract submits the given message data to a smart contract */
export interface MsgExecuteDelegateContractSDKType {
    /** Origin is the actor that originally signed the message */
    origin: string;
    /** Sender is the storage contract, equivalent to the address that triggers the message (signer) */
    sender: string;
    /** Caller is the address that will be used as sender */
    caller: string;
    /** CodeContract is the address of the smart contract whose binary is used */
    code_contract: string;
    /** StorageContract is the address of the smart contract whose storage is used */
    storage_contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: CoinSDKType[];
}
/** MsgExecuteDelegateContractResponse returns execution result data. */
export interface MsgExecuteDelegateContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteDelegateContractResponse returns execution result data. */
export interface MsgExecuteDelegateContractResponseSDKType {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgCompileContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    codeId: Long;
}
export interface MsgCompileContractSDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    codeId: Long;
}
export interface MsgCompileContractResponse {
}
export interface MsgCompileContractResponseSDKType {
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
};
export declare const MsgStoreCodeEvm: {
    encode(message: MsgStoreCodeEvm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeEvm;
    fromJSON(object: any): MsgStoreCodeEvm;
    toJSON(message: MsgStoreCodeEvm): unknown;
    fromPartial(object: Partial<MsgStoreCodeEvm>): MsgStoreCodeEvm;
};
export declare const MsgStoreCodeEvmResponse: {
    encode(message: MsgStoreCodeEvmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeEvmResponse;
    fromJSON(object: any): MsgStoreCodeEvmResponse;
    toJSON(message: MsgStoreCodeEvmResponse): unknown;
    fromPartial(object: Partial<MsgStoreCodeEvmResponse>): MsgStoreCodeEvmResponse;
};
export declare const MsgInstantiateContract: {
    encode(message: MsgInstantiateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract;
};
export declare const MsgInstantiateContract2: {
    encode(message: MsgInstantiateContract2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract2;
    fromJSON(object: any): MsgInstantiateContract2;
    toJSON(message: MsgInstantiateContract2): unknown;
    fromPartial(object: Partial<MsgInstantiateContract2>): MsgInstantiateContract2;
};
export declare const MsgInstantiateContractResponse: {
    encode(message: MsgInstantiateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse;
    fromJSON(object: any): MsgInstantiateContractResponse;
    toJSON(message: MsgInstantiateContractResponse): unknown;
    fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse;
};
export declare const MsgInstantiateContract2Response: {
    encode(message: MsgInstantiateContract2Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract2Response;
    fromJSON(object: any): MsgInstantiateContract2Response;
    toJSON(message: MsgInstantiateContract2Response): unknown;
    fromPartial(object: Partial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract;
};
export declare const MsgExecuteContractResponse: {
    encode(message: MsgExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse;
    fromJSON(object: any): MsgExecuteContractResponse;
    toJSON(message: MsgExecuteContractResponse): unknown;
    fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
};
export declare const MsgExecuteWithOriginContract: {
    encode(message: MsgExecuteWithOriginContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteWithOriginContract;
    fromJSON(object: any): MsgExecuteWithOriginContract;
    toJSON(message: MsgExecuteWithOriginContract): unknown;
    fromPartial(object: Partial<MsgExecuteWithOriginContract>): MsgExecuteWithOriginContract;
};
export declare const MsgExecuteDelegateContract: {
    encode(message: MsgExecuteDelegateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteDelegateContract;
    fromJSON(object: any): MsgExecuteDelegateContract;
    toJSON(message: MsgExecuteDelegateContract): unknown;
    fromPartial(object: Partial<MsgExecuteDelegateContract>): MsgExecuteDelegateContract;
};
export declare const MsgExecuteDelegateContractResponse: {
    encode(message: MsgExecuteDelegateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteDelegateContractResponse;
    fromJSON(object: any): MsgExecuteDelegateContractResponse;
    toJSON(message: MsgExecuteDelegateContractResponse): unknown;
    fromPartial(object: Partial<MsgExecuteDelegateContractResponse>): MsgExecuteDelegateContractResponse;
};
export declare const MsgCompileContract: {
    encode(message: MsgCompileContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompileContract;
    fromJSON(object: any): MsgCompileContract;
    toJSON(message: MsgCompileContract): unknown;
    fromPartial(object: Partial<MsgCompileContract>): MsgCompileContract;
};
export declare const MsgCompileContractResponse: {
    encode(_: MsgCompileContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompileContractResponse;
    fromJSON(_: any): MsgCompileContractResponse;
    toJSON(_: MsgCompileContractResponse): unknown;
    fromPartial(_: Partial<MsgCompileContractResponse>): MsgCompileContractResponse;
};
