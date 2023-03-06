import { Rpc } from "../../helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgExecuteWithOriginContract, MsgExecuteDelegateContract, MsgExecuteDelegateContractResponse } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /**
     * InstantiateContract creates a new smart contract instance for the given
     *  code id.
     */
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /**
     * InstantiateContract2 creates a new smart contract instance for the given
     *  code id with a predictable address
     */
    instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
    /** Execute submits the given message data to a smart contract */
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    /** ExecuteWithOrigin submits the given message data to a smart contract */
    executeWithOriginContract(request: MsgExecuteWithOriginContract): Promise<MsgExecuteContractResponse>;
    /** ExecuteDelegate submits the given message data to a smart contract */
    executeDelegateContract(request: MsgExecuteDelegateContract): Promise<MsgExecuteDelegateContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    executeWithOriginContract(request: MsgExecuteWithOriginContract): Promise<MsgExecuteContractResponse>;
    executeDelegateContract(request: MsgExecuteDelegateContract): Promise<MsgExecuteDelegateContractResponse>;
}
