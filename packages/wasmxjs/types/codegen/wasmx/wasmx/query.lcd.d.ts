import { LCDClient } from "@osmonauts/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateResponseSDKType, QuerySmartContractCallRequest, QuerySmartContractCallResponseSDKType, QueryCodeRequest, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryContractsByCreatorRequest, QueryContractsByCreatorResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    contractInfo(params: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType>;
    contractsByCode(params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType>;
    allContractState(params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType>;
    rawContractState(params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType>;
    smartContractCall(params: QuerySmartContractCallRequest): Promise<QuerySmartContractCallResponseSDKType>;
    code(params: QueryCodeRequest): Promise<QueryCodeResponseSDKType>;
    codes(params?: QueryCodesRequest): Promise<QueryCodesResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    contractsByCreator(params: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponseSDKType>;
}
