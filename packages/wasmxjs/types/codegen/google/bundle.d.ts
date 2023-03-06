import * as _12 from "./api/http";
import * as _13 from "./api/httpbody";
import * as _14 from "./protobuf/any";
import * as _15 from "./protobuf/descriptor";
import * as _16 from "./protobuf/timestamp";
import * as _17 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _13.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.HttpBody;
            fromJSON(object: any): _13.HttpBody;
            toJSON(message: _13.HttpBody): unknown;
            fromPartial(object: Partial<_13.HttpBody>): _13.HttpBody;
        };
        Http: {
            encode(message: _12.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Http;
            fromJSON(object: any): _12.Http;
            toJSON(message: _12.Http): unknown;
            fromPartial(object: Partial<_12.Http>): _12.Http;
        };
        HttpRule: {
            encode(message: _12.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.HttpRule;
            fromJSON(object: any): _12.HttpRule;
            toJSON(message: _12.HttpRule): unknown;
            fromPartial(object: Partial<_12.HttpRule>): _12.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _12.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.CustomHttpPattern;
            fromJSON(object: any): _12.CustomHttpPattern;
            toJSON(message: _12.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_12.CustomHttpPattern>): _12.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _17.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Duration;
            fromJSON(object: any): _17.Duration;
            toJSON(message: _17.Duration): unknown;
            fromPartial(object: Partial<_17.Duration>): _17.Duration;
        };
        Timestamp: {
            encode(message: _16.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Timestamp;
            fromJSON(object: any): _16.Timestamp;
            toJSON(message: _16.Timestamp): unknown;
            fromPartial(object: Partial<_16.Timestamp>): _16.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _15.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _15.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _15.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _15.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _15.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _15.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _15.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _15.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _15.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _15.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _15.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _15.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _15.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _15.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _15.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _15.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _15.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _15.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _15.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _15.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _15.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _15.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _15.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _15.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _15.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.FileDescriptorSet;
            fromJSON(object: any): _15.FileDescriptorSet;
            toJSON(message: _15.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_15.FileDescriptorSet>): _15.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _15.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.FileDescriptorProto;
            fromJSON(object: any): _15.FileDescriptorProto;
            toJSON(message: _15.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_15.FileDescriptorProto>): _15.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _15.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DescriptorProto;
            fromJSON(object: any): _15.DescriptorProto;
            toJSON(message: _15.DescriptorProto): unknown;
            fromPartial(object: Partial<_15.DescriptorProto>): _15.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _15.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _15.DescriptorProto_ExtensionRange;
            toJSON(message: _15.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_15.DescriptorProto_ExtensionRange>): _15.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _15.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DescriptorProto_ReservedRange;
            fromJSON(object: any): _15.DescriptorProto_ReservedRange;
            toJSON(message: _15.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_15.DescriptorProto_ReservedRange>): _15.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _15.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ExtensionRangeOptions;
            fromJSON(object: any): _15.ExtensionRangeOptions;
            toJSON(message: _15.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_15.ExtensionRangeOptions>): _15.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _15.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.FieldDescriptorProto;
            fromJSON(object: any): _15.FieldDescriptorProto;
            toJSON(message: _15.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_15.FieldDescriptorProto>): _15.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _15.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.OneofDescriptorProto;
            fromJSON(object: any): _15.OneofDescriptorProto;
            toJSON(message: _15.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_15.OneofDescriptorProto>): _15.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _15.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EnumDescriptorProto;
            fromJSON(object: any): _15.EnumDescriptorProto;
            toJSON(message: _15.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_15.EnumDescriptorProto>): _15.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _15.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _15.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _15.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_15.EnumDescriptorProto_EnumReservedRange>): _15.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _15.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EnumValueDescriptorProto;
            fromJSON(object: any): _15.EnumValueDescriptorProto;
            toJSON(message: _15.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_15.EnumValueDescriptorProto>): _15.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _15.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ServiceDescriptorProto;
            fromJSON(object: any): _15.ServiceDescriptorProto;
            toJSON(message: _15.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_15.ServiceDescriptorProto>): _15.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _15.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MethodDescriptorProto;
            fromJSON(object: any): _15.MethodDescriptorProto;
            toJSON(message: _15.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_15.MethodDescriptorProto>): _15.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _15.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.FileOptions;
            fromJSON(object: any): _15.FileOptions;
            toJSON(message: _15.FileOptions): unknown;
            fromPartial(object: Partial<_15.FileOptions>): _15.FileOptions;
        };
        MessageOptions: {
            encode(message: _15.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MessageOptions;
            fromJSON(object: any): _15.MessageOptions;
            toJSON(message: _15.MessageOptions): unknown;
            fromPartial(object: Partial<_15.MessageOptions>): _15.MessageOptions;
        };
        FieldOptions: {
            encode(message: _15.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.FieldOptions;
            fromJSON(object: any): _15.FieldOptions;
            toJSON(message: _15.FieldOptions): unknown;
            fromPartial(object: Partial<_15.FieldOptions>): _15.FieldOptions;
        };
        OneofOptions: {
            encode(message: _15.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.OneofOptions;
            fromJSON(object: any): _15.OneofOptions;
            toJSON(message: _15.OneofOptions): unknown;
            fromPartial(object: Partial<_15.OneofOptions>): _15.OneofOptions;
        };
        EnumOptions: {
            encode(message: _15.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EnumOptions;
            fromJSON(object: any): _15.EnumOptions;
            toJSON(message: _15.EnumOptions): unknown;
            fromPartial(object: Partial<_15.EnumOptions>): _15.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _15.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EnumValueOptions;
            fromJSON(object: any): _15.EnumValueOptions;
            toJSON(message: _15.EnumValueOptions): unknown;
            fromPartial(object: Partial<_15.EnumValueOptions>): _15.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _15.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ServiceOptions;
            fromJSON(object: any): _15.ServiceOptions;
            toJSON(message: _15.ServiceOptions): unknown;
            fromPartial(object: Partial<_15.ServiceOptions>): _15.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _15.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MethodOptions;
            fromJSON(object: any): _15.MethodOptions;
            toJSON(message: _15.MethodOptions): unknown;
            fromPartial(object: Partial<_15.MethodOptions>): _15.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _15.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.UninterpretedOption;
            fromJSON(object: any): _15.UninterpretedOption;
            toJSON(message: _15.UninterpretedOption): unknown;
            fromPartial(object: Partial<_15.UninterpretedOption>): _15.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _15.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.UninterpretedOption_NamePart;
            fromJSON(object: any): _15.UninterpretedOption_NamePart;
            toJSON(message: _15.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_15.UninterpretedOption_NamePart>): _15.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _15.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SourceCodeInfo;
            fromJSON(object: any): _15.SourceCodeInfo;
            toJSON(message: _15.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_15.SourceCodeInfo>): _15.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _15.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SourceCodeInfo_Location;
            fromJSON(object: any): _15.SourceCodeInfo_Location;
            toJSON(message: _15.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_15.SourceCodeInfo_Location>): _15.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _15.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GeneratedCodeInfo;
            fromJSON(object: any): _15.GeneratedCodeInfo;
            toJSON(message: _15.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_15.GeneratedCodeInfo>): _15.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _15.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _15.GeneratedCodeInfo_Annotation;
            toJSON(message: _15.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_15.GeneratedCodeInfo_Annotation>): _15.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _14.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Any;
            fromJSON(object: any): _14.Any;
            toJSON(message: _14.Any): unknown;
            fromPartial(object: Partial<_14.Any>): _14.Any;
        };
    };
}
