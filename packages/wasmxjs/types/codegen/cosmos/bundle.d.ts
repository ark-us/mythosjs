import * as _0 from "./base/abci/v1beta1/abci";
import * as _1 from "./base/kv/v1beta1/kv";
import * as _2 from "./base/query/v1beta1/pagination";
import * as _3 from "./base/reflection/v1beta1/reflection";
import * as _4 from "./base/reflection/v2alpha1/reflection";
import * as _5 from "./base/snapshots/v1beta1/snapshot";
import * as _6 from "./base/store/v1beta1/commit_info";
import * as _7 from "./base/store/v1beta1/listening";
import * as _8 from "./base/tendermint/v1beta1/query";
import * as _9 from "./base/v1beta1/coin";
import * as _39 from "./base/tendermint/v1beta1/query.rpc.Service";
export declare namespace cosmos {
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _0.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.TxResponse;
                    fromJSON(object: any): _0.TxResponse;
                    toJSON(message: _0.TxResponse): unknown;
                    fromPartial(object: Partial<_0.TxResponse>): _0.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _0.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ABCIMessageLog;
                    fromJSON(object: any): _0.ABCIMessageLog;
                    toJSON(message: _0.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_0.ABCIMessageLog>): _0.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _0.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.StringEvent;
                    fromJSON(object: any): _0.StringEvent;
                    toJSON(message: _0.StringEvent): unknown;
                    fromPartial(object: Partial<_0.StringEvent>): _0.StringEvent;
                };
                Attribute: {
                    encode(message: _0.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Attribute;
                    fromJSON(object: any): _0.Attribute;
                    toJSON(message: _0.Attribute): unknown;
                    fromPartial(object: Partial<_0.Attribute>): _0.Attribute;
                };
                GasInfo: {
                    encode(message: _0.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.GasInfo;
                    fromJSON(object: any): _0.GasInfo;
                    toJSON(message: _0.GasInfo): unknown;
                    fromPartial(object: Partial<_0.GasInfo>): _0.GasInfo;
                };
                Result: {
                    encode(message: _0.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Result;
                    fromJSON(object: any): _0.Result;
                    toJSON(message: _0.Result): unknown;
                    fromPartial(object: Partial<_0.Result>): _0.Result;
                };
                SimulationResponse: {
                    encode(message: _0.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SimulationResponse;
                    fromJSON(object: any): _0.SimulationResponse;
                    toJSON(message: _0.SimulationResponse): unknown;
                    fromPartial(object: Partial<_0.SimulationResponse>): _0.SimulationResponse;
                };
                MsgData: {
                    encode(message: _0.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MsgData;
                    fromJSON(object: any): _0.MsgData;
                    toJSON(message: _0.MsgData): unknown;
                    fromPartial(object: Partial<_0.MsgData>): _0.MsgData;
                };
                TxMsgData: {
                    encode(message: _0.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.TxMsgData;
                    fromJSON(object: any): _0.TxMsgData;
                    toJSON(message: _0.TxMsgData): unknown;
                    fromPartial(object: Partial<_0.TxMsgData>): _0.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _0.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.SearchTxsResult;
                    fromJSON(object: any): _0.SearchTxsResult;
                    toJSON(message: _0.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_0.SearchTxsResult>): _0.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _1.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Pairs;
                    fromJSON(object: any): _1.Pairs;
                    toJSON(message: _1.Pairs): unknown;
                    fromPartial(object: Partial<_1.Pairs>): _1.Pairs;
                };
                Pair: {
                    encode(message: _1.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Pair;
                    fromJSON(object: any): _1.Pair;
                    toJSON(message: _1.Pair): unknown;
                    fromPartial(object: Partial<_1.Pair>): _1.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _2.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.PageRequest;
                    fromJSON(object: any): _2.PageRequest;
                    toJSON(message: _2.PageRequest): unknown;
                    fromPartial(object: Partial<_2.PageRequest>): _2.PageRequest;
                };
                PageResponse: {
                    encode(message: _2.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.PageResponse;
                    fromJSON(object: any): _2.PageResponse;
                    toJSON(message: _2.PageResponse): unknown;
                    fromPartial(object: Partial<_2.PageResponse>): _2.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _3.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListAllInterfacesRequest;
                    fromJSON(_: any): _3.ListAllInterfacesRequest;
                    toJSON(_: _3.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_3.ListAllInterfacesRequest>): _3.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _3.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListAllInterfacesResponse;
                    fromJSON(object: any): _3.ListAllInterfacesResponse;
                    toJSON(message: _3.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_3.ListAllInterfacesResponse>): _3.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _3.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListImplementationsRequest;
                    fromJSON(object: any): _3.ListImplementationsRequest;
                    toJSON(message: _3.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_3.ListImplementationsRequest>): _3.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _3.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ListImplementationsResponse;
                    fromJSON(object: any): _3.ListImplementationsResponse;
                    toJSON(message: _3.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_3.ListImplementationsResponse>): _3.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _4.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AppDescriptor;
                    fromJSON(object: any): _4.AppDescriptor;
                    toJSON(message: _4.AppDescriptor): unknown;
                    fromPartial(object: Partial<_4.AppDescriptor>): _4.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _4.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.TxDescriptor;
                    fromJSON(object: any): _4.TxDescriptor;
                    toJSON(message: _4.TxDescriptor): unknown;
                    fromPartial(object: Partial<_4.TxDescriptor>): _4.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _4.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AuthnDescriptor;
                    fromJSON(object: any): _4.AuthnDescriptor;
                    toJSON(message: _4.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_4.AuthnDescriptor>): _4.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _4.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.SigningModeDescriptor;
                    fromJSON(object: any): _4.SigningModeDescriptor;
                    toJSON(message: _4.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_4.SigningModeDescriptor>): _4.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _4.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ChainDescriptor;
                    fromJSON(object: any): _4.ChainDescriptor;
                    toJSON(message: _4.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_4.ChainDescriptor>): _4.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _4.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.CodecDescriptor;
                    fromJSON(object: any): _4.CodecDescriptor;
                    toJSON(message: _4.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_4.CodecDescriptor>): _4.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _4.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.InterfaceDescriptor;
                    fromJSON(object: any): _4.InterfaceDescriptor;
                    toJSON(message: _4.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_4.InterfaceDescriptor>): _4.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _4.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _4.InterfaceImplementerDescriptor;
                    toJSON(message: _4.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_4.InterfaceImplementerDescriptor>): _4.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _4.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _4.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _4.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_4.InterfaceAcceptingMessageDescriptor>): _4.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _4.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.ConfigurationDescriptor;
                    fromJSON(object: any): _4.ConfigurationDescriptor;
                    toJSON(message: _4.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_4.ConfigurationDescriptor>): _4.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _4.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgDescriptor;
                    fromJSON(object: any): _4.MsgDescriptor;
                    toJSON(message: _4.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_4.MsgDescriptor>): _4.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _4.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _4.GetAuthnDescriptorRequest;
                    toJSON(_: _4.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_4.GetAuthnDescriptorRequest>): _4.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _4.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _4.GetAuthnDescriptorResponse;
                    toJSON(message: _4.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_4.GetAuthnDescriptorResponse>): _4.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _4.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetChainDescriptorRequest;
                    fromJSON(_: any): _4.GetChainDescriptorRequest;
                    toJSON(_: _4.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_4.GetChainDescriptorRequest>): _4.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _4.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetChainDescriptorResponse;
                    fromJSON(object: any): _4.GetChainDescriptorResponse;
                    toJSON(message: _4.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_4.GetChainDescriptorResponse>): _4.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _4.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetCodecDescriptorRequest;
                    fromJSON(_: any): _4.GetCodecDescriptorRequest;
                    toJSON(_: _4.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_4.GetCodecDescriptorRequest>): _4.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _4.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetCodecDescriptorResponse;
                    fromJSON(object: any): _4.GetCodecDescriptorResponse;
                    toJSON(message: _4.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_4.GetCodecDescriptorResponse>): _4.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _4.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _4.GetConfigurationDescriptorRequest;
                    toJSON(_: _4.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_4.GetConfigurationDescriptorRequest>): _4.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _4.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _4.GetConfigurationDescriptorResponse;
                    toJSON(message: _4.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_4.GetConfigurationDescriptorResponse>): _4.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _4.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _4.GetQueryServicesDescriptorRequest;
                    toJSON(_: _4.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_4.GetQueryServicesDescriptorRequest>): _4.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _4.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _4.GetQueryServicesDescriptorResponse;
                    toJSON(message: _4.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_4.GetQueryServicesDescriptorResponse>): _4.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _4.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetTxDescriptorRequest;
                    fromJSON(_: any): _4.GetTxDescriptorRequest;
                    toJSON(_: _4.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_4.GetTxDescriptorRequest>): _4.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _4.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GetTxDescriptorResponse;
                    fromJSON(object: any): _4.GetTxDescriptorResponse;
                    toJSON(message: _4.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_4.GetTxDescriptorResponse>): _4.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _4.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryServicesDescriptor;
                    fromJSON(object: any): _4.QueryServicesDescriptor;
                    toJSON(message: _4.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_4.QueryServicesDescriptor>): _4.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _4.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryServiceDescriptor;
                    fromJSON(object: any): _4.QueryServiceDescriptor;
                    toJSON(message: _4.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_4.QueryServiceDescriptor>): _4.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _4.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryMethodDescriptor;
                    fromJSON(object: any): _4.QueryMethodDescriptor;
                    toJSON(message: _4.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_4.QueryMethodDescriptor>): _4.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _5.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Snapshot;
                    fromJSON(object: any): _5.Snapshot;
                    toJSON(message: _5.Snapshot): unknown;
                    fromPartial(object: Partial<_5.Snapshot>): _5.Snapshot;
                };
                Metadata: {
                    encode(message: _5.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Metadata;
                    fromJSON(object: any): _5.Metadata;
                    toJSON(message: _5.Metadata): unknown;
                    fromPartial(object: Partial<_5.Metadata>): _5.Metadata;
                };
                SnapshotItem: {
                    encode(message: _5.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.SnapshotItem;
                    fromJSON(object: any): _5.SnapshotItem;
                    toJSON(message: _5.SnapshotItem): unknown;
                    fromPartial(object: Partial<_5.SnapshotItem>): _5.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _5.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.SnapshotStoreItem;
                    fromJSON(object: any): _5.SnapshotStoreItem;
                    toJSON(message: _5.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_5.SnapshotStoreItem>): _5.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _5.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.SnapshotIAVLItem;
                    fromJSON(object: any): _5.SnapshotIAVLItem;
                    toJSON(message: _5.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_5.SnapshotIAVLItem>): _5.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _5.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.SnapshotExtensionMeta;
                    fromJSON(object: any): _5.SnapshotExtensionMeta;
                    toJSON(message: _5.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_5.SnapshotExtensionMeta>): _5.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _5.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.SnapshotExtensionPayload;
                    fromJSON(object: any): _5.SnapshotExtensionPayload;
                    toJSON(message: _5.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_5.SnapshotExtensionPayload>): _5.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _7.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.StoreKVPair;
                    fromJSON(object: any): _7.StoreKVPair;
                    toJSON(message: _7.StoreKVPair): unknown;
                    fromPartial(object: Partial<_7.StoreKVPair>): _7.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _6.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CommitInfo;
                    fromJSON(object: any): _6.CommitInfo;
                    toJSON(message: _6.CommitInfo): unknown;
                    fromPartial(object: Partial<_6.CommitInfo>): _6.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _6.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.StoreInfo;
                    fromJSON(object: any): _6.StoreInfo;
                    toJSON(message: _6.StoreInfo): unknown;
                    fromPartial(object: Partial<_6.StoreInfo>): _6.StoreInfo;
                };
                CommitID: {
                    encode(message: _6.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CommitID;
                    fromJSON(object: any): _6.CommitID;
                    toJSON(message: _6.CommitID): unknown;
                    fromPartial(object: Partial<_6.CommitID>): _6.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _39.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _8.GetNodeInfoRequest): Promise<_8.GetNodeInfoResponse>;
                    getSyncing(request?: _8.GetSyncingRequest): Promise<_8.GetSyncingResponse>;
                    getLatestBlock(request?: _8.GetLatestBlockRequest): Promise<_8.GetLatestBlockResponse>;
                    getBlockByHeight(request: _8.GetBlockByHeightRequest): Promise<_8.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _8.GetLatestValidatorSetRequest): Promise<_8.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _8.GetValidatorSetByHeightRequest): Promise<_8.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _8.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _8.GetValidatorSetByHeightRequest;
                    toJSON(message: _8.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_8.GetValidatorSetByHeightRequest>): _8.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _8.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _8.GetValidatorSetByHeightResponse;
                    toJSON(message: _8.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_8.GetValidatorSetByHeightResponse>): _8.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _8.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _8.GetLatestValidatorSetRequest;
                    toJSON(message: _8.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_8.GetLatestValidatorSetRequest>): _8.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _8.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _8.GetLatestValidatorSetResponse;
                    toJSON(message: _8.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_8.GetLatestValidatorSetResponse>): _8.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _8.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Validator;
                    fromJSON(object: any): _8.Validator;
                    toJSON(message: _8.Validator): unknown;
                    fromPartial(object: Partial<_8.Validator>): _8.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _8.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetBlockByHeightRequest;
                    fromJSON(object: any): _8.GetBlockByHeightRequest;
                    toJSON(message: _8.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_8.GetBlockByHeightRequest>): _8.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _8.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetBlockByHeightResponse;
                    fromJSON(object: any): _8.GetBlockByHeightResponse;
                    toJSON(message: _8.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_8.GetBlockByHeightResponse>): _8.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _8.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetLatestBlockRequest;
                    fromJSON(_: any): _8.GetLatestBlockRequest;
                    toJSON(_: _8.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_8.GetLatestBlockRequest>): _8.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _8.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetLatestBlockResponse;
                    fromJSON(object: any): _8.GetLatestBlockResponse;
                    toJSON(message: _8.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_8.GetLatestBlockResponse>): _8.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _8.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetSyncingRequest;
                    fromJSON(_: any): _8.GetSyncingRequest;
                    toJSON(_: _8.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_8.GetSyncingRequest>): _8.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _8.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetSyncingResponse;
                    fromJSON(object: any): _8.GetSyncingResponse;
                    toJSON(message: _8.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_8.GetSyncingResponse>): _8.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _8.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetNodeInfoRequest;
                    fromJSON(_: any): _8.GetNodeInfoRequest;
                    toJSON(_: _8.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_8.GetNodeInfoRequest>): _8.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _8.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetNodeInfoResponse;
                    fromJSON(object: any): _8.GetNodeInfoResponse;
                    toJSON(message: _8.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_8.GetNodeInfoResponse>): _8.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _8.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.VersionInfo;
                    fromJSON(object: any): _8.VersionInfo;
                    toJSON(message: _8.VersionInfo): unknown;
                    fromPartial(object: Partial<_8.VersionInfo>): _8.VersionInfo;
                };
                Module: {
                    encode(message: _8.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Module;
                    fromJSON(object: any): _8.Module;
                    toJSON(message: _8.Module): unknown;
                    fromPartial(object: Partial<_8.Module>): _8.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _9.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Coin;
                fromJSON(object: any): _9.Coin;
                toJSON(message: _9.Coin): unknown;
                fromPartial(object: Partial<_9.Coin>): _9.Coin;
            };
            DecCoin: {
                encode(message: _9.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DecCoin;
                fromJSON(object: any): _9.DecCoin;
                toJSON(message: _9.DecCoin): unknown;
                fromPartial(object: Partial<_9.DecCoin>): _9.DecCoin;
            };
            IntProto: {
                encode(message: _9.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.IntProto;
                fromJSON(object: any): _9.IntProto;
                toJSON(message: _9.IntProto): unknown;
                fromPartial(object: Partial<_9.IntProto>): _9.IntProto;
            };
            DecProto: {
                encode(message: _9.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DecProto;
                fromJSON(object: any): _9.DecProto;
                toJSON(message: _9.DecProto): unknown;
                fromPartial(object: Partial<_9.DecProto>): _9.DecProto;
            };
        };
    }
    const ClientFactory: {
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _8.GetNodeInfoRequest): Promise<_8.GetNodeInfoResponse>;
                            getSyncing(request?: _8.GetSyncingRequest): Promise<_8.GetSyncingResponse>;
                            getLatestBlock(request?: _8.GetLatestBlockRequest): Promise<_8.GetLatestBlockResponse>;
                            getBlockByHeight(request: _8.GetBlockByHeightRequest): Promise<_8.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _8.GetLatestValidatorSetRequest): Promise<_8.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _8.GetValidatorSetByHeightRequest): Promise<_8.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
