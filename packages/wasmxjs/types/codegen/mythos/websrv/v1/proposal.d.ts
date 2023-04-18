import * as _m0 from "protobufjs/minimal";
/** RegisterRouteProposal is a gov Content type to register a web server route */
export interface RegisterRouteProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contractAddress: string;
}
/** RegisterRouteProposal is a gov Content type to register a web server route */
export interface RegisterRouteProposalSDKType {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contract_address: string;
}
/**
 * DisallowCosmosMessagesProposal is a gov Content type to remove a previously
 * allowed Cosmos message or query to be called from the EVM
 */
export interface DeregisterRouteProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contractAddress: string;
}
/**
 * DisallowCosmosMessagesProposal is a gov Content type to remove a previously
 * allowed Cosmos message or query to be called from the EVM
 */
export interface DeregisterRouteProposalSDKType {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** Route path */
    path: string;
    /** Contract address in bech32 format */
    contract_address: string;
}
export declare const RegisterRouteProposal: {
    encode(message: RegisterRouteProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRouteProposal;
    fromJSON(object: any): RegisterRouteProposal;
    toJSON(message: RegisterRouteProposal): unknown;
    fromPartial(object: Partial<RegisterRouteProposal>): RegisterRouteProposal;
};
export declare const DeregisterRouteProposal: {
    encode(message: DeregisterRouteProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterRouteProposal;
    fromJSON(object: any): DeregisterRouteProposal;
    toJSON(message: DeregisterRouteProposal): unknown;
    fromPartial(object: Partial<DeregisterRouteProposal>): DeregisterRouteProposal;
};
