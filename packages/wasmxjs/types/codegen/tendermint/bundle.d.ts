import * as _28 from "./abci/types";
import * as _29 from "./crypto/keys";
import * as _30 from "./crypto/proof";
import * as _31 from "./libs/bits/types";
import * as _32 from "./p2p/types";
import * as _33 from "./types/block";
import * as _34 from "./types/evidence";
import * as _35 from "./types/params";
import * as _36 from "./types/types";
import * as _37 from "./types/validator";
import * as _38 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _28.CheckTxType;
        checkTxTypeToJSON(object: _28.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _28.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _28.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _28.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _28.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _28.EvidenceType;
        evidenceTypeToJSON(object: _28.EvidenceType): string;
        CheckTxType: typeof _28.CheckTxType;
        CheckTxTypeSDKType: typeof _28.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _28.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _28.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _28.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _28.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _28.EvidenceType;
        EvidenceTypeSDKType: typeof _28.EvidenceTypeSDKType;
        Request: {
            encode(message: _28.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Request;
            fromJSON(object: any): _28.Request;
            toJSON(message: _28.Request): unknown;
            fromPartial(object: Partial<_28.Request>): _28.Request;
        };
        RequestEcho: {
            encode(message: _28.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestEcho;
            fromJSON(object: any): _28.RequestEcho;
            toJSON(message: _28.RequestEcho): unknown;
            fromPartial(object: Partial<_28.RequestEcho>): _28.RequestEcho;
        };
        RequestFlush: {
            encode(_: _28.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestFlush;
            fromJSON(_: any): _28.RequestFlush;
            toJSON(_: _28.RequestFlush): unknown;
            fromPartial(_: Partial<_28.RequestFlush>): _28.RequestFlush;
        };
        RequestInfo: {
            encode(message: _28.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestInfo;
            fromJSON(object: any): _28.RequestInfo;
            toJSON(message: _28.RequestInfo): unknown;
            fromPartial(object: Partial<_28.RequestInfo>): _28.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _28.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestSetOption;
            fromJSON(object: any): _28.RequestSetOption;
            toJSON(message: _28.RequestSetOption): unknown;
            fromPartial(object: Partial<_28.RequestSetOption>): _28.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _28.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestInitChain;
            fromJSON(object: any): _28.RequestInitChain;
            toJSON(message: _28.RequestInitChain): unknown;
            fromPartial(object: Partial<_28.RequestInitChain>): _28.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _28.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestQuery;
            fromJSON(object: any): _28.RequestQuery;
            toJSON(message: _28.RequestQuery): unknown;
            fromPartial(object: Partial<_28.RequestQuery>): _28.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _28.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestBeginBlock;
            fromJSON(object: any): _28.RequestBeginBlock;
            toJSON(message: _28.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_28.RequestBeginBlock>): _28.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _28.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestCheckTx;
            fromJSON(object: any): _28.RequestCheckTx;
            toJSON(message: _28.RequestCheckTx): unknown;
            fromPartial(object: Partial<_28.RequestCheckTx>): _28.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _28.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestDeliverTx;
            fromJSON(object: any): _28.RequestDeliverTx;
            toJSON(message: _28.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_28.RequestDeliverTx>): _28.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _28.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestEndBlock;
            fromJSON(object: any): _28.RequestEndBlock;
            toJSON(message: _28.RequestEndBlock): unknown;
            fromPartial(object: Partial<_28.RequestEndBlock>): _28.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _28.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestCommit;
            fromJSON(_: any): _28.RequestCommit;
            toJSON(_: _28.RequestCommit): unknown;
            fromPartial(_: Partial<_28.RequestCommit>): _28.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _28.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestListSnapshots;
            fromJSON(_: any): _28.RequestListSnapshots;
            toJSON(_: _28.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_28.RequestListSnapshots>): _28.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _28.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestOfferSnapshot;
            fromJSON(object: any): _28.RequestOfferSnapshot;
            toJSON(message: _28.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_28.RequestOfferSnapshot>): _28.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _28.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestLoadSnapshotChunk;
            fromJSON(object: any): _28.RequestLoadSnapshotChunk;
            toJSON(message: _28.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_28.RequestLoadSnapshotChunk>): _28.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _28.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.RequestApplySnapshotChunk;
            fromJSON(object: any): _28.RequestApplySnapshotChunk;
            toJSON(message: _28.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_28.RequestApplySnapshotChunk>): _28.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _28.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Response;
            fromJSON(object: any): _28.Response;
            toJSON(message: _28.Response): unknown;
            fromPartial(object: Partial<_28.Response>): _28.Response;
        };
        ResponseException: {
            encode(message: _28.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseException;
            fromJSON(object: any): _28.ResponseException;
            toJSON(message: _28.ResponseException): unknown;
            fromPartial(object: Partial<_28.ResponseException>): _28.ResponseException;
        };
        ResponseEcho: {
            encode(message: _28.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseEcho;
            fromJSON(object: any): _28.ResponseEcho;
            toJSON(message: _28.ResponseEcho): unknown;
            fromPartial(object: Partial<_28.ResponseEcho>): _28.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _28.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseFlush;
            fromJSON(_: any): _28.ResponseFlush;
            toJSON(_: _28.ResponseFlush): unknown;
            fromPartial(_: Partial<_28.ResponseFlush>): _28.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _28.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseInfo;
            fromJSON(object: any): _28.ResponseInfo;
            toJSON(message: _28.ResponseInfo): unknown;
            fromPartial(object: Partial<_28.ResponseInfo>): _28.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _28.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseSetOption;
            fromJSON(object: any): _28.ResponseSetOption;
            toJSON(message: _28.ResponseSetOption): unknown;
            fromPartial(object: Partial<_28.ResponseSetOption>): _28.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _28.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseInitChain;
            fromJSON(object: any): _28.ResponseInitChain;
            toJSON(message: _28.ResponseInitChain): unknown;
            fromPartial(object: Partial<_28.ResponseInitChain>): _28.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _28.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseQuery;
            fromJSON(object: any): _28.ResponseQuery;
            toJSON(message: _28.ResponseQuery): unknown;
            fromPartial(object: Partial<_28.ResponseQuery>): _28.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _28.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseBeginBlock;
            fromJSON(object: any): _28.ResponseBeginBlock;
            toJSON(message: _28.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_28.ResponseBeginBlock>): _28.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _28.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseCheckTx;
            fromJSON(object: any): _28.ResponseCheckTx;
            toJSON(message: _28.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_28.ResponseCheckTx>): _28.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _28.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseDeliverTx;
            fromJSON(object: any): _28.ResponseDeliverTx;
            toJSON(message: _28.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_28.ResponseDeliverTx>): _28.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _28.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseEndBlock;
            fromJSON(object: any): _28.ResponseEndBlock;
            toJSON(message: _28.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_28.ResponseEndBlock>): _28.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _28.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseCommit;
            fromJSON(object: any): _28.ResponseCommit;
            toJSON(message: _28.ResponseCommit): unknown;
            fromPartial(object: Partial<_28.ResponseCommit>): _28.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _28.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseListSnapshots;
            fromJSON(object: any): _28.ResponseListSnapshots;
            toJSON(message: _28.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_28.ResponseListSnapshots>): _28.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _28.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseOfferSnapshot;
            fromJSON(object: any): _28.ResponseOfferSnapshot;
            toJSON(message: _28.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_28.ResponseOfferSnapshot>): _28.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _28.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _28.ResponseLoadSnapshotChunk;
            toJSON(message: _28.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_28.ResponseLoadSnapshotChunk>): _28.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _28.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ResponseApplySnapshotChunk;
            fromJSON(object: any): _28.ResponseApplySnapshotChunk;
            toJSON(message: _28.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_28.ResponseApplySnapshotChunk>): _28.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _28.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ConsensusParams;
            fromJSON(object: any): _28.ConsensusParams;
            toJSON(message: _28.ConsensusParams): unknown;
            fromPartial(object: Partial<_28.ConsensusParams>): _28.ConsensusParams;
        };
        BlockParams: {
            encode(message: _28.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.BlockParams;
            fromJSON(object: any): _28.BlockParams;
            toJSON(message: _28.BlockParams): unknown;
            fromPartial(object: Partial<_28.BlockParams>): _28.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _28.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.LastCommitInfo;
            fromJSON(object: any): _28.LastCommitInfo;
            toJSON(message: _28.LastCommitInfo): unknown;
            fromPartial(object: Partial<_28.LastCommitInfo>): _28.LastCommitInfo;
        };
        Event: {
            encode(message: _28.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Event;
            fromJSON(object: any): _28.Event;
            toJSON(message: _28.Event): unknown;
            fromPartial(object: Partial<_28.Event>): _28.Event;
        };
        EventAttribute: {
            encode(message: _28.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.EventAttribute;
            fromJSON(object: any): _28.EventAttribute;
            toJSON(message: _28.EventAttribute): unknown;
            fromPartial(object: Partial<_28.EventAttribute>): _28.EventAttribute;
        };
        TxResult: {
            encode(message: _28.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TxResult;
            fromJSON(object: any): _28.TxResult;
            toJSON(message: _28.TxResult): unknown;
            fromPartial(object: Partial<_28.TxResult>): _28.TxResult;
        };
        Validator: {
            encode(message: _28.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Validator;
            fromJSON(object: any): _28.Validator;
            toJSON(message: _28.Validator): unknown;
            fromPartial(object: Partial<_28.Validator>): _28.Validator;
        };
        ValidatorUpdate: {
            encode(message: _28.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ValidatorUpdate;
            fromJSON(object: any): _28.ValidatorUpdate;
            toJSON(message: _28.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_28.ValidatorUpdate>): _28.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _28.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.VoteInfo;
            fromJSON(object: any): _28.VoteInfo;
            toJSON(message: _28.VoteInfo): unknown;
            fromPartial(object: Partial<_28.VoteInfo>): _28.VoteInfo;
        };
        Evidence: {
            encode(message: _28.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Evidence;
            fromJSON(object: any): _28.Evidence;
            toJSON(message: _28.Evidence): unknown;
            fromPartial(object: Partial<_28.Evidence>): _28.Evidence;
        };
        Snapshot: {
            encode(message: _28.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Snapshot;
            fromJSON(object: any): _28.Snapshot;
            toJSON(message: _28.Snapshot): unknown;
            fromPartial(object: Partial<_28.Snapshot>): _28.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _30.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Proof;
            fromJSON(object: any): _30.Proof;
            toJSON(message: _30.Proof): unknown;
            fromPartial(object: Partial<_30.Proof>): _30.Proof;
        };
        ValueOp: {
            encode(message: _30.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.ValueOp;
            fromJSON(object: any): _30.ValueOp;
            toJSON(message: _30.ValueOp): unknown;
            fromPartial(object: Partial<_30.ValueOp>): _30.ValueOp;
        };
        DominoOp: {
            encode(message: _30.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DominoOp;
            fromJSON(object: any): _30.DominoOp;
            toJSON(message: _30.DominoOp): unknown;
            fromPartial(object: Partial<_30.DominoOp>): _30.DominoOp;
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
        PublicKey: {
            encode(message: _29.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.PublicKey;
            fromJSON(object: any): _29.PublicKey;
            toJSON(message: _29.PublicKey): unknown;
            fromPartial(object: Partial<_29.PublicKey>): _29.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _31.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.BitArray;
                fromJSON(object: any): _31.BitArray;
                toJSON(message: _31.BitArray): unknown;
                fromPartial(object: Partial<_31.BitArray>): _31.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _32.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.NetAddress;
            fromJSON(object: any): _32.NetAddress;
            toJSON(message: _32.NetAddress): unknown;
            fromPartial(object: Partial<_32.NetAddress>): _32.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _32.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ProtocolVersion;
            fromJSON(object: any): _32.ProtocolVersion;
            toJSON(message: _32.ProtocolVersion): unknown;
            fromPartial(object: Partial<_32.ProtocolVersion>): _32.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _32.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DefaultNodeInfo;
            fromJSON(object: any): _32.DefaultNodeInfo;
            toJSON(message: _32.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_32.DefaultNodeInfo>): _32.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _32.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DefaultNodeInfoOther;
            fromJSON(object: any): _32.DefaultNodeInfoOther;
            toJSON(message: _32.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_32.DefaultNodeInfoOther>): _32.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _37.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorSet;
            fromJSON(object: any): _37.ValidatorSet;
            toJSON(message: _37.ValidatorSet): unknown;
            fromPartial(object: Partial<_37.ValidatorSet>): _37.ValidatorSet;
        };
        Validator: {
            encode(message: _37.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Validator;
            fromJSON(object: any): _37.Validator;
            toJSON(message: _37.Validator): unknown;
            fromPartial(object: Partial<_37.Validator>): _37.Validator;
        };
        SimpleValidator: {
            encode(message: _37.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SimpleValidator;
            fromJSON(object: any): _37.SimpleValidator;
            toJSON(message: _37.SimpleValidator): unknown;
            fromPartial(object: Partial<_37.SimpleValidator>): _37.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _36.BlockIDFlag;
        blockIDFlagToJSON(object: _36.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _36.SignedMsgType;
        signedMsgTypeToJSON(object: _36.SignedMsgType): string;
        BlockIDFlag: typeof _36.BlockIDFlag;
        BlockIDFlagSDKType: typeof _36.BlockIDFlagSDKType;
        SignedMsgType: typeof _36.SignedMsgType;
        SignedMsgTypeSDKType: typeof _36.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _36.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PartSetHeader;
            fromJSON(object: any): _36.PartSetHeader;
            toJSON(message: _36.PartSetHeader): unknown;
            fromPartial(object: Partial<_36.PartSetHeader>): _36.PartSetHeader;
        };
        Part: {
            encode(message: _36.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Part;
            fromJSON(object: any): _36.Part;
            toJSON(message: _36.Part): unknown;
            fromPartial(object: Partial<_36.Part>): _36.Part;
        };
        BlockID: {
            encode(message: _36.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.BlockID;
            fromJSON(object: any): _36.BlockID;
            toJSON(message: _36.BlockID): unknown;
            fromPartial(object: Partial<_36.BlockID>): _36.BlockID;
        };
        Header: {
            encode(message: _36.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Header;
            fromJSON(object: any): _36.Header;
            toJSON(message: _36.Header): unknown;
            fromPartial(object: Partial<_36.Header>): _36.Header;
        };
        Data: {
            encode(message: _36.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Data;
            fromJSON(object: any): _36.Data;
            toJSON(message: _36.Data): unknown;
            fromPartial(object: Partial<_36.Data>): _36.Data;
        };
        Vote: {
            encode(message: _36.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Vote;
            fromJSON(object: any): _36.Vote;
            toJSON(message: _36.Vote): unknown;
            fromPartial(object: Partial<_36.Vote>): _36.Vote;
        };
        Commit: {
            encode(message: _36.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Commit;
            fromJSON(object: any): _36.Commit;
            toJSON(message: _36.Commit): unknown;
            fromPartial(object: Partial<_36.Commit>): _36.Commit;
        };
        CommitSig: {
            encode(message: _36.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.CommitSig;
            fromJSON(object: any): _36.CommitSig;
            toJSON(message: _36.CommitSig): unknown;
            fromPartial(object: Partial<_36.CommitSig>): _36.CommitSig;
        };
        Proposal: {
            encode(message: _36.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Proposal;
            fromJSON(object: any): _36.Proposal;
            toJSON(message: _36.Proposal): unknown;
            fromPartial(object: Partial<_36.Proposal>): _36.Proposal;
        };
        SignedHeader: {
            encode(message: _36.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignedHeader;
            fromJSON(object: any): _36.SignedHeader;
            toJSON(message: _36.SignedHeader): unknown;
            fromPartial(object: Partial<_36.SignedHeader>): _36.SignedHeader;
        };
        LightBlock: {
            encode(message: _36.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.LightBlock;
            fromJSON(object: any): _36.LightBlock;
            toJSON(message: _36.LightBlock): unknown;
            fromPartial(object: Partial<_36.LightBlock>): _36.LightBlock;
        };
        BlockMeta: {
            encode(message: _36.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.BlockMeta;
            fromJSON(object: any): _36.BlockMeta;
            toJSON(message: _36.BlockMeta): unknown;
            fromPartial(object: Partial<_36.BlockMeta>): _36.BlockMeta;
        };
        TxProof: {
            encode(message: _36.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.TxProof;
            fromJSON(object: any): _36.TxProof;
            toJSON(message: _36.TxProof): unknown;
            fromPartial(object: Partial<_36.TxProof>): _36.TxProof;
        };
        ConsensusParams: {
            encode(message: _35.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ConsensusParams;
            fromJSON(object: any): _35.ConsensusParams;
            toJSON(message: _35.ConsensusParams): unknown;
            fromPartial(object: Partial<_35.ConsensusParams>): _35.ConsensusParams;
        };
        BlockParams: {
            encode(message: _35.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.BlockParams;
            fromJSON(object: any): _35.BlockParams;
            toJSON(message: _35.BlockParams): unknown;
            fromPartial(object: Partial<_35.BlockParams>): _35.BlockParams;
        };
        EvidenceParams: {
            encode(message: _35.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.EvidenceParams;
            fromJSON(object: any): _35.EvidenceParams;
            toJSON(message: _35.EvidenceParams): unknown;
            fromPartial(object: Partial<_35.EvidenceParams>): _35.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _35.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ValidatorParams;
            fromJSON(object: any): _35.ValidatorParams;
            toJSON(message: _35.ValidatorParams): unknown;
            fromPartial(object: Partial<_35.ValidatorParams>): _35.ValidatorParams;
        };
        VersionParams: {
            encode(message: _35.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.VersionParams;
            fromJSON(object: any): _35.VersionParams;
            toJSON(message: _35.VersionParams): unknown;
            fromPartial(object: Partial<_35.VersionParams>): _35.VersionParams;
        };
        HashedParams: {
            encode(message: _35.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.HashedParams;
            fromJSON(object: any): _35.HashedParams;
            toJSON(message: _35.HashedParams): unknown;
            fromPartial(object: Partial<_35.HashedParams>): _35.HashedParams;
        };
        Evidence: {
            encode(message: _34.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Evidence;
            fromJSON(object: any): _34.Evidence;
            toJSON(message: _34.Evidence): unknown;
            fromPartial(object: Partial<_34.Evidence>): _34.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _34.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DuplicateVoteEvidence;
            fromJSON(object: any): _34.DuplicateVoteEvidence;
            toJSON(message: _34.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_34.DuplicateVoteEvidence>): _34.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _34.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.LightClientAttackEvidence;
            fromJSON(object: any): _34.LightClientAttackEvidence;
            toJSON(message: _34.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_34.LightClientAttackEvidence>): _34.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _34.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.EvidenceList;
            fromJSON(object: any): _34.EvidenceList;
            toJSON(message: _34.EvidenceList): unknown;
            fromPartial(object: Partial<_34.EvidenceList>): _34.EvidenceList;
        };
        Block: {
            encode(message: _33.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Block;
            fromJSON(object: any): _33.Block;
            toJSON(message: _33.Block): unknown;
            fromPartial(object: Partial<_33.Block>): _33.Block;
        };
    };
    const version: {
        App: {
            encode(message: _38.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.App;
            fromJSON(object: any): _38.App;
            toJSON(message: _38.App): unknown;
            fromPartial(object: Partial<_38.App>): _38.App;
        };
        Consensus: {
            encode(message: _38.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Consensus;
            fromJSON(object: any): _38.Consensus;
            toJSON(message: _38.Consensus): unknown;
            fromPartial(object: Partial<_38.Consensus>): _38.Consensus;
        };
    };
}
