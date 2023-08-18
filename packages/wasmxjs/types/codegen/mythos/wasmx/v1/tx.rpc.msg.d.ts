import { Rpc } from "../../../helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgDeployCode, MsgDeployCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgExecuteContract, MsgExecuteContractResponse, MsgExecuteWithOriginContract, MsgExecuteDelegateContract, MsgExecuteDelegateContractResponse, MsgCompileContract, MsgCompileContractResponse } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /** DeployCode stores and instantiates */
    deployCode(request: MsgDeployCode): Promise<MsgDeployCodeResponse>;
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
    /** CompileContract submits a smart contract to be precompiled */
    compileContract(request: MsgCompileContract): Promise<MsgCompileContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    deployCode(request: MsgDeployCode): Promise<MsgDeployCodeResponse>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    instantiateContract2(request: MsgInstantiateContract2): Promise<MsgInstantiateContract2Response>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    executeWithOriginContract(request: MsgExecuteWithOriginContract): Promise<MsgExecuteContractResponse>;
    executeDelegateContract(request: MsgExecuteDelegateContract): Promise<MsgExecuteDelegateContractResponse>;
    compileContract(request: MsgCompileContract): Promise<MsgCompileContractResponse>;
}
