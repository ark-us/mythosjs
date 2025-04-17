import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./auth/v1beta1/auth";
import * as _8 from "./auth/v1beta1/genesis";
import * as _9 from "./auth/v1beta1/query";
import * as _10 from "./auth/v1beta1/tx";
import * as _11 from "./authz/module/v1/module";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./autocli/v1/options";
import * as _18 from "./autocli/v1/query";
import * as _19 from "./bank/module/v1/module";
import * as _20 from "./bank/v1beta1/authz";
import * as _21 from "./bank/v1beta1/bank";
import * as _22 from "./bank/v1beta1/genesis";
import * as _23 from "./bank/v1beta1/query";
import * as _24 from "./bank/v1beta1/tx";
import * as _25 from "./base/abci/v1beta1/abci";
import * as _26 from "./base/node/v1beta1/query";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/tendermint/v1beta1/query";
import * as _31 from "./base/tendermint/v1beta1/types";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "./circuit/module/v1/module";
import * as _34 from "./circuit/v1/query";
import * as _35 from "./circuit/v1/tx";
import * as _36 from "./circuit/v1/types";
import * as _37 from "./consensus/module/v1/module";
import * as _38 from "./consensus/v1/query";
import * as _39 from "./consensus/v1/tx";
import * as _40 from "./crisis/module/v1/module";
import * as _41 from "./crisis/v1beta1/genesis";
import * as _42 from "./crisis/v1beta1/tx";
import * as _43 from "./crypto/ed25519/keys";
import * as _44 from "./crypto/hd/v1/hd";
import * as _45 from "./crypto/keyring/v1/record";
import * as _46 from "./crypto/multisig/keys";
import * as _47 from "./crypto/secp256k1/keys";
import * as _48 from "./crypto/secp256r1/keys";
import * as _49 from "./distribution/module/v1/module";
import * as _50 from "./distribution/v1beta1/distribution";
import * as _51 from "./distribution/v1beta1/genesis";
import * as _52 from "./distribution/v1beta1/query";
import * as _53 from "./distribution/v1beta1/tx";
import * as _54 from "./evidence/module/v1/module";
import * as _55 from "./evidence/v1beta1/evidence";
import * as _56 from "./evidence/v1beta1/genesis";
import * as _57 from "./evidence/v1beta1/query";
import * as _58 from "./evidence/v1beta1/tx";
import * as _59 from "./feegrant/module/v1/module";
import * as _60 from "./feegrant/v1beta1/feegrant";
import * as _61 from "./feegrant/v1beta1/genesis";
import * as _62 from "./feegrant/v1beta1/query";
import * as _63 from "./feegrant/v1beta1/tx";
import * as _64 from "./genutil/module/v1/module";
import * as _65 from "./genutil/v1beta1/genesis";
import * as _66 from "./gov/module/v1/module";
import * as _67 from "./gov/v1/genesis";
import * as _68 from "./gov/v1/gov";
import * as _69 from "./gov/v1/query";
import * as _70 from "./gov/v1/tx";
import * as _71 from "./gov/v1beta1/genesis";
import * as _72 from "./gov/v1beta1/gov";
import * as _73 from "./gov/v1beta1/query";
import * as _74 from "./gov/v1beta1/tx";
import * as _75 from "./group/module/v1/module";
import * as _76 from "./group/v1/events";
import * as _77 from "./group/v1/genesis";
import * as _78 from "./group/v1/query";
import * as _79 from "./group/v1/tx";
import * as _80 from "./group/v1/types";
import * as _81 from "./mint/module/v1/module";
import * as _82 from "./mint/v1beta1/genesis";
import * as _83 from "./mint/v1beta1/mint";
import * as _84 from "./mint/v1beta1/query";
import * as _85 from "./mint/v1beta1/tx";
import * as _88 from "./nft/module/v1/module";
import * as _89 from "./nft/v1beta1/event";
import * as _90 from "./nft/v1beta1/genesis";
import * as _91 from "./nft/v1beta1/nft";
import * as _92 from "./nft/v1beta1/query";
import * as _93 from "./nft/v1beta1/tx";
import * as _94 from "./orm/module/v1alpha1/module";
import * as _95 from "./orm/query/v1alpha1/query";
import * as _96 from "./orm/v1/orm";
import * as _97 from "./orm/v1alpha1/schema";
import * as _98 from "./params/module/v1/module";
import * as _99 from "./params/v1beta1/params";
import * as _100 from "./params/v1beta1/query";
import * as _102 from "./reflection/v1/reflection";
import * as _103 from "./slashing/module/v1/module";
import * as _104 from "./slashing/v1beta1/genesis";
import * as _105 from "./slashing/v1beta1/query";
import * as _106 from "./slashing/v1beta1/slashing";
import * as _107 from "./slashing/v1beta1/tx";
import * as _108 from "./staking/module/v1/module";
import * as _109 from "./staking/v1beta1/authz";
import * as _110 from "./staking/v1beta1/genesis";
import * as _111 from "./staking/v1beta1/query";
import * as _112 from "./staking/v1beta1/staking";
import * as _113 from "./staking/v1beta1/tx";
import * as _114 from "./store/internal/kv/v1beta1/kv";
import * as _115 from "./store/snapshots/v1/snapshot";
import * as _116 from "./store/streaming/abci/grpc";
import * as _117 from "./store/v1beta1/commit_info";
import * as _118 from "./store/v1beta1/listening";
import * as _119 from "./tx/config/v1/config";
import * as _120 from "./tx/signing/v1beta1/signing";
import * as _121 from "./tx/v1beta1/service";
import * as _122 from "./tx/v1beta1/tx";
import * as _123 from "./upgrade/module/v1/module";
import * as _124 from "./upgrade/v1beta1/query";
import * as _125 from "./upgrade/v1beta1/tx";
import * as _126 from "./upgrade/v1beta1/upgrade";
import * as _127 from "./vesting/module/v1/module";
import * as _128 from "./vesting/v1beta1/tx";
import * as _129 from "./vesting/v1beta1/vesting";
import * as _212 from "./app/v1alpha1/query.rpc.Query";
import * as _213 from "./auth/v1beta1/query.rpc.Query";
import * as _214 from "./authz/v1beta1/query.rpc.Query";
import * as _215 from "./autocli/v1/query.rpc.Query";
import * as _216 from "./bank/v1beta1/query.rpc.Query";
import * as _217 from "./base/node/v1beta1/query.rpc.Service";
import * as _218 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _219 from "./circuit/v1/query.rpc.Query";
import * as _220 from "./consensus/v1/query.rpc.Query";
import * as _221 from "./distribution/v1beta1/query.rpc.Query";
import * as _222 from "./evidence/v1beta1/query.rpc.Query";
import * as _223 from "./feegrant/v1beta1/query.rpc.Query";
import * as _224 from "./gov/v1/query.rpc.Query";
import * as _225 from "./gov/v1beta1/query.rpc.Query";
import * as _226 from "./group/v1/query.rpc.Query";
import * as _227 from "./mint/v1beta1/query.rpc.Query";
import * as _228 from "./nft/v1beta1/query.rpc.Query";
import * as _229 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _230 from "./params/v1beta1/query.rpc.Query";
import * as _231 from "./slashing/v1beta1/query.rpc.Query";
import * as _232 from "./staking/v1beta1/query.rpc.Query";
import * as _233 from "./tx/v1beta1/service.rpc.Service";
import * as _234 from "./upgrade/v1beta1/query.rpc.Query";
import * as _235 from "./auth/v1beta1/tx.rpc.msg";
import * as _236 from "./authz/v1beta1/tx.rpc.msg";
import * as _237 from "./bank/v1beta1/tx.rpc.msg";
import * as _238 from "./circuit/v1/tx.rpc.msg";
import * as _239 from "./consensus/v1/tx.rpc.msg";
import * as _240 from "./crisis/v1beta1/tx.rpc.msg";
import * as _241 from "./distribution/v1beta1/tx.rpc.msg";
import * as _242 from "./evidence/v1beta1/tx.rpc.msg";
import * as _243 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _244 from "./gov/v1/tx.rpc.msg";
import * as _245 from "./gov/v1beta1/tx.rpc.msg";
import * as _246 from "./group/v1/tx.rpc.msg";
import * as _247 from "./mint/v1beta1/tx.rpc.msg";
import * as _248 from "./nft/v1beta1/tx.rpc.msg";
import * as _249 from "./slashing/v1beta1/tx.rpc.msg";
import * as _250 from "./staking/v1beta1/tx.rpc.msg";
import * as _251 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _252 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    encode(message: _2.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Module;
                    fromJSON(object: any): _2.Module;
                    toJSON(message: _2.Module): unknown;
                    fromPartial(object: Partial<_2.Module>): _2.Module;
                };
                StoreKeyConfig: {
                    encode(message: _2.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.StoreKeyConfig;
                    fromJSON(object: any): _2.StoreKeyConfig;
                    toJSON(message: _2.StoreKeyConfig): unknown;
                    fromPartial(object: Partial<_2.StoreKeyConfig>): _2.StoreKeyConfig;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _5.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigRequest;
                fromJSON(_: any): _5.QueryConfigRequest;
                toJSON(_: _5.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_5.QueryConfigRequest>): _5.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _5.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryConfigResponse;
                fromJSON(object: any): _5.QueryConfigResponse;
                toJSON(message: _5.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_5.QueryConfigResponse>): _5.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _4.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ModuleDescriptor;
                fromJSON(object: any): _4.ModuleDescriptor;
                toJSON(message: _4.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_4.ModuleDescriptor>): _4.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _4.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.PackageReference;
                fromJSON(object: any): _4.PackageReference;
                toJSON(message: _4.PackageReference): unknown;
                fromPartial(object: Partial<_4.PackageReference>): _4.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _4.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MigrateFromInfo;
                fromJSON(object: any): _4.MigrateFromInfo;
                toJSON(message: _4.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_4.MigrateFromInfo>): _4.MigrateFromInfo;
            };
            Config: {
                encode(message: _3.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Config;
                fromJSON(object: any): _3.Config;
                toJSON(message: _3.Config): unknown;
                fromPartial(object: Partial<_3.Config>): _3.Config;
            };
            ModuleConfig: {
                encode(message: _3.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ModuleConfig;
                fromJSON(object: any): _3.ModuleConfig;
                toJSON(message: _3.ModuleConfig): unknown;
                fromPartial(object: Partial<_3.ModuleConfig>): _3.ModuleConfig;
            };
            GolangBinding: {
                encode(message: _3.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GolangBinding;
                fromJSON(object: any): _3.GolangBinding;
                toJSON(message: _3.GolangBinding): unknown;
                fromPartial(object: Partial<_3.GolangBinding>): _3.GolangBinding;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _6.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Module;
                    fromJSON(object: any): _6.Module;
                    toJSON(message: _6.Module): unknown;
                    fromPartial(object: Partial<_6.Module>): _6.Module;
                };
                ModuleAccountPermission: {
                    encode(message: _6.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ModuleAccountPermission;
                    fromJSON(object: any): _6.ModuleAccountPermission;
                    toJSON(message: _6.ModuleAccountPermission): unknown;
                    fromPartial(object: Partial<_6.ModuleAccountPermission>): _6.ModuleAccountPermission;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _235.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _10.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            max_memo_characters: string;
                            tx_sig_limit: string;
                            tx_size_cost_per_byte: string;
                            sig_verify_cost_ed25519: string;
                            sig_verify_cost_secp256k1: string;
                        };
                    }) => _10.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _10.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateParams;
                fromJSON(object: any): _10.MsgUpdateParams;
                toJSON(message: _10.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateParamsResponse;
                fromJSON(_: any): _10.MsgUpdateParamsResponse;
                toJSON(_: _10.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
            };
            QueryAccountsRequest: {
                encode(message: _9.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountsRequest;
                fromJSON(object: any): _9.QueryAccountsRequest;
                toJSON(message: _9.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_9.QueryAccountsRequest>): _9.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _9.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountsResponse;
                fromJSON(object: any): _9.QueryAccountsResponse;
                toJSON(message: _9.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_9.QueryAccountsResponse>): _9.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _9.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountRequest;
                fromJSON(object: any): _9.QueryAccountRequest;
                toJSON(message: _9.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_9.QueryAccountRequest>): _9.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _9.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountResponse;
                fromJSON(object: any): _9.QueryAccountResponse;
                toJSON(message: _9.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_9.QueryAccountResponse>): _9.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsRequest;
                fromJSON(_: any): _9.QueryParamsRequest;
                toJSON(_: _9.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsResponse;
                fromJSON(object: any): _9.QueryParamsResponse;
                toJSON(message: _9.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
            };
            QueryModuleAccountsRequest: {
                encode(_: _9.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountsRequest;
                fromJSON(_: any): _9.QueryModuleAccountsRequest;
                toJSON(_: _9.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_9.QueryModuleAccountsRequest>): _9.QueryModuleAccountsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _9.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountsResponse;
                fromJSON(object: any): _9.QueryModuleAccountsResponse;
                toJSON(message: _9.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_9.QueryModuleAccountsResponse>): _9.QueryModuleAccountsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _9.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _9.QueryModuleAccountByNameRequest;
                toJSON(message: _9.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameRequest>): _9.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _9.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _9.QueryModuleAccountByNameResponse;
                toJSON(message: _9.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_9.QueryModuleAccountByNameResponse>): _9.QueryModuleAccountByNameResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _9.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Bech32PrefixRequest;
                fromJSON(_: any): _9.Bech32PrefixRequest;
                toJSON(_: _9.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_9.Bech32PrefixRequest>): _9.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _9.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Bech32PrefixResponse;
                fromJSON(object: any): _9.Bech32PrefixResponse;
                toJSON(message: _9.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_9.Bech32PrefixResponse>): _9.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _9.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressBytesToStringRequest;
                fromJSON(object: any): _9.AddressBytesToStringRequest;
                toJSON(message: _9.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_9.AddressBytesToStringRequest>): _9.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _9.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressBytesToStringResponse;
                fromJSON(object: any): _9.AddressBytesToStringResponse;
                toJSON(message: _9.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_9.AddressBytesToStringResponse>): _9.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _9.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressStringToBytesRequest;
                fromJSON(object: any): _9.AddressStringToBytesRequest;
                toJSON(message: _9.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_9.AddressStringToBytesRequest>): _9.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _9.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.AddressStringToBytesResponse;
                fromJSON(object: any): _9.AddressStringToBytesResponse;
                toJSON(message: _9.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_9.AddressStringToBytesResponse>): _9.AddressStringToBytesResponse;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _9.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _9.QueryAccountAddressByIDRequest;
                toJSON(message: _9.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_9.QueryAccountAddressByIDRequest>): _9.QueryAccountAddressByIDRequest;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _9.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _9.QueryAccountAddressByIDResponse;
                toJSON(message: _9.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_9.QueryAccountAddressByIDResponse>): _9.QueryAccountAddressByIDResponse;
            };
            QueryAccountInfoRequest: {
                encode(message: _9.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountInfoRequest;
                fromJSON(object: any): _9.QueryAccountInfoRequest;
                toJSON(message: _9.QueryAccountInfoRequest): unknown;
                fromPartial(object: Partial<_9.QueryAccountInfoRequest>): _9.QueryAccountInfoRequest;
            };
            QueryAccountInfoResponse: {
                encode(message: _9.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAccountInfoResponse;
                fromJSON(object: any): _9.QueryAccountInfoResponse;
                toJSON(message: _9.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_9.QueryAccountInfoResponse>): _9.QueryAccountInfoResponse;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                toJSON(message: _8.GenesisState): unknown;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
            };
            BaseAccount: {
                encode(message: _7.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.BaseAccount;
                fromJSON(object: any): _7.BaseAccount;
                toJSON(message: _7.BaseAccount): unknown;
                fromPartial(object: Partial<_7.BaseAccount>): _7.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _7.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ModuleAccount;
                fromJSON(object: any): _7.ModuleAccount;
                toJSON(message: _7.ModuleAccount): unknown;
                fromPartial(object: Partial<_7.ModuleAccount>): _7.ModuleAccount;
            };
            ModuleCredential: {
                encode(message: _7.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ModuleCredential;
                fromJSON(object: any): _7.ModuleCredential;
                toJSON(message: _7.ModuleCredential): unknown;
                fromPartial(object: Partial<_7.ModuleCredential>): _7.ModuleCredential;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromJSON(object: any): _7.Params;
                toJSON(message: _7.Params): unknown;
                fromPartial(object: Partial<_7.Params>): _7.Params;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _11.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Module;
                    fromJSON(_: any): _11.Module;
                    toJSON(_: _11.Module): unknown;
                    fromPartial(_: Partial<_11.Module>): _11.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _236.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _16.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _16.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _16.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _16.MsgGrant): {
                        typeUrl: string;
                        value: _16.MsgGrant;
                    };
                    exec(value: _16.MsgExec): {
                        typeUrl: string;
                        value: _16.MsgExec;
                    };
                    revoke(value: _16.MsgRevoke): {
                        typeUrl: string;
                        value: _16.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _16.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _16.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _16.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _16.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _16.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _16.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _16.MsgGrant): {
                        typeUrl: string;
                        value: _16.MsgGrant;
                    };
                    exec(value: _16.MsgExec): {
                        typeUrl: string;
                        value: _16.MsgExec;
                    };
                    revoke(value: _16.MsgRevoke): {
                        typeUrl: string;
                        value: _16.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _16.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _16.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _16.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _16.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _16.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _16.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _16.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgGrant;
                fromJSON(object: any): _16.MsgGrant;
                toJSON(message: _16.MsgGrant): unknown;
                fromPartial(object: Partial<_16.MsgGrant>): _16.MsgGrant;
            };
            MsgGrantResponse: {
                encode(_: _16.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgGrantResponse;
                fromJSON(_: any): _16.MsgGrantResponse;
                toJSON(_: _16.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_16.MsgGrantResponse>): _16.MsgGrantResponse;
            };
            MsgExec: {
                encode(message: _16.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgExec;
                fromJSON(object: any): _16.MsgExec;
                toJSON(message: _16.MsgExec): unknown;
                fromPartial(object: Partial<_16.MsgExec>): _16.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _16.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgExecResponse;
                fromJSON(object: any): _16.MsgExecResponse;
                toJSON(message: _16.MsgExecResponse): unknown;
                fromPartial(object: Partial<_16.MsgExecResponse>): _16.MsgExecResponse;
            };
            MsgRevoke: {
                encode(message: _16.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgRevoke;
                fromJSON(object: any): _16.MsgRevoke;
                toJSON(message: _16.MsgRevoke): unknown;
                fromPartial(object: Partial<_16.MsgRevoke>): _16.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _16.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgRevokeResponse;
                fromJSON(_: any): _16.MsgRevokeResponse;
                toJSON(_: _16.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_16.MsgRevokeResponse>): _16.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _15.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGrantsRequest;
                fromJSON(object: any): _15.QueryGrantsRequest;
                toJSON(message: _15.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_15.QueryGrantsRequest>): _15.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _15.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGrantsResponse;
                fromJSON(object: any): _15.QueryGrantsResponse;
                toJSON(message: _15.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_15.QueryGrantsResponse>): _15.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _15.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranterGrantsRequest;
                fromJSON(object: any): _15.QueryGranterGrantsRequest;
                toJSON(message: _15.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_15.QueryGranterGrantsRequest>): _15.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _15.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranterGrantsResponse;
                fromJSON(object: any): _15.QueryGranterGrantsResponse;
                toJSON(message: _15.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_15.QueryGranterGrantsResponse>): _15.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _15.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranteeGrantsRequest;
                fromJSON(object: any): _15.QueryGranteeGrantsRequest;
                toJSON(message: _15.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_15.QueryGranteeGrantsRequest>): _15.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _15.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranteeGrantsResponse;
                fromJSON(object: any): _15.QueryGranteeGrantsResponse;
                toJSON(message: _15.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_15.QueryGranteeGrantsResponse>): _15.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisState;
                fromJSON(object: any): _14.GenesisState;
                toJSON(message: _14.GenesisState): unknown;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
            };
            EventGrant: {
                encode(message: _13.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.EventGrant;
                fromJSON(object: any): _13.EventGrant;
                toJSON(message: _13.EventGrant): unknown;
                fromPartial(object: Partial<_13.EventGrant>): _13.EventGrant;
            };
            EventRevoke: {
                encode(message: _13.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.EventRevoke;
                fromJSON(object: any): _13.EventRevoke;
                toJSON(message: _13.EventRevoke): unknown;
                fromPartial(object: Partial<_13.EventRevoke>): _13.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _12.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenericAuthorization;
                fromJSON(object: any): _12.GenericAuthorization;
                toJSON(message: _12.GenericAuthorization): unknown;
                fromPartial(object: Partial<_12.GenericAuthorization>): _12.GenericAuthorization;
            };
            Grant: {
                encode(message: _12.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Grant;
                fromJSON(object: any): _12.Grant;
                toJSON(message: _12.Grant): unknown;
                fromPartial(object: Partial<_12.Grant>): _12.Grant;
            };
            GrantAuthorization: {
                encode(message: _12.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GrantAuthorization;
                fromJSON(object: any): _12.GrantAuthorization;
                toJSON(message: _12.GrantAuthorization): unknown;
                fromPartial(object: Partial<_12.GrantAuthorization>): _12.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _12.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GrantQueueItem;
                fromJSON(object: any): _12.GrantQueueItem;
                toJSON(message: _12.GrantQueueItem): unknown;
                fromPartial(object: Partial<_12.GrantQueueItem>): _12.GrantQueueItem;
            };
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _18.AppOptionsRequest): Promise<_18.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                encode(_: _18.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AppOptionsRequest;
                fromJSON(_: any): _18.AppOptionsRequest;
                toJSON(_: _18.AppOptionsRequest): unknown;
                fromPartial(_: Partial<_18.AppOptionsRequest>): _18.AppOptionsRequest;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _18.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _18.AppOptionsResponse_ModuleOptionsEntry;
                toJSON(message: _18.AppOptionsResponse_ModuleOptionsEntry): unknown;
                fromPartial(object: Partial<_18.AppOptionsResponse_ModuleOptionsEntry>): _18.AppOptionsResponse_ModuleOptionsEntry;
            };
            AppOptionsResponse: {
                encode(message: _18.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AppOptionsResponse;
                fromJSON(object: any): _18.AppOptionsResponse;
                toJSON(message: _18.AppOptionsResponse): unknown;
                fromPartial(object: Partial<_18.AppOptionsResponse>): _18.AppOptionsResponse;
            };
            ModuleOptions: {
                encode(message: _17.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ModuleOptions;
                fromJSON(object: any): _17.ModuleOptions;
                toJSON(message: _17.ModuleOptions): unknown;
                fromPartial(object: Partial<_17.ModuleOptions>): _17.ModuleOptions;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _17.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _17.ServiceCommandDescriptor_SubCommandsEntry;
                toJSON(message: _17.ServiceCommandDescriptor_SubCommandsEntry): unknown;
                fromPartial(object: Partial<_17.ServiceCommandDescriptor_SubCommandsEntry>): _17.ServiceCommandDescriptor_SubCommandsEntry;
            };
            ServiceCommandDescriptor: {
                encode(message: _17.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ServiceCommandDescriptor;
                fromJSON(object: any): _17.ServiceCommandDescriptor;
                toJSON(message: _17.ServiceCommandDescriptor): unknown;
                fromPartial(object: Partial<_17.ServiceCommandDescriptor>): _17.ServiceCommandDescriptor;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _17.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _17.RpcCommandOptions_FlagOptionsEntry;
                toJSON(message: _17.RpcCommandOptions_FlagOptionsEntry): unknown;
                fromPartial(object: Partial<_17.RpcCommandOptions_FlagOptionsEntry>): _17.RpcCommandOptions_FlagOptionsEntry;
            };
            RpcCommandOptions: {
                encode(message: _17.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.RpcCommandOptions;
                fromJSON(object: any): _17.RpcCommandOptions;
                toJSON(message: _17.RpcCommandOptions): unknown;
                fromPartial(object: Partial<_17.RpcCommandOptions>): _17.RpcCommandOptions;
            };
            FlagOptions: {
                encode(message: _17.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.FlagOptions;
                fromJSON(object: any): _17.FlagOptions;
                toJSON(message: _17.FlagOptions): unknown;
                fromPartial(object: Partial<_17.FlagOptions>): _17.FlagOptions;
            };
            PositionalArgDescriptor: {
                encode(message: _17.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PositionalArgDescriptor;
                fromJSON(object: any): _17.PositionalArgDescriptor;
                toJSON(message: _17.PositionalArgDescriptor): unknown;
                fromPartial(object: Partial<_17.PositionalArgDescriptor>): _17.PositionalArgDescriptor;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _19.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Module;
                    fromJSON(object: any): _19.Module;
                    toJSON(message: _19.Module): unknown;
                    fromPartial(object: Partial<_19.Module>): _19.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _237.MsgClientImpl;
            QueryClientImpl: typeof _216.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                allBalances(request: _23.QueryAllBalancesRequest): Promise<_23.QueryAllBalancesResponse>;
                spendableBalances(request: _23.QuerySpendableBalancesRequest): Promise<_23.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _23.QuerySpendableBalanceByDenomRequest): Promise<_23.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _23.QueryTotalSupplyRequest): Promise<_23.QueryTotalSupplyResponse>;
                supplyOf(request: _23.QuerySupplyOfRequest): Promise<_23.QuerySupplyOfResponse>;
                params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                denomMetadata(request: _23.QueryDenomMetadataRequest): Promise<_23.QueryDenomMetadataResponse>;
                denomMetadataByQueryString(request: _23.QueryDenomMetadataByQueryStringRequest): Promise<_23.QueryDenomMetadataByQueryStringResponse>;
                denomsMetadata(request?: _23.QueryDenomsMetadataRequest): Promise<_23.QueryDenomsMetadataResponse>;
                denomOwners(request: _23.QueryDenomOwnersRequest): Promise<_23.QueryDenomOwnersResponse>;
                denomOwnersByQuery(request: _23.QueryDenomOwnersByQueryRequest): Promise<_23.QueryDenomOwnersByQueryResponse>;
                sendEnabled(request: _23.QuerySendEnabledRequest): Promise<_23.QuerySendEnabledResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _24.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                    setSendEnabled(value: _24.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _24.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _24.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _24.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _24.MsgSend): {
                        typeUrl: string;
                        value: _24.MsgSend;
                    };
                    multiSend(value: _24.MsgMultiSend): {
                        typeUrl: string;
                        value: _24.MsgMultiSend;
                    };
                    updateParams(value: _24.MsgUpdateParams): {
                        typeUrl: string;
                        value: _24.MsgUpdateParams;
                    };
                    setSendEnabled(value: _24.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _24.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _24.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _24.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _24.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _24.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _24.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            send_enabled: {
                                denom: string;
                                enabled: boolean;
                            }[];
                            default_send_enabled: boolean;
                        };
                    }) => _24.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: ({ authority, sendEnabled, useDefaultFor }: _24.MsgSetSendEnabled) => {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    };
                    fromAmino: ({ authority, send_enabled, use_default_for }: {
                        authority: string;
                        send_enabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        use_default_for: string[];
                    }) => _24.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                encode(message: _24.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgSend;
                fromJSON(object: any): _24.MsgSend;
                toJSON(message: _24.MsgSend): unknown;
                fromPartial(object: Partial<_24.MsgSend>): _24.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _24.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgSendResponse;
                fromJSON(_: any): _24.MsgSendResponse;
                toJSON(_: _24.MsgSendResponse): unknown;
                fromPartial(_: Partial<_24.MsgSendResponse>): _24.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _24.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgMultiSend;
                fromJSON(object: any): _24.MsgMultiSend;
                toJSON(message: _24.MsgMultiSend): unknown;
                fromPartial(object: Partial<_24.MsgMultiSend>): _24.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _24.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgMultiSendResponse;
                fromJSON(_: any): _24.MsgMultiSendResponse;
                toJSON(_: _24.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_24.MsgMultiSendResponse>): _24.MsgMultiSendResponse;
            };
            MsgUpdateParams: {
                encode(message: _24.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgUpdateParams;
                fromJSON(object: any): _24.MsgUpdateParams;
                toJSON(message: _24.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_24.MsgUpdateParams>): _24.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _24.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgUpdateParamsResponse;
                fromJSON(_: any): _24.MsgUpdateParamsResponse;
                toJSON(_: _24.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_24.MsgUpdateParamsResponse>): _24.MsgUpdateParamsResponse;
            };
            MsgSetSendEnabled: {
                encode(message: _24.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgSetSendEnabled;
                fromJSON(object: any): _24.MsgSetSendEnabled;
                toJSON(message: _24.MsgSetSendEnabled): unknown;
                fromPartial(object: Partial<_24.MsgSetSendEnabled>): _24.MsgSetSendEnabled;
            };
            MsgSetSendEnabledResponse: {
                encode(_: _24.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgSetSendEnabledResponse;
                fromJSON(_: any): _24.MsgSetSendEnabledResponse;
                toJSON(_: _24.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: Partial<_24.MsgSetSendEnabledResponse>): _24.MsgSetSendEnabledResponse;
            };
            QueryBalanceRequest: {
                encode(message: _23.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryBalanceRequest;
                fromJSON(object: any): _23.QueryBalanceRequest;
                toJSON(message: _23.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_23.QueryBalanceRequest>): _23.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _23.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryBalanceResponse;
                fromJSON(object: any): _23.QueryBalanceResponse;
                toJSON(message: _23.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_23.QueryBalanceResponse>): _23.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _23.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryAllBalancesRequest;
                fromJSON(object: any): _23.QueryAllBalancesRequest;
                toJSON(message: _23.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_23.QueryAllBalancesRequest>): _23.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _23.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryAllBalancesResponse;
                fromJSON(object: any): _23.QueryAllBalancesResponse;
                toJSON(message: _23.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_23.QueryAllBalancesResponse>): _23.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _23.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySpendableBalancesRequest;
                fromJSON(object: any): _23.QuerySpendableBalancesRequest;
                toJSON(message: _23.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_23.QuerySpendableBalancesRequest>): _23.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _23.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySpendableBalancesResponse;
                fromJSON(object: any): _23.QuerySpendableBalancesResponse;
                toJSON(message: _23.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_23.QuerySpendableBalancesResponse>): _23.QuerySpendableBalancesResponse;
            };
            QuerySpendableBalanceByDenomRequest: {
                encode(message: _23.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _23.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _23.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: Partial<_23.QuerySpendableBalanceByDenomRequest>): _23.QuerySpendableBalanceByDenomRequest;
            };
            QuerySpendableBalanceByDenomResponse: {
                encode(message: _23.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _23.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _23.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: Partial<_23.QuerySpendableBalanceByDenomResponse>): _23.QuerySpendableBalanceByDenomResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _23.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryTotalSupplyRequest;
                fromJSON(object: any): _23.QueryTotalSupplyRequest;
                toJSON(message: _23.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_23.QueryTotalSupplyRequest>): _23.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _23.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryTotalSupplyResponse;
                fromJSON(object: any): _23.QueryTotalSupplyResponse;
                toJSON(message: _23.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_23.QueryTotalSupplyResponse>): _23.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _23.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySupplyOfRequest;
                fromJSON(object: any): _23.QuerySupplyOfRequest;
                toJSON(message: _23.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_23.QuerySupplyOfRequest>): _23.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _23.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySupplyOfResponse;
                fromJSON(object: any): _23.QuerySupplyOfResponse;
                toJSON(message: _23.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_23.QuerySupplyOfResponse>): _23.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _23.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryParamsRequest;
                fromJSON(_: any): _23.QueryParamsRequest;
                toJSON(_: _23.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_23.QueryParamsRequest>): _23.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _23.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryParamsResponse;
                fromJSON(object: any): _23.QueryParamsResponse;
                toJSON(message: _23.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_23.QueryParamsResponse>): _23.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _23.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomsMetadataRequest;
                fromJSON(object: any): _23.QueryDenomsMetadataRequest;
                toJSON(message: _23.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_23.QueryDenomsMetadataRequest>): _23.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _23.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomsMetadataResponse;
                fromJSON(object: any): _23.QueryDenomsMetadataResponse;
                toJSON(message: _23.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_23.QueryDenomsMetadataResponse>): _23.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _23.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomMetadataRequest;
                fromJSON(object: any): _23.QueryDenomMetadataRequest;
                toJSON(message: _23.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_23.QueryDenomMetadataRequest>): _23.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _23.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomMetadataResponse;
                fromJSON(object: any): _23.QueryDenomMetadataResponse;
                toJSON(message: _23.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_23.QueryDenomMetadataResponse>): _23.QueryDenomMetadataResponse;
            };
            QueryDenomMetadataByQueryStringRequest: {
                encode(message: _23.QueryDenomMetadataByQueryStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomMetadataByQueryStringRequest;
                fromJSON(object: any): _23.QueryDenomMetadataByQueryStringRequest;
                toJSON(message: _23.QueryDenomMetadataByQueryStringRequest): unknown;
                fromPartial(object: Partial<_23.QueryDenomMetadataByQueryStringRequest>): _23.QueryDenomMetadataByQueryStringRequest;
            };
            QueryDenomMetadataByQueryStringResponse: {
                encode(message: _23.QueryDenomMetadataByQueryStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomMetadataByQueryStringResponse;
                fromJSON(object: any): _23.QueryDenomMetadataByQueryStringResponse;
                toJSON(message: _23.QueryDenomMetadataByQueryStringResponse): unknown;
                fromPartial(object: Partial<_23.QueryDenomMetadataByQueryStringResponse>): _23.QueryDenomMetadataByQueryStringResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _23.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomOwnersRequest;
                fromJSON(object: any): _23.QueryDenomOwnersRequest;
                toJSON(message: _23.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_23.QueryDenomOwnersRequest>): _23.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _23.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DenomOwner;
                fromJSON(object: any): _23.DenomOwner;
                toJSON(message: _23.DenomOwner): unknown;
                fromPartial(object: Partial<_23.DenomOwner>): _23.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _23.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomOwnersResponse;
                fromJSON(object: any): _23.QueryDenomOwnersResponse;
                toJSON(message: _23.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_23.QueryDenomOwnersResponse>): _23.QueryDenomOwnersResponse;
            };
            QueryDenomOwnersByQueryRequest: {
                encode(message: _23.QueryDenomOwnersByQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomOwnersByQueryRequest;
                fromJSON(object: any): _23.QueryDenomOwnersByQueryRequest;
                toJSON(message: _23.QueryDenomOwnersByQueryRequest): unknown;
                fromPartial(object: Partial<_23.QueryDenomOwnersByQueryRequest>): _23.QueryDenomOwnersByQueryRequest;
            };
            QueryDenomOwnersByQueryResponse: {
                encode(message: _23.QueryDenomOwnersByQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QueryDenomOwnersByQueryResponse;
                fromJSON(object: any): _23.QueryDenomOwnersByQueryResponse;
                toJSON(message: _23.QueryDenomOwnersByQueryResponse): unknown;
                fromPartial(object: Partial<_23.QueryDenomOwnersByQueryResponse>): _23.QueryDenomOwnersByQueryResponse;
            };
            QuerySendEnabledRequest: {
                encode(message: _23.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySendEnabledRequest;
                fromJSON(object: any): _23.QuerySendEnabledRequest;
                toJSON(message: _23.QuerySendEnabledRequest): unknown;
                fromPartial(object: Partial<_23.QuerySendEnabledRequest>): _23.QuerySendEnabledRequest;
            };
            QuerySendEnabledResponse: {
                encode(message: _23.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.QuerySendEnabledResponse;
                fromJSON(object: any): _23.QuerySendEnabledResponse;
                toJSON(message: _23.QuerySendEnabledResponse): unknown;
                fromPartial(object: Partial<_23.QuerySendEnabledResponse>): _23.QuerySendEnabledResponse;
            };
            GenesisState: {
                encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GenesisState;
                fromJSON(object: any): _22.GenesisState;
                toJSON(message: _22.GenesisState): unknown;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
            };
            Balance: {
                encode(message: _22.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Balance;
                fromJSON(object: any): _22.Balance;
                toJSON(message: _22.Balance): unknown;
                fromPartial(object: Partial<_22.Balance>): _22.Balance;
            };
            Params: {
                encode(message: _21.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Params;
                fromJSON(object: any): _21.Params;
                toJSON(message: _21.Params): unknown;
                fromPartial(object: Partial<_21.Params>): _21.Params;
            };
            SendEnabled: {
                encode(message: _21.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.SendEnabled;
                fromJSON(object: any): _21.SendEnabled;
                toJSON(message: _21.SendEnabled): unknown;
                fromPartial(object: Partial<_21.SendEnabled>): _21.SendEnabled;
            };
            Input: {
                encode(message: _21.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Input;
                fromJSON(object: any): _21.Input;
                toJSON(message: _21.Input): unknown;
                fromPartial(object: Partial<_21.Input>): _21.Input;
            };
            Output: {
                encode(message: _21.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Output;
                fromJSON(object: any): _21.Output;
                toJSON(message: _21.Output): unknown;
                fromPartial(object: Partial<_21.Output>): _21.Output;
            };
            Supply: {
                encode(message: _21.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Supply;
                fromJSON(object: any): _21.Supply;
                toJSON(message: _21.Supply): unknown;
                fromPartial(object: Partial<_21.Supply>): _21.Supply;
            };
            DenomUnit: {
                encode(message: _21.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.DenomUnit;
                fromJSON(object: any): _21.DenomUnit;
                toJSON(message: _21.DenomUnit): unknown;
                fromPartial(object: Partial<_21.DenomUnit>): _21.DenomUnit;
            };
            Metadata: {
                encode(message: _21.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Metadata;
                fromJSON(object: any): _21.Metadata;
                toJSON(message: _21.Metadata): unknown;
                fromPartial(object: Partial<_21.Metadata>): _21.Metadata;
            };
            SendAuthorization: {
                encode(message: _20.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SendAuthorization;
                fromJSON(object: any): _20.SendAuthorization;
                toJSON(message: _20.SendAuthorization): unknown;
                fromPartial(object: Partial<_20.SendAuthorization>): _20.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _25.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TxResponse;
                    fromJSON(object: any): _25.TxResponse;
                    toJSON(message: _25.TxResponse): unknown;
                    fromPartial(object: Partial<_25.TxResponse>): _25.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _25.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ABCIMessageLog;
                    fromJSON(object: any): _25.ABCIMessageLog;
                    toJSON(message: _25.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_25.ABCIMessageLog>): _25.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _25.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.StringEvent;
                    fromJSON(object: any): _25.StringEvent;
                    toJSON(message: _25.StringEvent): unknown;
                    fromPartial(object: Partial<_25.StringEvent>): _25.StringEvent;
                };
                Attribute: {
                    encode(message: _25.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Attribute;
                    fromJSON(object: any): _25.Attribute;
                    toJSON(message: _25.Attribute): unknown;
                    fromPartial(object: Partial<_25.Attribute>): _25.Attribute;
                };
                GasInfo: {
                    encode(message: _25.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GasInfo;
                    fromJSON(object: any): _25.GasInfo;
                    toJSON(message: _25.GasInfo): unknown;
                    fromPartial(object: Partial<_25.GasInfo>): _25.GasInfo;
                };
                Result: {
                    encode(message: _25.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Result;
                    fromJSON(object: any): _25.Result;
                    toJSON(message: _25.Result): unknown;
                    fromPartial(object: Partial<_25.Result>): _25.Result;
                };
                SimulationResponse: {
                    encode(message: _25.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SimulationResponse;
                    fromJSON(object: any): _25.SimulationResponse;
                    toJSON(message: _25.SimulationResponse): unknown;
                    fromPartial(object: Partial<_25.SimulationResponse>): _25.SimulationResponse;
                };
                MsgData: {
                    encode(message: _25.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgData;
                    fromJSON(object: any): _25.MsgData;
                    toJSON(message: _25.MsgData): unknown;
                    fromPartial(object: Partial<_25.MsgData>): _25.MsgData;
                };
                TxMsgData: {
                    encode(message: _25.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TxMsgData;
                    fromJSON(object: any): _25.TxMsgData;
                    toJSON(message: _25.TxMsgData): unknown;
                    fromPartial(object: Partial<_25.TxMsgData>): _25.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _25.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SearchTxsResult;
                    fromJSON(object: any): _25.SearchTxsResult;
                    toJSON(message: _25.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_25.SearchTxsResult>): _25.SearchTxsResult;
                };
                SearchBlocksResult: {
                    encode(message: _25.SearchBlocksResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SearchBlocksResult;
                    fromJSON(object: any): _25.SearchBlocksResult;
                    toJSON(message: _25.SearchBlocksResult): unknown;
                    fromPartial(object: Partial<_25.SearchBlocksResult>): _25.SearchBlocksResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _217.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                    status(request?: _26.StatusRequest): Promise<_26.StatusResponse>;
                };
                ConfigRequest: {
                    encode(_: _26.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ConfigRequest;
                    fromJSON(_: any): _26.ConfigRequest;
                    toJSON(_: _26.ConfigRequest): unknown;
                    fromPartial(_: Partial<_26.ConfigRequest>): _26.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _26.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ConfigResponse;
                    fromJSON(object: any): _26.ConfigResponse;
                    toJSON(message: _26.ConfigResponse): unknown;
                    fromPartial(object: Partial<_26.ConfigResponse>): _26.ConfigResponse;
                };
                StatusRequest: {
                    encode(_: _26.StatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.StatusRequest;
                    fromJSON(_: any): _26.StatusRequest;
                    toJSON(_: _26.StatusRequest): unknown;
                    fromPartial(_: Partial<_26.StatusRequest>): _26.StatusRequest;
                };
                StatusResponse: {
                    encode(message: _26.StatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.StatusResponse;
                    fromJSON(object: any): _26.StatusResponse;
                    toJSON(message: _26.StatusResponse): unknown;
                    fromPartial(object: Partial<_26.StatusResponse>): _26.StatusResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _27.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PageRequest;
                    fromJSON(object: any): _27.PageRequest;
                    toJSON(message: _27.PageRequest): unknown;
                    fromPartial(object: Partial<_27.PageRequest>): _27.PageRequest;
                };
                PageResponse: {
                    encode(message: _27.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PageResponse;
                    fromJSON(object: any): _27.PageResponse;
                    toJSON(message: _27.PageResponse): unknown;
                    fromPartial(object: Partial<_27.PageResponse>): _27.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _28.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListAllInterfacesRequest;
                    fromJSON(_: any): _28.ListAllInterfacesRequest;
                    toJSON(_: _28.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_28.ListAllInterfacesRequest>): _28.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _28.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListAllInterfacesResponse;
                    fromJSON(object: any): _28.ListAllInterfacesResponse;
                    toJSON(message: _28.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_28.ListAllInterfacesResponse>): _28.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _28.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListImplementationsRequest;
                    fromJSON(object: any): _28.ListImplementationsRequest;
                    toJSON(message: _28.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_28.ListImplementationsRequest>): _28.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _28.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ListImplementationsResponse;
                    fromJSON(object: any): _28.ListImplementationsResponse;
                    toJSON(message: _28.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_28.ListImplementationsResponse>): _28.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _29.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.AppDescriptor;
                    fromJSON(object: any): _29.AppDescriptor;
                    toJSON(message: _29.AppDescriptor): unknown;
                    fromPartial(object: Partial<_29.AppDescriptor>): _29.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _29.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.TxDescriptor;
                    fromJSON(object: any): _29.TxDescriptor;
                    toJSON(message: _29.TxDescriptor): unknown;
                    fromPartial(object: Partial<_29.TxDescriptor>): _29.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _29.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.AuthnDescriptor;
                    fromJSON(object: any): _29.AuthnDescriptor;
                    toJSON(message: _29.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_29.AuthnDescriptor>): _29.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _29.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SigningModeDescriptor;
                    fromJSON(object: any): _29.SigningModeDescriptor;
                    toJSON(message: _29.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_29.SigningModeDescriptor>): _29.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _29.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ChainDescriptor;
                    fromJSON(object: any): _29.ChainDescriptor;
                    toJSON(message: _29.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_29.ChainDescriptor>): _29.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _29.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CodecDescriptor;
                    fromJSON(object: any): _29.CodecDescriptor;
                    toJSON(message: _29.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_29.CodecDescriptor>): _29.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _29.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceDescriptor;
                    fromJSON(object: any): _29.InterfaceDescriptor;
                    toJSON(message: _29.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_29.InterfaceDescriptor>): _29.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _29.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _29.InterfaceImplementerDescriptor;
                    toJSON(message: _29.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_29.InterfaceImplementerDescriptor>): _29.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _29.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _29.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _29.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_29.InterfaceAcceptingMessageDescriptor>): _29.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _29.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ConfigurationDescriptor;
                    fromJSON(object: any): _29.ConfigurationDescriptor;
                    toJSON(message: _29.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_29.ConfigurationDescriptor>): _29.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _29.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDescriptor;
                    fromJSON(object: any): _29.MsgDescriptor;
                    toJSON(message: _29.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_29.MsgDescriptor>): _29.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _29.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _29.GetAuthnDescriptorRequest;
                    toJSON(_: _29.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetAuthnDescriptorRequest>): _29.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _29.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _29.GetAuthnDescriptorResponse;
                    toJSON(message: _29.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetAuthnDescriptorResponse>): _29.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _29.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetChainDescriptorRequest;
                    fromJSON(_: any): _29.GetChainDescriptorRequest;
                    toJSON(_: _29.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetChainDescriptorRequest>): _29.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _29.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetChainDescriptorResponse;
                    fromJSON(object: any): _29.GetChainDescriptorResponse;
                    toJSON(message: _29.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetChainDescriptorResponse>): _29.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _29.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetCodecDescriptorRequest;
                    fromJSON(_: any): _29.GetCodecDescriptorRequest;
                    toJSON(_: _29.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetCodecDescriptorRequest>): _29.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _29.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetCodecDescriptorResponse;
                    fromJSON(object: any): _29.GetCodecDescriptorResponse;
                    toJSON(message: _29.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetCodecDescriptorResponse>): _29.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _29.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _29.GetConfigurationDescriptorRequest;
                    toJSON(_: _29.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetConfigurationDescriptorRequest>): _29.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _29.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _29.GetConfigurationDescriptorResponse;
                    toJSON(message: _29.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetConfigurationDescriptorResponse>): _29.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _29.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _29.GetQueryServicesDescriptorRequest;
                    toJSON(_: _29.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetQueryServicesDescriptorRequest>): _29.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _29.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _29.GetQueryServicesDescriptorResponse;
                    toJSON(message: _29.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetQueryServicesDescriptorResponse>): _29.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _29.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetTxDescriptorRequest;
                    fromJSON(_: any): _29.GetTxDescriptorRequest;
                    toJSON(_: _29.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_29.GetTxDescriptorRequest>): _29.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _29.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetTxDescriptorResponse;
                    fromJSON(object: any): _29.GetTxDescriptorResponse;
                    toJSON(message: _29.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_29.GetTxDescriptorResponse>): _29.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _29.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryServicesDescriptor;
                    fromJSON(object: any): _29.QueryServicesDescriptor;
                    toJSON(message: _29.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_29.QueryServicesDescriptor>): _29.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _29.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryServiceDescriptor;
                    fromJSON(object: any): _29.QueryServiceDescriptor;
                    toJSON(message: _29.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_29.QueryServiceDescriptor>): _29.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _29.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryMethodDescriptor;
                    fromJSON(object: any): _29.QueryMethodDescriptor;
                    toJSON(message: _29.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_29.QueryMethodDescriptor>): _29.QueryMethodDescriptor;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _218.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _30.GetNodeInfoRequest): Promise<_30.GetNodeInfoResponse>;
                    getSyncing(request?: _30.GetSyncingRequest): Promise<_30.GetSyncingResponse>;
                    getLatestBlock(request?: _30.GetLatestBlockRequest): Promise<_30.GetLatestBlockResponse>;
                    getBlockByHeight(request: _30.GetBlockByHeightRequest): Promise<_30.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _30.GetLatestValidatorSetRequest): Promise<_30.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _30.GetValidatorSetByHeightRequest): Promise<_30.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _30.ABCIQueryRequest): Promise<_30.ABCIQueryResponse>;
                };
                Block: {
                    encode(message: _31.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Block;
                    fromJSON(object: any): _31.Block;
                    toJSON(message: _31.Block): unknown;
                    fromPartial(object: Partial<_31.Block>): _31.Block;
                };
                Header: {
                    encode(message: _31.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Header;
                    fromJSON(object: any): _31.Header;
                    toJSON(message: _31.Header): unknown;
                    fromPartial(object: Partial<_31.Header>): _31.Header;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _30.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _30.GetValidatorSetByHeightRequest;
                    toJSON(message: _30.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_30.GetValidatorSetByHeightRequest>): _30.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _30.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _30.GetValidatorSetByHeightResponse;
                    toJSON(message: _30.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_30.GetValidatorSetByHeightResponse>): _30.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _30.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _30.GetLatestValidatorSetRequest;
                    toJSON(message: _30.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_30.GetLatestValidatorSetRequest>): _30.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _30.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _30.GetLatestValidatorSetResponse;
                    toJSON(message: _30.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_30.GetLatestValidatorSetResponse>): _30.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _30.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Validator;
                    fromJSON(object: any): _30.Validator;
                    toJSON(message: _30.Validator): unknown;
                    fromPartial(object: Partial<_30.Validator>): _30.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _30.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetBlockByHeightRequest;
                    fromJSON(object: any): _30.GetBlockByHeightRequest;
                    toJSON(message: _30.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_30.GetBlockByHeightRequest>): _30.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _30.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetBlockByHeightResponse;
                    fromJSON(object: any): _30.GetBlockByHeightResponse;
                    toJSON(message: _30.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_30.GetBlockByHeightResponse>): _30.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _30.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestBlockRequest;
                    fromJSON(_: any): _30.GetLatestBlockRequest;
                    toJSON(_: _30.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_30.GetLatestBlockRequest>): _30.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _30.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetLatestBlockResponse;
                    fromJSON(object: any): _30.GetLatestBlockResponse;
                    toJSON(message: _30.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_30.GetLatestBlockResponse>): _30.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _30.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetSyncingRequest;
                    fromJSON(_: any): _30.GetSyncingRequest;
                    toJSON(_: _30.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_30.GetSyncingRequest>): _30.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _30.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetSyncingResponse;
                    fromJSON(object: any): _30.GetSyncingResponse;
                    toJSON(message: _30.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_30.GetSyncingResponse>): _30.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _30.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetNodeInfoRequest;
                    fromJSON(_: any): _30.GetNodeInfoRequest;
                    toJSON(_: _30.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_30.GetNodeInfoRequest>): _30.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _30.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GetNodeInfoResponse;
                    fromJSON(object: any): _30.GetNodeInfoResponse;
                    toJSON(message: _30.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_30.GetNodeInfoResponse>): _30.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _30.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.VersionInfo;
                    fromJSON(object: any): _30.VersionInfo;
                    toJSON(message: _30.VersionInfo): unknown;
                    fromPartial(object: Partial<_30.VersionInfo>): _30.VersionInfo;
                };
                Module: {
                    encode(message: _30.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Module;
                    fromJSON(object: any): _30.Module;
                    toJSON(message: _30.Module): unknown;
                    fromPartial(object: Partial<_30.Module>): _30.Module;
                };
                ABCIQueryRequest: {
                    encode(message: _30.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ABCIQueryRequest;
                    fromJSON(object: any): _30.ABCIQueryRequest;
                    toJSON(message: _30.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_30.ABCIQueryRequest>): _30.ABCIQueryRequest;
                };
                ABCIQueryResponse: {
                    encode(message: _30.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ABCIQueryResponse;
                    fromJSON(object: any): _30.ABCIQueryResponse;
                    toJSON(message: _30.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_30.ABCIQueryResponse>): _30.ABCIQueryResponse;
                };
                ProofOp: {
                    encode(message: _30.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ProofOp;
                    fromJSON(object: any): _30.ProofOp;
                    toJSON(message: _30.ProofOp): unknown;
                    fromPartial(object: Partial<_30.ProofOp>): _30.ProofOp;
                };
                ProofOps: {
                    encode(message: _30.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ProofOps;
                    fromJSON(object: any): _30.ProofOps;
                    toJSON(message: _30.ProofOps): unknown;
                    fromPartial(object: Partial<_30.ProofOps>): _30.ProofOps;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _32.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Coin;
                fromJSON(object: any): _32.Coin;
                toJSON(message: _32.Coin): unknown;
                fromPartial(object: Partial<_32.Coin>): _32.Coin;
            };
            DecCoin: {
                encode(message: _32.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DecCoin;
                fromJSON(object: any): _32.DecCoin;
                toJSON(message: _32.DecCoin): unknown;
                fromPartial(object: Partial<_32.DecCoin>): _32.DecCoin;
            };
            IntProto: {
                encode(message: _32.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.IntProto;
                fromJSON(object: any): _32.IntProto;
                toJSON(message: _32.IntProto): unknown;
                fromPartial(object: Partial<_32.IntProto>): _32.IntProto;
            };
            DecProto: {
                encode(message: _32.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DecProto;
                fromJSON(object: any): _32.DecProto;
                toJSON(message: _32.DecProto): unknown;
                fromPartial(object: Partial<_32.DecProto>): _32.DecProto;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _33.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Module;
                    fromJSON(object: any): _33.Module;
                    toJSON(message: _33.Module): unknown;
                    fromPartial(object: Partial<_33.Module>): _33.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _238.MsgClientImpl;
            QueryClientImpl: typeof _219.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _34.QueryAccountRequest): Promise<_34.AccountResponse>;
                accounts(request?: _34.QueryAccountsRequest): Promise<_34.AccountsResponse>;
                disabledList(request?: _34.QueryDisabledListRequest): Promise<_34.DisabledListResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    authorizeCircuitBreaker(value: _35.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tripCircuitBreaker(value: _35.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    resetCircuitBreaker(value: _35.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    authorizeCircuitBreaker(value: _35.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _35.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _35.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _35.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _35.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _35.MsgResetCircuitBreaker;
                    };
                };
                toJSON: {
                    authorizeCircuitBreaker(value: _35.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    tripCircuitBreaker(value: _35.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    resetCircuitBreaker(value: _35.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    authorizeCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _35.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _35.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _35.MsgResetCircuitBreaker;
                    };
                };
                fromPartial: {
                    authorizeCircuitBreaker(value: _35.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _35.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _35.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _35.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _35.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _35.MsgResetCircuitBreaker;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, permissions }: _35.MsgAuthorizeCircuitBreaker) => {
                        granter: string;
                        grantee: string;
                        permissions: {
                            level: number;
                            limit_type_urls: string[];
                        };
                    };
                    fromAmino: ({ granter, grantee, permissions }: {
                        granter: string;
                        grantee: string;
                        permissions: {
                            level: number;
                            limit_type_urls: string[];
                        };
                    }) => _35.MsgAuthorizeCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
                    aminoType: string;
                    toAmino: ({ authority, msgTypeUrls }: _35.MsgTripCircuitBreaker) => {
                        authority: string;
                        msg_type_urls: string[];
                    };
                    fromAmino: ({ authority, msg_type_urls }: {
                        authority: string;
                        msg_type_urls: string[];
                    }) => _35.MsgTripCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
                    aminoType: string;
                    toAmino: ({ authority, msgTypeUrls }: _35.MsgResetCircuitBreaker) => {
                        authority: string;
                        msg_type_urls: string[];
                    };
                    fromAmino: ({ authority, msg_type_urls }: {
                        authority: string;
                        msg_type_urls: string[];
                    }) => _35.MsgResetCircuitBreaker;
                };
            };
            permissions_LevelFromJSON(object: any): _36.Permissions_Level;
            permissions_LevelToJSON(object: _36.Permissions_Level): string;
            Permissions_Level: typeof _36.Permissions_Level;
            Permissions_LevelSDKType: typeof _36.Permissions_LevelSDKType;
            Permissions: {
                encode(message: _36.Permissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Permissions;
                fromJSON(object: any): _36.Permissions;
                toJSON(message: _36.Permissions): unknown;
                fromPartial(object: Partial<_36.Permissions>): _36.Permissions;
            };
            GenesisAccountPermissions: {
                encode(message: _36.GenesisAccountPermissions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisAccountPermissions;
                fromJSON(object: any): _36.GenesisAccountPermissions;
                toJSON(message: _36.GenesisAccountPermissions): unknown;
                fromPartial(object: Partial<_36.GenesisAccountPermissions>): _36.GenesisAccountPermissions;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromJSON(object: any): _36.GenesisState;
                toJSON(message: _36.GenesisState): unknown;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
            };
            MsgAuthorizeCircuitBreaker: {
                encode(message: _35.MsgAuthorizeCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgAuthorizeCircuitBreaker;
                fromJSON(object: any): _35.MsgAuthorizeCircuitBreaker;
                toJSON(message: _35.MsgAuthorizeCircuitBreaker): unknown;
                fromPartial(object: Partial<_35.MsgAuthorizeCircuitBreaker>): _35.MsgAuthorizeCircuitBreaker;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                encode(message: _35.MsgAuthorizeCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgAuthorizeCircuitBreakerResponse;
                fromJSON(object: any): _35.MsgAuthorizeCircuitBreakerResponse;
                toJSON(message: _35.MsgAuthorizeCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_35.MsgAuthorizeCircuitBreakerResponse>): _35.MsgAuthorizeCircuitBreakerResponse;
            };
            MsgTripCircuitBreaker: {
                encode(message: _35.MsgTripCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgTripCircuitBreaker;
                fromJSON(object: any): _35.MsgTripCircuitBreaker;
                toJSON(message: _35.MsgTripCircuitBreaker): unknown;
                fromPartial(object: Partial<_35.MsgTripCircuitBreaker>): _35.MsgTripCircuitBreaker;
            };
            MsgTripCircuitBreakerResponse: {
                encode(message: _35.MsgTripCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgTripCircuitBreakerResponse;
                fromJSON(object: any): _35.MsgTripCircuitBreakerResponse;
                toJSON(message: _35.MsgTripCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_35.MsgTripCircuitBreakerResponse>): _35.MsgTripCircuitBreakerResponse;
            };
            MsgResetCircuitBreaker: {
                encode(message: _35.MsgResetCircuitBreaker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgResetCircuitBreaker;
                fromJSON(object: any): _35.MsgResetCircuitBreaker;
                toJSON(message: _35.MsgResetCircuitBreaker): unknown;
                fromPartial(object: Partial<_35.MsgResetCircuitBreaker>): _35.MsgResetCircuitBreaker;
            };
            MsgResetCircuitBreakerResponse: {
                encode(message: _35.MsgResetCircuitBreakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgResetCircuitBreakerResponse;
                fromJSON(object: any): _35.MsgResetCircuitBreakerResponse;
                toJSON(message: _35.MsgResetCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_35.MsgResetCircuitBreakerResponse>): _35.MsgResetCircuitBreakerResponse;
            };
            QueryAccountRequest: {
                encode(message: _34.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryAccountRequest;
                fromJSON(object: any): _34.QueryAccountRequest;
                toJSON(message: _34.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_34.QueryAccountRequest>): _34.QueryAccountRequest;
            };
            AccountResponse: {
                encode(message: _34.AccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.AccountResponse;
                fromJSON(object: any): _34.AccountResponse;
                toJSON(message: _34.AccountResponse): unknown;
                fromPartial(object: Partial<_34.AccountResponse>): _34.AccountResponse;
            };
            QueryAccountsRequest: {
                encode(message: _34.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryAccountsRequest;
                fromJSON(object: any): _34.QueryAccountsRequest;
                toJSON(message: _34.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_34.QueryAccountsRequest>): _34.QueryAccountsRequest;
            };
            AccountsResponse: {
                encode(message: _34.AccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.AccountsResponse;
                fromJSON(object: any): _34.AccountsResponse;
                toJSON(message: _34.AccountsResponse): unknown;
                fromPartial(object: Partial<_34.AccountsResponse>): _34.AccountsResponse;
            };
            QueryDisabledListRequest: {
                encode(_: _34.QueryDisabledListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDisabledListRequest;
                fromJSON(_: any): _34.QueryDisabledListRequest;
                toJSON(_: _34.QueryDisabledListRequest): unknown;
                fromPartial(_: Partial<_34.QueryDisabledListRequest>): _34.QueryDisabledListRequest;
            };
            DisabledListResponse: {
                encode(message: _34.DisabledListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DisabledListResponse;
                fromJSON(object: any): _34.DisabledListResponse;
                toJSON(message: _34.DisabledListResponse): unknown;
                fromPartial(object: Partial<_34.DisabledListResponse>): _34.DisabledListResponse;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _37.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Module;
                    fromJSON(object: any): _37.Module;
                    toJSON(message: _37.Module): unknown;
                    fromPartial(object: Partial<_37.Module>): _37.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _239.MsgClientImpl;
            QueryClientImpl: typeof _220.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, block, evidence, validator, abci }: _39.MsgUpdateParams) => {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                        abci: {
                            vote_extensions_enable_height: string;
                        };
                    };
                    fromAmino: ({ authority, block, evidence, validator, abci }: {
                        authority: string;
                        block: {
                            max_bytes: string;
                            max_gas: string;
                        };
                        evidence: {
                            max_age_num_blocks: string;
                            max_age_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            max_bytes: string;
                        };
                        validator: {
                            pub_key_types: string[];
                        };
                        abci: {
                            vote_extensions_enable_height: string;
                        };
                    }) => _39.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _39.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgUpdateParams;
                fromJSON(object: any): _39.MsgUpdateParams;
                toJSON(message: _39.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_39.MsgUpdateParams>): _39.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _39.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgUpdateParamsResponse;
                fromJSON(_: any): _39.MsgUpdateParamsResponse;
                toJSON(_: _39.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_39.MsgUpdateParamsResponse>): _39.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _38.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsRequest;
                fromJSON(_: any): _38.QueryParamsRequest;
                toJSON(_: _38.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_38.QueryParamsRequest>): _38.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _38.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryParamsResponse;
                fromJSON(object: any): _38.QueryParamsResponse;
                toJSON(message: _38.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_38.QueryParamsResponse>): _38.QueryParamsResponse;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _40.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Module;
                    fromJSON(object: any): _40.Module;
                    toJSON(message: _40.Module): unknown;
                    fromPartial(object: Partial<_40.Module>): _40.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _240.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _42.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _42.MsgVerifyInvariant;
                    };
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _42.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _42.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, constantFee }: _42.MsgUpdateParams) => {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ authority, constant_fee }: {
                        authority: string;
                        constant_fee: {
                            denom: string;
                            amount: string;
                        };
                    }) => _42.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _42.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgVerifyInvariant;
                fromJSON(object: any): _42.MsgVerifyInvariant;
                toJSON(message: _42.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_42.MsgVerifyInvariant>): _42.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _42.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgVerifyInvariantResponse;
                fromJSON(_: any): _42.MsgVerifyInvariantResponse;
                toJSON(_: _42.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_42.MsgVerifyInvariantResponse>): _42.MsgVerifyInvariantResponse;
            };
            MsgUpdateParams: {
                encode(message: _42.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgUpdateParams;
                fromJSON(object: any): _42.MsgUpdateParams;
                toJSON(message: _42.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_42.MsgUpdateParams>): _42.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _42.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgUpdateParamsResponse;
                fromJSON(_: any): _42.MsgUpdateParamsResponse;
                toJSON(_: _42.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_42.MsgUpdateParamsResponse>): _42.MsgUpdateParamsResponse;
            };
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GenesisState;
                fromJSON(object: any): _41.GenesisState;
                toJSON(message: _41.GenesisState): unknown;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _43.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PubKey;
                fromJSON(object: any): _43.PubKey;
                toJSON(message: _43.PubKey): unknown;
                fromPartial(object: Partial<_43.PubKey>): _43.PubKey;
            };
            PrivKey: {
                encode(message: _43.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PrivKey;
                fromJSON(object: any): _43.PrivKey;
                toJSON(message: _43.PrivKey): unknown;
                fromPartial(object: Partial<_43.PrivKey>): _43.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _44.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.BIP44Params;
                    fromJSON(object: any): _44.BIP44Params;
                    toJSON(message: _44.BIP44Params): unknown;
                    fromPartial(object: Partial<_44.BIP44Params>): _44.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _45.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record;
                    fromJSON(object: any): _45.Record;
                    toJSON(message: _45.Record): unknown;
                    fromPartial(object: Partial<_45.Record>): _45.Record;
                };
                Record_Local: {
                    encode(message: _45.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Local;
                    fromJSON(object: any): _45.Record_Local;
                    toJSON(message: _45.Record_Local): unknown;
                    fromPartial(object: Partial<_45.Record_Local>): _45.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _45.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Ledger;
                    fromJSON(object: any): _45.Record_Ledger;
                    toJSON(message: _45.Record_Ledger): unknown;
                    fromPartial(object: Partial<_45.Record_Ledger>): _45.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _45.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Multi;
                    fromJSON(_: any): _45.Record_Multi;
                    toJSON(_: _45.Record_Multi): unknown;
                    fromPartial(_: Partial<_45.Record_Multi>): _45.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _45.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Record_Offline;
                    fromJSON(_: any): _45.Record_Offline;
                    toJSON(_: _45.Record_Offline): unknown;
                    fromPartial(_: Partial<_45.Record_Offline>): _45.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _46.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.LegacyAminoPubKey;
                fromJSON(object: any): _46.LegacyAminoPubKey;
                toJSON(message: _46.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_46.LegacyAminoPubKey>): _46.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _47.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PubKey;
                fromJSON(object: any): _47.PubKey;
                toJSON(message: _47.PubKey): unknown;
                fromPartial(object: Partial<_47.PubKey>): _47.PubKey;
            };
            PrivKey: {
                encode(message: _47.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.PrivKey;
                fromJSON(object: any): _47.PrivKey;
                toJSON(message: _47.PrivKey): unknown;
                fromPartial(object: Partial<_47.PrivKey>): _47.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _48.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PubKey;
                fromJSON(object: any): _48.PubKey;
                toJSON(message: _48.PubKey): unknown;
                fromPartial(object: Partial<_48.PubKey>): _48.PubKey;
            };
            PrivKey: {
                encode(message: _48.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PrivKey;
                fromJSON(object: any): _48.PrivKey;
                toJSON(message: _48.PrivKey): unknown;
                fromPartial(object: Partial<_48.PrivKey>): _48.PrivKey;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _49.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Module;
                    fromJSON(object: any): _49.Module;
                    toJSON(message: _49.Module): unknown;
                    fromPartial(object: Partial<_49.Module>): _49.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _241.MsgClientImpl;
            QueryClientImpl: typeof _221.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                validatorDistributionInfo(request: _52.QueryValidatorDistributionInfoRequest): Promise<_52.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _52.QueryValidatorOutstandingRewardsRequest): Promise<_52.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _52.QueryValidatorCommissionRequest): Promise<_52.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _52.QueryValidatorSlashesRequest): Promise<_52.QueryValidatorSlashesResponse>;
                delegationRewards(request: _52.QueryDelegationRewardsRequest): Promise<_52.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _52.QueryDelegationTotalRewardsRequest): Promise<_52.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _52.QueryDelegatorValidatorsRequest): Promise<_52.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _52.QueryDelegatorWithdrawAddressRequest): Promise<_52.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _52.QueryCommunityPoolRequest): Promise<_52.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositValidatorRewardsPool(value: _53.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _53.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _53.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _53.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _53.MsgFundCommunityPool;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _53.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _53.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _53.MsgDepositValidatorRewardsPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositValidatorRewardsPool(value: _53.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _53.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _53.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _53.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _53.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _53.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: any): {
                        typeUrl: string;
                        value: _53.MsgDepositValidatorRewardsPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _53.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _53.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _53.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _53.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _53.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _53.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _53.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _53.MsgFundCommunityPool;
                    };
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _53.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _53.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _53.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _53.MsgDepositValidatorRewardsPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _53.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _53.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _53.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _53.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _53.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _53.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _53.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _53.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _53.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            community_tax: string;
                            base_proposer_reward: string;
                            bonus_proposer_reward: string;
                            withdraw_addr_enabled: boolean;
                        };
                    }) => _53.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: ({ authority, recipient, amount }: _53.MsgCommunityPoolSpend) => {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ authority, recipient, amount }: {
                        authority: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _53.MsgCommunityPoolSpend;
                };
                "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
                    aminoType: string;
                    toAmino: ({ depositor, validatorAddress, amount }: _53.MsgDepositValidatorRewardsPool) => {
                        depositor: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ depositor, validator_address, amount }: {
                        depositor: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _53.MsgDepositValidatorRewardsPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _53.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSetWithdrawAddress;
                fromJSON(object: any): _53.MsgSetWithdrawAddress;
                toJSON(message: _53.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_53.MsgSetWithdrawAddress>): _53.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _53.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _53.MsgSetWithdrawAddressResponse;
                toJSON(_: _53.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_53.MsgSetWithdrawAddressResponse>): _53.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _53.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _53.MsgWithdrawDelegatorReward;
                toJSON(message: _53.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_53.MsgWithdrawDelegatorReward>): _53.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _53.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _53.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _53.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_53.MsgWithdrawDelegatorRewardResponse>): _53.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _53.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _53.MsgWithdrawValidatorCommission;
                toJSON(message: _53.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_53.MsgWithdrawValidatorCommission>): _53.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _53.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _53.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _53.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_53.MsgWithdrawValidatorCommissionResponse>): _53.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _53.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgFundCommunityPool;
                fromJSON(object: any): _53.MsgFundCommunityPool;
                toJSON(message: _53.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_53.MsgFundCommunityPool>): _53.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _53.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _53.MsgFundCommunityPoolResponse;
                toJSON(_: _53.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_53.MsgFundCommunityPoolResponse>): _53.MsgFundCommunityPoolResponse;
            };
            MsgUpdateParams: {
                encode(message: _53.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgUpdateParams;
                fromJSON(object: any): _53.MsgUpdateParams;
                toJSON(message: _53.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_53.MsgUpdateParams>): _53.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _53.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgUpdateParamsResponse;
                fromJSON(_: any): _53.MsgUpdateParamsResponse;
                toJSON(_: _53.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_53.MsgUpdateParamsResponse>): _53.MsgUpdateParamsResponse;
            };
            MsgCommunityPoolSpend: {
                encode(message: _53.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgCommunityPoolSpend;
                fromJSON(object: any): _53.MsgCommunityPoolSpend;
                toJSON(message: _53.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_53.MsgCommunityPoolSpend>): _53.MsgCommunityPoolSpend;
            };
            MsgCommunityPoolSpendResponse: {
                encode(_: _53.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _53.MsgCommunityPoolSpendResponse;
                toJSON(_: _53.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_53.MsgCommunityPoolSpendResponse>): _53.MsgCommunityPoolSpendResponse;
            };
            MsgDepositValidatorRewardsPool: {
                encode(message: _53.MsgDepositValidatorRewardsPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDepositValidatorRewardsPool;
                fromJSON(object: any): _53.MsgDepositValidatorRewardsPool;
                toJSON(message: _53.MsgDepositValidatorRewardsPool): unknown;
                fromPartial(object: Partial<_53.MsgDepositValidatorRewardsPool>): _53.MsgDepositValidatorRewardsPool;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                encode(_: _53.MsgDepositValidatorRewardsPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgDepositValidatorRewardsPoolResponse;
                fromJSON(_: any): _53.MsgDepositValidatorRewardsPoolResponse;
                toJSON(_: _53.MsgDepositValidatorRewardsPoolResponse): unknown;
                fromPartial(_: Partial<_53.MsgDepositValidatorRewardsPoolResponse>): _53.MsgDepositValidatorRewardsPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromJSON(_: any): _52.QueryParamsRequest;
                toJSON(_: _52.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromJSON(object: any): _52.QueryParamsResponse;
                toJSON(message: _52.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            QueryValidatorDistributionInfoRequest: {
                encode(message: _52.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _52.QueryValidatorDistributionInfoRequest;
                toJSON(message: _52.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_52.QueryValidatorDistributionInfoRequest>): _52.QueryValidatorDistributionInfoRequest;
            };
            QueryValidatorDistributionInfoResponse: {
                encode(message: _52.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _52.QueryValidatorDistributionInfoResponse;
                toJSON(message: _52.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_52.QueryValidatorDistributionInfoResponse>): _52.QueryValidatorDistributionInfoResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _52.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _52.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _52.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_52.QueryValidatorOutstandingRewardsRequest>): _52.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _52.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _52.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _52.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_52.QueryValidatorOutstandingRewardsResponse>): _52.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _52.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorCommissionRequest;
                fromJSON(object: any): _52.QueryValidatorCommissionRequest;
                toJSON(message: _52.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_52.QueryValidatorCommissionRequest>): _52.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _52.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorCommissionResponse;
                fromJSON(object: any): _52.QueryValidatorCommissionResponse;
                toJSON(message: _52.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_52.QueryValidatorCommissionResponse>): _52.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _52.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorSlashesRequest;
                fromJSON(object: any): _52.QueryValidatorSlashesRequest;
                toJSON(message: _52.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_52.QueryValidatorSlashesRequest>): _52.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _52.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryValidatorSlashesResponse;
                fromJSON(object: any): _52.QueryValidatorSlashesResponse;
                toJSON(message: _52.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_52.QueryValidatorSlashesResponse>): _52.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _52.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegationRewardsRequest;
                fromJSON(object: any): _52.QueryDelegationRewardsRequest;
                toJSON(message: _52.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_52.QueryDelegationRewardsRequest>): _52.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _52.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegationRewardsResponse;
                fromJSON(object: any): _52.QueryDelegationRewardsResponse;
                toJSON(message: _52.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_52.QueryDelegationRewardsResponse>): _52.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _52.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _52.QueryDelegationTotalRewardsRequest;
                toJSON(message: _52.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_52.QueryDelegationTotalRewardsRequest>): _52.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _52.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _52.QueryDelegationTotalRewardsResponse;
                toJSON(message: _52.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_52.QueryDelegationTotalRewardsResponse>): _52.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _52.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _52.QueryDelegatorValidatorsRequest;
                toJSON(message: _52.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_52.QueryDelegatorValidatorsRequest>): _52.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _52.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _52.QueryDelegatorValidatorsResponse;
                toJSON(message: _52.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_52.QueryDelegatorValidatorsResponse>): _52.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _52.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _52.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _52.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_52.QueryDelegatorWithdrawAddressRequest>): _52.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _52.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _52.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _52.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_52.QueryDelegatorWithdrawAddressResponse>): _52.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _52.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCommunityPoolRequest;
                fromJSON(_: any): _52.QueryCommunityPoolRequest;
                toJSON(_: _52.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_52.QueryCommunityPoolRequest>): _52.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _52.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCommunityPoolResponse;
                fromJSON(object: any): _52.QueryCommunityPoolResponse;
                toJSON(message: _52.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_52.QueryCommunityPoolResponse>): _52.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _51.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DelegatorWithdrawInfo;
                fromJSON(object: any): _51.DelegatorWithdrawInfo;
                toJSON(message: _51.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_51.DelegatorWithdrawInfo>): _51.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _51.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _51.ValidatorOutstandingRewardsRecord;
                toJSON(message: _51.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_51.ValidatorOutstandingRewardsRecord>): _51.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _51.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _51.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _51.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_51.ValidatorAccumulatedCommissionRecord>): _51.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _51.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _51.ValidatorHistoricalRewardsRecord;
                toJSON(message: _51.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_51.ValidatorHistoricalRewardsRecord>): _51.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _51.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _51.ValidatorCurrentRewardsRecord;
                toJSON(message: _51.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_51.ValidatorCurrentRewardsRecord>): _51.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _51.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DelegatorStartingInfoRecord;
                fromJSON(object: any): _51.DelegatorStartingInfoRecord;
                toJSON(message: _51.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_51.DelegatorStartingInfoRecord>): _51.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _51.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorSlashEventRecord;
                fromJSON(object: any): _51.ValidatorSlashEventRecord;
                toJSON(message: _51.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_51.ValidatorSlashEventRecord>): _51.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromJSON(object: any): _51.GenesisState;
                toJSON(message: _51.GenesisState): unknown;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
            Params: {
                encode(message: _50.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Params;
                fromJSON(object: any): _50.Params;
                toJSON(message: _50.Params): unknown;
                fromPartial(object: Partial<_50.Params>): _50.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _50.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorHistoricalRewards;
                fromJSON(object: any): _50.ValidatorHistoricalRewards;
                toJSON(message: _50.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_50.ValidatorHistoricalRewards>): _50.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _50.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorCurrentRewards;
                fromJSON(object: any): _50.ValidatorCurrentRewards;
                toJSON(message: _50.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_50.ValidatorCurrentRewards>): _50.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _50.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorAccumulatedCommission;
                fromJSON(object: any): _50.ValidatorAccumulatedCommission;
                toJSON(message: _50.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_50.ValidatorAccumulatedCommission>): _50.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _50.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorOutstandingRewards;
                fromJSON(object: any): _50.ValidatorOutstandingRewards;
                toJSON(message: _50.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_50.ValidatorOutstandingRewards>): _50.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _50.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorSlashEvent;
                fromJSON(object: any): _50.ValidatorSlashEvent;
                toJSON(message: _50.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_50.ValidatorSlashEvent>): _50.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _50.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValidatorSlashEvents;
                fromJSON(object: any): _50.ValidatorSlashEvents;
                toJSON(message: _50.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_50.ValidatorSlashEvents>): _50.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _50.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.FeePool;
                fromJSON(object: any): _50.FeePool;
                toJSON(message: _50.FeePool): unknown;
                fromPartial(object: Partial<_50.FeePool>): _50.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _50.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CommunityPoolSpendProposal;
                fromJSON(object: any): _50.CommunityPoolSpendProposal;
                toJSON(message: _50.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_50.CommunityPoolSpendProposal>): _50.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _50.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DelegatorStartingInfo;
                fromJSON(object: any): _50.DelegatorStartingInfo;
                toJSON(message: _50.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_50.DelegatorStartingInfo>): _50.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _50.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DelegationDelegatorReward;
                fromJSON(object: any): _50.DelegationDelegatorReward;
                toJSON(message: _50.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_50.DelegationDelegatorReward>): _50.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _50.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _50.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _50.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_50.CommunityPoolSpendProposalWithDeposit>): _50.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _54.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Module;
                    fromJSON(_: any): _54.Module;
                    toJSON(_: _54.Module): unknown;
                    fromPartial(_: Partial<_54.Module>): _54.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _242.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _57.QueryEvidenceRequest): Promise<_57.QueryEvidenceResponse>;
                allEvidence(request?: _57.QueryAllEvidenceRequest): Promise<_57.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _58.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _58.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _58.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _58.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _58.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _58.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _58.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _58.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _58.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _58.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitEvidence;
                fromJSON(object: any): _58.MsgSubmitEvidence;
                toJSON(message: _58.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_58.MsgSubmitEvidence>): _58.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _58.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _58.MsgSubmitEvidenceResponse;
                toJSON(message: _58.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_58.MsgSubmitEvidenceResponse>): _58.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _57.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryEvidenceRequest;
                fromJSON(object: any): _57.QueryEvidenceRequest;
                toJSON(message: _57.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_57.QueryEvidenceRequest>): _57.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _57.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryEvidenceResponse;
                fromJSON(object: any): _57.QueryEvidenceResponse;
                toJSON(message: _57.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_57.QueryEvidenceResponse>): _57.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _57.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllEvidenceRequest;
                fromJSON(object: any): _57.QueryAllEvidenceRequest;
                toJSON(message: _57.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_57.QueryAllEvidenceRequest>): _57.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _57.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAllEvidenceResponse;
                fromJSON(object: any): _57.QueryAllEvidenceResponse;
                toJSON(message: _57.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_57.QueryAllEvidenceResponse>): _57.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromJSON(object: any): _56.GenesisState;
                toJSON(message: _56.GenesisState): unknown;
                fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
            };
            Equivocation: {
                encode(message: _55.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Equivocation;
                fromJSON(object: any): _55.Equivocation;
                toJSON(message: _55.Equivocation): unknown;
                fromPartial(object: Partial<_55.Equivocation>): _55.Equivocation;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _59.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Module;
                    fromJSON(_: any): _59.Module;
                    toJSON(_: _59.Module): unknown;
                    fromPartial(_: Partial<_59.Module>): _59.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _243.MsgClientImpl;
            QueryClientImpl: typeof _223.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _62.QueryAllowanceRequest): Promise<_62.QueryAllowanceResponse>;
                allowances(request: _62.QueryAllowancesRequest): Promise<_62.QueryAllowancesResponse>;
                allowancesByGranter(request: _62.QueryAllowancesByGranterRequest): Promise<_62.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pruneAllowances(value: _63.MsgPruneAllowances): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _63.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _63.MsgPruneAllowances;
                    };
                };
                toJSON: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pruneAllowances(value: _63.MsgPruneAllowances): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: any): {
                        typeUrl: string;
                        value: _63.MsgPruneAllowances;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _63.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _63.MsgPruneAllowances;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _63.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _63.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _63.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _63.MsgRevokeAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
                    aminoType: string;
                    toAmino: ({ pruner }: _63.MsgPruneAllowances) => {
                        pruner: string;
                    };
                    fromAmino: ({ pruner }: {
                        pruner: string;
                    }) => _63.MsgPruneAllowances;
                };
            };
            MsgGrantAllowance: {
                encode(message: _63.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgGrantAllowance;
                fromJSON(object: any): _63.MsgGrantAllowance;
                toJSON(message: _63.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_63.MsgGrantAllowance>): _63.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _63.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgGrantAllowanceResponse;
                fromJSON(_: any): _63.MsgGrantAllowanceResponse;
                toJSON(_: _63.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_63.MsgGrantAllowanceResponse>): _63.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _63.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgRevokeAllowance;
                fromJSON(object: any): _63.MsgRevokeAllowance;
                toJSON(message: _63.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_63.MsgRevokeAllowance>): _63.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _63.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _63.MsgRevokeAllowanceResponse;
                toJSON(_: _63.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_63.MsgRevokeAllowanceResponse>): _63.MsgRevokeAllowanceResponse;
            };
            MsgPruneAllowances: {
                encode(message: _63.MsgPruneAllowances, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgPruneAllowances;
                fromJSON(object: any): _63.MsgPruneAllowances;
                toJSON(message: _63.MsgPruneAllowances): unknown;
                fromPartial(object: Partial<_63.MsgPruneAllowances>): _63.MsgPruneAllowances;
            };
            MsgPruneAllowancesResponse: {
                encode(_: _63.MsgPruneAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgPruneAllowancesResponse;
                fromJSON(_: any): _63.MsgPruneAllowancesResponse;
                toJSON(_: _63.MsgPruneAllowancesResponse): unknown;
                fromPartial(_: Partial<_63.MsgPruneAllowancesResponse>): _63.MsgPruneAllowancesResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _62.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAllowanceRequest;
                fromJSON(object: any): _62.QueryAllowanceRequest;
                toJSON(message: _62.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_62.QueryAllowanceRequest>): _62.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _62.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAllowanceResponse;
                fromJSON(object: any): _62.QueryAllowanceResponse;
                toJSON(message: _62.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_62.QueryAllowanceResponse>): _62.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _62.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAllowancesRequest;
                fromJSON(object: any): _62.QueryAllowancesRequest;
                toJSON(message: _62.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesRequest>): _62.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _62.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAllowancesResponse;
                fromJSON(object: any): _62.QueryAllowancesResponse;
                toJSON(message: _62.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesResponse>): _62.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _62.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _62.QueryAllowancesByGranterRequest;
                toJSON(message: _62.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesByGranterRequest>): _62.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _62.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _62.QueryAllowancesByGranterResponse;
                toJSON(message: _62.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesByGranterResponse>): _62.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
            };
            BasicAllowance: {
                encode(message: _60.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.BasicAllowance;
                fromJSON(object: any): _60.BasicAllowance;
                toJSON(message: _60.BasicAllowance): unknown;
                fromPartial(object: Partial<_60.BasicAllowance>): _60.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _60.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PeriodicAllowance;
                fromJSON(object: any): _60.PeriodicAllowance;
                toJSON(message: _60.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_60.PeriodicAllowance>): _60.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _60.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.AllowedMsgAllowance;
                fromJSON(object: any): _60.AllowedMsgAllowance;
                toJSON(message: _60.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_60.AllowedMsgAllowance>): _60.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _60.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Grant;
                fromJSON(object: any): _60.Grant;
                toJSON(message: _60.Grant): unknown;
                fromPartial(object: Partial<_60.Grant>): _60.Grant;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _64.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Module;
                    fromJSON(_: any): _64.Module;
                    toJSON(_: _64.Module): unknown;
                    fromPartial(_: Partial<_64.Module>): _64.Module;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GenesisState;
                fromJSON(object: any): _65.GenesisState;
                toJSON(message: _65.GenesisState): unknown;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _66.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Module;
                    fromJSON(object: any): _66.Module;
                    toJSON(message: _66.Module): unknown;
                    fromPartial(object: Partial<_66.Module>): _66.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _244.MsgClientImpl;
            QueryClientImpl: typeof _224.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                constitution(request?: _69.QueryConstitutionRequest): Promise<_69.QueryConstitutionResponse>;
                proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                proposals(request: _69.QueryProposalsRequest): Promise<_69.QueryProposalsResponse>;
                vote(request: _69.QueryVoteRequest): Promise<_69.QueryVoteResponse>;
                votes(request: _69.QueryVotesRequest): Promise<_69.QueryVotesResponse>;
                params(request: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                deposit(request: _69.QueryDepositRequest): Promise<_69.QueryDepositResponse>;
                deposits(request: _69.QueryDepositsRequest): Promise<_69.QueryDepositsResponse>;
                tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _70.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _70.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelProposal(value: _70.MsgCancelProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _70.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _70.MsgExecLegacyContent;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                    updateParams(value: _70.MsgUpdateParams): {
                        typeUrl: string;
                        value: _70.MsgUpdateParams;
                    };
                    cancelProposal(value: _70.MsgCancelProposal): {
                        typeUrl: string;
                        value: _70.MsgCancelProposal;
                    };
                };
                toJSON: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _70.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _70.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelProposal(value: _70.MsgCancelProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _70.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _70.MsgUpdateParams;
                    };
                    cancelProposal(value: any): {
                        typeUrl: string;
                        value: _70.MsgCancelProposal;
                    };
                };
                fromPartial: {
                    submitProposal(value: _70.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _70.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _70.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _70.MsgExecLegacyContent;
                    };
                    vote(value: _70.MsgVote): {
                        typeUrl: string;
                        value: _70.MsgVote;
                    };
                    voteWeighted(value: _70.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _70.MsgVoteWeighted;
                    };
                    deposit(value: _70.MsgDeposit): {
                        typeUrl: string;
                        value: _70.MsgDeposit;
                    };
                    updateParams(value: _70.MsgUpdateParams): {
                        typeUrl: string;
                        value: _70.MsgUpdateParams;
                    };
                    cancelProposal(value: _70.MsgCancelProposal): {
                        typeUrl: string;
                        value: _70.MsgCancelProposal;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata, title, summary, expedited }: _70.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                        expedited: boolean;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata, title, summary, expedited }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                        title: string;
                        summary: string;
                        expedited: boolean;
                    }) => _70.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _70.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _70.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _70.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _70.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _70.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _70.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _70.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _70.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _70.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            proposal_cancel_ratio: string;
                            proposal_cancel_dest: string;
                            expedited_voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            expedited_threshold: string;
                            expedited_min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                            min_deposit_ratio: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            max_deposit_period: {
                                seconds: string;
                                nanos: number;
                            };
                            voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            quorum: string;
                            threshold: string;
                            veto_threshold: string;
                            min_initial_deposit_ratio: string;
                            proposal_cancel_ratio: string;
                            proposal_cancel_dest: string;
                            expedited_voting_period: {
                                seconds: string;
                                nanos: number;
                            };
                            expedited_threshold: string;
                            expedited_min_deposit: {
                                denom: string;
                                amount: string;
                            }[];
                            burn_vote_quorum: boolean;
                            burn_proposal_deposit_prevote: boolean;
                            burn_vote_veto: boolean;
                            min_deposit_ratio: string;
                        };
                    }) => _70.MsgUpdateParams;
                };
                "/cosmos.gov.v1.MsgCancelProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, proposer }: _70.MsgCancelProposal) => {
                        proposal_id: string;
                        proposer: string;
                    };
                    fromAmino: ({ proposal_id, proposer }: {
                        proposal_id: string;
                        proposer: string;
                    }) => _70.MsgCancelProposal;
                };
            };
            MsgSubmitProposal: {
                encode(message: _70.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSubmitProposal;
                fromJSON(object: any): _70.MsgSubmitProposal;
                toJSON(message: _70.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_70.MsgSubmitProposal>): _70.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _70.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgSubmitProposalResponse;
                fromJSON(object: any): _70.MsgSubmitProposalResponse;
                toJSON(message: _70.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_70.MsgSubmitProposalResponse>): _70.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _70.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgExecLegacyContent;
                fromJSON(object: any): _70.MsgExecLegacyContent;
                toJSON(message: _70.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_70.MsgExecLegacyContent>): _70.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _70.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgExecLegacyContentResponse;
                fromJSON(_: any): _70.MsgExecLegacyContentResponse;
                toJSON(_: _70.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_70.MsgExecLegacyContentResponse>): _70.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _70.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgVote;
                fromJSON(object: any): _70.MsgVote;
                toJSON(message: _70.MsgVote): unknown;
                fromPartial(object: Partial<_70.MsgVote>): _70.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _70.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgVoteResponse;
                fromJSON(_: any): _70.MsgVoteResponse;
                toJSON(_: _70.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_70.MsgVoteResponse>): _70.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _70.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgVoteWeighted;
                fromJSON(object: any): _70.MsgVoteWeighted;
                toJSON(message: _70.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_70.MsgVoteWeighted>): _70.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _70.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgVoteWeightedResponse;
                fromJSON(_: any): _70.MsgVoteWeightedResponse;
                toJSON(_: _70.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_70.MsgVoteWeightedResponse>): _70.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _70.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgDeposit;
                fromJSON(object: any): _70.MsgDeposit;
                toJSON(message: _70.MsgDeposit): unknown;
                fromPartial(object: Partial<_70.MsgDeposit>): _70.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _70.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgDepositResponse;
                fromJSON(_: any): _70.MsgDepositResponse;
                toJSON(_: _70.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_70.MsgDepositResponse>): _70.MsgDepositResponse;
            };
            MsgUpdateParams: {
                encode(message: _70.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateParams;
                fromJSON(object: any): _70.MsgUpdateParams;
                toJSON(message: _70.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_70.MsgUpdateParams>): _70.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _70.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgUpdateParamsResponse;
                fromJSON(_: any): _70.MsgUpdateParamsResponse;
                toJSON(_: _70.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_70.MsgUpdateParamsResponse>): _70.MsgUpdateParamsResponse;
            };
            MsgCancelProposal: {
                encode(message: _70.MsgCancelProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCancelProposal;
                fromJSON(object: any): _70.MsgCancelProposal;
                toJSON(message: _70.MsgCancelProposal): unknown;
                fromPartial(object: Partial<_70.MsgCancelProposal>): _70.MsgCancelProposal;
            };
            MsgCancelProposalResponse: {
                encode(message: _70.MsgCancelProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgCancelProposalResponse;
                fromJSON(object: any): _70.MsgCancelProposalResponse;
                toJSON(message: _70.MsgCancelProposalResponse): unknown;
                fromPartial(object: Partial<_70.MsgCancelProposalResponse>): _70.MsgCancelProposalResponse;
            };
            QueryConstitutionRequest: {
                encode(_: _69.QueryConstitutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConstitutionRequest;
                fromJSON(_: any): _69.QueryConstitutionRequest;
                toJSON(_: _69.QueryConstitutionRequest): unknown;
                fromPartial(_: Partial<_69.QueryConstitutionRequest>): _69.QueryConstitutionRequest;
            };
            QueryConstitutionResponse: {
                encode(message: _69.QueryConstitutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConstitutionResponse;
                fromJSON(object: any): _69.QueryConstitutionResponse;
                toJSON(message: _69.QueryConstitutionResponse): unknown;
                fromPartial(object: Partial<_69.QueryConstitutionResponse>): _69.QueryConstitutionResponse;
            };
            QueryProposalRequest: {
                encode(message: _69.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalRequest;
                fromJSON(object: any): _69.QueryProposalRequest;
                toJSON(message: _69.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_69.QueryProposalRequest>): _69.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _69.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalResponse;
                fromJSON(object: any): _69.QueryProposalResponse;
                toJSON(message: _69.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_69.QueryProposalResponse>): _69.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _69.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalsRequest;
                fromJSON(object: any): _69.QueryProposalsRequest;
                toJSON(message: _69.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_69.QueryProposalsRequest>): _69.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _69.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryProposalsResponse;
                fromJSON(object: any): _69.QueryProposalsResponse;
                toJSON(message: _69.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_69.QueryProposalsResponse>): _69.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _69.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVoteRequest;
                fromJSON(object: any): _69.QueryVoteRequest;
                toJSON(message: _69.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_69.QueryVoteRequest>): _69.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _69.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVoteResponse;
                fromJSON(object: any): _69.QueryVoteResponse;
                toJSON(message: _69.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_69.QueryVoteResponse>): _69.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _69.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVotesRequest;
                fromJSON(object: any): _69.QueryVotesRequest;
                toJSON(message: _69.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_69.QueryVotesRequest>): _69.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _69.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryVotesResponse;
                fromJSON(object: any): _69.QueryVotesResponse;
                toJSON(message: _69.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_69.QueryVotesResponse>): _69.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsRequest;
                fromJSON(object: any): _69.QueryParamsRequest;
                toJSON(message: _69.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_69.QueryParamsRequest>): _69.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsResponse;
                fromJSON(object: any): _69.QueryParamsResponse;
                toJSON(message: _69.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_69.QueryParamsResponse>): _69.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _69.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDepositRequest;
                fromJSON(object: any): _69.QueryDepositRequest;
                toJSON(message: _69.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_69.QueryDepositRequest>): _69.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _69.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDepositResponse;
                fromJSON(object: any): _69.QueryDepositResponse;
                toJSON(message: _69.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_69.QueryDepositResponse>): _69.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _69.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDepositsRequest;
                fromJSON(object: any): _69.QueryDepositsRequest;
                toJSON(message: _69.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_69.QueryDepositsRequest>): _69.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _69.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDepositsResponse;
                fromJSON(object: any): _69.QueryDepositsResponse;
                toJSON(message: _69.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_69.QueryDepositsResponse>): _69.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _69.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryTallyResultRequest;
                fromJSON(object: any): _69.QueryTallyResultRequest;
                toJSON(message: _69.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_69.QueryTallyResultRequest>): _69.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _69.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryTallyResultResponse;
                fromJSON(object: any): _69.QueryTallyResultResponse;
                toJSON(message: _69.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_69.QueryTallyResultResponse>): _69.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _68.VoteOption;
            voteOptionToJSON(object: _68.VoteOption): string;
            proposalStatusFromJSON(object: any): _68.ProposalStatus;
            proposalStatusToJSON(object: _68.ProposalStatus): string;
            VoteOption: typeof _68.VoteOption;
            VoteOptionSDKType: typeof _68.VoteOptionSDKType;
            ProposalStatus: typeof _68.ProposalStatus;
            ProposalStatusSDKType: typeof _68.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _68.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.WeightedVoteOption;
                fromJSON(object: any): _68.WeightedVoteOption;
                toJSON(message: _68.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_68.WeightedVoteOption>): _68.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _68.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Deposit;
                fromJSON(object: any): _68.Deposit;
                toJSON(message: _68.Deposit): unknown;
                fromPartial(object: Partial<_68.Deposit>): _68.Deposit;
            };
            Proposal: {
                encode(message: _68.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Proposal;
                fromJSON(object: any): _68.Proposal;
                toJSON(message: _68.Proposal): unknown;
                fromPartial(object: Partial<_68.Proposal>): _68.Proposal;
            };
            TallyResult: {
                encode(message: _68.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.TallyResult;
                fromJSON(object: any): _68.TallyResult;
                toJSON(message: _68.TallyResult): unknown;
                fromPartial(object: Partial<_68.TallyResult>): _68.TallyResult;
            };
            Vote: {
                encode(message: _68.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Vote;
                fromJSON(object: any): _68.Vote;
                toJSON(message: _68.Vote): unknown;
                fromPartial(object: Partial<_68.Vote>): _68.Vote;
            };
            DepositParams: {
                encode(message: _68.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.DepositParams;
                fromJSON(object: any): _68.DepositParams;
                toJSON(message: _68.DepositParams): unknown;
                fromPartial(object: Partial<_68.DepositParams>): _68.DepositParams;
            };
            VotingParams: {
                encode(message: _68.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.VotingParams;
                fromJSON(object: any): _68.VotingParams;
                toJSON(message: _68.VotingParams): unknown;
                fromPartial(object: Partial<_68.VotingParams>): _68.VotingParams;
            };
            TallyParams: {
                encode(message: _68.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.TallyParams;
                fromJSON(object: any): _68.TallyParams;
                toJSON(message: _68.TallyParams): unknown;
                fromPartial(object: Partial<_68.TallyParams>): _68.TallyParams;
            };
            Params: {
                encode(message: _68.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Params;
                fromJSON(object: any): _68.Params;
                toJSON(message: _68.Params): unknown;
                fromPartial(object: Partial<_68.Params>): _68.Params;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _245.MsgClientImpl;
            QueryClientImpl: typeof _225.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _73.QueryProposalRequest): Promise<_73.QueryProposalResponse>;
                proposals(request: _73.QueryProposalsRequest): Promise<_73.QueryProposalsResponse>;
                vote(request: _73.QueryVoteRequest): Promise<_73.QueryVoteResponse>;
                votes(request: _73.QueryVotesRequest): Promise<_73.QueryVotesResponse>;
                params(request: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                deposit(request: _73.QueryDepositRequest): Promise<_73.QueryDepositResponse>;
                deposits(request: _73.QueryDepositsRequest): Promise<_73.QueryDepositsResponse>;
                tallyResult(request: _73.QueryTallyResultRequest): Promise<_73.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _74.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _74.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _74.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _74.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _74.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _74.MsgSubmitProposal;
                    };
                    vote(value: _74.MsgVote): {
                        typeUrl: string;
                        value: _74.MsgVote;
                    };
                    voteWeighted(value: _74.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _74.MsgVoteWeighted;
                    };
                    deposit(value: _74.MsgDeposit): {
                        typeUrl: string;
                        value: _74.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _74.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _74.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _74.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _74.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _74.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _74.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _74.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _74.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _74.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _74.MsgSubmitProposal;
                    };
                    vote(value: _74.MsgVote): {
                        typeUrl: string;
                        value: _74.MsgVote;
                    };
                    voteWeighted(value: _74.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _74.MsgVoteWeighted;
                    };
                    deposit(value: _74.MsgDeposit): {
                        typeUrl: string;
                        value: _74.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _74.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _74.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _74.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _74.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _74.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _74.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _74.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _74.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _74.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSubmitProposal;
                fromJSON(object: any): _74.MsgSubmitProposal;
                toJSON(message: _74.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_74.MsgSubmitProposal>): _74.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _74.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSubmitProposalResponse;
                fromJSON(object: any): _74.MsgSubmitProposalResponse;
                toJSON(message: _74.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_74.MsgSubmitProposalResponse>): _74.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _74.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgVote;
                fromJSON(object: any): _74.MsgVote;
                toJSON(message: _74.MsgVote): unknown;
                fromPartial(object: Partial<_74.MsgVote>): _74.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _74.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgVoteResponse;
                fromJSON(_: any): _74.MsgVoteResponse;
                toJSON(_: _74.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_74.MsgVoteResponse>): _74.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _74.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgVoteWeighted;
                fromJSON(object: any): _74.MsgVoteWeighted;
                toJSON(message: _74.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_74.MsgVoteWeighted>): _74.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _74.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgVoteWeightedResponse;
                fromJSON(_: any): _74.MsgVoteWeightedResponse;
                toJSON(_: _74.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_74.MsgVoteWeightedResponse>): _74.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _74.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgDeposit;
                fromJSON(object: any): _74.MsgDeposit;
                toJSON(message: _74.MsgDeposit): unknown;
                fromPartial(object: Partial<_74.MsgDeposit>): _74.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _74.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgDepositResponse;
                fromJSON(_: any): _74.MsgDepositResponse;
                toJSON(_: _74.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_74.MsgDepositResponse>): _74.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _73.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryProposalRequest;
                fromJSON(object: any): _73.QueryProposalRequest;
                toJSON(message: _73.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_73.QueryProposalRequest>): _73.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _73.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryProposalResponse;
                fromJSON(object: any): _73.QueryProposalResponse;
                toJSON(message: _73.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_73.QueryProposalResponse>): _73.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _73.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryProposalsRequest;
                fromJSON(object: any): _73.QueryProposalsRequest;
                toJSON(message: _73.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_73.QueryProposalsRequest>): _73.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _73.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryProposalsResponse;
                fromJSON(object: any): _73.QueryProposalsResponse;
                toJSON(message: _73.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_73.QueryProposalsResponse>): _73.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _73.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryVoteRequest;
                fromJSON(object: any): _73.QueryVoteRequest;
                toJSON(message: _73.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_73.QueryVoteRequest>): _73.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _73.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryVoteResponse;
                fromJSON(object: any): _73.QueryVoteResponse;
                toJSON(message: _73.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_73.QueryVoteResponse>): _73.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _73.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryVotesRequest;
                fromJSON(object: any): _73.QueryVotesRequest;
                toJSON(message: _73.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_73.QueryVotesRequest>): _73.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _73.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryVotesResponse;
                fromJSON(object: any): _73.QueryVotesResponse;
                toJSON(message: _73.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_73.QueryVotesResponse>): _73.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _73.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsRequest;
                fromJSON(object: any): _73.QueryParamsRequest;
                toJSON(message: _73.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_73.QueryParamsRequest>): _73.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _73.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsResponse;
                fromJSON(object: any): _73.QueryParamsResponse;
                toJSON(message: _73.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_73.QueryParamsResponse>): _73.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _73.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDepositRequest;
                fromJSON(object: any): _73.QueryDepositRequest;
                toJSON(message: _73.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_73.QueryDepositRequest>): _73.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _73.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDepositResponse;
                fromJSON(object: any): _73.QueryDepositResponse;
                toJSON(message: _73.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_73.QueryDepositResponse>): _73.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _73.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDepositsRequest;
                fromJSON(object: any): _73.QueryDepositsRequest;
                toJSON(message: _73.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_73.QueryDepositsRequest>): _73.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _73.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDepositsResponse;
                fromJSON(object: any): _73.QueryDepositsResponse;
                toJSON(message: _73.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_73.QueryDepositsResponse>): _73.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _73.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryTallyResultRequest;
                fromJSON(object: any): _73.QueryTallyResultRequest;
                toJSON(message: _73.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_73.QueryTallyResultRequest>): _73.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _73.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryTallyResultResponse;
                fromJSON(object: any): _73.QueryTallyResultResponse;
                toJSON(message: _73.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_73.QueryTallyResultResponse>): _73.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _72.VoteOption;
            voteOptionToJSON(object: _72.VoteOption): string;
            proposalStatusFromJSON(object: any): _72.ProposalStatus;
            proposalStatusToJSON(object: _72.ProposalStatus): string;
            VoteOption: typeof _72.VoteOption;
            VoteOptionSDKType: typeof _72.VoteOptionSDKType;
            ProposalStatus: typeof _72.ProposalStatus;
            ProposalStatusSDKType: typeof _72.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _72.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.WeightedVoteOption;
                fromJSON(object: any): _72.WeightedVoteOption;
                toJSON(message: _72.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_72.WeightedVoteOption>): _72.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _72.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TextProposal;
                fromJSON(object: any): _72.TextProposal;
                toJSON(message: _72.TextProposal): unknown;
                fromPartial(object: Partial<_72.TextProposal>): _72.TextProposal;
            };
            Deposit: {
                encode(message: _72.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Deposit;
                fromJSON(object: any): _72.Deposit;
                toJSON(message: _72.Deposit): unknown;
                fromPartial(object: Partial<_72.Deposit>): _72.Deposit;
            };
            Proposal: {
                encode(message: _72.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Proposal;
                fromJSON(object: any): _72.Proposal;
                toJSON(message: _72.Proposal): unknown;
                fromPartial(object: Partial<_72.Proposal>): _72.Proposal;
            };
            TallyResult: {
                encode(message: _72.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TallyResult;
                fromJSON(object: any): _72.TallyResult;
                toJSON(message: _72.TallyResult): unknown;
                fromPartial(object: Partial<_72.TallyResult>): _72.TallyResult;
            };
            Vote: {
                encode(message: _72.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Vote;
                fromJSON(object: any): _72.Vote;
                toJSON(message: _72.Vote): unknown;
                fromPartial(object: Partial<_72.Vote>): _72.Vote;
            };
            DepositParams: {
                encode(message: _72.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.DepositParams;
                fromJSON(object: any): _72.DepositParams;
                toJSON(message: _72.DepositParams): unknown;
                fromPartial(object: Partial<_72.DepositParams>): _72.DepositParams;
            };
            VotingParams: {
                encode(message: _72.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.VotingParams;
                fromJSON(object: any): _72.VotingParams;
                toJSON(message: _72.VotingParams): unknown;
                fromPartial(object: Partial<_72.VotingParams>): _72.VotingParams;
            };
            TallyParams: {
                encode(message: _72.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TallyParams;
                fromJSON(object: any): _72.TallyParams;
                toJSON(message: _72.TallyParams): unknown;
                fromPartial(object: Partial<_72.TallyParams>): _72.TallyParams;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                fromJSON(object: any): _71.GenesisState;
                toJSON(message: _71.GenesisState): unknown;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _75.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Module;
                    fromJSON(object: any): _75.Module;
                    toJSON(message: _75.Module): unknown;
                    fromPartial(object: Partial<_75.Module>): _75.Module;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _246.MsgClientImpl;
            QueryClientImpl: typeof _226.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _78.QueryGroupInfoRequest): Promise<_78.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _78.QueryGroupPolicyInfoRequest): Promise<_78.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _78.QueryGroupMembersRequest): Promise<_78.QueryGroupMembersResponse>;
                groupsByAdmin(request: _78.QueryGroupsByAdminRequest): Promise<_78.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _78.QueryGroupPoliciesByGroupRequest): Promise<_78.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _78.QueryGroupPoliciesByAdminRequest): Promise<_78.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _78.QueryProposalRequest): Promise<_78.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _78.QueryProposalsByGroupPolicyRequest): Promise<_78.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _78.QueryVoteByProposalVoterRequest): Promise<_78.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _78.QueryVotesByProposalRequest): Promise<_78.QueryVotesByProposalResponse>;
                votesByVoter(request: _78.QueryVotesByVoterRequest): Promise<_78.QueryVotesByVoterResponse>;
                groupsByMember(request: _78.QueryGroupsByMemberRequest): Promise<_78.QueryGroupsByMemberResponse>;
                tallyResult(request: _78.QueryTallyResultRequest): Promise<_78.QueryTallyResultResponse>;
                groups(request?: _78.QueryGroupsRequest): Promise<_78.QueryGroupsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _79.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _79.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _79.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _79.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _79.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _79.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _79.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _79.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _79.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _79.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _79.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _79.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _79.MsgCreateGroup): {
                        typeUrl: string;
                        value: _79.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _79.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _79.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _79.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _79.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _79.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _79.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _79.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _79.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _79.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _79.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _79.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _79.MsgWithdrawProposal;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    exec(value: _79.MsgExec): {
                        typeUrl: string;
                        value: _79.MsgExec;
                    };
                    leaveGroup(value: _79.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _79.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _79.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _79.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _79.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _79.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _79.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _79.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _79.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _79.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _79.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _79.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _79.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _79.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _79.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _79.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _79.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _79.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _79.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _79.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _79.MsgCreateGroup): {
                        typeUrl: string;
                        value: _79.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _79.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _79.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _79.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _79.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _79.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _79.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _79.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _79.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _79.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _79.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _79.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _79.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _79.MsgWithdrawProposal;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    exec(value: _79.MsgExec): {
                        typeUrl: string;
                        value: _79.MsgExec;
                    };
                    leaveGroup(value: _79.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _79.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _79.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        metadata: string;
                    }) => _79.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _79.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                    }) => _79.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _79.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _79.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _79.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _79.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _79.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _79.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _79.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _79.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, newAdmin }: _79.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_policy_address, new_admin }: {
                        admin: string;
                        group_policy_address: string;
                        new_admin: string;
                    }) => _79.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, decisionPolicy }: _79.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_policy_address, decision_policy }: {
                        admin: string;
                        group_policy_address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _79.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupPolicyAddress, metadata }: _79.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_policy_address, metadata }: {
                        admin: string;
                        group_policy_address: string;
                        metadata: string;
                    }) => _79.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ groupPolicyAddress, proposers, metadata, messages, exec, title, summary }: _79.MsgSubmitProposal) => {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    };
                    fromAmino: ({ group_policy_address, proposers, metadata, messages, exec, title, summary }: {
                        group_policy_address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                        title: string;
                        summary: string;
                    }) => _79.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _79.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _79.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _79.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _79.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, executor }: _79.MsgExec) => {
                        proposal_id: string;
                        executor: string;
                    };
                    fromAmino: ({ proposal_id, executor }: {
                        proposal_id: string;
                        executor: string;
                    }) => _79.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _79.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _79.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _80.VoteOption;
            voteOptionToJSON(object: _80.VoteOption): string;
            proposalStatusFromJSON(object: any): _80.ProposalStatus;
            proposalStatusToJSON(object: _80.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _80.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _80.ProposalExecutorResult): string;
            VoteOption: typeof _80.VoteOption;
            VoteOptionSDKType: typeof _80.VoteOptionSDKType;
            ProposalStatus: typeof _80.ProposalStatus;
            ProposalStatusSDKType: typeof _80.ProposalStatusSDKType;
            ProposalExecutorResult: typeof _80.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _80.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _80.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Member;
                fromJSON(object: any): _80.Member;
                toJSON(message: _80.Member): unknown;
                fromPartial(object: Partial<_80.Member>): _80.Member;
            };
            MemberRequest: {
                encode(message: _80.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MemberRequest;
                fromJSON(object: any): _80.MemberRequest;
                toJSON(message: _80.MemberRequest): unknown;
                fromPartial(object: Partial<_80.MemberRequest>): _80.MemberRequest;
            };
            ThresholdDecisionPolicy: {
                encode(message: _80.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ThresholdDecisionPolicy;
                fromJSON(object: any): _80.ThresholdDecisionPolicy;
                toJSON(message: _80.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_80.ThresholdDecisionPolicy>): _80.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _80.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PercentageDecisionPolicy;
                fromJSON(object: any): _80.PercentageDecisionPolicy;
                toJSON(message: _80.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_80.PercentageDecisionPolicy>): _80.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _80.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DecisionPolicyWindows;
                fromJSON(object: any): _80.DecisionPolicyWindows;
                toJSON(message: _80.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_80.DecisionPolicyWindows>): _80.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _80.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GroupInfo;
                fromJSON(object: any): _80.GroupInfo;
                toJSON(message: _80.GroupInfo): unknown;
                fromPartial(object: Partial<_80.GroupInfo>): _80.GroupInfo;
            };
            GroupMember: {
                encode(message: _80.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GroupMember;
                fromJSON(object: any): _80.GroupMember;
                toJSON(message: _80.GroupMember): unknown;
                fromPartial(object: Partial<_80.GroupMember>): _80.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _80.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GroupPolicyInfo;
                fromJSON(object: any): _80.GroupPolicyInfo;
                toJSON(message: _80.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_80.GroupPolicyInfo>): _80.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _80.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Proposal;
                fromJSON(object: any): _80.Proposal;
                toJSON(message: _80.Proposal): unknown;
                fromPartial(object: Partial<_80.Proposal>): _80.Proposal;
            };
            TallyResult: {
                encode(message: _80.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.TallyResult;
                fromJSON(object: any): _80.TallyResult;
                toJSON(message: _80.TallyResult): unknown;
                fromPartial(object: Partial<_80.TallyResult>): _80.TallyResult;
            };
            Vote: {
                encode(message: _80.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Vote;
                fromJSON(object: any): _80.Vote;
                toJSON(message: _80.Vote): unknown;
                fromPartial(object: Partial<_80.Vote>): _80.Vote;
            };
            execFromJSON(object: any): _79.Exec;
            execToJSON(object: _79.Exec): string;
            Exec: typeof _79.Exec;
            ExecSDKType: typeof _79.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _79.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroup;
                fromJSON(object: any): _79.MsgCreateGroup;
                toJSON(message: _79.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroup>): _79.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _79.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupResponse;
                fromJSON(object: any): _79.MsgCreateGroupResponse;
                toJSON(message: _79.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupResponse>): _79.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _79.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMembers;
                fromJSON(object: any): _79.MsgUpdateGroupMembers;
                toJSON(message: _79.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupMembers>): _79.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _79.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _79.MsgUpdateGroupMembersResponse;
                toJSON(_: _79.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupMembersResponse>): _79.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _79.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupAdmin;
                fromJSON(object: any): _79.MsgUpdateGroupAdmin;
                toJSON(message: _79.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupAdmin>): _79.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _79.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _79.MsgUpdateGroupAdminResponse;
                toJSON(_: _79.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupAdminResponse>): _79.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _79.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMetadata;
                fromJSON(object: any): _79.MsgUpdateGroupMetadata;
                toJSON(message: _79.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupMetadata>): _79.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _79.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _79.MsgUpdateGroupMetadataResponse;
                toJSON(_: _79.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupMetadataResponse>): _79.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _79.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupPolicy;
                fromJSON(object: any): _79.MsgCreateGroupPolicy;
                toJSON(message: _79.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupPolicy>): _79.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _79.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _79.MsgCreateGroupPolicyResponse;
                toJSON(message: _79.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupPolicyResponse>): _79.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _79.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _79.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _79.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupPolicyAdmin>): _79.MsgUpdateGroupPolicyAdmin;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _79.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _79.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _79.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupPolicyAdminResponse>): _79.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _79.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _79.MsgCreateGroupWithPolicy;
                toJSON(message: _79.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupWithPolicy>): _79.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _79.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _79.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _79.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_79.MsgCreateGroupWithPolicyResponse>): _79.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _79.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _79.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _79.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupPolicyDecisionPolicy>): _79.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _79.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _79.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _79.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupPolicyDecisionPolicyResponse>): _79.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _79.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _79.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _79.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_79.MsgUpdateGroupPolicyMetadata>): _79.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _79.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _79.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _79.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_79.MsgUpdateGroupPolicyMetadataResponse>): _79.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _79.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgSubmitProposal;
                fromJSON(object: any): _79.MsgSubmitProposal;
                toJSON(message: _79.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_79.MsgSubmitProposal>): _79.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _79.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgSubmitProposalResponse;
                fromJSON(object: any): _79.MsgSubmitProposalResponse;
                toJSON(message: _79.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_79.MsgSubmitProposalResponse>): _79.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _79.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgWithdrawProposal;
                fromJSON(object: any): _79.MsgWithdrawProposal;
                toJSON(message: _79.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_79.MsgWithdrawProposal>): _79.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _79.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgWithdrawProposalResponse;
                fromJSON(_: any): _79.MsgWithdrawProposalResponse;
                toJSON(_: _79.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_79.MsgWithdrawProposalResponse>): _79.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _79.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgVote;
                fromJSON(object: any): _79.MsgVote;
                toJSON(message: _79.MsgVote): unknown;
                fromPartial(object: Partial<_79.MsgVote>): _79.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _79.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgVoteResponse;
                fromJSON(_: any): _79.MsgVoteResponse;
                toJSON(_: _79.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_79.MsgVoteResponse>): _79.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _79.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgExec;
                fromJSON(object: any): _79.MsgExec;
                toJSON(message: _79.MsgExec): unknown;
                fromPartial(object: Partial<_79.MsgExec>): _79.MsgExec;
            };
            MsgExecResponse: {
                encode(message: _79.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgExecResponse;
                fromJSON(object: any): _79.MsgExecResponse;
                toJSON(message: _79.MsgExecResponse): unknown;
                fromPartial(object: Partial<_79.MsgExecResponse>): _79.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _79.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgLeaveGroup;
                fromJSON(object: any): _79.MsgLeaveGroup;
                toJSON(message: _79.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_79.MsgLeaveGroup>): _79.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _79.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgLeaveGroupResponse;
                fromJSON(_: any): _79.MsgLeaveGroupResponse;
                toJSON(_: _79.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_79.MsgLeaveGroupResponse>): _79.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _78.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupInfoRequest;
                fromJSON(object: any): _78.QueryGroupInfoRequest;
                toJSON(message: _78.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupInfoRequest>): _78.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _78.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupInfoResponse;
                fromJSON(object: any): _78.QueryGroupInfoResponse;
                toJSON(message: _78.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupInfoResponse>): _78.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _78.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _78.QueryGroupPolicyInfoRequest;
                toJSON(message: _78.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupPolicyInfoRequest>): _78.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _78.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _78.QueryGroupPolicyInfoResponse;
                toJSON(message: _78.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupPolicyInfoResponse>): _78.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _78.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupMembersRequest;
                fromJSON(object: any): _78.QueryGroupMembersRequest;
                toJSON(message: _78.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupMembersRequest>): _78.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _78.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupMembersResponse;
                fromJSON(object: any): _78.QueryGroupMembersResponse;
                toJSON(message: _78.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupMembersResponse>): _78.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _78.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByAdminRequest;
                fromJSON(object: any): _78.QueryGroupsByAdminRequest;
                toJSON(message: _78.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByAdminRequest>): _78.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _78.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByAdminResponse;
                fromJSON(object: any): _78.QueryGroupsByAdminResponse;
                toJSON(message: _78.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByAdminResponse>): _78.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _78.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _78.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _78.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByGroupRequest>): _78.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _78.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _78.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _78.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByGroupResponse>): _78.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _78.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _78.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _78.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByAdminRequest>): _78.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _78.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _78.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _78.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupPoliciesByAdminResponse>): _78.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _78.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalRequest;
                fromJSON(object: any): _78.QueryProposalRequest;
                toJSON(message: _78.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_78.QueryProposalRequest>): _78.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _78.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalResponse;
                fromJSON(object: any): _78.QueryProposalResponse;
                toJSON(message: _78.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_78.QueryProposalResponse>): _78.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _78.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _78.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _78.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_78.QueryProposalsByGroupPolicyRequest>): _78.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _78.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _78.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _78.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_78.QueryProposalsByGroupPolicyResponse>): _78.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _78.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _78.QueryVoteByProposalVoterRequest;
                toJSON(message: _78.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_78.QueryVoteByProposalVoterRequest>): _78.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _78.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _78.QueryVoteByProposalVoterResponse;
                toJSON(message: _78.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_78.QueryVoteByProposalVoterResponse>): _78.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _78.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByProposalRequest;
                fromJSON(object: any): _78.QueryVotesByProposalRequest;
                toJSON(message: _78.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_78.QueryVotesByProposalRequest>): _78.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _78.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByProposalResponse;
                fromJSON(object: any): _78.QueryVotesByProposalResponse;
                toJSON(message: _78.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_78.QueryVotesByProposalResponse>): _78.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _78.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByVoterRequest;
                fromJSON(object: any): _78.QueryVotesByVoterRequest;
                toJSON(message: _78.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_78.QueryVotesByVoterRequest>): _78.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _78.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryVotesByVoterResponse;
                fromJSON(object: any): _78.QueryVotesByVoterResponse;
                toJSON(message: _78.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_78.QueryVotesByVoterResponse>): _78.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _78.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByMemberRequest;
                fromJSON(object: any): _78.QueryGroupsByMemberRequest;
                toJSON(message: _78.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByMemberRequest>): _78.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _78.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsByMemberResponse;
                fromJSON(object: any): _78.QueryGroupsByMemberResponse;
                toJSON(message: _78.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupsByMemberResponse>): _78.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _78.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryTallyResultRequest;
                fromJSON(object: any): _78.QueryTallyResultRequest;
                toJSON(message: _78.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_78.QueryTallyResultRequest>): _78.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _78.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryTallyResultResponse;
                fromJSON(object: any): _78.QueryTallyResultResponse;
                toJSON(message: _78.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_78.QueryTallyResultResponse>): _78.QueryTallyResultResponse;
            };
            QueryGroupsRequest: {
                encode(message: _78.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsRequest;
                fromJSON(object: any): _78.QueryGroupsRequest;
                toJSON(message: _78.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_78.QueryGroupsRequest>): _78.QueryGroupsRequest;
            };
            QueryGroupsResponse: {
                encode(message: _78.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryGroupsResponse;
                fromJSON(object: any): _78.QueryGroupsResponse;
                toJSON(message: _78.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_78.QueryGroupsResponse>): _78.QueryGroupsResponse;
            };
            GenesisState: {
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromJSON(object: any): _77.GenesisState;
                toJSON(message: _77.GenesisState): unknown;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _76.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventCreateGroup;
                fromJSON(object: any): _76.EventCreateGroup;
                toJSON(message: _76.EventCreateGroup): unknown;
                fromPartial(object: Partial<_76.EventCreateGroup>): _76.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _76.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventUpdateGroup;
                fromJSON(object: any): _76.EventUpdateGroup;
                toJSON(message: _76.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_76.EventUpdateGroup>): _76.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _76.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventCreateGroupPolicy;
                fromJSON(object: any): _76.EventCreateGroupPolicy;
                toJSON(message: _76.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_76.EventCreateGroupPolicy>): _76.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _76.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventUpdateGroupPolicy;
                fromJSON(object: any): _76.EventUpdateGroupPolicy;
                toJSON(message: _76.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_76.EventUpdateGroupPolicy>): _76.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _76.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventSubmitProposal;
                fromJSON(object: any): _76.EventSubmitProposal;
                toJSON(message: _76.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_76.EventSubmitProposal>): _76.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _76.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventWithdrawProposal;
                fromJSON(object: any): _76.EventWithdrawProposal;
                toJSON(message: _76.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_76.EventWithdrawProposal>): _76.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _76.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventVote;
                fromJSON(object: any): _76.EventVote;
                toJSON(message: _76.EventVote): unknown;
                fromPartial(object: Partial<_76.EventVote>): _76.EventVote;
            };
            EventExec: {
                encode(message: _76.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventExec;
                fromJSON(object: any): _76.EventExec;
                toJSON(message: _76.EventExec): unknown;
                fromPartial(object: Partial<_76.EventExec>): _76.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _76.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventLeaveGroup;
                fromJSON(object: any): _76.EventLeaveGroup;
                toJSON(message: _76.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_76.EventLeaveGroup>): _76.EventLeaveGroup;
            };
            EventProposalPruned: {
                encode(message: _76.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventProposalPruned;
                fromJSON(object: any): _76.EventProposalPruned;
                toJSON(message: _76.EventProposalPruned): unknown;
                fromPartial(object: Partial<_76.EventProposalPruned>): _76.EventProposalPruned;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _81.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Module;
                    fromJSON(object: any): _81.Module;
                    toJSON(message: _81.Module): unknown;
                    fromPartial(object: Partial<_81.Module>): _81.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _247.MsgClientImpl;
            QueryClientImpl: typeof _227.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                inflation(request?: _84.QueryInflationRequest): Promise<_84.QueryInflationResponse>;
                annualProvisions(request?: _84.QueryAnnualProvisionsRequest): Promise<_84.QueryAnnualProvisionsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _85.MsgUpdateParams): {
                        typeUrl: string;
                        value: _85.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _85.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            mint_denom: string;
                            inflation_rate_change: string;
                            inflation_max: string;
                            inflation_min: string;
                            goal_bonded: string;
                            blocks_per_year: string;
                        };
                    }) => _85.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                encode(message: _85.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUpdateParams;
                fromJSON(object: any): _85.MsgUpdateParams;
                toJSON(message: _85.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_85.MsgUpdateParams>): _85.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _85.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUpdateParamsResponse;
                fromJSON(_: any): _85.MsgUpdateParamsResponse;
                toJSON(_: _85.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_85.MsgUpdateParamsResponse>): _85.MsgUpdateParamsResponse;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                fromJSON(_: any): _84.QueryParamsRequest;
                toJSON(_: _84.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_84.QueryParamsRequest>): _84.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponse;
                fromJSON(object: any): _84.QueryParamsResponse;
                toJSON(message: _84.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_84.QueryParamsResponse>): _84.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _84.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryInflationRequest;
                fromJSON(_: any): _84.QueryInflationRequest;
                toJSON(_: _84.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_84.QueryInflationRequest>): _84.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _84.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryInflationResponse;
                fromJSON(object: any): _84.QueryInflationResponse;
                toJSON(message: _84.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_84.QueryInflationResponse>): _84.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _84.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _84.QueryAnnualProvisionsRequest;
                toJSON(_: _84.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_84.QueryAnnualProvisionsRequest>): _84.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _84.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _84.QueryAnnualProvisionsResponse;
                toJSON(message: _84.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_84.QueryAnnualProvisionsResponse>): _84.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _83.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Minter;
                fromJSON(object: any): _83.Minter;
                toJSON(message: _83.Minter): unknown;
                fromPartial(object: Partial<_83.Minter>): _83.Minter;
            };
            Params: {
                encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Params;
                fromJSON(object: any): _83.Params;
                toJSON(message: _83.Params): unknown;
                fromPartial(object: Partial<_83.Params>): _83.Params;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
            };
        };
    }
    namespace msg {
        namespace textual {
            const v1: {};
        }
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _88.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Module;
                    fromJSON(_: any): _88.Module;
                    toJSON(_: _88.Module): unknown;
                    fromPartial(_: Partial<_88.Module>): _88.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _248.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _92.QueryBalanceRequest): Promise<_92.QueryBalanceResponse>;
                owner(request: _92.QueryOwnerRequest): Promise<_92.QueryOwnerResponse>;
                supply(request: _92.QuerySupplyRequest): Promise<_92.QuerySupplyResponse>;
                nFTs(request: _92.QueryNFTsRequest): Promise<_92.QueryNFTsResponse>;
                nFT(request: _92.QueryNFTRequest): Promise<_92.QueryNFTResponse>;
                class(request: _92.QueryClassRequest): Promise<_92.QueryClassResponse>;
                classes(request?: _92.QueryClassesRequest): Promise<_92.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _93.MsgSend): {
                        typeUrl: string;
                        value: _93.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _93.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _93.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _93.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgSend;
                fromJSON(object: any): _93.MsgSend;
                toJSON(message: _93.MsgSend): unknown;
                fromPartial(object: Partial<_93.MsgSend>): _93.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _93.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgSendResponse;
                fromJSON(_: any): _93.MsgSendResponse;
                toJSON(_: _93.MsgSendResponse): unknown;
                fromPartial(_: Partial<_93.MsgSendResponse>): _93.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _92.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryBalanceRequest;
                fromJSON(object: any): _92.QueryBalanceRequest;
                toJSON(message: _92.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_92.QueryBalanceRequest>): _92.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _92.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryBalanceResponse;
                fromJSON(object: any): _92.QueryBalanceResponse;
                toJSON(message: _92.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_92.QueryBalanceResponse>): _92.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _92.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryOwnerRequest;
                fromJSON(object: any): _92.QueryOwnerRequest;
                toJSON(message: _92.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_92.QueryOwnerRequest>): _92.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _92.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryOwnerResponse;
                fromJSON(object: any): _92.QueryOwnerResponse;
                toJSON(message: _92.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_92.QueryOwnerResponse>): _92.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _92.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QuerySupplyRequest;
                fromJSON(object: any): _92.QuerySupplyRequest;
                toJSON(message: _92.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_92.QuerySupplyRequest>): _92.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _92.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QuerySupplyResponse;
                fromJSON(object: any): _92.QuerySupplyResponse;
                toJSON(message: _92.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_92.QuerySupplyResponse>): _92.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _92.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryNFTsRequest;
                fromJSON(object: any): _92.QueryNFTsRequest;
                toJSON(message: _92.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_92.QueryNFTsRequest>): _92.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _92.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryNFTsResponse;
                fromJSON(object: any): _92.QueryNFTsResponse;
                toJSON(message: _92.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_92.QueryNFTsResponse>): _92.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _92.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryNFTRequest;
                fromJSON(object: any): _92.QueryNFTRequest;
                toJSON(message: _92.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_92.QueryNFTRequest>): _92.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _92.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryNFTResponse;
                fromJSON(object: any): _92.QueryNFTResponse;
                toJSON(message: _92.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_92.QueryNFTResponse>): _92.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _92.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryClassRequest;
                fromJSON(object: any): _92.QueryClassRequest;
                toJSON(message: _92.QueryClassRequest): unknown;
                fromPartial(object: Partial<_92.QueryClassRequest>): _92.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _92.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryClassResponse;
                fromJSON(object: any): _92.QueryClassResponse;
                toJSON(message: _92.QueryClassResponse): unknown;
                fromPartial(object: Partial<_92.QueryClassResponse>): _92.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _92.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryClassesRequest;
                fromJSON(object: any): _92.QueryClassesRequest;
                toJSON(message: _92.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_92.QueryClassesRequest>): _92.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _92.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryClassesResponse;
                fromJSON(object: any): _92.QueryClassesResponse;
                toJSON(message: _92.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_92.QueryClassesResponse>): _92.QueryClassesResponse;
            };
            Class: {
                encode(message: _91.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Class;
                fromJSON(object: any): _91.Class;
                toJSON(message: _91.Class): unknown;
                fromPartial(object: Partial<_91.Class>): _91.Class;
            };
            NFT: {
                encode(message: _91.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.NFT;
                fromJSON(object: any): _91.NFT;
                toJSON(message: _91.NFT): unknown;
                fromPartial(object: Partial<_91.NFT>): _91.NFT;
            };
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.GenesisState;
                fromJSON(object: any): _90.GenesisState;
                toJSON(message: _90.GenesisState): unknown;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
            };
            Entry: {
                encode(message: _90.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Entry;
                fromJSON(object: any): _90.Entry;
                toJSON(message: _90.Entry): unknown;
                fromPartial(object: Partial<_90.Entry>): _90.Entry;
            };
            EventSend: {
                encode(message: _89.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.EventSend;
                fromJSON(object: any): _89.EventSend;
                toJSON(message: _89.EventSend): unknown;
                fromPartial(object: Partial<_89.EventSend>): _89.EventSend;
            };
            EventMint: {
                encode(message: _89.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.EventMint;
                fromJSON(object: any): _89.EventMint;
                toJSON(message: _89.EventMint): unknown;
                fromPartial(object: Partial<_89.EventMint>): _89.EventMint;
            };
            EventBurn: {
                encode(message: _89.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.EventBurn;
                fromJSON(object: any): _89.EventBurn;
                toJSON(message: _89.EventBurn): unknown;
                fromPartial(object: Partial<_89.EventBurn>): _89.EventBurn;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _94.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Module;
                    fromJSON(_: any): _94.Module;
                    toJSON(_: _94.Module): unknown;
                    fromPartial(_: Partial<_94.Module>): _94.Module;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _229.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _95.GetRequest): Promise<_95.GetResponse>;
                    list(request: _95.ListRequest): Promise<_95.ListResponse>;
                };
                GetRequest: {
                    encode(message: _95.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GetRequest;
                    fromJSON(object: any): _95.GetRequest;
                    toJSON(message: _95.GetRequest): unknown;
                    fromPartial(object: Partial<_95.GetRequest>): _95.GetRequest;
                };
                GetResponse: {
                    encode(message: _95.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GetResponse;
                    fromJSON(object: any): _95.GetResponse;
                    toJSON(message: _95.GetResponse): unknown;
                    fromPartial(object: Partial<_95.GetResponse>): _95.GetResponse;
                };
                ListRequest: {
                    encode(message: _95.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ListRequest;
                    fromJSON(object: any): _95.ListRequest;
                    toJSON(message: _95.ListRequest): unknown;
                    fromPartial(object: Partial<_95.ListRequest>): _95.ListRequest;
                };
                ListRequest_Prefix: {
                    encode(message: _95.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ListRequest_Prefix;
                    fromJSON(object: any): _95.ListRequest_Prefix;
                    toJSON(message: _95.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_95.ListRequest_Prefix>): _95.ListRequest_Prefix;
                };
                ListRequest_Range: {
                    encode(message: _95.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ListRequest_Range;
                    fromJSON(object: any): _95.ListRequest_Range;
                    toJSON(message: _95.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_95.ListRequest_Range>): _95.ListRequest_Range;
                };
                ListResponse: {
                    encode(message: _95.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ListResponse;
                    fromJSON(object: any): _95.ListResponse;
                    toJSON(message: _95.ListResponse): unknown;
                    fromPartial(object: Partial<_95.ListResponse>): _95.ListResponse;
                };
                IndexValue: {
                    encode(message: _95.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.IndexValue;
                    fromJSON(object: any): _95.IndexValue;
                    toJSON(message: _95.IndexValue): unknown;
                    fromPartial(object: Partial<_95.IndexValue>): _95.IndexValue;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                encode(message: _96.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.TableDescriptor;
                fromJSON(object: any): _96.TableDescriptor;
                toJSON(message: _96.TableDescriptor): unknown;
                fromPartial(object: Partial<_96.TableDescriptor>): _96.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _96.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PrimaryKeyDescriptor;
                fromJSON(object: any): _96.PrimaryKeyDescriptor;
                toJSON(message: _96.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_96.PrimaryKeyDescriptor>): _96.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _96.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SecondaryIndexDescriptor;
                fromJSON(object: any): _96.SecondaryIndexDescriptor;
                toJSON(message: _96.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_96.SecondaryIndexDescriptor>): _96.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _96.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SingletonDescriptor;
                fromJSON(object: any): _96.SingletonDescriptor;
                toJSON(message: _96.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_96.SingletonDescriptor>): _96.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _97.StorageType;
            storageTypeToJSON(object: _97.StorageType): string;
            StorageType: typeof _97.StorageType;
            StorageTypeSDKType: typeof _97.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _97.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModuleSchemaDescriptor;
                fromJSON(object: any): _97.ModuleSchemaDescriptor;
                toJSON(message: _97.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_97.ModuleSchemaDescriptor>): _97.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _97.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _97.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _97.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_97.ModuleSchemaDescriptor_FileEntry>): _97.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _98.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Module;
                    fromJSON(_: any): _98.Module;
                    toJSON(_: _98.Module): unknown;
                    fromPartial(_: Partial<_98.Module>): _98.Module;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _230.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                subspaces(request?: _100.QuerySubspacesRequest): Promise<_100.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _100.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsRequest;
                fromJSON(object: any): _100.QueryParamsRequest;
                toJSON(message: _100.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _100.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsResponse;
                fromJSON(object: any): _100.QueryParamsResponse;
                toJSON(message: _100.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_100.QueryParamsResponse>): _100.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _100.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySubspacesRequest;
                fromJSON(_: any): _100.QuerySubspacesRequest;
                toJSON(_: _100.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_100.QuerySubspacesRequest>): _100.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _100.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QuerySubspacesResponse;
                fromJSON(object: any): _100.QuerySubspacesResponse;
                toJSON(message: _100.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_100.QuerySubspacesResponse>): _100.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _100.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Subspace;
                fromJSON(object: any): _100.Subspace;
                toJSON(message: _100.Subspace): unknown;
                fromPartial(object: Partial<_100.Subspace>): _100.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _99.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ParameterChangeProposal;
                fromJSON(object: any): _99.ParameterChangeProposal;
                toJSON(message: _99.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_99.ParameterChangeProposal>): _99.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _99.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ParamChange;
                fromJSON(object: any): _99.ParamChange;
                toJSON(message: _99.ParamChange): unknown;
                fromPartial(object: Partial<_99.ParamChange>): _99.ParamChange;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                encode(_: _102.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileDescriptorsRequest;
                fromJSON(_: any): _102.FileDescriptorsRequest;
                toJSON(_: _102.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_102.FileDescriptorsRequest>): _102.FileDescriptorsRequest;
            };
            FileDescriptorsResponse: {
                encode(message: _102.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.FileDescriptorsResponse;
                fromJSON(object: any): _102.FileDescriptorsResponse;
                toJSON(message: _102.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_102.FileDescriptorsResponse>): _102.FileDescriptorsResponse;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _103.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Module;
                    fromJSON(object: any): _103.Module;
                    toJSON(message: _103.Module): unknown;
                    fromPartial(object: Partial<_103.Module>): _103.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                signingInfo(request: _105.QuerySigningInfoRequest): Promise<_105.QuerySigningInfoResponse>;
                signingInfos(request?: _105.QuerySigningInfosRequest): Promise<_105.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _107.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _107.MsgUnjail): {
                        typeUrl: string;
                        value: _107.MsgUnjail;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                };
                toJSON: {
                    unjail(value: _107.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _107.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _107.MsgUnjail): {
                        typeUrl: string;
                        value: _107.MsgUnjail;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _107.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _107.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _107.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            signed_blocks_window: string;
                            min_signed_per_window: Uint8Array;
                            downtime_jail_duration: {
                                seconds: string;
                                nanos: number;
                            };
                            slash_fraction_double_sign: Uint8Array;
                            slash_fraction_downtime: Uint8Array;
                        };
                    }) => _107.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                encode(message: _107.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUnjail;
                fromJSON(object: any): _107.MsgUnjail;
                toJSON(message: _107.MsgUnjail): unknown;
                fromPartial(object: Partial<_107.MsgUnjail>): _107.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _107.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUnjailResponse;
                fromJSON(_: any): _107.MsgUnjailResponse;
                toJSON(_: _107.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_107.MsgUnjailResponse>): _107.MsgUnjailResponse;
            };
            MsgUpdateParams: {
                encode(message: _107.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUpdateParams;
                fromJSON(object: any): _107.MsgUpdateParams;
                toJSON(message: _107.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_107.MsgUpdateParams>): _107.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _107.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUpdateParamsResponse;
                fromJSON(_: any): _107.MsgUpdateParamsResponse;
                toJSON(_: _107.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_107.MsgUpdateParamsResponse>): _107.MsgUpdateParamsResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _106.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ValidatorSigningInfo;
                fromJSON(object: any): _106.ValidatorSigningInfo;
                toJSON(message: _106.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_106.ValidatorSigningInfo>): _106.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                fromJSON(object: any): _106.Params;
                toJSON(message: _106.Params): unknown;
                fromPartial(object: Partial<_106.Params>): _106.Params;
            };
            QueryParamsRequest: {
                encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsRequest;
                fromJSON(_: any): _105.QueryParamsRequest;
                toJSON(_: _105.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsResponse;
                fromJSON(object: any): _105.QueryParamsResponse;
                toJSON(message: _105.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _105.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QuerySigningInfoRequest;
                fromJSON(object: any): _105.QuerySigningInfoRequest;
                toJSON(message: _105.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_105.QuerySigningInfoRequest>): _105.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _105.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QuerySigningInfoResponse;
                fromJSON(object: any): _105.QuerySigningInfoResponse;
                toJSON(message: _105.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_105.QuerySigningInfoResponse>): _105.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _105.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QuerySigningInfosRequest;
                fromJSON(object: any): _105.QuerySigningInfosRequest;
                toJSON(message: _105.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_105.QuerySigningInfosRequest>): _105.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _105.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QuerySigningInfosResponse;
                fromJSON(object: any): _105.QuerySigningInfosResponse;
                toJSON(message: _105.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_105.QuerySigningInfosResponse>): _105.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
                fromJSON(object: any): _104.GenesisState;
                toJSON(message: _104.GenesisState): unknown;
                fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
            };
            SigningInfo: {
                encode(message: _104.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SigningInfo;
                fromJSON(object: any): _104.SigningInfo;
                toJSON(message: _104.SigningInfo): unknown;
                fromPartial(object: Partial<_104.SigningInfo>): _104.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _104.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ValidatorMissedBlocks;
                fromJSON(object: any): _104.ValidatorMissedBlocks;
                toJSON(message: _104.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_104.ValidatorMissedBlocks>): _104.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _104.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MissedBlock;
                fromJSON(object: any): _104.MissedBlock;
                toJSON(message: _104.MissedBlock): unknown;
                fromPartial(object: Partial<_104.MissedBlock>): _104.MissedBlock;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _108.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Module;
                    fromJSON(object: any): _108.Module;
                    toJSON(message: _108.Module): unknown;
                    fromPartial(object: Partial<_108.Module>): _108.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _232.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _111.QueryValidatorsRequest): Promise<_111.QueryValidatorsResponse>;
                validator(request: _111.QueryValidatorRequest): Promise<_111.QueryValidatorResponse>;
                validatorDelegations(request: _111.QueryValidatorDelegationsRequest): Promise<_111.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _111.QueryValidatorUnbondingDelegationsRequest): Promise<_111.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _111.QueryDelegationRequest): Promise<_111.QueryDelegationResponse>;
                unbondingDelegation(request: _111.QueryUnbondingDelegationRequest): Promise<_111.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _111.QueryDelegatorDelegationsRequest): Promise<_111.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _111.QueryDelegatorUnbondingDelegationsRequest): Promise<_111.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _111.QueryRedelegationsRequest): Promise<_111.QueryRedelegationsResponse>;
                delegatorValidators(request: _111.QueryDelegatorValidatorsRequest): Promise<_111.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _111.QueryDelegatorValidatorRequest): Promise<_111.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _111.QueryHistoricalInfoRequest): Promise<_111.QueryHistoricalInfoResponse>;
                pool(request?: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _113.MsgCreateValidator): {
                        typeUrl: string;
                        value: _113.MsgCreateValidator;
                    };
                    editValidator(value: _113.MsgEditValidator): {
                        typeUrl: string;
                        value: _113.MsgEditValidator;
                    };
                    delegate(value: _113.MsgDelegate): {
                        typeUrl: string;
                        value: _113.MsgDelegate;
                    };
                    beginRedelegate(value: _113.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _113.MsgBeginRedelegate;
                    };
                    undelegate(value: _113.MsgUndelegate): {
                        typeUrl: string;
                        value: _113.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _113.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _113.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _113.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _113.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _113.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _113.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _113.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _113.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _113.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _113.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _113.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _113.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight }: _113.MsgCancelUnbondingDelegation) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    };
                    fromAmino: ({ delegator_address, validator_address, amount, creation_height }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                        creation_height: string;
                    }) => _113.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: ({ authority, params }: _113.MsgUpdateParams) => {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    };
                    fromAmino: ({ authority, params }: {
                        authority: string;
                        params: {
                            unbonding_time: {
                                seconds: string;
                                nanos: number;
                            };
                            max_validators: number;
                            max_entries: number;
                            historical_entries: number;
                            bond_denom: string;
                            min_commission_rate: string;
                        };
                    }) => _113.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                encode(message: _113.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCreateValidator;
                fromJSON(object: any): _113.MsgCreateValidator;
                toJSON(message: _113.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_113.MsgCreateValidator>): _113.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _113.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCreateValidatorResponse;
                fromJSON(_: any): _113.MsgCreateValidatorResponse;
                toJSON(_: _113.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_113.MsgCreateValidatorResponse>): _113.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _113.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgEditValidator;
                fromJSON(object: any): _113.MsgEditValidator;
                toJSON(message: _113.MsgEditValidator): unknown;
                fromPartial(object: Partial<_113.MsgEditValidator>): _113.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _113.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgEditValidatorResponse;
                fromJSON(_: any): _113.MsgEditValidatorResponse;
                toJSON(_: _113.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_113.MsgEditValidatorResponse>): _113.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _113.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgDelegate;
                fromJSON(object: any): _113.MsgDelegate;
                toJSON(message: _113.MsgDelegate): unknown;
                fromPartial(object: Partial<_113.MsgDelegate>): _113.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _113.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgDelegateResponse;
                fromJSON(_: any): _113.MsgDelegateResponse;
                toJSON(_: _113.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_113.MsgDelegateResponse>): _113.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _113.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgBeginRedelegate;
                fromJSON(object: any): _113.MsgBeginRedelegate;
                toJSON(message: _113.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_113.MsgBeginRedelegate>): _113.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _113.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgBeginRedelegateResponse;
                fromJSON(object: any): _113.MsgBeginRedelegateResponse;
                toJSON(message: _113.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_113.MsgBeginRedelegateResponse>): _113.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _113.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUndelegate;
                fromJSON(object: any): _113.MsgUndelegate;
                toJSON(message: _113.MsgUndelegate): unknown;
                fromPartial(object: Partial<_113.MsgUndelegate>): _113.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _113.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUndelegateResponse;
                fromJSON(object: any): _113.MsgUndelegateResponse;
                toJSON(message: _113.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_113.MsgUndelegateResponse>): _113.MsgUndelegateResponse;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _113.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _113.MsgCancelUnbondingDelegation;
                toJSON(message: _113.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_113.MsgCancelUnbondingDelegation>): _113.MsgCancelUnbondingDelegation;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _113.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _113.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _113.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_113.MsgCancelUnbondingDelegationResponse>): _113.MsgCancelUnbondingDelegationResponse;
            };
            MsgUpdateParams: {
                encode(message: _113.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpdateParams;
                fromJSON(object: any): _113.MsgUpdateParams;
                toJSON(message: _113.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_113.MsgUpdateParams>): _113.MsgUpdateParams;
            };
            MsgUpdateParamsResponse: {
                encode(_: _113.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpdateParamsResponse;
                fromJSON(_: any): _113.MsgUpdateParamsResponse;
                toJSON(_: _113.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_113.MsgUpdateParamsResponse>): _113.MsgUpdateParamsResponse;
            };
            bondStatusFromJSON(object: any): _112.BondStatus;
            bondStatusToJSON(object: _112.BondStatus): string;
            infractionFromJSON(object: any): _112.Infraction;
            infractionToJSON(object: _112.Infraction): string;
            BondStatus: typeof _112.BondStatus;
            BondStatusSDKType: typeof _112.BondStatusSDKType;
            Infraction: typeof _112.Infraction;
            InfractionSDKType: typeof _112.InfractionSDKType;
            HistoricalInfo: {
                encode(message: _112.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.HistoricalInfo;
                fromJSON(object: any): _112.HistoricalInfo;
                toJSON(message: _112.HistoricalInfo): unknown;
                fromPartial(object: Partial<_112.HistoricalInfo>): _112.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _112.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.CommissionRates;
                fromJSON(object: any): _112.CommissionRates;
                toJSON(message: _112.CommissionRates): unknown;
                fromPartial(object: Partial<_112.CommissionRates>): _112.CommissionRates;
            };
            Commission: {
                encode(message: _112.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Commission;
                fromJSON(object: any): _112.Commission;
                toJSON(message: _112.Commission): unknown;
                fromPartial(object: Partial<_112.Commission>): _112.Commission;
            };
            Description: {
                encode(message: _112.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Description;
                fromJSON(object: any): _112.Description;
                toJSON(message: _112.Description): unknown;
                fromPartial(object: Partial<_112.Description>): _112.Description;
            };
            Validator: {
                encode(message: _112.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Validator;
                fromJSON(object: any): _112.Validator;
                toJSON(message: _112.Validator): unknown;
                fromPartial(object: Partial<_112.Validator>): _112.Validator;
            };
            ValAddresses: {
                encode(message: _112.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ValAddresses;
                fromJSON(object: any): _112.ValAddresses;
                toJSON(message: _112.ValAddresses): unknown;
                fromPartial(object: Partial<_112.ValAddresses>): _112.ValAddresses;
            };
            DVPair: {
                encode(message: _112.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DVPair;
                fromJSON(object: any): _112.DVPair;
                toJSON(message: _112.DVPair): unknown;
                fromPartial(object: Partial<_112.DVPair>): _112.DVPair;
            };
            DVPairs: {
                encode(message: _112.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DVPairs;
                fromJSON(object: any): _112.DVPairs;
                toJSON(message: _112.DVPairs): unknown;
                fromPartial(object: Partial<_112.DVPairs>): _112.DVPairs;
            };
            DVVTriplet: {
                encode(message: _112.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DVVTriplet;
                fromJSON(object: any): _112.DVVTriplet;
                toJSON(message: _112.DVVTriplet): unknown;
                fromPartial(object: Partial<_112.DVVTriplet>): _112.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _112.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DVVTriplets;
                fromJSON(object: any): _112.DVVTriplets;
                toJSON(message: _112.DVVTriplets): unknown;
                fromPartial(object: Partial<_112.DVVTriplets>): _112.DVVTriplets;
            };
            Delegation: {
                encode(message: _112.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Delegation;
                fromJSON(object: any): _112.Delegation;
                toJSON(message: _112.Delegation): unknown;
                fromPartial(object: Partial<_112.Delegation>): _112.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _112.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UnbondingDelegation;
                fromJSON(object: any): _112.UnbondingDelegation;
                toJSON(message: _112.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_112.UnbondingDelegation>): _112.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _112.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.UnbondingDelegationEntry;
                fromJSON(object: any): _112.UnbondingDelegationEntry;
                toJSON(message: _112.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_112.UnbondingDelegationEntry>): _112.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _112.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.RedelegationEntry;
                fromJSON(object: any): _112.RedelegationEntry;
                toJSON(message: _112.RedelegationEntry): unknown;
                fromPartial(object: Partial<_112.RedelegationEntry>): _112.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _112.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Redelegation;
                fromJSON(object: any): _112.Redelegation;
                toJSON(message: _112.Redelegation): unknown;
                fromPartial(object: Partial<_112.Redelegation>): _112.Redelegation;
            };
            Params: {
                encode(message: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                fromJSON(object: any): _112.Params;
                toJSON(message: _112.Params): unknown;
                fromPartial(object: Partial<_112.Params>): _112.Params;
            };
            DelegationResponse: {
                encode(message: _112.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.DelegationResponse;
                fromJSON(object: any): _112.DelegationResponse;
                toJSON(message: _112.DelegationResponse): unknown;
                fromPartial(object: Partial<_112.DelegationResponse>): _112.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _112.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.RedelegationEntryResponse;
                fromJSON(object: any): _112.RedelegationEntryResponse;
                toJSON(message: _112.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_112.RedelegationEntryResponse>): _112.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _112.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.RedelegationResponse;
                fromJSON(object: any): _112.RedelegationResponse;
                toJSON(message: _112.RedelegationResponse): unknown;
                fromPartial(object: Partial<_112.RedelegationResponse>): _112.RedelegationResponse;
            };
            Pool: {
                encode(message: _112.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Pool;
                fromJSON(object: any): _112.Pool;
                toJSON(message: _112.Pool): unknown;
                fromPartial(object: Partial<_112.Pool>): _112.Pool;
            };
            ValidatorUpdates: {
                encode(message: _112.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.ValidatorUpdates;
                fromJSON(object: any): _112.ValidatorUpdates;
                toJSON(message: _112.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_112.ValidatorUpdates>): _112.ValidatorUpdates;
            };
            QueryValidatorsRequest: {
                encode(message: _111.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorsRequest;
                fromJSON(object: any): _111.QueryValidatorsRequest;
                toJSON(message: _111.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_111.QueryValidatorsRequest>): _111.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _111.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorsResponse;
                fromJSON(object: any): _111.QueryValidatorsResponse;
                toJSON(message: _111.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_111.QueryValidatorsResponse>): _111.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _111.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorRequest;
                fromJSON(object: any): _111.QueryValidatorRequest;
                toJSON(message: _111.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_111.QueryValidatorRequest>): _111.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _111.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorResponse;
                fromJSON(object: any): _111.QueryValidatorResponse;
                toJSON(message: _111.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_111.QueryValidatorResponse>): _111.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _111.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _111.QueryValidatorDelegationsRequest;
                toJSON(message: _111.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_111.QueryValidatorDelegationsRequest>): _111.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _111.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _111.QueryValidatorDelegationsResponse;
                toJSON(message: _111.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_111.QueryValidatorDelegationsResponse>): _111.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _111.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _111.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _111.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_111.QueryValidatorUnbondingDelegationsRequest>): _111.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _111.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _111.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _111.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_111.QueryValidatorUnbondingDelegationsResponse>): _111.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _111.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegationRequest;
                fromJSON(object: any): _111.QueryDelegationRequest;
                toJSON(message: _111.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_111.QueryDelegationRequest>): _111.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _111.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegationResponse;
                fromJSON(object: any): _111.QueryDelegationResponse;
                toJSON(message: _111.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_111.QueryDelegationResponse>): _111.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _111.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _111.QueryUnbondingDelegationRequest;
                toJSON(message: _111.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_111.QueryUnbondingDelegationRequest>): _111.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _111.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _111.QueryUnbondingDelegationResponse;
                toJSON(message: _111.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_111.QueryUnbondingDelegationResponse>): _111.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _111.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _111.QueryDelegatorDelegationsRequest;
                toJSON(message: _111.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorDelegationsRequest>): _111.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _111.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _111.QueryDelegatorDelegationsResponse;
                toJSON(message: _111.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorDelegationsResponse>): _111.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _111.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _111.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _111.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorUnbondingDelegationsRequest>): _111.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _111.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _111.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _111.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorUnbondingDelegationsResponse>): _111.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _111.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryRedelegationsRequest;
                fromJSON(object: any): _111.QueryRedelegationsRequest;
                toJSON(message: _111.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_111.QueryRedelegationsRequest>): _111.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _111.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryRedelegationsResponse;
                fromJSON(object: any): _111.QueryRedelegationsResponse;
                toJSON(message: _111.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_111.QueryRedelegationsResponse>): _111.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _111.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _111.QueryDelegatorValidatorsRequest;
                toJSON(message: _111.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorsRequest>): _111.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _111.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _111.QueryDelegatorValidatorsResponse;
                toJSON(message: _111.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorsResponse>): _111.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _111.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _111.QueryDelegatorValidatorRequest;
                toJSON(message: _111.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorRequest>): _111.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _111.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _111.QueryDelegatorValidatorResponse;
                toJSON(message: _111.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_111.QueryDelegatorValidatorResponse>): _111.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _111.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryHistoricalInfoRequest;
                fromJSON(object: any): _111.QueryHistoricalInfoRequest;
                toJSON(message: _111.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_111.QueryHistoricalInfoRequest>): _111.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _111.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryHistoricalInfoResponse;
                fromJSON(object: any): _111.QueryHistoricalInfoResponse;
                toJSON(message: _111.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_111.QueryHistoricalInfoResponse>): _111.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _111.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPoolRequest;
                fromJSON(_: any): _111.QueryPoolRequest;
                toJSON(_: _111.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_111.QueryPoolRequest>): _111.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _111.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryPoolResponse;
                fromJSON(object: any): _111.QueryPoolResponse;
                toJSON(message: _111.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_111.QueryPoolResponse>): _111.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsRequest;
                fromJSON(_: any): _111.QueryParamsRequest;
                toJSON(_: _111.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsResponse;
                fromJSON(object: any): _111.QueryParamsResponse;
                toJSON(message: _111.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                fromJSON(object: any): _110.GenesisState;
                toJSON(message: _110.GenesisState): unknown;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _110.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LastValidatorPower;
                fromJSON(object: any): _110.LastValidatorPower;
                toJSON(message: _110.LastValidatorPower): unknown;
                fromPartial(object: Partial<_110.LastValidatorPower>): _110.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _109.AuthorizationType;
            authorizationTypeToJSON(object: _109.AuthorizationType): string;
            AuthorizationType: typeof _109.AuthorizationType;
            AuthorizationTypeSDKType: typeof _109.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _109.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.StakeAuthorization;
                fromJSON(object: any): _109.StakeAuthorization;
                toJSON(message: _109.StakeAuthorization): unknown;
                fromPartial(object: Partial<_109.StakeAuthorization>): _109.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _109.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.StakeAuthorization_Validators;
                fromJSON(object: any): _109.StakeAuthorization_Validators;
                toJSON(message: _109.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_109.StakeAuthorization_Validators>): _109.StakeAuthorization_Validators;
            };
        };
    }
    namespace store {
        namespace internal {
            namespace kv {
                const v1beta1: {
                    Pairs: {
                        encode(message: _114.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Pairs;
                        fromJSON(object: any): _114.Pairs;
                        toJSON(message: _114.Pairs): unknown;
                        fromPartial(object: Partial<_114.Pairs>): _114.Pairs;
                    };
                    Pair: {
                        encode(message: _114.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Pair;
                        fromJSON(object: any): _114.Pair;
                        toJSON(message: _114.Pair): unknown;
                        fromPartial(object: Partial<_114.Pair>): _114.Pair;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                Snapshot: {
                    encode(message: _115.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Snapshot;
                    fromJSON(object: any): _115.Snapshot;
                    toJSON(message: _115.Snapshot): unknown;
                    fromPartial(object: Partial<_115.Snapshot>): _115.Snapshot;
                };
                Metadata: {
                    encode(message: _115.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Metadata;
                    fromJSON(object: any): _115.Metadata;
                    toJSON(message: _115.Metadata): unknown;
                    fromPartial(object: Partial<_115.Metadata>): _115.Metadata;
                };
                SnapshotItem: {
                    encode(message: _115.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SnapshotItem;
                    fromJSON(object: any): _115.SnapshotItem;
                    toJSON(message: _115.SnapshotItem): unknown;
                    fromPartial(object: Partial<_115.SnapshotItem>): _115.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _115.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SnapshotStoreItem;
                    fromJSON(object: any): _115.SnapshotStoreItem;
                    toJSON(message: _115.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_115.SnapshotStoreItem>): _115.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _115.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SnapshotIAVLItem;
                    fromJSON(object: any): _115.SnapshotIAVLItem;
                    toJSON(message: _115.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_115.SnapshotIAVLItem>): _115.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _115.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SnapshotExtensionMeta;
                    fromJSON(object: any): _115.SnapshotExtensionMeta;
                    toJSON(message: _115.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_115.SnapshotExtensionMeta>): _115.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _115.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.SnapshotExtensionPayload;
                    fromJSON(object: any): _115.SnapshotExtensionPayload;
                    toJSON(message: _115.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_115.SnapshotExtensionPayload>): _115.SnapshotExtensionPayload;
                };
            };
        }
        namespace streaming {
            const abci: {
                ListenFinalizeBlockRequest: {
                    encode(message: _116.ListenFinalizeBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ListenFinalizeBlockRequest;
                    fromJSON(object: any): _116.ListenFinalizeBlockRequest;
                    toJSON(message: _116.ListenFinalizeBlockRequest): unknown;
                    fromPartial(object: Partial<_116.ListenFinalizeBlockRequest>): _116.ListenFinalizeBlockRequest;
                };
                ListenFinalizeBlockResponse: {
                    encode(_: _116.ListenFinalizeBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ListenFinalizeBlockResponse;
                    fromJSON(_: any): _116.ListenFinalizeBlockResponse;
                    toJSON(_: _116.ListenFinalizeBlockResponse): unknown;
                    fromPartial(_: Partial<_116.ListenFinalizeBlockResponse>): _116.ListenFinalizeBlockResponse;
                };
                ListenCommitRequest: {
                    encode(message: _116.ListenCommitRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ListenCommitRequest;
                    fromJSON(object: any): _116.ListenCommitRequest;
                    toJSON(message: _116.ListenCommitRequest): unknown;
                    fromPartial(object: Partial<_116.ListenCommitRequest>): _116.ListenCommitRequest;
                };
                ListenCommitResponse: {
                    encode(_: _116.ListenCommitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ListenCommitResponse;
                    fromJSON(_: any): _116.ListenCommitResponse;
                    toJSON(_: _116.ListenCommitResponse): unknown;
                    fromPartial(_: Partial<_116.ListenCommitResponse>): _116.ListenCommitResponse;
                };
            };
        }
        const v1beta1: {
            StoreKVPair: {
                encode(message: _118.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.StoreKVPair;
                fromJSON(object: any): _118.StoreKVPair;
                toJSON(message: _118.StoreKVPair): unknown;
                fromPartial(object: Partial<_118.StoreKVPair>): _118.StoreKVPair;
            };
            BlockMetadata: {
                encode(message: _118.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.BlockMetadata;
                fromJSON(object: any): _118.BlockMetadata;
                toJSON(message: _118.BlockMetadata): unknown;
                fromPartial(object: Partial<_118.BlockMetadata>): _118.BlockMetadata;
            };
            CommitInfo: {
                encode(message: _117.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.CommitInfo;
                fromJSON(object: any): _117.CommitInfo;
                toJSON(message: _117.CommitInfo): unknown;
                fromPartial(object: Partial<_117.CommitInfo>): _117.CommitInfo;
            };
            StoreInfo: {
                encode(message: _117.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.StoreInfo;
                fromJSON(object: any): _117.StoreInfo;
                toJSON(message: _117.StoreInfo): unknown;
                fromPartial(object: Partial<_117.StoreInfo>): _117.StoreInfo;
            };
            CommitID: {
                encode(message: _117.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.CommitID;
                fromJSON(object: any): _117.CommitID;
                toJSON(message: _117.CommitID): unknown;
                fromPartial(object: Partial<_117.CommitID>): _117.CommitID;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    encode(message: _119.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.Config;
                    fromJSON(object: any): _119.Config;
                    toJSON(message: _119.Config): unknown;
                    fromPartial(object: Partial<_119.Config>): _119.Config;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _120.SignMode;
                signModeToJSON(object: _120.SignMode): string;
                SignMode: typeof _120.SignMode;
                SignModeSDKType: typeof _120.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _120.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.SignatureDescriptors;
                    fromJSON(object: any): _120.SignatureDescriptors;
                    toJSON(message: _120.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_120.SignatureDescriptors>): _120.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _120.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.SignatureDescriptor;
                    fromJSON(object: any): _120.SignatureDescriptor;
                    toJSON(message: _120.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_120.SignatureDescriptor>): _120.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _120.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.SignatureDescriptor_Data;
                    fromJSON(object: any): _120.SignatureDescriptor_Data;
                    toJSON(message: _120.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_120.SignatureDescriptor_Data>): _120.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _120.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _120.SignatureDescriptor_Data_Single;
                    toJSON(message: _120.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_120.SignatureDescriptor_Data_Single>): _120.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _120.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _120.SignatureDescriptor_Data_Multi;
                    toJSON(message: _120.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_120.SignatureDescriptor_Data_Multi>): _120.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _233.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _121.SimulateRequest): Promise<_121.SimulateResponse>;
                getTx(request: _121.GetTxRequest): Promise<_121.GetTxResponse>;
                broadcastTx(request: _121.BroadcastTxRequest): Promise<_121.BroadcastTxResponse>;
                getTxsEvent(request: _121.GetTxsEventRequest): Promise<_121.GetTxsEventResponse>;
                getBlockWithTxs(request: _121.GetBlockWithTxsRequest): Promise<_121.GetBlockWithTxsResponse>;
                txDecode(request: _121.TxDecodeRequest): Promise<_121.TxDecodeResponse>;
                txEncode(request: _121.TxEncodeRequest): Promise<_121.TxEncodeResponse>;
                txEncodeAmino(request: _121.TxEncodeAminoRequest): Promise<_121.TxEncodeAminoResponse>;
                txDecodeAmino(request: _121.TxDecodeAminoRequest): Promise<_121.TxDecodeAminoResponse>;
            };
            Tx: {
                encode(message: _122.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Tx;
                fromJSON(object: any): _122.Tx;
                toJSON(message: _122.Tx): unknown;
                fromPartial(object: Partial<_122.Tx>): _122.Tx;
            };
            TxRaw: {
                encode(message: _122.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TxRaw;
                fromJSON(object: any): _122.TxRaw;
                toJSON(message: _122.TxRaw): unknown;
                fromPartial(object: Partial<_122.TxRaw>): _122.TxRaw;
            };
            SignDoc: {
                encode(message: _122.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignDoc;
                fromJSON(object: any): _122.SignDoc;
                toJSON(message: _122.SignDoc): unknown;
                fromPartial(object: Partial<_122.SignDoc>): _122.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _122.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignDocDirectAux;
                fromJSON(object: any): _122.SignDocDirectAux;
                toJSON(message: _122.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_122.SignDocDirectAux>): _122.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _122.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TxBody;
                fromJSON(object: any): _122.TxBody;
                toJSON(message: _122.TxBody): unknown;
                fromPartial(object: Partial<_122.TxBody>): _122.TxBody;
            };
            AuthInfo: {
                encode(message: _122.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AuthInfo;
                fromJSON(object: any): _122.AuthInfo;
                toJSON(message: _122.AuthInfo): unknown;
                fromPartial(object: Partial<_122.AuthInfo>): _122.AuthInfo;
            };
            SignerInfo: {
                encode(message: _122.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignerInfo;
                fromJSON(object: any): _122.SignerInfo;
                toJSON(message: _122.SignerInfo): unknown;
                fromPartial(object: Partial<_122.SignerInfo>): _122.SignerInfo;
            };
            ModeInfo: {
                encode(message: _122.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ModeInfo;
                fromJSON(object: any): _122.ModeInfo;
                toJSON(message: _122.ModeInfo): unknown;
                fromPartial(object: Partial<_122.ModeInfo>): _122.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _122.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ModeInfo_Single;
                fromJSON(object: any): _122.ModeInfo_Single;
                toJSON(message: _122.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_122.ModeInfo_Single>): _122.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _122.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ModeInfo_Multi;
                fromJSON(object: any): _122.ModeInfo_Multi;
                toJSON(message: _122.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_122.ModeInfo_Multi>): _122.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _122.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Fee;
                fromJSON(object: any): _122.Fee;
                toJSON(message: _122.Fee): unknown;
                fromPartial(object: Partial<_122.Fee>): _122.Fee;
            };
            Tip: {
                encode(message: _122.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Tip;
                fromJSON(object: any): _122.Tip;
                toJSON(message: _122.Tip): unknown;
                fromPartial(object: Partial<_122.Tip>): _122.Tip;
            };
            AuxSignerData: {
                encode(message: _122.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.AuxSignerData;
                fromJSON(object: any): _122.AuxSignerData;
                toJSON(message: _122.AuxSignerData): unknown;
                fromPartial(object: Partial<_122.AuxSignerData>): _122.AuxSignerData;
            };
            orderByFromJSON(object: any): _121.OrderBy;
            orderByToJSON(object: _121.OrderBy): string;
            broadcastModeFromJSON(object: any): _121.BroadcastMode;
            broadcastModeToJSON(object: _121.BroadcastMode): string;
            OrderBy: typeof _121.OrderBy;
            OrderBySDKType: typeof _121.OrderBySDKType;
            BroadcastMode: typeof _121.BroadcastMode;
            BroadcastModeSDKType: typeof _121.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _121.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetTxsEventRequest;
                fromJSON(object: any): _121.GetTxsEventRequest;
                toJSON(message: _121.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_121.GetTxsEventRequest>): _121.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _121.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetTxsEventResponse;
                fromJSON(object: any): _121.GetTxsEventResponse;
                toJSON(message: _121.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_121.GetTxsEventResponse>): _121.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _121.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.BroadcastTxRequest;
                fromJSON(object: any): _121.BroadcastTxRequest;
                toJSON(message: _121.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_121.BroadcastTxRequest>): _121.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _121.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.BroadcastTxResponse;
                fromJSON(object: any): _121.BroadcastTxResponse;
                toJSON(message: _121.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_121.BroadcastTxResponse>): _121.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _121.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SimulateRequest;
                fromJSON(object: any): _121.SimulateRequest;
                toJSON(message: _121.SimulateRequest): unknown;
                fromPartial(object: Partial<_121.SimulateRequest>): _121.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _121.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.SimulateResponse;
                fromJSON(object: any): _121.SimulateResponse;
                toJSON(message: _121.SimulateResponse): unknown;
                fromPartial(object: Partial<_121.SimulateResponse>): _121.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _121.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetTxRequest;
                fromJSON(object: any): _121.GetTxRequest;
                toJSON(message: _121.GetTxRequest): unknown;
                fromPartial(object: Partial<_121.GetTxRequest>): _121.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _121.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetTxResponse;
                fromJSON(object: any): _121.GetTxResponse;
                toJSON(message: _121.GetTxResponse): unknown;
                fromPartial(object: Partial<_121.GetTxResponse>): _121.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _121.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetBlockWithTxsRequest;
                fromJSON(object: any): _121.GetBlockWithTxsRequest;
                toJSON(message: _121.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_121.GetBlockWithTxsRequest>): _121.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _121.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GetBlockWithTxsResponse;
                fromJSON(object: any): _121.GetBlockWithTxsResponse;
                toJSON(message: _121.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_121.GetBlockWithTxsResponse>): _121.GetBlockWithTxsResponse;
            };
            TxDecodeRequest: {
                encode(message: _121.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxDecodeRequest;
                fromJSON(object: any): _121.TxDecodeRequest;
                toJSON(message: _121.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_121.TxDecodeRequest>): _121.TxDecodeRequest;
            };
            TxDecodeResponse: {
                encode(message: _121.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxDecodeResponse;
                fromJSON(object: any): _121.TxDecodeResponse;
                toJSON(message: _121.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_121.TxDecodeResponse>): _121.TxDecodeResponse;
            };
            TxEncodeRequest: {
                encode(message: _121.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxEncodeRequest;
                fromJSON(object: any): _121.TxEncodeRequest;
                toJSON(message: _121.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_121.TxEncodeRequest>): _121.TxEncodeRequest;
            };
            TxEncodeResponse: {
                encode(message: _121.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxEncodeResponse;
                fromJSON(object: any): _121.TxEncodeResponse;
                toJSON(message: _121.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_121.TxEncodeResponse>): _121.TxEncodeResponse;
            };
            TxEncodeAminoRequest: {
                encode(message: _121.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxEncodeAminoRequest;
                fromJSON(object: any): _121.TxEncodeAminoRequest;
                toJSON(message: _121.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_121.TxEncodeAminoRequest>): _121.TxEncodeAminoRequest;
            };
            TxEncodeAminoResponse: {
                encode(message: _121.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxEncodeAminoResponse;
                fromJSON(object: any): _121.TxEncodeAminoResponse;
                toJSON(message: _121.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_121.TxEncodeAminoResponse>): _121.TxEncodeAminoResponse;
            };
            TxDecodeAminoRequest: {
                encode(message: _121.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxDecodeAminoRequest;
                fromJSON(object: any): _121.TxDecodeAminoRequest;
                toJSON(message: _121.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_121.TxDecodeAminoRequest>): _121.TxDecodeAminoRequest;
            };
            TxDecodeAminoResponse: {
                encode(message: _121.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.TxDecodeAminoResponse;
                fromJSON(object: any): _121.TxDecodeAminoResponse;
                toJSON(message: _121.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_121.TxDecodeAminoResponse>): _121.TxDecodeAminoResponse;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    encode(message: _123.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Module;
                    fromJSON(object: any): _123.Module;
                    toJSON(message: _123.Module): unknown;
                    fromPartial(object: Partial<_123.Module>): _123.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _251.MsgClientImpl;
            QueryClientImpl: typeof _234.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _124.QueryCurrentPlanRequest): Promise<_124.QueryCurrentPlanResponse>;
                appliedPlan(request: _124.QueryAppliedPlanRequest): Promise<_124.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _124.QueryUpgradedConsensusStateRequest): Promise<_124.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _124.QueryModuleVersionsRequest): Promise<_124.QueryModuleVersionsResponse>;
                authority(request?: _124.QueryAuthorityRequest): Promise<_124.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _125.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _125.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _125.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _125.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _125.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _125.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _125.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _125.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _126.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Plan;
                fromJSON(object: any): _126.Plan;
                toJSON(message: _126.Plan): unknown;
                fromPartial(object: Partial<_126.Plan>): _126.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _126.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.SoftwareUpgradeProposal;
                fromJSON(object: any): _126.SoftwareUpgradeProposal;
                toJSON(message: _126.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_126.SoftwareUpgradeProposal>): _126.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _126.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _126.CancelSoftwareUpgradeProposal;
                toJSON(message: _126.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_126.CancelSoftwareUpgradeProposal>): _126.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _126.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ModuleVersion;
                fromJSON(object: any): _126.ModuleVersion;
                toJSON(message: _126.ModuleVersion): unknown;
                fromPartial(object: Partial<_126.ModuleVersion>): _126.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _125.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgSoftwareUpgrade;
                fromJSON(object: any): _125.MsgSoftwareUpgrade;
                toJSON(message: _125.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_125.MsgSoftwareUpgrade>): _125.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _125.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _125.MsgSoftwareUpgradeResponse;
                toJSON(_: _125.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_125.MsgSoftwareUpgradeResponse>): _125.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _125.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgCancelUpgrade;
                fromJSON(object: any): _125.MsgCancelUpgrade;
                toJSON(message: _125.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_125.MsgCancelUpgrade>): _125.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _125.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.MsgCancelUpgradeResponse;
                fromJSON(_: any): _125.MsgCancelUpgradeResponse;
                toJSON(_: _125.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_125.MsgCancelUpgradeResponse>): _125.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _124.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryCurrentPlanRequest;
                fromJSON(_: any): _124.QueryCurrentPlanRequest;
                toJSON(_: _124.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_124.QueryCurrentPlanRequest>): _124.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _124.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryCurrentPlanResponse;
                fromJSON(object: any): _124.QueryCurrentPlanResponse;
                toJSON(message: _124.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_124.QueryCurrentPlanResponse>): _124.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _124.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAppliedPlanRequest;
                fromJSON(object: any): _124.QueryAppliedPlanRequest;
                toJSON(message: _124.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_124.QueryAppliedPlanRequest>): _124.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _124.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAppliedPlanResponse;
                fromJSON(object: any): _124.QueryAppliedPlanResponse;
                toJSON(message: _124.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_124.QueryAppliedPlanResponse>): _124.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _124.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _124.QueryUpgradedConsensusStateRequest;
                toJSON(message: _124.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_124.QueryUpgradedConsensusStateRequest>): _124.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _124.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _124.QueryUpgradedConsensusStateResponse;
                toJSON(message: _124.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_124.QueryUpgradedConsensusStateResponse>): _124.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _124.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryModuleVersionsRequest;
                fromJSON(object: any): _124.QueryModuleVersionsRequest;
                toJSON(message: _124.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_124.QueryModuleVersionsRequest>): _124.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _124.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryModuleVersionsResponse;
                fromJSON(object: any): _124.QueryModuleVersionsResponse;
                toJSON(message: _124.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_124.QueryModuleVersionsResponse>): _124.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _124.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAuthorityRequest;
                fromJSON(_: any): _124.QueryAuthorityRequest;
                toJSON(_: _124.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_124.QueryAuthorityRequest>): _124.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _124.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.QueryAuthorityResponse;
                fromJSON(object: any): _124.QueryAuthorityResponse;
                toJSON(message: _124.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_124.QueryAuthorityResponse>): _124.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    encode(_: _127.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Module;
                    fromJSON(_: any): _127.Module;
                    toJSON(_: _127.Module): unknown;
                    fromPartial(_: Partial<_127.Module>): _127.Module;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _252.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _128.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _128.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _128.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _128.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _128.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _128.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _128.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _128.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _128.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _128.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _128.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _128.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _128.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _128.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _128.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _128.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _128.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _128.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _128.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _128.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _129.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.BaseVestingAccount;
                fromJSON(object: any): _129.BaseVestingAccount;
                toJSON(message: _129.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_129.BaseVestingAccount>): _129.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _129.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ContinuousVestingAccount;
                fromJSON(object: any): _129.ContinuousVestingAccount;
                toJSON(message: _129.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_129.ContinuousVestingAccount>): _129.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _129.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.DelayedVestingAccount;
                fromJSON(object: any): _129.DelayedVestingAccount;
                toJSON(message: _129.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_129.DelayedVestingAccount>): _129.DelayedVestingAccount;
            };
            Period: {
                encode(message: _129.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.Period;
                fromJSON(object: any): _129.Period;
                toJSON(message: _129.Period): unknown;
                fromPartial(object: Partial<_129.Period>): _129.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _129.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PeriodicVestingAccount;
                fromJSON(object: any): _129.PeriodicVestingAccount;
                toJSON(message: _129.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_129.PeriodicVestingAccount>): _129.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _129.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.PermanentLockedAccount;
                fromJSON(object: any): _129.PermanentLockedAccount;
                toJSON(message: _129.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_129.PermanentLockedAccount>): _129.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _128.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreateVestingAccount;
                fromJSON(object: any): _128.MsgCreateVestingAccount;
                toJSON(message: _128.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_128.MsgCreateVestingAccount>): _128.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _128.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _128.MsgCreateVestingAccountResponse;
                toJSON(_: _128.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_128.MsgCreateVestingAccountResponse>): _128.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _128.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _128.MsgCreatePermanentLockedAccount;
                toJSON(message: _128.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_128.MsgCreatePermanentLockedAccount>): _128.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _128.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _128.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _128.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_128.MsgCreatePermanentLockedAccountResponse>): _128.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _128.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _128.MsgCreatePeriodicVestingAccount;
                toJSON(message: _128.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_128.MsgCreatePeriodicVestingAccount>): _128.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _128.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _128.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _128.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_128.MsgCreatePeriodicVestingAccountResponse>): _128.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _235.MsgClientImpl;
                };
                authz: {
                    v1beta1: _236.MsgClientImpl;
                };
                bank: {
                    v1beta1: _237.MsgClientImpl;
                };
                circuit: {
                    v1: _238.MsgClientImpl;
                };
                consensus: {
                    v1: _239.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _240.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _241.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _242.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _243.MsgClientImpl;
                };
                gov: {
                    v1: _244.MsgClientImpl;
                    v1beta1: _245.MsgClientImpl;
                };
                group: {
                    v1: _246.MsgClientImpl;
                };
                mint: {
                    v1beta1: _247.MsgClientImpl;
                };
                nft: {
                    v1beta1: _248.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _249.MsgClientImpl;
                };
                staking: {
                    v1beta1: _250.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _251.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _252.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _5.QueryConfigRequest): Promise<_5.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _9.QueryAccountsRequest): Promise<_9.QueryAccountsResponse>;
                        account(request: _9.QueryAccountRequest): Promise<_9.QueryAccountResponse>;
                        accountAddressByID(request: _9.QueryAccountAddressByIDRequest): Promise<_9.QueryAccountAddressByIDResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        moduleAccounts(request?: _9.QueryModuleAccountsRequest): Promise<_9.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _9.QueryModuleAccountByNameRequest): Promise<_9.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _9.Bech32PrefixRequest): Promise<_9.Bech32PrefixResponse>;
                        addressBytesToString(request: _9.AddressBytesToStringRequest): Promise<_9.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _9.AddressStringToBytesRequest): Promise<_9.AddressStringToBytesResponse>;
                        accountInfo(request: _9.QueryAccountInfoRequest): Promise<_9.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                        granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                        granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _18.AppOptionsRequest): Promise<_18.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _23.QueryBalanceRequest): Promise<_23.QueryBalanceResponse>;
                        allBalances(request: _23.QueryAllBalancesRequest): Promise<_23.QueryAllBalancesResponse>;
                        spendableBalances(request: _23.QuerySpendableBalancesRequest): Promise<_23.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _23.QuerySpendableBalanceByDenomRequest): Promise<_23.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _23.QueryTotalSupplyRequest): Promise<_23.QueryTotalSupplyResponse>;
                        supplyOf(request: _23.QuerySupplyOfRequest): Promise<_23.QuerySupplyOfResponse>;
                        params(request?: _23.QueryParamsRequest): Promise<_23.QueryParamsResponse>;
                        denomMetadata(request: _23.QueryDenomMetadataRequest): Promise<_23.QueryDenomMetadataResponse>;
                        denomMetadataByQueryString(request: _23.QueryDenomMetadataByQueryStringRequest): Promise<_23.QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: _23.QueryDenomsMetadataRequest): Promise<_23.QueryDenomsMetadataResponse>;
                        denomOwners(request: _23.QueryDenomOwnersRequest): Promise<_23.QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: _23.QueryDenomOwnersByQueryRequest): Promise<_23.QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: _23.QuerySendEnabledRequest): Promise<_23.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _26.ConfigRequest): Promise<_26.ConfigResponse>;
                            status(request?: _26.StatusRequest): Promise<_26.StatusResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _30.GetNodeInfoRequest): Promise<_30.GetNodeInfoResponse>;
                            getSyncing(request?: _30.GetSyncingRequest): Promise<_30.GetSyncingResponse>;
                            getLatestBlock(request?: _30.GetLatestBlockRequest): Promise<_30.GetLatestBlockResponse>;
                            getBlockByHeight(request: _30.GetBlockByHeightRequest): Promise<_30.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _30.GetLatestValidatorSetRequest): Promise<_30.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _30.GetValidatorSetByHeightRequest): Promise<_30.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _30.ABCIQueryRequest): Promise<_30.ABCIQueryResponse>;
                        };
                    };
                };
                circuit: {
                    v1: {
                        account(request: _34.QueryAccountRequest): Promise<_34.AccountResponse>;
                        accounts(request?: _34.QueryAccountsRequest): Promise<_34.AccountsResponse>;
                        disabledList(request?: _34.QueryDisabledListRequest): Promise<_34.DisabledListResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _38.QueryParamsRequest): Promise<_38.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        validatorDistributionInfo(request: _52.QueryValidatorDistributionInfoRequest): Promise<_52.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _52.QueryValidatorOutstandingRewardsRequest): Promise<_52.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _52.QueryValidatorCommissionRequest): Promise<_52.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _52.QueryValidatorSlashesRequest): Promise<_52.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _52.QueryDelegationRewardsRequest): Promise<_52.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _52.QueryDelegationTotalRewardsRequest): Promise<_52.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _52.QueryDelegatorValidatorsRequest): Promise<_52.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _52.QueryDelegatorWithdrawAddressRequest): Promise<_52.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _52.QueryCommunityPoolRequest): Promise<_52.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _57.QueryEvidenceRequest): Promise<_57.QueryEvidenceResponse>;
                        allEvidence(request?: _57.QueryAllEvidenceRequest): Promise<_57.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _62.QueryAllowanceRequest): Promise<_62.QueryAllowanceResponse>;
                        allowances(request: _62.QueryAllowancesRequest): Promise<_62.QueryAllowancesResponse>;
                        allowancesByGranter(request: _62.QueryAllowancesByGranterRequest): Promise<_62.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        constitution(request?: _69.QueryConstitutionRequest): Promise<_69.QueryConstitutionResponse>;
                        proposal(request: _69.QueryProposalRequest): Promise<_69.QueryProposalResponse>;
                        proposals(request: _69.QueryProposalsRequest): Promise<_69.QueryProposalsResponse>;
                        vote(request: _69.QueryVoteRequest): Promise<_69.QueryVoteResponse>;
                        votes(request: _69.QueryVotesRequest): Promise<_69.QueryVotesResponse>;
                        params(request: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                        deposit(request: _69.QueryDepositRequest): Promise<_69.QueryDepositResponse>;
                        deposits(request: _69.QueryDepositsRequest): Promise<_69.QueryDepositsResponse>;
                        tallyResult(request: _69.QueryTallyResultRequest): Promise<_69.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _73.QueryProposalRequest): Promise<_73.QueryProposalResponse>;
                        proposals(request: _73.QueryProposalsRequest): Promise<_73.QueryProposalsResponse>;
                        vote(request: _73.QueryVoteRequest): Promise<_73.QueryVoteResponse>;
                        votes(request: _73.QueryVotesRequest): Promise<_73.QueryVotesResponse>;
                        params(request: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                        deposit(request: _73.QueryDepositRequest): Promise<_73.QueryDepositResponse>;
                        deposits(request: _73.QueryDepositsRequest): Promise<_73.QueryDepositsResponse>;
                        tallyResult(request: _73.QueryTallyResultRequest): Promise<_73.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _78.QueryGroupInfoRequest): Promise<_78.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _78.QueryGroupPolicyInfoRequest): Promise<_78.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _78.QueryGroupMembersRequest): Promise<_78.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _78.QueryGroupsByAdminRequest): Promise<_78.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _78.QueryGroupPoliciesByGroupRequest): Promise<_78.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _78.QueryGroupPoliciesByAdminRequest): Promise<_78.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _78.QueryProposalRequest): Promise<_78.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _78.QueryProposalsByGroupPolicyRequest): Promise<_78.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _78.QueryVoteByProposalVoterRequest): Promise<_78.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _78.QueryVotesByProposalRequest): Promise<_78.QueryVotesByProposalResponse>;
                        votesByVoter(request: _78.QueryVotesByVoterRequest): Promise<_78.QueryVotesByVoterResponse>;
                        groupsByMember(request: _78.QueryGroupsByMemberRequest): Promise<_78.QueryGroupsByMemberResponse>;
                        tallyResult(request: _78.QueryTallyResultRequest): Promise<_78.QueryTallyResultResponse>;
                        groups(request?: _78.QueryGroupsRequest): Promise<_78.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _84.QueryParamsRequest): Promise<_84.QueryParamsResponse>;
                        inflation(request?: _84.QueryInflationRequest): Promise<_84.QueryInflationResponse>;
                        annualProvisions(request?: _84.QueryAnnualProvisionsRequest): Promise<_84.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _92.QueryBalanceRequest): Promise<_92.QueryBalanceResponse>;
                        owner(request: _92.QueryOwnerRequest): Promise<_92.QueryOwnerResponse>;
                        supply(request: _92.QuerySupplyRequest): Promise<_92.QuerySupplyResponse>;
                        nFTs(request: _92.QueryNFTsRequest): Promise<_92.QueryNFTsResponse>;
                        nFT(request: _92.QueryNFTRequest): Promise<_92.QueryNFTResponse>;
                        class(request: _92.QueryClassRequest): Promise<_92.QueryClassResponse>;
                        classes(request?: _92.QueryClassesRequest): Promise<_92.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _95.GetRequest): Promise<_95.GetResponse>;
                            list(request: _95.ListRequest): Promise<_95.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                        subspaces(request?: _100.QuerySubspacesRequest): Promise<_100.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        signingInfo(request: _105.QuerySigningInfoRequest): Promise<_105.QuerySigningInfoResponse>;
                        signingInfos(request?: _105.QuerySigningInfosRequest): Promise<_105.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _111.QueryValidatorsRequest): Promise<_111.QueryValidatorsResponse>;
                        validator(request: _111.QueryValidatorRequest): Promise<_111.QueryValidatorResponse>;
                        validatorDelegations(request: _111.QueryValidatorDelegationsRequest): Promise<_111.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _111.QueryValidatorUnbondingDelegationsRequest): Promise<_111.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _111.QueryDelegationRequest): Promise<_111.QueryDelegationResponse>;
                        unbondingDelegation(request: _111.QueryUnbondingDelegationRequest): Promise<_111.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _111.QueryDelegatorDelegationsRequest): Promise<_111.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _111.QueryDelegatorUnbondingDelegationsRequest): Promise<_111.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _111.QueryRedelegationsRequest): Promise<_111.QueryRedelegationsResponse>;
                        delegatorValidators(request: _111.QueryDelegatorValidatorsRequest): Promise<_111.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _111.QueryDelegatorValidatorRequest): Promise<_111.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _111.QueryHistoricalInfoRequest): Promise<_111.QueryHistoricalInfoResponse>;
                        pool(request?: _111.QueryPoolRequest): Promise<_111.QueryPoolResponse>;
                        params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _121.SimulateRequest): Promise<_121.SimulateResponse>;
                        getTx(request: _121.GetTxRequest): Promise<_121.GetTxResponse>;
                        broadcastTx(request: _121.BroadcastTxRequest): Promise<_121.BroadcastTxResponse>;
                        getTxsEvent(request: _121.GetTxsEventRequest): Promise<_121.GetTxsEventResponse>;
                        getBlockWithTxs(request: _121.GetBlockWithTxsRequest): Promise<_121.GetBlockWithTxsResponse>;
                        txDecode(request: _121.TxDecodeRequest): Promise<_121.TxDecodeResponse>;
                        txEncode(request: _121.TxEncodeRequest): Promise<_121.TxEncodeResponse>;
                        txEncodeAmino(request: _121.TxEncodeAminoRequest): Promise<_121.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _121.TxDecodeAminoRequest): Promise<_121.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _124.QueryCurrentPlanRequest): Promise<_124.QueryCurrentPlanResponse>;
                        appliedPlan(request: _124.QueryAppliedPlanRequest): Promise<_124.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _124.QueryUpgradedConsensusStateRequest): Promise<_124.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _124.QueryModuleVersionsRequest): Promise<_124.QueryModuleVersionsResponse>;
                        authority(request?: _124.QueryAuthorityRequest): Promise<_124.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
