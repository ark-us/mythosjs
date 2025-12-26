/// <reference types="long" />
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ExecTxResult, ExecTxResultSDKType } from "./tendermint";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface MsgExecuteCrossChainCallRequestIndexed {
    request?: MsgExecuteCrossChainCallRequest;
    index: number;
}
export interface MsgExecuteCrossChainCallRequestIndexedSDKType {
    request?: MsgExecuteCrossChainCallRequestSDKType;
    index: number;
}
export interface MsgExecuteCrossChainCallResponseIndexed {
    data?: MsgExecuteCrossChainCallResponse;
    index: number;
}
export interface MsgExecuteCrossChainCallResponseIndexedSDKType {
    data?: MsgExecuteCrossChainCallResponseSDKType;
    index: number;
}
export interface MsgExecuteCrossChainCallRequest {
    /** authority is the address that controls the module. */
    authority: string;
    /** sender is the contract that prepared the message */
    sender: string;
    /** from is the contract that sent the cross-chain message */
    from: string;
    /** to is the address of the smart contract on the current chain */
    to: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
    /**
     * Array of either hex-encoded contract addresses or contract labels
     * on which the execution of this message depends on
     */
    dependencies: string[];
    fromChainId: string;
    toChainId: string;
    isQuery: boolean;
    /** timeout in miliseconds for this cross-chain call */
    timeoutMs: Long;
}
export interface MsgExecuteCrossChainCallRequestSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    /** sender is the contract that prepared the message */
    sender: string;
    /** from is the contract that sent the cross-chain message */
    from: string;
    /** to is the address of the smart contract on the current chain */
    to: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: CoinSDKType[];
    /**
     * Array of either hex-encoded contract addresses or contract labels
     * on which the execution of this message depends on
     */
    dependencies: string[];
    from_chain_id: string;
    to_chain_id: string;
    is_query: boolean;
    /** timeout in miliseconds for this cross-chain call */
    timeout_ms: Long;
}
export interface MsgExecuteCrossChainCallResponse {
    data: Uint8Array;
    error: string;
}
export interface MsgExecuteCrossChainCallResponseSDKType {
    data: Uint8Array;
    error: string;
}
export interface MsgExecuteAtomicTxResponse {
    results: ExecTxResult[];
}
export interface MsgExecuteAtomicTxResponseSDKType {
    results: ExecTxResultSDKType[];
}
export interface MsgMultiChainWrap {
    multiChainId: string;
    sender: string;
    data?: Any;
}
export interface MsgMultiChainWrapSDKType {
    multi_chain_id: string;
    sender: string;
    data?: AnySDKType;
}
export interface MsgMultiChainWrapResponse {
    data: Uint8Array;
}
export interface MsgMultiChainWrapResponseSDKType {
    data: Uint8Array;
}
export interface MsgGrpcSendRequest {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    contract: string;
    ipAddress: string;
    data: Uint8Array;
    /** evm, json, protobuf // ? */
    encoding: string;
}
export interface MsgGrpcSendRequestSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    contract: string;
    ip_address: string;
    data: Uint8Array;
    /** evm, json, protobuf // ? */
    encoding: string;
}
export interface MsgGrpcSendRequestResponse {
    data: Uint8Array;
}
export interface MsgGrpcSendRequestResponseSDKType {
    data: Uint8Array;
}
export interface MsgGrpcReceiveRequest {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    contract: string;
    data: Uint8Array;
    /** evm, json, protobuf // ? */
    encoding: string;
}
export interface MsgGrpcReceiveRequestSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    contract: string;
    data: Uint8Array;
    /** evm, json, protobuf // ? */
    encoding: string;
}
export interface MsgGrpcReceiveRequestResponse {
    data: Uint8Array;
}
export interface MsgGrpcReceiveRequestResponseSDKType {
    data: Uint8Array;
}
/** MsgStartTimeoutRequest */
export interface MsgStartTimeoutRequest {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    delay: Long;
    args: Uint8Array;
    id: string;
}
/** MsgStartTimeoutRequest */
export interface MsgStartTimeoutRequestSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    delay: Long;
    args: Uint8Array;
    id: string;
}
/** MsgStartTimeoutResponse */
export interface MsgStartTimeoutResponse {
}
/** MsgStartTimeoutResponse */
export interface MsgStartTimeoutResponseSDKType {
}
/** MsgCancelTimeoutRequest */
export interface MsgCancelTimeoutRequest {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    id: string;
}
/** MsgCancelTimeoutRequest */
export interface MsgCancelTimeoutRequestSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    id: string;
}
/** MsgStartTimeoutResponse */
export interface MsgCancelTimeoutResponse {
}
/** MsgStartTimeoutResponse */
export interface MsgCancelTimeoutResponseSDKType {
}
/** MsgStartBackgroundProcessRequest */
export interface MsgStartBackgroundProcessRequest {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    args: Uint8Array;
}
/** MsgStartBackgroundProcessRequest */
export interface MsgStartBackgroundProcessRequestSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    args: Uint8Array;
}
/** MsgStartBackgroundProcessResponse */
export interface MsgStartBackgroundProcessResponse {
}
/** MsgStartBackgroundProcessResponse */
export interface MsgStartBackgroundProcessResponseSDKType {
}
/** ExecuteContract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address or role of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
}
/** ExecuteContract */
export interface MsgExecuteContractSDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address or role of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
}
/** ExecuteContractResponse */
export interface MsgExecuteContractResponse {
    data: Uint8Array;
}
/** ExecuteContractResponse */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
/** MsgReentry */
export interface MsgReentry {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    entryPoint: string;
    msg: Uint8Array;
}
/** MsgReentry */
export interface MsgReentrySDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    entry_point: string;
    msg: Uint8Array;
}
/** MsgReentryResponse */
export interface MsgReentryResponse {
    data: Uint8Array;
}
/** MsgReentryResponse */
export interface MsgReentryResponseSDKType {
    data: Uint8Array;
}
/** MsgReentryWithGoRoutine */
export interface MsgReentryWithGoRoutine {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    entryPoint: string;
    msg: Uint8Array;
}
/** MsgReentryWithGoRoutine */
export interface MsgReentryWithGoRoutineSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    /** contract address */
    contract: string;
    entry_point: string;
    msg: Uint8Array;
}
/** MsgReentryWithGoRoutineResponse */
export interface MsgReentryWithGoRoutineResponse {
    data: Uint8Array;
}
/** MsgReentryWithGoRoutineResponse */
export interface MsgReentryWithGoRoutineResponseSDKType {
    data: Uint8Array;
}
/** QueryContract */
export interface MsgQueryContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Address is the address of the smart contract */
    contract: string;
    msg: Uint8Array;
}
/** QueryContract */
export interface MsgQueryContractSDKType {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Address is the address of the smart contract */
    contract: string;
    msg: Uint8Array;
}
/** QueryContractResponse */
export interface MsgQueryContractResponse {
    data: Uint8Array;
}
/** QueryContractResponse */
export interface MsgQueryContractResponseSDKType {
    data: Uint8Array;
}
export interface MsgP2PReceiveMessageRequest {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    contract: string;
    data: Uint8Array;
}
export interface MsgP2PReceiveMessageRequestSDKType {
    /** authority is the address that controls the module. */
    authority: string;
    sender: string;
    contract: string;
    data: Uint8Array;
}
export interface MsgP2PReceiveMessageResponse {
}
export interface MsgP2PReceiveMessageResponseSDKType {
}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */
export interface ExtensionOptionMultiChainTx {
    /** option (gogoproto.goproto_getters) = false; */
    chainId: string;
    /** index of this transaction in the atomic set */
    index: number;
    /** total transactions in the atomic set */
    txCount: number;
}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */
export interface ExtensionOptionMultiChainTxSDKType {
    /** option (gogoproto.goproto_getters) = false; */
    chain_id: string;
    /** index of this transaction in the atomic set */
    index: number;
    /** total transactions in the atomic set */
    tx_count: number;
}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */
export interface ExtensionOptionAtomicMultiChainTx {
    leaderChainId: string;
    chainIds: string[];
}
/** ExtensionOptionMultiChainTx is an extension option for multichain atomic transactions */
export interface ExtensionOptionAtomicMultiChainTxSDKType {
    leader_chain_id: string;
    chain_ids: string[];
}
export interface WrappedResponse {
    data: Uint8Array;
    error: string;
}
export interface WrappedResponseSDKType {
    data: Uint8Array;
    error: string;
}
export interface CrossChainCallInfo {
    request?: MsgExecuteCrossChainCallRequest;
    response?: WrappedResponse;
}
export interface CrossChainCallInfoSDKType {
    request?: MsgExecuteCrossChainCallRequestSDKType;
    response?: WrappedResponseSDKType;
}
export interface SubTxCrossChainCallInfo {
    calls: CrossChainCallInfo[];
}
export interface SubTxCrossChainCallInfoSDKType {
    calls: CrossChainCallInfoSDKType[];
}
export interface AtomicTxCrossChainCallInfo {
    subtx: SubTxCrossChainCallInfo[];
}
export interface AtomicTxCrossChainCallInfoSDKType {
    subtx: SubTxCrossChainCallInfoSDKType[];
}
export declare const MsgExecuteCrossChainCallRequestIndexed: {
    encode(message: MsgExecuteCrossChainCallRequestIndexed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallRequestIndexed;
    fromJSON(object: any): MsgExecuteCrossChainCallRequestIndexed;
    toJSON(message: MsgExecuteCrossChainCallRequestIndexed): unknown;
    fromPartial(object: Partial<MsgExecuteCrossChainCallRequestIndexed>): MsgExecuteCrossChainCallRequestIndexed;
};
export declare const MsgExecuteCrossChainCallResponseIndexed: {
    encode(message: MsgExecuteCrossChainCallResponseIndexed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallResponseIndexed;
    fromJSON(object: any): MsgExecuteCrossChainCallResponseIndexed;
    toJSON(message: MsgExecuteCrossChainCallResponseIndexed): unknown;
    fromPartial(object: Partial<MsgExecuteCrossChainCallResponseIndexed>): MsgExecuteCrossChainCallResponseIndexed;
};
export declare const MsgExecuteCrossChainCallRequest: {
    encode(message: MsgExecuteCrossChainCallRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallRequest;
    fromJSON(object: any): MsgExecuteCrossChainCallRequest;
    toJSON(message: MsgExecuteCrossChainCallRequest): unknown;
    fromPartial(object: Partial<MsgExecuteCrossChainCallRequest>): MsgExecuteCrossChainCallRequest;
};
export declare const MsgExecuteCrossChainCallResponse: {
    encode(message: MsgExecuteCrossChainCallResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteCrossChainCallResponse;
    fromJSON(object: any): MsgExecuteCrossChainCallResponse;
    toJSON(message: MsgExecuteCrossChainCallResponse): unknown;
    fromPartial(object: Partial<MsgExecuteCrossChainCallResponse>): MsgExecuteCrossChainCallResponse;
};
export declare const MsgExecuteAtomicTxResponse: {
    encode(message: MsgExecuteAtomicTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteAtomicTxResponse;
    fromJSON(object: any): MsgExecuteAtomicTxResponse;
    toJSON(message: MsgExecuteAtomicTxResponse): unknown;
    fromPartial(object: Partial<MsgExecuteAtomicTxResponse>): MsgExecuteAtomicTxResponse;
};
export declare const MsgMultiChainWrap: {
    encode(message: MsgMultiChainWrap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiChainWrap;
    fromJSON(object: any): MsgMultiChainWrap;
    toJSON(message: MsgMultiChainWrap): unknown;
    fromPartial(object: Partial<MsgMultiChainWrap>): MsgMultiChainWrap;
};
export declare const MsgMultiChainWrapResponse: {
    encode(message: MsgMultiChainWrapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiChainWrapResponse;
    fromJSON(object: any): MsgMultiChainWrapResponse;
    toJSON(message: MsgMultiChainWrapResponse): unknown;
    fromPartial(object: Partial<MsgMultiChainWrapResponse>): MsgMultiChainWrapResponse;
};
export declare const MsgGrpcSendRequest: {
    encode(message: MsgGrpcSendRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcSendRequest;
    fromJSON(object: any): MsgGrpcSendRequest;
    toJSON(message: MsgGrpcSendRequest): unknown;
    fromPartial(object: Partial<MsgGrpcSendRequest>): MsgGrpcSendRequest;
};
export declare const MsgGrpcSendRequestResponse: {
    encode(message: MsgGrpcSendRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcSendRequestResponse;
    fromJSON(object: any): MsgGrpcSendRequestResponse;
    toJSON(message: MsgGrpcSendRequestResponse): unknown;
    fromPartial(object: Partial<MsgGrpcSendRequestResponse>): MsgGrpcSendRequestResponse;
};
export declare const MsgGrpcReceiveRequest: {
    encode(message: MsgGrpcReceiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcReceiveRequest;
    fromJSON(object: any): MsgGrpcReceiveRequest;
    toJSON(message: MsgGrpcReceiveRequest): unknown;
    fromPartial(object: Partial<MsgGrpcReceiveRequest>): MsgGrpcReceiveRequest;
};
export declare const MsgGrpcReceiveRequestResponse: {
    encode(message: MsgGrpcReceiveRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrpcReceiveRequestResponse;
    fromJSON(object: any): MsgGrpcReceiveRequestResponse;
    toJSON(message: MsgGrpcReceiveRequestResponse): unknown;
    fromPartial(object: Partial<MsgGrpcReceiveRequestResponse>): MsgGrpcReceiveRequestResponse;
};
export declare const MsgStartTimeoutRequest: {
    encode(message: MsgStartTimeoutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartTimeoutRequest;
    fromJSON(object: any): MsgStartTimeoutRequest;
    toJSON(message: MsgStartTimeoutRequest): unknown;
    fromPartial(object: Partial<MsgStartTimeoutRequest>): MsgStartTimeoutRequest;
};
export declare const MsgStartTimeoutResponse: {
    encode(_: MsgStartTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartTimeoutResponse;
    fromJSON(_: any): MsgStartTimeoutResponse;
    toJSON(_: MsgStartTimeoutResponse): unknown;
    fromPartial(_: Partial<MsgStartTimeoutResponse>): MsgStartTimeoutResponse;
};
export declare const MsgCancelTimeoutRequest: {
    encode(message: MsgCancelTimeoutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTimeoutRequest;
    fromJSON(object: any): MsgCancelTimeoutRequest;
    toJSON(message: MsgCancelTimeoutRequest): unknown;
    fromPartial(object: Partial<MsgCancelTimeoutRequest>): MsgCancelTimeoutRequest;
};
export declare const MsgCancelTimeoutResponse: {
    encode(_: MsgCancelTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTimeoutResponse;
    fromJSON(_: any): MsgCancelTimeoutResponse;
    toJSON(_: MsgCancelTimeoutResponse): unknown;
    fromPartial(_: Partial<MsgCancelTimeoutResponse>): MsgCancelTimeoutResponse;
};
export declare const MsgStartBackgroundProcessRequest: {
    encode(message: MsgStartBackgroundProcessRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartBackgroundProcessRequest;
    fromJSON(object: any): MsgStartBackgroundProcessRequest;
    toJSON(message: MsgStartBackgroundProcessRequest): unknown;
    fromPartial(object: Partial<MsgStartBackgroundProcessRequest>): MsgStartBackgroundProcessRequest;
};
export declare const MsgStartBackgroundProcessResponse: {
    encode(_: MsgStartBackgroundProcessResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartBackgroundProcessResponse;
    fromJSON(_: any): MsgStartBackgroundProcessResponse;
    toJSON(_: MsgStartBackgroundProcessResponse): unknown;
    fromPartial(_: Partial<MsgStartBackgroundProcessResponse>): MsgStartBackgroundProcessResponse;
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
export declare const MsgReentry: {
    encode(message: MsgReentry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentry;
    fromJSON(object: any): MsgReentry;
    toJSON(message: MsgReentry): unknown;
    fromPartial(object: Partial<MsgReentry>): MsgReentry;
};
export declare const MsgReentryResponse: {
    encode(message: MsgReentryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentryResponse;
    fromJSON(object: any): MsgReentryResponse;
    toJSON(message: MsgReentryResponse): unknown;
    fromPartial(object: Partial<MsgReentryResponse>): MsgReentryResponse;
};
export declare const MsgReentryWithGoRoutine: {
    encode(message: MsgReentryWithGoRoutine, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentryWithGoRoutine;
    fromJSON(object: any): MsgReentryWithGoRoutine;
    toJSON(message: MsgReentryWithGoRoutine): unknown;
    fromPartial(object: Partial<MsgReentryWithGoRoutine>): MsgReentryWithGoRoutine;
};
export declare const MsgReentryWithGoRoutineResponse: {
    encode(message: MsgReentryWithGoRoutineResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReentryWithGoRoutineResponse;
    fromJSON(object: any): MsgReentryWithGoRoutineResponse;
    toJSON(message: MsgReentryWithGoRoutineResponse): unknown;
    fromPartial(object: Partial<MsgReentryWithGoRoutineResponse>): MsgReentryWithGoRoutineResponse;
};
export declare const MsgQueryContract: {
    encode(message: MsgQueryContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgQueryContract;
    fromJSON(object: any): MsgQueryContract;
    toJSON(message: MsgQueryContract): unknown;
    fromPartial(object: Partial<MsgQueryContract>): MsgQueryContract;
};
export declare const MsgQueryContractResponse: {
    encode(message: MsgQueryContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgQueryContractResponse;
    fromJSON(object: any): MsgQueryContractResponse;
    toJSON(message: MsgQueryContractResponse): unknown;
    fromPartial(object: Partial<MsgQueryContractResponse>): MsgQueryContractResponse;
};
export declare const MsgP2PReceiveMessageRequest: {
    encode(message: MsgP2PReceiveMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgP2PReceiveMessageRequest;
    fromJSON(object: any): MsgP2PReceiveMessageRequest;
    toJSON(message: MsgP2PReceiveMessageRequest): unknown;
    fromPartial(object: Partial<MsgP2PReceiveMessageRequest>): MsgP2PReceiveMessageRequest;
};
export declare const MsgP2PReceiveMessageResponse: {
    encode(_: MsgP2PReceiveMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgP2PReceiveMessageResponse;
    fromJSON(_: any): MsgP2PReceiveMessageResponse;
    toJSON(_: MsgP2PReceiveMessageResponse): unknown;
    fromPartial(_: Partial<MsgP2PReceiveMessageResponse>): MsgP2PReceiveMessageResponse;
};
export declare const ExtensionOptionMultiChainTx: {
    encode(message: ExtensionOptionMultiChainTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionMultiChainTx;
    fromJSON(object: any): ExtensionOptionMultiChainTx;
    toJSON(message: ExtensionOptionMultiChainTx): unknown;
    fromPartial(object: Partial<ExtensionOptionMultiChainTx>): ExtensionOptionMultiChainTx;
};
export declare const ExtensionOptionAtomicMultiChainTx: {
    encode(message: ExtensionOptionAtomicMultiChainTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionAtomicMultiChainTx;
    fromJSON(object: any): ExtensionOptionAtomicMultiChainTx;
    toJSON(message: ExtensionOptionAtomicMultiChainTx): unknown;
    fromPartial(object: Partial<ExtensionOptionAtomicMultiChainTx>): ExtensionOptionAtomicMultiChainTx;
};
export declare const WrappedResponse: {
    encode(message: WrappedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WrappedResponse;
    fromJSON(object: any): WrappedResponse;
    toJSON(message: WrappedResponse): unknown;
    fromPartial(object: Partial<WrappedResponse>): WrappedResponse;
};
export declare const CrossChainCallInfo: {
    encode(message: CrossChainCallInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainCallInfo;
    fromJSON(object: any): CrossChainCallInfo;
    toJSON(message: CrossChainCallInfo): unknown;
    fromPartial(object: Partial<CrossChainCallInfo>): CrossChainCallInfo;
};
export declare const SubTxCrossChainCallInfo: {
    encode(message: SubTxCrossChainCallInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubTxCrossChainCallInfo;
    fromJSON(object: any): SubTxCrossChainCallInfo;
    toJSON(message: SubTxCrossChainCallInfo): unknown;
    fromPartial(object: Partial<SubTxCrossChainCallInfo>): SubTxCrossChainCallInfo;
};
export declare const AtomicTxCrossChainCallInfo: {
    encode(message: AtomicTxCrossChainCallInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AtomicTxCrossChainCallInfo;
    fromJSON(object: any): AtomicTxCrossChainCallInfo;
    toJSON(message: AtomicTxCrossChainCallInfo): unknown;
    fromPartial(object: Partial<AtomicTxCrossChainCallInfo>): AtomicTxCrossChainCallInfo;
};
