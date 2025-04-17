import * as _132 from "./api/http";
import * as _133 from "./api/httpbody";
import * as _134 from "./protobuf/any";
import * as _135 from "./protobuf/descriptor";
import * as _136 from "./protobuf/timestamp";
import * as _137 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _133.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.HttpBody;
            fromJSON(object: any): _133.HttpBody;
            toJSON(message: _133.HttpBody): unknown;
            fromPartial(object: Partial<_133.HttpBody>): _133.HttpBody;
        };
        Http: {
            encode(message: _132.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Http;
            fromJSON(object: any): _132.Http;
            toJSON(message: _132.Http): unknown;
            fromPartial(object: Partial<_132.Http>): _132.Http;
        };
        HttpRule: {
            encode(message: _132.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.HttpRule;
            fromJSON(object: any): _132.HttpRule;
            toJSON(message: _132.HttpRule): unknown;
            fromPartial(object: Partial<_132.HttpRule>): _132.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _132.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.CustomHttpPattern;
            fromJSON(object: any): _132.CustomHttpPattern;
            toJSON(message: _132.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_132.CustomHttpPattern>): _132.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _137.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Duration;
            fromJSON(object: any): _137.Duration;
            toJSON(message: _137.Duration): unknown;
            fromPartial(object: Partial<_137.Duration>): _137.Duration;
        };
        Timestamp: {
            encode(message: _136.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Timestamp;
            fromJSON(object: any): _136.Timestamp;
            toJSON(message: _136.Timestamp): unknown;
            fromPartial(object: Partial<_136.Timestamp>): _136.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _135.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _135.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _135.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _135.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _135.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _135.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _135.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _135.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _135.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _135.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _135.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _135.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _135.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _135.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _135.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _135.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _135.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _135.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _135.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _135.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _135.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _135.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _135.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _135.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _135.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.FileDescriptorSet;
            fromJSON(object: any): _135.FileDescriptorSet;
            toJSON(message: _135.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_135.FileDescriptorSet>): _135.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _135.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.FileDescriptorProto;
            fromJSON(object: any): _135.FileDescriptorProto;
            toJSON(message: _135.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_135.FileDescriptorProto>): _135.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _135.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DescriptorProto;
            fromJSON(object: any): _135.DescriptorProto;
            toJSON(message: _135.DescriptorProto): unknown;
            fromPartial(object: Partial<_135.DescriptorProto>): _135.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _135.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _135.DescriptorProto_ExtensionRange;
            toJSON(message: _135.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_135.DescriptorProto_ExtensionRange>): _135.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _135.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DescriptorProto_ReservedRange;
            fromJSON(object: any): _135.DescriptorProto_ReservedRange;
            toJSON(message: _135.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_135.DescriptorProto_ReservedRange>): _135.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _135.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ExtensionRangeOptions;
            fromJSON(object: any): _135.ExtensionRangeOptions;
            toJSON(message: _135.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_135.ExtensionRangeOptions>): _135.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _135.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.FieldDescriptorProto;
            fromJSON(object: any): _135.FieldDescriptorProto;
            toJSON(message: _135.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_135.FieldDescriptorProto>): _135.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _135.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.OneofDescriptorProto;
            fromJSON(object: any): _135.OneofDescriptorProto;
            toJSON(message: _135.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_135.OneofDescriptorProto>): _135.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _135.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EnumDescriptorProto;
            fromJSON(object: any): _135.EnumDescriptorProto;
            toJSON(message: _135.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_135.EnumDescriptorProto>): _135.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _135.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _135.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _135.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_135.EnumDescriptorProto_EnumReservedRange>): _135.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _135.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EnumValueDescriptorProto;
            fromJSON(object: any): _135.EnumValueDescriptorProto;
            toJSON(message: _135.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_135.EnumValueDescriptorProto>): _135.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _135.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ServiceDescriptorProto;
            fromJSON(object: any): _135.ServiceDescriptorProto;
            toJSON(message: _135.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_135.ServiceDescriptorProto>): _135.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _135.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MethodDescriptorProto;
            fromJSON(object: any): _135.MethodDescriptorProto;
            toJSON(message: _135.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_135.MethodDescriptorProto>): _135.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _135.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.FileOptions;
            fromJSON(object: any): _135.FileOptions;
            toJSON(message: _135.FileOptions): unknown;
            fromPartial(object: Partial<_135.FileOptions>): _135.FileOptions;
        };
        MessageOptions: {
            encode(message: _135.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MessageOptions;
            fromJSON(object: any): _135.MessageOptions;
            toJSON(message: _135.MessageOptions): unknown;
            fromPartial(object: Partial<_135.MessageOptions>): _135.MessageOptions;
        };
        FieldOptions: {
            encode(message: _135.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.FieldOptions;
            fromJSON(object: any): _135.FieldOptions;
            toJSON(message: _135.FieldOptions): unknown;
            fromPartial(object: Partial<_135.FieldOptions>): _135.FieldOptions;
        };
        OneofOptions: {
            encode(message: _135.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.OneofOptions;
            fromJSON(object: any): _135.OneofOptions;
            toJSON(message: _135.OneofOptions): unknown;
            fromPartial(object: Partial<_135.OneofOptions>): _135.OneofOptions;
        };
        EnumOptions: {
            encode(message: _135.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EnumOptions;
            fromJSON(object: any): _135.EnumOptions;
            toJSON(message: _135.EnumOptions): unknown;
            fromPartial(object: Partial<_135.EnumOptions>): _135.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _135.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.EnumValueOptions;
            fromJSON(object: any): _135.EnumValueOptions;
            toJSON(message: _135.EnumValueOptions): unknown;
            fromPartial(object: Partial<_135.EnumValueOptions>): _135.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _135.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ServiceOptions;
            fromJSON(object: any): _135.ServiceOptions;
            toJSON(message: _135.ServiceOptions): unknown;
            fromPartial(object: Partial<_135.ServiceOptions>): _135.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _135.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MethodOptions;
            fromJSON(object: any): _135.MethodOptions;
            toJSON(message: _135.MethodOptions): unknown;
            fromPartial(object: Partial<_135.MethodOptions>): _135.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _135.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UninterpretedOption;
            fromJSON(object: any): _135.UninterpretedOption;
            toJSON(message: _135.UninterpretedOption): unknown;
            fromPartial(object: Partial<_135.UninterpretedOption>): _135.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _135.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UninterpretedOption_NamePart;
            fromJSON(object: any): _135.UninterpretedOption_NamePart;
            toJSON(message: _135.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_135.UninterpretedOption_NamePart>): _135.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _135.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SourceCodeInfo;
            fromJSON(object: any): _135.SourceCodeInfo;
            toJSON(message: _135.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_135.SourceCodeInfo>): _135.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _135.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SourceCodeInfo_Location;
            fromJSON(object: any): _135.SourceCodeInfo_Location;
            toJSON(message: _135.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_135.SourceCodeInfo_Location>): _135.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _135.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GeneratedCodeInfo;
            fromJSON(object: any): _135.GeneratedCodeInfo;
            toJSON(message: _135.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_135.GeneratedCodeInfo>): _135.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _135.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _135.GeneratedCodeInfo_Annotation;
            toJSON(message: _135.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_135.GeneratedCodeInfo_Annotation>): _135.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _134.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Any;
            fromJSON(object: any): _134.Any;
            toJSON(message: _134.Any): unknown;
            fromPartial(object: Partial<_134.Any>): _134.Any;
        };
    };
}
