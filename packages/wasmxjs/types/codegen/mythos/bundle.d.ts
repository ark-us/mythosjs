import * as _138 from "./cosmosmod/v1/auth_cosmos";
import * as _139 from "./cosmosmod/v1/auth_genesis";
import * as _140 from "./cosmosmod/v1/auth";
import * as _141 from "./cosmosmod/v1/bank_genesis";
import * as _142 from "./cosmosmod/v1/distribution_genesis";
import * as _143 from "./cosmosmod/v1/genesis";
import * as _144 from "./cosmosmod/v1/gov_genesis";
import * as _145 from "./cosmosmod/v1/gov";
import * as _146 from "./cosmosmod/v1/staking_genesis";
import * as _147 from "./cosmosmod/v1/staking";
import * as _148 from "./crypto/v1/ethsecp256k1/keys";
import * as _149 from "./network/v1/custom";
import * as _150 from "./network/v1/genesis";
import * as _151 from "./network/v1/query";
import * as _152 from "./network/v1/tendermint";
import * as _153 from "./network/v1/tx";
import * as _154 from "./wasmx/v1/contract";
import * as _155 from "./wasmx/v1/eth";
import * as _156 from "./wasmx/v1/genesis";
import * as _157 from "./wasmx/v1/params";
import * as _158 from "./wasmx/v1/query";
import * as _159 from "./wasmx/v1/role";
import * as _160 from "./wasmx/v1/tx";
import * as _161 from "./websrv/v1/genesis";
import * as _162 from "./websrv/v1/params";
import * as _163 from "./websrv/v1/query";
import * as _164 from "./websrv/v1/tx";
import * as _259 from "./network/v1/query.rpc.Query";
import * as _260 from "./wasmx/v1/query.rpc.Query";
import * as _261 from "./websrv/v1/query.rpc.Query";
import * as _262 from "./network/v1/tx.rpc.msg";
import * as _263 from "./wasmx/v1/tx.rpc.msg";
import * as _264 from "./websrv/v1/tx.rpc.msg";
export declare namespace mythos {
    namespace cosmosmod {
        const v1: {
            InitGenesisResponse: {
                encode(message: _147.InitGenesisResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.InitGenesisResponse;
                fromJSON(object: any): _147.InitGenesisResponse;
                toJSON(message: _147.InitGenesisResponse): unknown;
                fromPartial(object: Partial<_147.InitGenesisResponse>): _147.InitGenesisResponse;
            };
            ValidatorUpdate: {
                encode(message: _147.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ValidatorUpdate;
                fromJSON(object: any): _147.ValidatorUpdate;
                toJSON(message: _147.ValidatorUpdate): unknown;
                fromPartial(object: Partial<_147.ValidatorUpdate>): _147.ValidatorUpdate;
            };
            QueryTotalSupplyResponse: {
                encode(message: _147.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryTotalSupplyResponse;
                fromJSON(object: any): _147.QueryTotalSupplyResponse;
                toJSON(message: _147.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_147.QueryTotalSupplyResponse>): _147.QueryTotalSupplyResponse;
            };
            StakingGenesisState: {
                encode(message: _146.StakingGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.StakingGenesisState;
                fromJSON(object: any): _146.StakingGenesisState;
                toJSON(message: _146.StakingGenesisState): unknown;
                fromPartial(object: Partial<_146.StakingGenesisState>): _146.StakingGenesisState;
            };
            Delegation: {
                encode(message: _146.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Delegation;
                fromJSON(object: any): _146.Delegation;
                toJSON(message: _146.Delegation): unknown;
                fromPartial(object: Partial<_146.Delegation>): _146.Delegation;
            };
            GovProposal: {
                encode(message: _145.GovProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GovProposal;
                fromJSON(object: any): _145.GovProposal;
                toJSON(message: _145.GovProposal): unknown;
                fromPartial(object: Partial<_145.GovProposal>): _145.GovProposal;
            };
            MsgSubmitProposal: {
                encode(message: _145.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.MsgSubmitProposal;
                fromJSON(object: any): _145.MsgSubmitProposal;
                toJSON(message: _145.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_145.MsgSubmitProposal>): _145.MsgSubmitProposal;
            };
            QueryProposalResponse: {
                encode(message: _145.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryProposalResponse;
                fromJSON(object: any): _145.QueryProposalResponse;
                toJSON(message: _145.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_145.QueryProposalResponse>): _145.QueryProposalResponse;
            };
            QueryProposalsResponse: {
                encode(message: _145.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryProposalsResponse;
                fromJSON(object: any): _145.QueryProposalsResponse;
                toJSON(message: _145.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_145.QueryProposalsResponse>): _145.QueryProposalsResponse;
            };
            GovParams: {
                encode(message: _145.GovParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.GovParams;
                fromJSON(object: any): _145.GovParams;
                toJSON(message: _145.GovParams): unknown;
                fromPartial(object: Partial<_145.GovParams>): _145.GovParams;
            };
            ProposalOption: {
                encode(message: _145.ProposalOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ProposalOption;
                fromJSON(object: any): _145.ProposalOption;
                toJSON(message: _145.ProposalOption): unknown;
                fromPartial(object: Partial<_145.ProposalOption>): _145.ProposalOption;
            };
            ProposalVoteStatus: {
                encode(message: _145.ProposalVoteStatus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ProposalVoteStatus;
                fromJSON(object: any): _145.ProposalVoteStatus;
                toJSON(message: _145.ProposalVoteStatus): unknown;
                fromPartial(object: Partial<_145.ProposalVoteStatus>): _145.ProposalVoteStatus;
            };
            ProposalExtended: {
                encode(message: _145.ProposalExtended, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ProposalExtended;
                fromJSON(object: any): _145.ProposalExtended;
                toJSON(message: _145.ProposalExtended): unknown;
                fromPartial(object: Partial<_145.ProposalExtended>): _145.ProposalExtended;
            };
            QueryParamsResponse: {
                encode(message: _145.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsResponse;
                fromJSON(object: any): _145.QueryParamsResponse;
                toJSON(message: _145.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_145.QueryParamsResponse>): _145.QueryParamsResponse;
            };
            QueryProposalExtendedResponse: {
                encode(message: _145.QueryProposalExtendedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryProposalExtendedResponse;
                fromJSON(object: any): _145.QueryProposalExtendedResponse;
                toJSON(message: _145.QueryProposalExtendedResponse): unknown;
                fromPartial(object: Partial<_145.QueryProposalExtendedResponse>): _145.QueryProposalExtendedResponse;
            };
            GovGenesisState: {
                encode(message: _144.GovGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GovGenesisState;
                fromJSON(object: any): _144.GovGenesisState;
                toJSON(message: _144.GovGenesisState): unknown;
                fromPartial(object: Partial<_144.GovGenesisState>): _144.GovGenesisState;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
                fromJSON(object: any): _143.GenesisState;
                toJSON(message: _143.GenesisState): unknown;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
            };
            DistributionGenesisState: {
                encode(message: _142.DistributionGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.DistributionGenesisState;
                fromJSON(object: any): _142.DistributionGenesisState;
                toJSON(message: _142.DistributionGenesisState): unknown;
                fromPartial(object: Partial<_142.DistributionGenesisState>): _142.DistributionGenesisState;
            };
            BankGenesisState: {
                encode(message: _141.BankGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.BankGenesisState;
                fromJSON(object: any): _141.BankGenesisState;
                toJSON(message: _141.BankGenesisState): unknown;
                fromPartial(object: Partial<_141.BankGenesisState>): _141.BankGenesisState;
            };
            DenomDeploymentInfo: {
                encode(message: _141.DenomDeploymentInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DenomDeploymentInfo;
                fromJSON(object: any): _141.DenomDeploymentInfo;
                toJSON(message: _141.DenomDeploymentInfo): unknown;
                fromPartial(object: Partial<_141.DenomDeploymentInfo>): _141.DenomDeploymentInfo;
            };
            MsgSetAccount: {
                encode(message: _140.MsgSetAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.MsgSetAccount;
                fromJSON(object: any): _140.MsgSetAccount;
                toJSON(message: _140.MsgSetAccount): unknown;
                fromPartial(object: Partial<_140.MsgSetAccount>): _140.MsgSetAccount;
            };
            QueryAccountResponse: {
                encode(message: _140.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryAccountResponse;
                fromJSON(object: any): _140.QueryAccountResponse;
                toJSON(message: _140.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_140.QueryAccountResponse>): _140.QueryAccountResponse;
            };
            QueryHasAccountResponse: {
                encode(message: _140.QueryHasAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryHasAccountResponse;
                fromJSON(object: any): _140.QueryHasAccountResponse;
                toJSON(message: _140.QueryHasAccountResponse): unknown;
                fromPartial(object: Partial<_140.QueryHasAccountResponse>): _140.QueryHasAccountResponse;
            };
            AuthGenesisState: {
                encode(message: _139.AuthGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AuthGenesisState;
                fromJSON(object: any): _139.AuthGenesisState;
                toJSON(message: _139.AuthGenesisState): unknown;
                fromPartial(object: Partial<_139.AuthGenesisState>): _139.AuthGenesisState;
            };
            BaseAccount: {
                encode(message: _138.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.BaseAccount;
                fromJSON(object: any): _138.BaseAccount;
                toJSON(message: _138.BaseAccount): unknown;
                fromPartial(object: Partial<_138.BaseAccount>): _138.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _138.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ModuleAccount;
                fromJSON(object: any): _138.ModuleAccount;
                toJSON(message: _138.ModuleAccount): unknown;
                fromPartial(object: Partial<_138.ModuleAccount>): _138.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _138.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ModuleCredential;
                fromJSON(object: any): _138.ModuleCredential;
                toJSON(message: _138.ModuleCredential): unknown;
                fromPartial(object: Partial<_138.ModuleCredential>): _138.ModuleCredential;
            };
            Params: {
                encode(message: _138.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Params;
                fromJSON(object: any): _138.Params;
                toJSON(message: _138.Params): unknown;
                fromPartial(object: Partial<_138.Params>): _138.Params;
            };
        };
    }
    namespace crypto {
        namespace v1 {
            const ethsecp256k1: {
                PubKey: {
                    encode(message: _148.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PubKey;
                    fromJSON(object: any): _148.PubKey;
                    toJSON(message: _148.PubKey): unknown;
                    fromPartial(object: Partial<_148.PubKey>): _148.PubKey;
                };
                PrivKey: {
                    encode(message: _148.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.PrivKey;
                    fromJSON(object: any): _148.PrivKey;
                    toJSON(message: _148.PrivKey): unknown;
                    fromPartial(object: Partial<_148.PrivKey>): _148.PrivKey;
                };
            };
        }
    }
    namespace network {
        const v1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractCall(request: _151.QueryContractCallRequest): Promise<_151.QueryContractCallResponse>;
                queryMultiChain(request: _151.QueryMultiChainRequest): Promise<_151.QueryMultiChainResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grpcSendRequest(value: _153.MsgGrpcSendRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startTimeout(value: _153.MsgStartTimeoutRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelTimeout(value: _153.MsgCancelTimeoutRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    startBackgroundProcess(value: _153.MsgStartBackgroundProcessRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiChainWrap(value: _153.MsgMultiChainWrap): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    reentryWithGoRoutine(value: _153.MsgReentryWithGoRoutine): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    reentry(value: _153.MsgReentry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    grpcReceiveRequest(value: _153.MsgGrpcReceiveRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    p2PReceiveMessage(value: _153.MsgP2PReceiveMessageRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeAtomicTx(value: _149.MsgExecuteAtomicTxRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeCrossChainTx(value: _153.MsgExecuteCrossChainCallRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grpcSendRequest(value: _153.MsgGrpcSendRequest): {
                        typeUrl: string;
                        value: _153.MsgGrpcSendRequest;
                    };
                    startTimeout(value: _153.MsgStartTimeoutRequest): {
                        typeUrl: string;
                        value: _153.MsgStartTimeoutRequest;
                    };
                    cancelTimeout(value: _153.MsgCancelTimeoutRequest): {
                        typeUrl: string;
                        value: _153.MsgCancelTimeoutRequest;
                    };
                    startBackgroundProcess(value: _153.MsgStartBackgroundProcessRequest): {
                        typeUrl: string;
                        value: _153.MsgStartBackgroundProcessRequest;
                    };
                    multiChainWrap(value: _153.MsgMultiChainWrap): {
                        typeUrl: string;
                        value: _153.MsgMultiChainWrap;
                    };
                    reentryWithGoRoutine(value: _153.MsgReentryWithGoRoutine): {
                        typeUrl: string;
                        value: _153.MsgReentryWithGoRoutine;
                    };
                    reentry(value: _153.MsgReentry): {
                        typeUrl: string;
                        value: _153.MsgReentry;
                    };
                    grpcReceiveRequest(value: _153.MsgGrpcReceiveRequest): {
                        typeUrl: string;
                        value: _153.MsgGrpcReceiveRequest;
                    };
                    p2PReceiveMessage(value: _153.MsgP2PReceiveMessageRequest): {
                        typeUrl: string;
                        value: _153.MsgP2PReceiveMessageRequest;
                    };
                    executeAtomicTx(value: _149.MsgExecuteAtomicTxRequest): {
                        typeUrl: string;
                        value: _149.MsgExecuteAtomicTxRequest;
                    };
                    executeCrossChainTx(value: _153.MsgExecuteCrossChainCallRequest): {
                        typeUrl: string;
                        value: _153.MsgExecuteCrossChainCallRequest;
                    };
                };
                toJSON: {
                    grpcSendRequest(value: _153.MsgGrpcSendRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    startTimeout(value: _153.MsgStartTimeoutRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelTimeout(value: _153.MsgCancelTimeoutRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    startBackgroundProcess(value: _153.MsgStartBackgroundProcessRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiChainWrap(value: _153.MsgMultiChainWrap): {
                        typeUrl: string;
                        value: unknown;
                    };
                    reentryWithGoRoutine(value: _153.MsgReentryWithGoRoutine): {
                        typeUrl: string;
                        value: unknown;
                    };
                    reentry(value: _153.MsgReentry): {
                        typeUrl: string;
                        value: unknown;
                    };
                    grpcReceiveRequest(value: _153.MsgGrpcReceiveRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    p2PReceiveMessage(value: _153.MsgP2PReceiveMessageRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeAtomicTx(value: _149.MsgExecuteAtomicTxRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeCrossChainTx(value: _153.MsgExecuteCrossChainCallRequest): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grpcSendRequest(value: any): {
                        typeUrl: string;
                        value: _153.MsgGrpcSendRequest;
                    };
                    startTimeout(value: any): {
                        typeUrl: string;
                        value: _153.MsgStartTimeoutRequest;
                    };
                    cancelTimeout(value: any): {
                        typeUrl: string;
                        value: _153.MsgCancelTimeoutRequest;
                    };
                    startBackgroundProcess(value: any): {
                        typeUrl: string;
                        value: _153.MsgStartBackgroundProcessRequest;
                    };
                    multiChainWrap(value: any): {
                        typeUrl: string;
                        value: _153.MsgMultiChainWrap;
                    };
                    reentryWithGoRoutine(value: any): {
                        typeUrl: string;
                        value: _153.MsgReentryWithGoRoutine;
                    };
                    reentry(value: any): {
                        typeUrl: string;
                        value: _153.MsgReentry;
                    };
                    grpcReceiveRequest(value: any): {
                        typeUrl: string;
                        value: _153.MsgGrpcReceiveRequest;
                    };
                    p2PReceiveMessage(value: any): {
                        typeUrl: string;
                        value: _153.MsgP2PReceiveMessageRequest;
                    };
                    executeAtomicTx(value: any): {
                        typeUrl: string;
                        value: _149.MsgExecuteAtomicTxRequest;
                    };
                    executeCrossChainTx(value: any): {
                        typeUrl: string;
                        value: _153.MsgExecuteCrossChainCallRequest;
                    };
                };
                fromPartial: {
                    grpcSendRequest(value: _153.MsgGrpcSendRequest): {
                        typeUrl: string;
                        value: _153.MsgGrpcSendRequest;
                    };
                    startTimeout(value: _153.MsgStartTimeoutRequest): {
                        typeUrl: string;
                        value: _153.MsgStartTimeoutRequest;
                    };
                    cancelTimeout(value: _153.MsgCancelTimeoutRequest): {
                        typeUrl: string;
                        value: _153.MsgCancelTimeoutRequest;
                    };
                    startBackgroundProcess(value: _153.MsgStartBackgroundProcessRequest): {
                        typeUrl: string;
                        value: _153.MsgStartBackgroundProcessRequest;
                    };
                    multiChainWrap(value: _153.MsgMultiChainWrap): {
                        typeUrl: string;
                        value: _153.MsgMultiChainWrap;
                    };
                    reentryWithGoRoutine(value: _153.MsgReentryWithGoRoutine): {
                        typeUrl: string;
                        value: _153.MsgReentryWithGoRoutine;
                    };
                    reentry(value: _153.MsgReentry): {
                        typeUrl: string;
                        value: _153.MsgReentry;
                    };
                    grpcReceiveRequest(value: _153.MsgGrpcReceiveRequest): {
                        typeUrl: string;
                        value: _153.MsgGrpcReceiveRequest;
                    };
                    p2PReceiveMessage(value: _153.MsgP2PReceiveMessageRequest): {
                        typeUrl: string;
                        value: _153.MsgP2PReceiveMessageRequest;
                    };
                    executeAtomicTx(value: _149.MsgExecuteAtomicTxRequest): {
                        typeUrl: string;
                        value: _149.MsgExecuteAtomicTxRequest;
                    };
                    executeCrossChainTx(value: _153.MsgExecuteCrossChainCallRequest): {
                        typeUrl: string;
                        value: _153.MsgExecuteCrossChainCallRequest;
                    };
                };
            };
            AminoConverter: {
                "/mythos.network.v1.MsgGrpcSendRequest": {
                    aminoType: string;
                    toAmino: ({ authority, sender, contract, ipAddress, data, encoding }: _153.MsgGrpcSendRequest) => {
                        authority: string;
                        sender: string;
                        contract: string;
                        ip_address: string;
                        data: Uint8Array;
                        encoding: string;
                    };
                    fromAmino: ({ authority, sender, contract, ip_address, data, encoding }: {
                        authority: string;
                        sender: string;
                        contract: string;
                        ip_address: string;
                        data: Uint8Array;
                        encoding: string;
                    }) => _153.MsgGrpcSendRequest;
                };
                "/mythos.network.v1.MsgStartTimeoutRequest": {
                    aminoType: string;
                    toAmino: ({ authority, sender, contract, delay, args, id }: _153.MsgStartTimeoutRequest) => {
                        authority: string;
                        sender: string;
                        contract: string;
                        delay: string;
                        args: Uint8Array;
                        id: string;
                    };
                    fromAmino: ({ authority, sender, contract, delay, args, id }: {
                        authority: string;
                        sender: string;
                        contract: string;
                        delay: string;
                        args: Uint8Array;
                        id: string;
                    }) => _153.MsgStartTimeoutRequest;
                };
                "/mythos.network.v1.MsgCancelTimeoutRequest": {
                    aminoType: string;
                    toAmino: ({ authority, sender, id }: _153.MsgCancelTimeoutRequest) => {
                        authority: string;
                        sender: string;
                        id: string;
                    };
                    fromAmino: ({ authority, sender, id }: {
                        authority: string;
                        sender: string;
                        id: string;
                    }) => _153.MsgCancelTimeoutRequest;
                };
                "/mythos.network.v1.MsgStartBackgroundProcessRequest": {
                    aminoType: string;
                    toAmino: ({ authority, sender, contract, args }: _153.MsgStartBackgroundProcessRequest) => {
                        authority: string;
                        sender: string;
                        contract: string;
                        args: Uint8Array;
                    };
                    fromAmino: ({ authority, sender, contract, args }: {
                        authority: string;
                        sender: string;
                        contract: string;
                        args: Uint8Array;
                    }) => _153.MsgStartBackgroundProcessRequest;
                };
                "/mythos.network.v1.MsgMultiChainWrap": {
                    aminoType: string;
                    toAmino: ({ multiChainId, sender, data }: _153.MsgMultiChainWrap) => {
                        multi_chain_id: string;
                        sender: string;
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ multi_chain_id, sender, data }: {
                        multi_chain_id: string;
                        sender: string;
                        data: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _153.MsgMultiChainWrap;
                };
                "/mythos.network.v1.MsgReentryWithGoRoutine": {
                    aminoType: string;
                    toAmino: ({ authority, sender, contract, entryPoint, msg }: _153.MsgReentryWithGoRoutine) => {
                        authority: string;
                        sender: string;
                        contract: string;
                        entry_point: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ authority, sender, contract, entry_point, msg }: {
                        authority: string;
                        sender: string;
                        contract: string;
                        entry_point: string;
                        msg: Uint8Array;
                    }) => _153.MsgReentryWithGoRoutine;
                };
                "/mythos.network.v1.MsgReentry": {
                    aminoType: string;
                    toAmino: ({ authority, sender, contract, entryPoint, msg }: _153.MsgReentry) => {
                        authority: string;
                        sender: string;
                        contract: string;
                        entry_point: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ authority, sender, contract, entry_point, msg }: {
                        authority: string;
                        sender: string;
                        contract: string;
                        entry_point: string;
                        msg: Uint8Array;
                    }) => _153.MsgReentry;
                };
                "/mythos.network.v1.MsgGrpcReceiveRequest": {
                    aminoType: string;
                    toAmino: ({ authority, sender, contract, data, encoding }: _153.MsgGrpcReceiveRequest) => {
                        authority: string;
                        sender: string;
                        contract: string;
                        data: Uint8Array;
                        encoding: string;
                    };
                    fromAmino: ({ authority, sender, contract, data, encoding }: {
                        authority: string;
                        sender: string;
                        contract: string;
                        data: Uint8Array;
                        encoding: string;
                    }) => _153.MsgGrpcReceiveRequest;
                };
                "/mythos.network.v1.MsgP2PReceiveMessageRequest": {
                    aminoType: string;
                    toAmino: ({ authority, sender, contract, data }: _153.MsgP2PReceiveMessageRequest) => {
                        authority: string;
                        sender: string;
                        contract: string;
                        data: Uint8Array;
                    };
                    fromAmino: ({ authority, sender, contract, data }: {
                        authority: string;
                        sender: string;
                        contract: string;
                        data: Uint8Array;
                    }) => _153.MsgP2PReceiveMessageRequest;
                };
                "/mythos.network.v1.MsgExecuteAtomicTxRequest": {
                    aminoType: string;
                    toAmino: ({ txs, sender }: _149.MsgExecuteAtomicTxRequest) => {
                        txs: Uint8Array[];
                        sender: Uint8Array;
                    };
                    fromAmino: ({ txs, sender }: {
                        txs: Uint8Array[];
                        sender: Uint8Array;
                    }) => _149.MsgExecuteAtomicTxRequest;
                };
                "/mythos.network.v1.MsgExecuteCrossChainCallRequest": {
                    aminoType: string;
                    toAmino: ({ authority, sender, from, to, msg, funds, dependencies, fromChainId, toChainId, isQuery, timeoutMs }: _153.MsgExecuteCrossChainCallRequest) => {
                        authority: string;
                        sender: string;
                        from: string;
                        to: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        dependencies: string[];
                        from_chain_id: string;
                        to_chain_id: string;
                        is_query: boolean;
                        timeout_ms: string;
                    };
                    fromAmino: ({ authority, sender, from, to, msg, funds, dependencies, from_chain_id, to_chain_id, is_query, timeout_ms }: {
                        authority: string;
                        sender: string;
                        from: string;
                        to: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        dependencies: string[];
                        from_chain_id: string;
                        to_chain_id: string;
                        is_query: boolean;
                        timeout_ms: string;
                    }) => _153.MsgExecuteCrossChainCallRequest;
                };
            };
            MsgExecuteCrossChainCallRequestIndexed: {
                encode(message: _153.MsgExecuteCrossChainCallRequestIndexed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecuteCrossChainCallRequestIndexed;
                fromJSON(object: any): _153.MsgExecuteCrossChainCallRequestIndexed;
                toJSON(message: _153.MsgExecuteCrossChainCallRequestIndexed): unknown;
                fromPartial(object: Partial<_153.MsgExecuteCrossChainCallRequestIndexed>): _153.MsgExecuteCrossChainCallRequestIndexed;
            };
            MsgExecuteCrossChainCallResponseIndexed: {
                encode(message: _153.MsgExecuteCrossChainCallResponseIndexed, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecuteCrossChainCallResponseIndexed;
                fromJSON(object: any): _153.MsgExecuteCrossChainCallResponseIndexed;
                toJSON(message: _153.MsgExecuteCrossChainCallResponseIndexed): unknown;
                fromPartial(object: Partial<_153.MsgExecuteCrossChainCallResponseIndexed>): _153.MsgExecuteCrossChainCallResponseIndexed;
            };
            MsgExecuteCrossChainCallRequest: {
                encode(message: _153.MsgExecuteCrossChainCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecuteCrossChainCallRequest;
                fromJSON(object: any): _153.MsgExecuteCrossChainCallRequest;
                toJSON(message: _153.MsgExecuteCrossChainCallRequest): unknown;
                fromPartial(object: Partial<_153.MsgExecuteCrossChainCallRequest>): _153.MsgExecuteCrossChainCallRequest;
            };
            MsgExecuteCrossChainCallResponse: {
                encode(message: _153.MsgExecuteCrossChainCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecuteCrossChainCallResponse;
                fromJSON(object: any): _153.MsgExecuteCrossChainCallResponse;
                toJSON(message: _153.MsgExecuteCrossChainCallResponse): unknown;
                fromPartial(object: Partial<_153.MsgExecuteCrossChainCallResponse>): _153.MsgExecuteCrossChainCallResponse;
            };
            MsgExecuteAtomicTxResponse: {
                encode(message: _153.MsgExecuteAtomicTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecuteAtomicTxResponse;
                fromJSON(object: any): _153.MsgExecuteAtomicTxResponse;
                toJSON(message: _153.MsgExecuteAtomicTxResponse): unknown;
                fromPartial(object: Partial<_153.MsgExecuteAtomicTxResponse>): _153.MsgExecuteAtomicTxResponse;
            };
            MsgMultiChainWrap: {
                encode(message: _153.MsgMultiChainWrap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgMultiChainWrap;
                fromJSON(object: any): _153.MsgMultiChainWrap;
                toJSON(message: _153.MsgMultiChainWrap): unknown;
                fromPartial(object: Partial<_153.MsgMultiChainWrap>): _153.MsgMultiChainWrap;
            };
            MsgMultiChainWrapResponse: {
                encode(message: _153.MsgMultiChainWrapResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgMultiChainWrapResponse;
                fromJSON(object: any): _153.MsgMultiChainWrapResponse;
                toJSON(message: _153.MsgMultiChainWrapResponse): unknown;
                fromPartial(object: Partial<_153.MsgMultiChainWrapResponse>): _153.MsgMultiChainWrapResponse;
            };
            MsgGrpcSendRequest: {
                encode(message: _153.MsgGrpcSendRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgGrpcSendRequest;
                fromJSON(object: any): _153.MsgGrpcSendRequest;
                toJSON(message: _153.MsgGrpcSendRequest): unknown;
                fromPartial(object: Partial<_153.MsgGrpcSendRequest>): _153.MsgGrpcSendRequest;
            };
            MsgGrpcSendRequestResponse: {
                encode(message: _153.MsgGrpcSendRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgGrpcSendRequestResponse;
                fromJSON(object: any): _153.MsgGrpcSendRequestResponse;
                toJSON(message: _153.MsgGrpcSendRequestResponse): unknown;
                fromPartial(object: Partial<_153.MsgGrpcSendRequestResponse>): _153.MsgGrpcSendRequestResponse;
            };
            MsgGrpcReceiveRequest: {
                encode(message: _153.MsgGrpcReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgGrpcReceiveRequest;
                fromJSON(object: any): _153.MsgGrpcReceiveRequest;
                toJSON(message: _153.MsgGrpcReceiveRequest): unknown;
                fromPartial(object: Partial<_153.MsgGrpcReceiveRequest>): _153.MsgGrpcReceiveRequest;
            };
            MsgGrpcReceiveRequestResponse: {
                encode(message: _153.MsgGrpcReceiveRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgGrpcReceiveRequestResponse;
                fromJSON(object: any): _153.MsgGrpcReceiveRequestResponse;
                toJSON(message: _153.MsgGrpcReceiveRequestResponse): unknown;
                fromPartial(object: Partial<_153.MsgGrpcReceiveRequestResponse>): _153.MsgGrpcReceiveRequestResponse;
            };
            MsgStartTimeoutRequest: {
                encode(message: _153.MsgStartTimeoutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgStartTimeoutRequest;
                fromJSON(object: any): _153.MsgStartTimeoutRequest;
                toJSON(message: _153.MsgStartTimeoutRequest): unknown;
                fromPartial(object: Partial<_153.MsgStartTimeoutRequest>): _153.MsgStartTimeoutRequest;
            };
            MsgStartTimeoutResponse: {
                encode(_: _153.MsgStartTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgStartTimeoutResponse;
                fromJSON(_: any): _153.MsgStartTimeoutResponse;
                toJSON(_: _153.MsgStartTimeoutResponse): unknown;
                fromPartial(_: Partial<_153.MsgStartTimeoutResponse>): _153.MsgStartTimeoutResponse;
            };
            MsgCancelTimeoutRequest: {
                encode(message: _153.MsgCancelTimeoutRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelTimeoutRequest;
                fromJSON(object: any): _153.MsgCancelTimeoutRequest;
                toJSON(message: _153.MsgCancelTimeoutRequest): unknown;
                fromPartial(object: Partial<_153.MsgCancelTimeoutRequest>): _153.MsgCancelTimeoutRequest;
            };
            MsgCancelTimeoutResponse: {
                encode(_: _153.MsgCancelTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelTimeoutResponse;
                fromJSON(_: any): _153.MsgCancelTimeoutResponse;
                toJSON(_: _153.MsgCancelTimeoutResponse): unknown;
                fromPartial(_: Partial<_153.MsgCancelTimeoutResponse>): _153.MsgCancelTimeoutResponse;
            };
            MsgStartBackgroundProcessRequest: {
                encode(message: _153.MsgStartBackgroundProcessRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgStartBackgroundProcessRequest;
                fromJSON(object: any): _153.MsgStartBackgroundProcessRequest;
                toJSON(message: _153.MsgStartBackgroundProcessRequest): unknown;
                fromPartial(object: Partial<_153.MsgStartBackgroundProcessRequest>): _153.MsgStartBackgroundProcessRequest;
            };
            MsgStartBackgroundProcessResponse: {
                encode(_: _153.MsgStartBackgroundProcessResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgStartBackgroundProcessResponse;
                fromJSON(_: any): _153.MsgStartBackgroundProcessResponse;
                toJSON(_: _153.MsgStartBackgroundProcessResponse): unknown;
                fromPartial(_: Partial<_153.MsgStartBackgroundProcessResponse>): _153.MsgStartBackgroundProcessResponse;
            };
            MsgExecuteContract: {
                encode(message: _153.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecuteContract;
                fromJSON(object: any): _153.MsgExecuteContract;
                toJSON(message: _153.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_153.MsgExecuteContract>): _153.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _153.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgExecuteContractResponse;
                fromJSON(object: any): _153.MsgExecuteContractResponse;
                toJSON(message: _153.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_153.MsgExecuteContractResponse>): _153.MsgExecuteContractResponse;
            };
            MsgReentry: {
                encode(message: _153.MsgReentry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgReentry;
                fromJSON(object: any): _153.MsgReentry;
                toJSON(message: _153.MsgReentry): unknown;
                fromPartial(object: Partial<_153.MsgReentry>): _153.MsgReentry;
            };
            MsgReentryResponse: {
                encode(message: _153.MsgReentryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgReentryResponse;
                fromJSON(object: any): _153.MsgReentryResponse;
                toJSON(message: _153.MsgReentryResponse): unknown;
                fromPartial(object: Partial<_153.MsgReentryResponse>): _153.MsgReentryResponse;
            };
            MsgReentryWithGoRoutine: {
                encode(message: _153.MsgReentryWithGoRoutine, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgReentryWithGoRoutine;
                fromJSON(object: any): _153.MsgReentryWithGoRoutine;
                toJSON(message: _153.MsgReentryWithGoRoutine): unknown;
                fromPartial(object: Partial<_153.MsgReentryWithGoRoutine>): _153.MsgReentryWithGoRoutine;
            };
            MsgReentryWithGoRoutineResponse: {
                encode(message: _153.MsgReentryWithGoRoutineResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgReentryWithGoRoutineResponse;
                fromJSON(object: any): _153.MsgReentryWithGoRoutineResponse;
                toJSON(message: _153.MsgReentryWithGoRoutineResponse): unknown;
                fromPartial(object: Partial<_153.MsgReentryWithGoRoutineResponse>): _153.MsgReentryWithGoRoutineResponse;
            };
            MsgQueryContract: {
                encode(message: _153.MsgQueryContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgQueryContract;
                fromJSON(object: any): _153.MsgQueryContract;
                toJSON(message: _153.MsgQueryContract): unknown;
                fromPartial(object: Partial<_153.MsgQueryContract>): _153.MsgQueryContract;
            };
            MsgQueryContractResponse: {
                encode(message: _153.MsgQueryContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgQueryContractResponse;
                fromJSON(object: any): _153.MsgQueryContractResponse;
                toJSON(message: _153.MsgQueryContractResponse): unknown;
                fromPartial(object: Partial<_153.MsgQueryContractResponse>): _153.MsgQueryContractResponse;
            };
            MsgP2PReceiveMessageRequest: {
                encode(message: _153.MsgP2PReceiveMessageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgP2PReceiveMessageRequest;
                fromJSON(object: any): _153.MsgP2PReceiveMessageRequest;
                toJSON(message: _153.MsgP2PReceiveMessageRequest): unknown;
                fromPartial(object: Partial<_153.MsgP2PReceiveMessageRequest>): _153.MsgP2PReceiveMessageRequest;
            };
            MsgP2PReceiveMessageResponse: {
                encode(_: _153.MsgP2PReceiveMessageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgP2PReceiveMessageResponse;
                fromJSON(_: any): _153.MsgP2PReceiveMessageResponse;
                toJSON(_: _153.MsgP2PReceiveMessageResponse): unknown;
                fromPartial(_: Partial<_153.MsgP2PReceiveMessageResponse>): _153.MsgP2PReceiveMessageResponse;
            };
            ExtensionOptionMultiChainTx: {
                encode(message: _153.ExtensionOptionMultiChainTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ExtensionOptionMultiChainTx;
                fromJSON(object: any): _153.ExtensionOptionMultiChainTx;
                toJSON(message: _153.ExtensionOptionMultiChainTx): unknown;
                fromPartial(object: Partial<_153.ExtensionOptionMultiChainTx>): _153.ExtensionOptionMultiChainTx;
            };
            ExtensionOptionAtomicMultiChainTx: {
                encode(message: _153.ExtensionOptionAtomicMultiChainTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.ExtensionOptionAtomicMultiChainTx;
                fromJSON(object: any): _153.ExtensionOptionAtomicMultiChainTx;
                toJSON(message: _153.ExtensionOptionAtomicMultiChainTx): unknown;
                fromPartial(object: Partial<_153.ExtensionOptionAtomicMultiChainTx>): _153.ExtensionOptionAtomicMultiChainTx;
            };
            WrappedResponse: {
                encode(message: _153.WrappedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.WrappedResponse;
                fromJSON(object: any): _153.WrappedResponse;
                toJSON(message: _153.WrappedResponse): unknown;
                fromPartial(object: Partial<_153.WrappedResponse>): _153.WrappedResponse;
            };
            CrossChainCallInfo: {
                encode(message: _153.CrossChainCallInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.CrossChainCallInfo;
                fromJSON(object: any): _153.CrossChainCallInfo;
                toJSON(message: _153.CrossChainCallInfo): unknown;
                fromPartial(object: Partial<_153.CrossChainCallInfo>): _153.CrossChainCallInfo;
            };
            SubTxCrossChainCallInfo: {
                encode(message: _153.SubTxCrossChainCallInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.SubTxCrossChainCallInfo;
                fromJSON(object: any): _153.SubTxCrossChainCallInfo;
                toJSON(message: _153.SubTxCrossChainCallInfo): unknown;
                fromPartial(object: Partial<_153.SubTxCrossChainCallInfo>): _153.SubTxCrossChainCallInfo;
            };
            AtomicTxCrossChainCallInfo: {
                encode(message: _153.AtomicTxCrossChainCallInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.AtomicTxCrossChainCallInfo;
                fromJSON(object: any): _153.AtomicTxCrossChainCallInfo;
                toJSON(message: _153.AtomicTxCrossChainCallInfo): unknown;
                fromPartial(object: Partial<_153.AtomicTxCrossChainCallInfo>): _153.AtomicTxCrossChainCallInfo;
            };
            RequestPing: {
                encode(_: _152.RequestPing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RequestPing;
                fromJSON(_: any): _152.RequestPing;
                toJSON(_: _152.RequestPing): unknown;
                fromPartial(_: Partial<_152.RequestPing>): _152.RequestPing;
            };
            RequestBroadcastTx: {
                encode(message: _152.RequestBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RequestBroadcastTx;
                fromJSON(object: any): _152.RequestBroadcastTx;
                toJSON(message: _152.RequestBroadcastTx): unknown;
                fromPartial(object: Partial<_152.RequestBroadcastTx>): _152.RequestBroadcastTx;
            };
            ResponsePing: {
                encode(_: _152.ResponsePing, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ResponsePing;
                fromJSON(_: any): _152.ResponsePing;
                toJSON(_: _152.ResponsePing): unknown;
                fromPartial(_: Partial<_152.ResponsePing>): _152.ResponsePing;
            };
            ResponseBroadcastTx: {
                encode(message: _152.ResponseBroadcastTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ResponseBroadcastTx;
                fromJSON(object: any): _152.ResponseBroadcastTx;
                toJSON(message: _152.ResponseBroadcastTx): unknown;
                fromPartial(object: Partial<_152.ResponseBroadcastTx>): _152.ResponseBroadcastTx;
            };
            ResponseCheckTx: {
                encode(message: _152.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ResponseCheckTx;
                fromJSON(object: any): _152.ResponseCheckTx;
                toJSON(message: _152.ResponseCheckTx): unknown;
                fromPartial(object: Partial<_152.ResponseCheckTx>): _152.ResponseCheckTx;
            };
            ExecTxResult: {
                encode(message: _152.ExecTxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ExecTxResult;
                fromJSON(object: any): _152.ExecTxResult;
                toJSON(message: _152.ExecTxResult): unknown;
                fromPartial(object: Partial<_152.ExecTxResult>): _152.ExecTxResult;
            };
            Event: {
                encode(message: _152.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Event;
                fromJSON(object: any): _152.Event;
                toJSON(message: _152.Event): unknown;
                fromPartial(object: Partial<_152.Event>): _152.Event;
            };
            EventAttribute: {
                encode(message: _152.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.EventAttribute;
                fromJSON(object: any): _152.EventAttribute;
                toJSON(message: _152.EventAttribute): unknown;
                fromPartial(object: Partial<_152.EventAttribute>): _152.EventAttribute;
            };
            RequestProcessProposalWithMetaInfo_MetainfoEntry: {
                encode(message: _152.RequestProcessProposalWithMetaInfo_MetainfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RequestProcessProposalWithMetaInfo_MetainfoEntry;
                fromJSON(object: any): _152.RequestProcessProposalWithMetaInfo_MetainfoEntry;
                toJSON(message: _152.RequestProcessProposalWithMetaInfo_MetainfoEntry): unknown;
                fromPartial(object: Partial<_152.RequestProcessProposalWithMetaInfo_MetainfoEntry>): _152.RequestProcessProposalWithMetaInfo_MetainfoEntry;
            };
            RequestProcessProposalWithMetaInfo: {
                encode(message: _152.RequestProcessProposalWithMetaInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.RequestProcessProposalWithMetaInfo;
                fromJSON(object: any): _152.RequestProcessProposalWithMetaInfo;
                toJSON(message: _152.RequestProcessProposalWithMetaInfo): unknown;
                fromPartial(object: Partial<_152.RequestProcessProposalWithMetaInfo>): _152.RequestProcessProposalWithMetaInfo;
            };
            TendermintValidator: {
                encode(message: _152.TendermintValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.TendermintValidator;
                fromJSON(object: any): _152.TendermintValidator;
                toJSON(message: _152.TendermintValidator): unknown;
                fromPartial(object: Partial<_152.TendermintValidator>): _152.TendermintValidator;
            };
            TendermintValidators: {
                encode(message: _152.TendermintValidators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.TendermintValidators;
                fromJSON(object: any): _152.TendermintValidators;
                toJSON(message: _152.TendermintValidators): unknown;
                fromPartial(object: Partial<_152.TendermintValidators>): _152.TendermintValidators;
            };
            ValidatorSet: {
                encode(message: _152.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ValidatorSet;
                fromJSON(object: any): _152.ValidatorSet;
                toJSON(message: _152.ValidatorSet): unknown;
                fromPartial(object: Partial<_152.ValidatorSet>): _152.ValidatorSet;
            };
            QueryMultiChainRequest: {
                encode(message: _151.QueryMultiChainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryMultiChainRequest;
                fromJSON(object: any): _151.QueryMultiChainRequest;
                toJSON(message: _151.QueryMultiChainRequest): unknown;
                fromPartial(object: Partial<_151.QueryMultiChainRequest>): _151.QueryMultiChainRequest;
            };
            QueryMultiChainResponse: {
                encode(message: _151.QueryMultiChainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryMultiChainResponse;
                fromJSON(object: any): _151.QueryMultiChainResponse;
                toJSON(message: _151.QueryMultiChainResponse): unknown;
                fromPartial(object: Partial<_151.QueryMultiChainResponse>): _151.QueryMultiChainResponse;
            };
            QueryContractCallRequest: {
                encode(message: _151.QueryContractCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryContractCallRequest;
                fromJSON(object: any): _151.QueryContractCallRequest;
                toJSON(message: _151.QueryContractCallRequest): unknown;
                fromPartial(object: Partial<_151.QueryContractCallRequest>): _151.QueryContractCallRequest;
            };
            QueryContractCallResponse: {
                encode(message: _151.QueryContractCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.QueryContractCallResponse;
                fromJSON(object: any): _151.QueryContractCallResponse;
                toJSON(message: _151.QueryContractCallResponse): unknown;
                fromPartial(object: Partial<_151.QueryContractCallResponse>): _151.QueryContractCallResponse;
            };
            GenesisState: {
                encode(_: _150.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GenesisState;
                fromJSON(_: any): _150.GenesisState;
                toJSON(_: _150.GenesisState): unknown;
                fromPartial(_: Partial<_150.GenesisState>): _150.GenesisState;
            };
            MsgExecuteAtomicTxRequest: {
                encode(message: _149.MsgExecuteAtomicTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgExecuteAtomicTxRequest;
                fromJSON(object: any): _149.MsgExecuteAtomicTxRequest;
                toJSON(message: _149.MsgExecuteAtomicTxRequest): unknown;
                fromPartial(object: Partial<_149.MsgExecuteAtomicTxRequest>): _149.MsgExecuteAtomicTxRequest;
            };
        };
    }
    namespace wasmx {
        const v1: {
            MsgClientImpl: typeof _263.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _158.QueryContractInfoRequest): Promise<_158.QueryContractInfoResponse>;
                contractsByCode(request: _158.QueryContractsByCodeRequest): Promise<_158.QueryContractsByCodeResponse>;
                allContractState(request: _158.QueryAllContractStateRequest): Promise<_158.QueryAllContractStateResponse>;
                rawContractState(request: _158.QueryRawContractStateRequest): Promise<_158.QueryRawContractStateResponse>;
                smartContractCall(request: _158.QuerySmartContractCallRequest): Promise<_158.QuerySmartContractCallResponse>;
                callEth(request: _158.QueryCallEthRequest): Promise<_158.QueryCallEthResponse>;
                debugContractCall(request: _158.QueryDebugContractCallRequest): Promise<_158.QueryDebugContractCallResponse>;
                code(request: _158.QueryCodeRequest): Promise<_158.QueryCodeResponse>;
                codeInfo(request: _158.QueryCodeInfoRequest): Promise<_158.QueryCodeInfoResponse>;
                codes(request?: _158.QueryCodesRequest): Promise<_158.QueryCodesResponse>;
                params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                contractsByCreator(request: _158.QueryContractsByCreatorRequest): Promise<_158.QueryContractsByCreatorResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _160.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deployCode(value: _160.MsgDeployCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _160.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _160.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _160.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    compileContract(value: _160.MsgCompileContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeEth(value: _160.MsgExecuteEth): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeWithOriginContract(value: _160.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeDelegateContract(value: _160.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _160.MsgStoreCode): {
                        typeUrl: string;
                        value: _160.MsgStoreCode;
                    };
                    deployCode(value: _160.MsgDeployCode): {
                        typeUrl: string;
                        value: _160.MsgDeployCode;
                    };
                    instantiateContract(value: _160.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _160.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _160.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _160.MsgInstantiateContract2;
                    };
                    executeContract(value: _160.MsgExecuteContract): {
                        typeUrl: string;
                        value: _160.MsgExecuteContract;
                    };
                    compileContract(value: _160.MsgCompileContract): {
                        typeUrl: string;
                        value: _160.MsgCompileContract;
                    };
                    executeEth(value: _160.MsgExecuteEth): {
                        typeUrl: string;
                        value: _160.MsgExecuteEth;
                    };
                    executeWithOriginContract(value: _160.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: _160.MsgExecuteWithOriginContract;
                    };
                    executeDelegateContract(value: _160.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: _160.MsgExecuteDelegateContract;
                    };
                };
                toJSON: {
                    storeCode(value: _160.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deployCode(value: _160.MsgDeployCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _160.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _160.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _160.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    compileContract(value: _160.MsgCompileContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeEth(value: _160.MsgExecuteEth): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeWithOriginContract(value: _160.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeDelegateContract(value: _160.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _160.MsgStoreCode;
                    };
                    deployCode(value: any): {
                        typeUrl: string;
                        value: _160.MsgDeployCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _160.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _160.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _160.MsgExecuteContract;
                    };
                    compileContract(value: any): {
                        typeUrl: string;
                        value: _160.MsgCompileContract;
                    };
                    executeEth(value: any): {
                        typeUrl: string;
                        value: _160.MsgExecuteEth;
                    };
                    executeWithOriginContract(value: any): {
                        typeUrl: string;
                        value: _160.MsgExecuteWithOriginContract;
                    };
                    executeDelegateContract(value: any): {
                        typeUrl: string;
                        value: _160.MsgExecuteDelegateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _160.MsgStoreCode): {
                        typeUrl: string;
                        value: _160.MsgStoreCode;
                    };
                    deployCode(value: _160.MsgDeployCode): {
                        typeUrl: string;
                        value: _160.MsgDeployCode;
                    };
                    instantiateContract(value: _160.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _160.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _160.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _160.MsgInstantiateContract2;
                    };
                    executeContract(value: _160.MsgExecuteContract): {
                        typeUrl: string;
                        value: _160.MsgExecuteContract;
                    };
                    compileContract(value: _160.MsgCompileContract): {
                        typeUrl: string;
                        value: _160.MsgCompileContract;
                    };
                    executeEth(value: _160.MsgExecuteEth): {
                        typeUrl: string;
                        value: _160.MsgExecuteEth;
                    };
                    executeWithOriginContract(value: _160.MsgExecuteWithOriginContract): {
                        typeUrl: string;
                        value: _160.MsgExecuteWithOriginContract;
                    };
                    executeDelegateContract(value: _160.MsgExecuteDelegateContract): {
                        typeUrl: string;
                        value: _160.MsgExecuteDelegateContract;
                    };
                };
            };
            AminoConverter: {
                "/mythos.wasmx.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, byteCode, deps, metadata, source }: _160.MsgStoreCode) => {
                        sender: string;
                        byte_code: Uint8Array;
                        deps: string[];
                        metadata: {
                            name: string;
                            categ: string[];
                            icon: string;
                            author: string;
                            site: string;
                            abi: Uint8Array;
                            json_schema: string;
                            origin: {
                                chain_id: string;
                                address: string;
                            };
                        };
                        source: Uint8Array;
                    };
                    fromAmino: ({ sender, byte_code, deps, metadata, source }: {
                        sender: string;
                        byte_code: Uint8Array;
                        deps: string[];
                        metadata: {
                            name: string;
                            categ: string[];
                            icon: string;
                            author: string;
                            site: string;
                            abi: Uint8Array;
                            json_schema: string;
                            origin: {
                                chain_id: string;
                                address: string;
                            };
                        };
                        source: Uint8Array;
                    }) => _160.MsgStoreCode;
                };
                "/mythos.wasmx.v1.MsgDeployCode": {
                    aminoType: string;
                    toAmino: ({ sender, byteCode, deps, metadata, msg, funds, label, source }: _160.MsgDeployCode) => {
                        sender: string;
                        byte_code: Uint8Array;
                        deps: string[];
                        metadata: {
                            name: string;
                            categ: string[];
                            icon: string;
                            author: string;
                            site: string;
                            abi: Uint8Array;
                            json_schema: string;
                            origin: {
                                chain_id: string;
                                address: string;
                            };
                        };
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        label: string;
                        source: Uint8Array;
                    };
                    fromAmino: ({ sender, byte_code, deps, metadata, msg, funds, label, source }: {
                        sender: string;
                        byte_code: Uint8Array;
                        deps: string[];
                        metadata: {
                            name: string;
                            categ: string[];
                            icon: string;
                            author: string;
                            site: string;
                            abi: Uint8Array;
                            json_schema: string;
                            origin: {
                                chain_id: string;
                                address: string;
                            };
                        };
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        label: string;
                        source: Uint8Array;
                    }) => _160.MsgDeployCode;
                };
                "/mythos.wasmx.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, msg, funds, label }: _160.MsgInstantiateContract) => {
                        sender: string;
                        code_id: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        label: string;
                    };
                    fromAmino: ({ sender, code_id, msg, funds, label }: {
                        sender: string;
                        code_id: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        label: string;
                    }) => _160.MsgInstantiateContract;
                };
                "/mythos.wasmx.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, codeId, msg, funds, label, salt, fixMsg }: _160.MsgInstantiateContract2) => {
                        sender: string;
                        code_id: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        label: string;
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, code_id, msg, funds, label, salt, fix_msg }: {
                        sender: string;
                        code_id: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        label: string;
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _160.MsgInstantiateContract2;
                };
                "/mythos.wasmx.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds, dependencies }: _160.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        dependencies: string[];
                    };
                    fromAmino: ({ sender, contract, msg, funds, dependencies }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        dependencies: string[];
                    }) => _160.MsgExecuteContract;
                };
                "/mythos.wasmx.v1.MsgCompileContract": {
                    aminoType: string;
                    toAmino: ({ authority, codeId, meteringOff }: _160.MsgCompileContract) => {
                        authority: string;
                        codeId: string;
                        metering_off: boolean;
                    };
                    fromAmino: ({ authority, codeId, metering_off }: {
                        authority: string;
                        codeId: string;
                        metering_off: boolean;
                    }) => _160.MsgCompileContract;
                };
                "/mythos.wasmx.v1.MsgExecuteEth": {
                    aminoType: string;
                    toAmino: ({ data, sender }: _160.MsgExecuteEth) => {
                        data: Uint8Array;
                        sender: string;
                    };
                    fromAmino: ({ data, sender }: {
                        data: Uint8Array;
                        sender: string;
                    }) => _160.MsgExecuteEth;
                };
                "/mythos.wasmx.v1.MsgExecuteWithOriginContract": {
                    aminoType: string;
                    toAmino: ({ origin, sender, contract, msg, funds }: _160.MsgExecuteWithOriginContract) => {
                        origin: string;
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ origin, sender, contract, msg, funds }: {
                        origin: string;
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _160.MsgExecuteWithOriginContract;
                };
                "/mythos.wasmx.v1.MsgExecuteDelegateContract": {
                    aminoType: string;
                    toAmino: ({ origin, sender, caller, codeContract, storageContract, msg, funds }: _160.MsgExecuteDelegateContract) => {
                        origin: string;
                        sender: string;
                        caller: string;
                        code_contract: string;
                        storage_contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ origin, sender, caller, code_contract, storage_contract, msg, funds }: {
                        origin: string;
                        sender: string;
                        caller: string;
                        code_contract: string;
                        storage_contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _160.MsgExecuteDelegateContract;
                };
            };
            MsgStoreCode: {
                encode(message: _160.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgStoreCode;
                fromJSON(object: any): _160.MsgStoreCode;
                toJSON(message: _160.MsgStoreCode): unknown;
                fromPartial(object: Partial<_160.MsgStoreCode>): _160.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _160.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgStoreCodeResponse;
                fromJSON(object: any): _160.MsgStoreCodeResponse;
                toJSON(message: _160.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_160.MsgStoreCodeResponse>): _160.MsgStoreCodeResponse;
            };
            MsgDeployCode: {
                encode(message: _160.MsgDeployCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgDeployCode;
                fromJSON(object: any): _160.MsgDeployCode;
                toJSON(message: _160.MsgDeployCode): unknown;
                fromPartial(object: Partial<_160.MsgDeployCode>): _160.MsgDeployCode;
            };
            MsgDeployCodeResponse: {
                encode(message: _160.MsgDeployCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgDeployCodeResponse;
                fromJSON(object: any): _160.MsgDeployCodeResponse;
                toJSON(message: _160.MsgDeployCodeResponse): unknown;
                fromPartial(object: Partial<_160.MsgDeployCodeResponse>): _160.MsgDeployCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _160.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgInstantiateContract;
                fromJSON(object: any): _160.MsgInstantiateContract;
                toJSON(message: _160.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_160.MsgInstantiateContract>): _160.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _160.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgInstantiateContract2;
                fromJSON(object: any): _160.MsgInstantiateContract2;
                toJSON(message: _160.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_160.MsgInstantiateContract2>): _160.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _160.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgInstantiateContractResponse;
                fromJSON(object: any): _160.MsgInstantiateContractResponse;
                toJSON(message: _160.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_160.MsgInstantiateContractResponse>): _160.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _160.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgInstantiateContract2Response;
                fromJSON(object: any): _160.MsgInstantiateContract2Response;
                toJSON(message: _160.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_160.MsgInstantiateContract2Response>): _160.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _160.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgExecuteContract;
                fromJSON(object: any): _160.MsgExecuteContract;
                toJSON(message: _160.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_160.MsgExecuteContract>): _160.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _160.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgExecuteContractResponse;
                fromJSON(object: any): _160.MsgExecuteContractResponse;
                toJSON(message: _160.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_160.MsgExecuteContractResponse>): _160.MsgExecuteContractResponse;
            };
            MsgExecuteEth: {
                encode(message: _160.MsgExecuteEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgExecuteEth;
                fromJSON(object: any): _160.MsgExecuteEth;
                toJSON(message: _160.MsgExecuteEth): unknown;
                fromPartial(object: Partial<_160.MsgExecuteEth>): _160.MsgExecuteEth;
            };
            MsgExecuteEthResponse: {
                encode(message: _160.MsgExecuteEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgExecuteEthResponse;
                fromJSON(object: any): _160.MsgExecuteEthResponse;
                toJSON(message: _160.MsgExecuteEthResponse): unknown;
                fromPartial(object: Partial<_160.MsgExecuteEthResponse>): _160.MsgExecuteEthResponse;
            };
            ExtensionOptionEthereumTx: {
                encode(_: _160.ExtensionOptionEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ExtensionOptionEthereumTx;
                fromJSON(_: any): _160.ExtensionOptionEthereumTx;
                toJSON(_: _160.ExtensionOptionEthereumTx): unknown;
                fromPartial(_: Partial<_160.ExtensionOptionEthereumTx>): _160.ExtensionOptionEthereumTx;
            };
            MsgExecuteWithOriginContract: {
                encode(message: _160.MsgExecuteWithOriginContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgExecuteWithOriginContract;
                fromJSON(object: any): _160.MsgExecuteWithOriginContract;
                toJSON(message: _160.MsgExecuteWithOriginContract): unknown;
                fromPartial(object: Partial<_160.MsgExecuteWithOriginContract>): _160.MsgExecuteWithOriginContract;
            };
            MsgExecuteDelegateContract: {
                encode(message: _160.MsgExecuteDelegateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgExecuteDelegateContract;
                fromJSON(object: any): _160.MsgExecuteDelegateContract;
                toJSON(message: _160.MsgExecuteDelegateContract): unknown;
                fromPartial(object: Partial<_160.MsgExecuteDelegateContract>): _160.MsgExecuteDelegateContract;
            };
            MsgExecuteDelegateContractResponse: {
                encode(message: _160.MsgExecuteDelegateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgExecuteDelegateContractResponse;
                fromJSON(object: any): _160.MsgExecuteDelegateContractResponse;
                toJSON(message: _160.MsgExecuteDelegateContractResponse): unknown;
                fromPartial(object: Partial<_160.MsgExecuteDelegateContractResponse>): _160.MsgExecuteDelegateContractResponse;
            };
            MsgCompileContract: {
                encode(message: _160.MsgCompileContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCompileContract;
                fromJSON(object: any): _160.MsgCompileContract;
                toJSON(message: _160.MsgCompileContract): unknown;
                fromPartial(object: Partial<_160.MsgCompileContract>): _160.MsgCompileContract;
            };
            MsgCompileContractResponse: {
                encode(_: _160.MsgCompileContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MsgCompileContractResponse;
                fromJSON(_: any): _160.MsgCompileContractResponse;
                toJSON(_: _160.MsgCompileContractResponse): unknown;
                fromPartial(_: Partial<_160.MsgCompileContractResponse>): _160.MsgCompileContractResponse;
            };
            roleChangedActionTypeFromJSON(object: any): _159.RoleChangedActionType;
            roleChangedActionTypeToJSON(object: _159.RoleChangedActionType): string;
            RoleChangedActionType: typeof _159.RoleChangedActionType;
            RoleChangedActionTypeSDKType: typeof _159.RoleChangedActionTypeSDKType;
            RoleChanged: {
                encode(message: _159.RoleChanged, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.RoleChanged;
                fromJSON(object: any): _159.RoleChanged;
                toJSON(message: _159.RoleChanged): unknown;
                fromPartial(object: Partial<_159.RoleChanged>): _159.RoleChanged;
            };
            Role: {
                encode(message: _159.Role, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Role;
                fromJSON(object: any): _159.Role;
                toJSON(message: _159.Role): unknown;
                fromPartial(object: Partial<_159.Role>): _159.Role;
            };
            SystemContractRole: {
                encode(message: _159.SystemContractRole, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SystemContractRole;
                fromJSON(object: any): _159.SystemContractRole;
                toJSON(message: _159.SystemContractRole): unknown;
                fromPartial(object: Partial<_159.SystemContractRole>): _159.SystemContractRole;
            };
            SystemBootstrapData: {
                encode(message: _159.SystemBootstrapData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SystemBootstrapData;
                fromJSON(object: any): _159.SystemBootstrapData;
                toJSON(message: _159.SystemBootstrapData): unknown;
                fromPartial(object: Partial<_159.SystemBootstrapData>): _159.SystemBootstrapData;
            };
            QueryContractInfoRequest: {
                encode(message: _158.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryContractInfoRequest;
                fromJSON(object: any): _158.QueryContractInfoRequest;
                toJSON(message: _158.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_158.QueryContractInfoRequest>): _158.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _158.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryContractInfoResponse;
                fromJSON(object: any): _158.QueryContractInfoResponse;
                toJSON(message: _158.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_158.QueryContractInfoResponse>): _158.QueryContractInfoResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _158.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryContractsByCodeRequest;
                fromJSON(object: any): _158.QueryContractsByCodeRequest;
                toJSON(message: _158.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_158.QueryContractsByCodeRequest>): _158.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _158.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryContractsByCodeResponse;
                fromJSON(object: any): _158.QueryContractsByCodeResponse;
                toJSON(message: _158.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_158.QueryContractsByCodeResponse>): _158.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _158.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryAllContractStateRequest;
                fromJSON(object: any): _158.QueryAllContractStateRequest;
                toJSON(message: _158.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_158.QueryAllContractStateRequest>): _158.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _158.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryAllContractStateResponse;
                fromJSON(object: any): _158.QueryAllContractStateResponse;
                toJSON(message: _158.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_158.QueryAllContractStateResponse>): _158.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _158.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryRawContractStateRequest;
                fromJSON(object: any): _158.QueryRawContractStateRequest;
                toJSON(message: _158.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_158.QueryRawContractStateRequest>): _158.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _158.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryRawContractStateResponse;
                fromJSON(object: any): _158.QueryRawContractStateResponse;
                toJSON(message: _158.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_158.QueryRawContractStateResponse>): _158.QueryRawContractStateResponse;
            };
            QuerySmartContractCallRequest: {
                encode(message: _158.QuerySmartContractCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySmartContractCallRequest;
                fromJSON(object: any): _158.QuerySmartContractCallRequest;
                toJSON(message: _158.QuerySmartContractCallRequest): unknown;
                fromPartial(object: Partial<_158.QuerySmartContractCallRequest>): _158.QuerySmartContractCallRequest;
            };
            QuerySmartContractCallResponse: {
                encode(message: _158.QuerySmartContractCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QuerySmartContractCallResponse;
                fromJSON(object: any): _158.QuerySmartContractCallResponse;
                toJSON(message: _158.QuerySmartContractCallResponse): unknown;
                fromPartial(object: Partial<_158.QuerySmartContractCallResponse>): _158.QuerySmartContractCallResponse;
            };
            QueryCallEthRequest: {
                encode(message: _158.QueryCallEthRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCallEthRequest;
                fromJSON(object: any): _158.QueryCallEthRequest;
                toJSON(message: _158.QueryCallEthRequest): unknown;
                fromPartial(object: Partial<_158.QueryCallEthRequest>): _158.QueryCallEthRequest;
            };
            QueryCallEthResponse: {
                encode(message: _158.QueryCallEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCallEthResponse;
                fromJSON(object: any): _158.QueryCallEthResponse;
                toJSON(message: _158.QueryCallEthResponse): unknown;
                fromPartial(object: Partial<_158.QueryCallEthResponse>): _158.QueryCallEthResponse;
            };
            QueryDebugContractCallRequest: {
                encode(message: _158.QueryDebugContractCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDebugContractCallRequest;
                fromJSON(object: any): _158.QueryDebugContractCallRequest;
                toJSON(message: _158.QueryDebugContractCallRequest): unknown;
                fromPartial(object: Partial<_158.QueryDebugContractCallRequest>): _158.QueryDebugContractCallRequest;
            };
            QueryDebugContractCallResponse: {
                encode(message: _158.QueryDebugContractCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryDebugContractCallResponse;
                fromJSON(object: any): _158.QueryDebugContractCallResponse;
                toJSON(message: _158.QueryDebugContractCallResponse): unknown;
                fromPartial(object: Partial<_158.QueryDebugContractCallResponse>): _158.QueryDebugContractCallResponse;
            };
            QueryCodeRequest: {
                encode(message: _158.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCodeRequest;
                fromJSON(object: any): _158.QueryCodeRequest;
                toJSON(message: _158.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_158.QueryCodeRequest>): _158.QueryCodeRequest;
            };
            QueryCodeResponse: {
                encode(message: _158.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCodeResponse;
                fromJSON(object: any): _158.QueryCodeResponse;
                toJSON(message: _158.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_158.QueryCodeResponse>): _158.QueryCodeResponse;
            };
            QueryCodeInfoRequest: {
                encode(message: _158.QueryCodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCodeInfoRequest;
                fromJSON(object: any): _158.QueryCodeInfoRequest;
                toJSON(message: _158.QueryCodeInfoRequest): unknown;
                fromPartial(object: Partial<_158.QueryCodeInfoRequest>): _158.QueryCodeInfoRequest;
            };
            QueryCodeInfoResponse: {
                encode(message: _158.QueryCodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCodeInfoResponse;
                fromJSON(object: any): _158.QueryCodeInfoResponse;
                toJSON(message: _158.QueryCodeInfoResponse): unknown;
                fromPartial(object: Partial<_158.QueryCodeInfoResponse>): _158.QueryCodeInfoResponse;
            };
            QueryCodesRequest: {
                encode(message: _158.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCodesRequest;
                fromJSON(object: any): _158.QueryCodesRequest;
                toJSON(message: _158.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_158.QueryCodesRequest>): _158.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _158.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryCodesResponse;
                fromJSON(object: any): _158.QueryCodesResponse;
                toJSON(message: _158.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_158.QueryCodesResponse>): _158.QueryCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                fromJSON(_: any): _158.QueryParamsRequest;
                toJSON(_: _158.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_158.QueryParamsRequest>): _158.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                fromJSON(object: any): _158.QueryParamsResponse;
                toJSON(message: _158.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_158.QueryParamsResponse>): _158.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _158.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryContractsByCreatorRequest;
                fromJSON(object: any): _158.QueryContractsByCreatorRequest;
                toJSON(message: _158.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_158.QueryContractsByCreatorRequest>): _158.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _158.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryContractsByCreatorResponse;
                fromJSON(object: any): _158.QueryContractsByCreatorResponse;
                toJSON(message: _158.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_158.QueryContractsByCreatorResponse>): _158.QueryContractsByCreatorResponse;
            };
            Params: {
                encode(_: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                fromJSON(_: any): _157.Params;
                toJSON(_: _157.Params): unknown;
                fromPartial(_: Partial<_157.Params>): _157.Params;
            };
            GenesisState: {
                encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                fromJSON(object: any): _156.GenesisState;
                toJSON(message: _156.GenesisState): unknown;
                fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
            };
            SystemContract: {
                encode(message: _156.SystemContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.SystemContract;
                fromJSON(object: any): _156.SystemContract;
                toJSON(message: _156.SystemContract): unknown;
                fromPartial(object: Partial<_156.SystemContract>): _156.SystemContract;
            };
            Code: {
                encode(message: _156.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Code;
                fromJSON(object: any): _156.Code;
                toJSON(message: _156.Code): unknown;
                fromPartial(object: Partial<_156.Code>): _156.Code;
            };
            Contract: {
                encode(message: _156.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Contract;
                fromJSON(object: any): _156.Contract;
                toJSON(message: _156.Contract): unknown;
                fromPartial(object: Partial<_156.Contract>): _156.Contract;
            };
            Sequence: {
                encode(message: _156.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Sequence;
                fromJSON(object: any): _156.Sequence;
                toJSON(message: _156.Sequence): unknown;
                fromPartial(object: Partial<_156.Sequence>): _156.Sequence;
            };
            TxResult: {
                encode(message: _155.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.TxResult;
                fromJSON(object: any): _155.TxResult;
                toJSON(message: _155.TxResult): unknown;
                fromPartial(object: Partial<_155.TxResult>): _155.TxResult;
            };
            contractStorageTypeFromJSON(object: any): _154.ContractStorageType;
            contractStorageTypeToJSON(object: _154.ContractStorageType): string;
            ContractStorageType: typeof _154.ContractStorageType;
            ContractStorageTypeSDKType: typeof _154.ContractStorageTypeSDKType;
            ContractStoragePB: {
                encode(message: _154.ContractStoragePB, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ContractStoragePB;
                fromJSON(object: any): _154.ContractStoragePB;
                toJSON(message: _154.ContractStoragePB): unknown;
                fromPartial(object: Partial<_154.ContractStoragePB>): _154.ContractStoragePB;
            };
            CodeMetadataPB: {
                encode(message: _154.CodeMetadataPB, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CodeMetadataPB;
                fromJSON(object: any): _154.CodeMetadataPB;
                toJSON(message: _154.CodeMetadataPB): unknown;
                fromPartial(object: Partial<_154.CodeMetadataPB>): _154.CodeMetadataPB;
            };
            CodeInfoPB: {
                encode(message: _154.CodeInfoPB, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CodeInfoPB;
                fromJSON(object: any): _154.CodeInfoPB;
                toJSON(message: _154.CodeInfoPB): unknown;
                fromPartial(object: Partial<_154.CodeInfoPB>): _154.CodeInfoPB;
            };
            CodeOriginPB: {
                encode(message: _154.CodeOriginPB, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.CodeOriginPB;
                fromJSON(object: any): _154.CodeOriginPB;
                toJSON(message: _154.CodeOriginPB): unknown;
                fromPartial(object: Partial<_154.CodeOriginPB>): _154.CodeOriginPB;
            };
            ContractInfoPB: {
                encode(message: _154.ContractInfoPB, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ContractInfoPB;
                fromJSON(object: any): _154.ContractInfoPB;
                toJSON(message: _154.ContractInfoPB): unknown;
                fromPartial(object: Partial<_154.ContractInfoPB>): _154.ContractInfoPB;
            };
            AbsoluteTxPosition: {
                encode(message: _154.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AbsoluteTxPosition;
                fromJSON(object: any): _154.AbsoluteTxPosition;
                toJSON(message: _154.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_154.AbsoluteTxPosition>): _154.AbsoluteTxPosition;
            };
        };
    }
    namespace websrv {
        const v1: {
            MsgClientImpl: typeof _264.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                httpGet(request: _163.QueryHttpRequestGet): Promise<_163.QueryHttpResponseGet>;
                contractByRoute(request: _163.QueryContractByRouteRequest): Promise<_163.QueryContractByRouteResponse>;
                routeByContract(request: _163.QueryRouteByContractRequest): Promise<_163.QueryRouteByContractResponse>;
                params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                getAllOauthClients(request?: _163.QueryGetAllOauthClientsRequest): Promise<_163.QueryGetAllOauthClientsResponse>;
                getOauthClient(request: _163.QueryGetOauthClientRequest): Promise<_163.QueryGetOauthClientResponse>;
                getOauthClientsByOwner(request: _163.QueryGetOauthClientsByOwnerRequest): Promise<_163.QueryGetOauthClientsByOwnerResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerOAuthClient(value: _164.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editOAuthClient(value: _164.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregisterOAuthClient(value: _164.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerRoute(value: _164.MsgRegisterRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deregisterRoute(value: _164.MsgDeregisterRoute): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerOAuthClient(value: _164.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: _164.MsgRegisterOAuthClient;
                    };
                    editOAuthClient(value: _164.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: _164.MsgEditOAuthClient;
                    };
                    deregisterOAuthClient(value: _164.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: _164.MsgDeregisterOAuthClient;
                    };
                    registerRoute(value: _164.MsgRegisterRoute): {
                        typeUrl: string;
                        value: _164.MsgRegisterRoute;
                    };
                    deregisterRoute(value: _164.MsgDeregisterRoute): {
                        typeUrl: string;
                        value: _164.MsgDeregisterRoute;
                    };
                };
                toJSON: {
                    registerOAuthClient(value: _164.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editOAuthClient(value: _164.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deregisterOAuthClient(value: _164.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: unknown;
                    };
                    registerRoute(value: _164.MsgRegisterRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deregisterRoute(value: _164.MsgDeregisterRoute): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerOAuthClient(value: any): {
                        typeUrl: string;
                        value: _164.MsgRegisterOAuthClient;
                    };
                    editOAuthClient(value: any): {
                        typeUrl: string;
                        value: _164.MsgEditOAuthClient;
                    };
                    deregisterOAuthClient(value: any): {
                        typeUrl: string;
                        value: _164.MsgDeregisterOAuthClient;
                    };
                    registerRoute(value: any): {
                        typeUrl: string;
                        value: _164.MsgRegisterRoute;
                    };
                    deregisterRoute(value: any): {
                        typeUrl: string;
                        value: _164.MsgDeregisterRoute;
                    };
                };
                fromPartial: {
                    registerOAuthClient(value: _164.MsgRegisterOAuthClient): {
                        typeUrl: string;
                        value: _164.MsgRegisterOAuthClient;
                    };
                    editOAuthClient(value: _164.MsgEditOAuthClient): {
                        typeUrl: string;
                        value: _164.MsgEditOAuthClient;
                    };
                    deregisterOAuthClient(value: _164.MsgDeregisterOAuthClient): {
                        typeUrl: string;
                        value: _164.MsgDeregisterOAuthClient;
                    };
                    registerRoute(value: _164.MsgRegisterRoute): {
                        typeUrl: string;
                        value: _164.MsgRegisterRoute;
                    };
                    deregisterRoute(value: _164.MsgDeregisterRoute): {
                        typeUrl: string;
                        value: _164.MsgDeregisterRoute;
                    };
                };
            };
            AminoConverter: {
                "/mythos.websrv.v1.MsgRegisterOAuthClient": {
                    aminoType: string;
                    toAmino: ({ owner, domain }: _164.MsgRegisterOAuthClient) => {
                        owner: string;
                        domain: string;
                    };
                    fromAmino: ({ owner, domain }: {
                        owner: string;
                        domain: string;
                    }) => _164.MsgRegisterOAuthClient;
                };
                "/mythos.websrv.v1.MsgEditOAuthClient": {
                    aminoType: string;
                    toAmino: ({ owner, clientId, domain }: _164.MsgEditOAuthClient) => {
                        owner: string;
                        client_id: string;
                        domain: string;
                    };
                    fromAmino: ({ owner, client_id, domain }: {
                        owner: string;
                        client_id: string;
                        domain: string;
                    }) => _164.MsgEditOAuthClient;
                };
                "/mythos.websrv.v1.MsgDeregisterOAuthClient": {
                    aminoType: string;
                    toAmino: ({ owner, clientId }: _164.MsgDeregisterOAuthClient) => {
                        owner: string;
                        client_id: string;
                    };
                    fromAmino: ({ owner, client_id }: {
                        owner: string;
                        client_id: string;
                    }) => _164.MsgDeregisterOAuthClient;
                };
                "/mythos.websrv.v1.MsgRegisterRoute": {
                    aminoType: string;
                    toAmino: ({ authority, title, description, path, contractAddress }: _164.MsgRegisterRoute) => {
                        authority: string;
                        title: string;
                        description: string;
                        path: string;
                        contract_address: string;
                    };
                    fromAmino: ({ authority, title, description, path, contract_address }: {
                        authority: string;
                        title: string;
                        description: string;
                        path: string;
                        contract_address: string;
                    }) => _164.MsgRegisterRoute;
                };
                "/mythos.websrv.v1.MsgDeregisterRoute": {
                    aminoType: string;
                    toAmino: ({ authority, title, description, path, contractAddress }: _164.MsgDeregisterRoute) => {
                        authority: string;
                        title: string;
                        description: string;
                        path: string;
                        contract_address: string;
                    };
                    fromAmino: ({ authority, title, description, path, contract_address }: {
                        authority: string;
                        title: string;
                        description: string;
                        path: string;
                        contract_address: string;
                    }) => _164.MsgDeregisterRoute;
                };
            };
            MsgRegisterOAuthClient: {
                encode(message: _164.MsgRegisterOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRegisterOAuthClient;
                fromJSON(object: any): _164.MsgRegisterOAuthClient;
                toJSON(message: _164.MsgRegisterOAuthClient): unknown;
                fromPartial(object: Partial<_164.MsgRegisterOAuthClient>): _164.MsgRegisterOAuthClient;
            };
            MsgRegisterOAuthClientResponse: {
                encode(message: _164.MsgRegisterOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRegisterOAuthClientResponse;
                fromJSON(object: any): _164.MsgRegisterOAuthClientResponse;
                toJSON(message: _164.MsgRegisterOAuthClientResponse): unknown;
                fromPartial(object: Partial<_164.MsgRegisterOAuthClientResponse>): _164.MsgRegisterOAuthClientResponse;
            };
            MsgEditOAuthClient: {
                encode(message: _164.MsgEditOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgEditOAuthClient;
                fromJSON(object: any): _164.MsgEditOAuthClient;
                toJSON(message: _164.MsgEditOAuthClient): unknown;
                fromPartial(object: Partial<_164.MsgEditOAuthClient>): _164.MsgEditOAuthClient;
            };
            MsgEditOAuthClientResponse: {
                encode(_: _164.MsgEditOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgEditOAuthClientResponse;
                fromJSON(_: any): _164.MsgEditOAuthClientResponse;
                toJSON(_: _164.MsgEditOAuthClientResponse): unknown;
                fromPartial(_: Partial<_164.MsgEditOAuthClientResponse>): _164.MsgEditOAuthClientResponse;
            };
            MsgDeregisterOAuthClient: {
                encode(message: _164.MsgDeregisterOAuthClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDeregisterOAuthClient;
                fromJSON(object: any): _164.MsgDeregisterOAuthClient;
                toJSON(message: _164.MsgDeregisterOAuthClient): unknown;
                fromPartial(object: Partial<_164.MsgDeregisterOAuthClient>): _164.MsgDeregisterOAuthClient;
            };
            MsgDeregisterOAuthClientResponse: {
                encode(_: _164.MsgDeregisterOAuthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDeregisterOAuthClientResponse;
                fromJSON(_: any): _164.MsgDeregisterOAuthClientResponse;
                toJSON(_: _164.MsgDeregisterOAuthClientResponse): unknown;
                fromPartial(_: Partial<_164.MsgDeregisterOAuthClientResponse>): _164.MsgDeregisterOAuthClientResponse;
            };
            MsgRegisterRoute: {
                encode(message: _164.MsgRegisterRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRegisterRoute;
                fromJSON(object: any): _164.MsgRegisterRoute;
                toJSON(message: _164.MsgRegisterRoute): unknown;
                fromPartial(object: Partial<_164.MsgRegisterRoute>): _164.MsgRegisterRoute;
            };
            MsgRegisterRouteResponse: {
                encode(_: _164.MsgRegisterRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRegisterRouteResponse;
                fromJSON(_: any): _164.MsgRegisterRouteResponse;
                toJSON(_: _164.MsgRegisterRouteResponse): unknown;
                fromPartial(_: Partial<_164.MsgRegisterRouteResponse>): _164.MsgRegisterRouteResponse;
            };
            MsgDeregisterRoute: {
                encode(message: _164.MsgDeregisterRoute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDeregisterRoute;
                fromJSON(object: any): _164.MsgDeregisterRoute;
                toJSON(message: _164.MsgDeregisterRoute): unknown;
                fromPartial(object: Partial<_164.MsgDeregisterRoute>): _164.MsgDeregisterRoute;
            };
            MsgDeregisterRouteResponse: {
                encode(_: _164.MsgDeregisterRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgDeregisterRouteResponse;
                fromJSON(_: any): _164.MsgDeregisterRouteResponse;
                toJSON(_: _164.MsgDeregisterRouteResponse): unknown;
                fromPartial(_: Partial<_164.MsgDeregisterRouteResponse>): _164.MsgDeregisterRouteResponse;
            };
            QueryContractByRouteRequest: {
                encode(message: _163.QueryContractByRouteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryContractByRouteRequest;
                fromJSON(object: any): _163.QueryContractByRouteRequest;
                toJSON(message: _163.QueryContractByRouteRequest): unknown;
                fromPartial(object: Partial<_163.QueryContractByRouteRequest>): _163.QueryContractByRouteRequest;
            };
            QueryContractByRouteResponse: {
                encode(message: _163.QueryContractByRouteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryContractByRouteResponse;
                fromJSON(object: any): _163.QueryContractByRouteResponse;
                toJSON(message: _163.QueryContractByRouteResponse): unknown;
                fromPartial(object: Partial<_163.QueryContractByRouteResponse>): _163.QueryContractByRouteResponse;
            };
            QueryRouteByContractRequest: {
                encode(message: _163.QueryRouteByContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryRouteByContractRequest;
                fromJSON(object: any): _163.QueryRouteByContractRequest;
                toJSON(message: _163.QueryRouteByContractRequest): unknown;
                fromPartial(object: Partial<_163.QueryRouteByContractRequest>): _163.QueryRouteByContractRequest;
            };
            QueryRouteByContractResponse: {
                encode(message: _163.QueryRouteByContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryRouteByContractResponse;
                fromJSON(object: any): _163.QueryRouteByContractResponse;
                toJSON(message: _163.QueryRouteByContractResponse): unknown;
                fromPartial(object: Partial<_163.QueryRouteByContractResponse>): _163.QueryRouteByContractResponse;
            };
            QueryHttpRequestGet: {
                encode(message: _163.QueryHttpRequestGet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryHttpRequestGet;
                fromJSON(object: any): _163.QueryHttpRequestGet;
                toJSON(message: _163.QueryHttpRequestGet): unknown;
                fromPartial(object: Partial<_163.QueryHttpRequestGet>): _163.QueryHttpRequestGet;
            };
            QueryHttpResponseGet: {
                encode(message: _163.QueryHttpResponseGet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryHttpResponseGet;
                fromJSON(object: any): _163.QueryHttpResponseGet;
                toJSON(message: _163.QueryHttpResponseGet): unknown;
                fromPartial(object: Partial<_163.QueryHttpResponseGet>): _163.QueryHttpResponseGet;
            };
            QueryParamsRequest: {
                encode(_: _163.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsRequest;
                fromJSON(_: any): _163.QueryParamsRequest;
                toJSON(_: _163.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_163.QueryParamsRequest>): _163.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _163.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsResponse;
                fromJSON(object: any): _163.QueryParamsResponse;
                toJSON(message: _163.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_163.QueryParamsResponse>): _163.QueryParamsResponse;
            };
            OauthClientInfo: {
                encode(message: _163.OauthClientInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.OauthClientInfo;
                fromJSON(object: any): _163.OauthClientInfo;
                toJSON(message: _163.OauthClientInfo): unknown;
                fromPartial(object: Partial<_163.OauthClientInfo>): _163.OauthClientInfo;
            };
            QueryGetAllOauthClientsRequest: {
                encode(message: _163.QueryGetAllOauthClientsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetAllOauthClientsRequest;
                fromJSON(object: any): _163.QueryGetAllOauthClientsRequest;
                toJSON(message: _163.QueryGetAllOauthClientsRequest): unknown;
                fromPartial(object: Partial<_163.QueryGetAllOauthClientsRequest>): _163.QueryGetAllOauthClientsRequest;
            };
            QueryGetAllOauthClientsResponse: {
                encode(message: _163.QueryGetAllOauthClientsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetAllOauthClientsResponse;
                fromJSON(object: any): _163.QueryGetAllOauthClientsResponse;
                toJSON(message: _163.QueryGetAllOauthClientsResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetAllOauthClientsResponse>): _163.QueryGetAllOauthClientsResponse;
            };
            QueryGetOauthClientRequest: {
                encode(message: _163.QueryGetOauthClientRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetOauthClientRequest;
                fromJSON(object: any): _163.QueryGetOauthClientRequest;
                toJSON(message: _163.QueryGetOauthClientRequest): unknown;
                fromPartial(object: Partial<_163.QueryGetOauthClientRequest>): _163.QueryGetOauthClientRequest;
            };
            QueryGetOauthClientResponse: {
                encode(message: _163.QueryGetOauthClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetOauthClientResponse;
                fromJSON(object: any): _163.QueryGetOauthClientResponse;
                toJSON(message: _163.QueryGetOauthClientResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetOauthClientResponse>): _163.QueryGetOauthClientResponse;
            };
            QueryGetOauthClientsByOwnerRequest: {
                encode(message: _163.QueryGetOauthClientsByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetOauthClientsByOwnerRequest;
                fromJSON(object: any): _163.QueryGetOauthClientsByOwnerRequest;
                toJSON(message: _163.QueryGetOauthClientsByOwnerRequest): unknown;
                fromPartial(object: Partial<_163.QueryGetOauthClientsByOwnerRequest>): _163.QueryGetOauthClientsByOwnerRequest;
            };
            QueryGetOauthClientsByOwnerResponse: {
                encode(message: _163.QueryGetOauthClientsByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryGetOauthClientsByOwnerResponse;
                fromJSON(object: any): _163.QueryGetOauthClientsByOwnerResponse;
                toJSON(message: _163.QueryGetOauthClientsByOwnerResponse): unknown;
                fromPartial(object: Partial<_163.QueryGetOauthClientsByOwnerResponse>): _163.QueryGetOauthClientsByOwnerResponse;
            };
            Params: {
                encode(message: _162.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Params;
                fromJSON(object: any): _162.Params;
                toJSON(message: _162.Params): unknown;
                fromPartial(object: Partial<_162.Params>): _162.Params;
            };
            GenesisState: {
                encode(message: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisState;
                fromJSON(object: any): _161.GenesisState;
                toJSON(message: _161.GenesisState): unknown;
                fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            mythos: {
                network: {
                    v1: _262.MsgClientImpl;
                };
                wasmx: {
                    v1: _263.MsgClientImpl;
                };
                websrv: {
                    v1: _264.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query").StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query").DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: import("../cosmos/gov/v1/query").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query").QueryConstitutionResponse>;
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            mythos: {
                network: {
                    v1: {
                        contractCall(request: _151.QueryContractCallRequest): Promise<_151.QueryContractCallResponse>;
                        queryMultiChain(request: _151.QueryMultiChainRequest): Promise<_151.QueryMultiChainResponse>;
                    };
                };
                wasmx: {
                    v1: {
                        contractInfo(request: _158.QueryContractInfoRequest): Promise<_158.QueryContractInfoResponse>;
                        contractsByCode(request: _158.QueryContractsByCodeRequest): Promise<_158.QueryContractsByCodeResponse>;
                        allContractState(request: _158.QueryAllContractStateRequest): Promise<_158.QueryAllContractStateResponse>;
                        rawContractState(request: _158.QueryRawContractStateRequest): Promise<_158.QueryRawContractStateResponse>;
                        smartContractCall(request: _158.QuerySmartContractCallRequest): Promise<_158.QuerySmartContractCallResponse>;
                        callEth(request: _158.QueryCallEthRequest): Promise<_158.QueryCallEthResponse>;
                        debugContractCall(request: _158.QueryDebugContractCallRequest): Promise<_158.QueryDebugContractCallResponse>;
                        code(request: _158.QueryCodeRequest): Promise<_158.QueryCodeResponse>;
                        codeInfo(request: _158.QueryCodeInfoRequest): Promise<_158.QueryCodeInfoResponse>;
                        codes(request?: _158.QueryCodesRequest): Promise<_158.QueryCodesResponse>;
                        params(request?: _158.QueryParamsRequest): Promise<_158.QueryParamsResponse>;
                        contractsByCreator(request: _158.QueryContractsByCreatorRequest): Promise<_158.QueryContractsByCreatorResponse>;
                    };
                };
                websrv: {
                    v1: {
                        httpGet(request: _163.QueryHttpRequestGet): Promise<_163.QueryHttpResponseGet>;
                        contractByRoute(request: _163.QueryContractByRouteRequest): Promise<_163.QueryContractByRouteResponse>;
                        routeByContract(request: _163.QueryRouteByContractRequest): Promise<_163.QueryRouteByContractResponse>;
                        params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                        getAllOauthClients(request?: _163.QueryGetAllOauthClientsRequest): Promise<_163.QueryGetAllOauthClientsResponse>;
                        getOauthClient(request: _163.QueryGetOauthClientRequest): Promise<_163.QueryGetOauthClientResponse>;
                        getOauthClientsByOwner(request: _163.QueryGetOauthClientsByOwnerRequest): Promise<_163.QueryGetOauthClientsByOwnerResponse>;
                    };
                };
            };
        }>;
    };
}
