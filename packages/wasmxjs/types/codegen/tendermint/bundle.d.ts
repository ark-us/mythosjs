import * as _18 from "./abci/types";
import * as _19 from "./crypto/keys";
import * as _20 from "./crypto/proof";
import * as _21 from "./libs/bits/types";
import * as _22 from "./p2p/types";
import * as _23 from "./types/block";
import * as _24 from "./types/evidence";
import * as _25 from "./types/params";
import * as _26 from "./types/types";
import * as _27 from "./types/validator";
import * as _28 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _18.CheckTxType;
        checkTxTypeToJSON(object: _18.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _18.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _18.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _18.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _18.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _18.EvidenceType;
        evidenceTypeToJSON(object: _18.EvidenceType): string;
        CheckTxType: typeof _18.CheckTxType;
        CheckTxTypeSDKType: typeof _18.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _18.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _18.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _18.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _18.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _18.EvidenceType;
        EvidenceTypeSDKType: typeof _18.EvidenceTypeSDKType;
        Request: {
            encode(message: _18.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Request;
            fromJSON(object: any): _18.Request;
            toJSON(message: _18.Request): unknown;
            fromPartial(object: Partial<_18.Request>): _18.Request;
        };
        RequestEcho: {
            encode(message: _18.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestEcho;
            fromJSON(object: any): _18.RequestEcho;
            toJSON(message: _18.RequestEcho): unknown;
            fromPartial(object: Partial<_18.RequestEcho>): _18.RequestEcho;
        };
        RequestFlush: {
            encode(_: _18.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestFlush;
            fromJSON(_: any): _18.RequestFlush;
            toJSON(_: _18.RequestFlush): unknown;
            fromPartial(_: Partial<_18.RequestFlush>): _18.RequestFlush;
        };
        RequestInfo: {
            encode(message: _18.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestInfo;
            fromJSON(object: any): _18.RequestInfo;
            toJSON(message: _18.RequestInfo): unknown;
            fromPartial(object: Partial<_18.RequestInfo>): _18.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _18.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestSetOption;
            fromJSON(object: any): _18.RequestSetOption;
            toJSON(message: _18.RequestSetOption): unknown;
            fromPartial(object: Partial<_18.RequestSetOption>): _18.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _18.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestInitChain;
            fromJSON(object: any): _18.RequestInitChain;
            toJSON(message: _18.RequestInitChain): unknown;
            fromPartial(object: Partial<_18.RequestInitChain>): _18.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _18.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestQuery;
            fromJSON(object: any): _18.RequestQuery;
            toJSON(message: _18.RequestQuery): unknown;
            fromPartial(object: Partial<_18.RequestQuery>): _18.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _18.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestBeginBlock;
            fromJSON(object: any): _18.RequestBeginBlock;
            toJSON(message: _18.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_18.RequestBeginBlock>): _18.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _18.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestCheckTx;
            fromJSON(object: any): _18.RequestCheckTx;
            toJSON(message: _18.RequestCheckTx): unknown;
            fromPartial(object: Partial<_18.RequestCheckTx>): _18.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _18.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestDeliverTx;
            fromJSON(object: any): _18.RequestDeliverTx;
            toJSON(message: _18.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_18.RequestDeliverTx>): _18.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _18.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestEndBlock;
            fromJSON(object: any): _18.RequestEndBlock;
            toJSON(message: _18.RequestEndBlock): unknown;
            fromPartial(object: Partial<_18.RequestEndBlock>): _18.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _18.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestCommit;
            fromJSON(_: any): _18.RequestCommit;
            toJSON(_: _18.RequestCommit): unknown;
            fromPartial(_: Partial<_18.RequestCommit>): _18.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _18.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestListSnapshots;
            fromJSON(_: any): _18.RequestListSnapshots;
            toJSON(_: _18.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_18.RequestListSnapshots>): _18.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _18.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestOfferSnapshot;
            fromJSON(object: any): _18.RequestOfferSnapshot;
            toJSON(message: _18.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_18.RequestOfferSnapshot>): _18.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _18.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestLoadSnapshotChunk;
            fromJSON(object: any): _18.RequestLoadSnapshotChunk;
            toJSON(message: _18.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_18.RequestLoadSnapshotChunk>): _18.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _18.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.RequestApplySnapshotChunk;
            fromJSON(object: any): _18.RequestApplySnapshotChunk;
            toJSON(message: _18.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_18.RequestApplySnapshotChunk>): _18.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _18.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Response;
            fromJSON(object: any): _18.Response;
            toJSON(message: _18.Response): unknown;
            fromPartial(object: Partial<_18.Response>): _18.Response;
        };
        ResponseException: {
            encode(message: _18.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseException;
            fromJSON(object: any): _18.ResponseException;
            toJSON(message: _18.ResponseException): unknown;
            fromPartial(object: Partial<_18.ResponseException>): _18.ResponseException;
        };
        ResponseEcho: {
            encode(message: _18.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseEcho;
            fromJSON(object: any): _18.ResponseEcho;
            toJSON(message: _18.ResponseEcho): unknown;
            fromPartial(object: Partial<_18.ResponseEcho>): _18.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _18.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseFlush;
            fromJSON(_: any): _18.ResponseFlush;
            toJSON(_: _18.ResponseFlush): unknown;
            fromPartial(_: Partial<_18.ResponseFlush>): _18.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _18.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseInfo;
            fromJSON(object: any): _18.ResponseInfo;
            toJSON(message: _18.ResponseInfo): unknown;
            fromPartial(object: Partial<_18.ResponseInfo>): _18.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _18.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseSetOption;
            fromJSON(object: any): _18.ResponseSetOption;
            toJSON(message: _18.ResponseSetOption): unknown;
            fromPartial(object: Partial<_18.ResponseSetOption>): _18.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _18.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseInitChain;
            fromJSON(object: any): _18.ResponseInitChain;
            toJSON(message: _18.ResponseInitChain): unknown;
            fromPartial(object: Partial<_18.ResponseInitChain>): _18.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _18.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseQuery;
            fromJSON(object: any): _18.ResponseQuery;
            toJSON(message: _18.ResponseQuery): unknown;
            fromPartial(object: Partial<_18.ResponseQuery>): _18.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _18.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseBeginBlock;
            fromJSON(object: any): _18.ResponseBeginBlock;
            toJSON(message: _18.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_18.ResponseBeginBlock>): _18.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _18.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseCheckTx;
            fromJSON(object: any): _18.ResponseCheckTx;
            toJSON(message: _18.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_18.ResponseCheckTx>): _18.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _18.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseDeliverTx;
            fromJSON(object: any): _18.ResponseDeliverTx;
            toJSON(message: _18.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_18.ResponseDeliverTx>): _18.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _18.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseEndBlock;
            fromJSON(object: any): _18.ResponseEndBlock;
            toJSON(message: _18.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_18.ResponseEndBlock>): _18.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _18.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseCommit;
            fromJSON(object: any): _18.ResponseCommit;
            toJSON(message: _18.ResponseCommit): unknown;
            fromPartial(object: Partial<_18.ResponseCommit>): _18.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _18.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseListSnapshots;
            fromJSON(object: any): _18.ResponseListSnapshots;
            toJSON(message: _18.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_18.ResponseListSnapshots>): _18.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _18.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseOfferSnapshot;
            fromJSON(object: any): _18.ResponseOfferSnapshot;
            toJSON(message: _18.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_18.ResponseOfferSnapshot>): _18.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _18.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _18.ResponseLoadSnapshotChunk;
            toJSON(message: _18.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_18.ResponseLoadSnapshotChunk>): _18.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _18.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ResponseApplySnapshotChunk;
            fromJSON(object: any): _18.ResponseApplySnapshotChunk;
            toJSON(message: _18.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_18.ResponseApplySnapshotChunk>): _18.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _18.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ConsensusParams;
            fromJSON(object: any): _18.ConsensusParams;
            toJSON(message: _18.ConsensusParams): unknown;
            fromPartial(object: Partial<_18.ConsensusParams>): _18.ConsensusParams;
        };
        BlockParams: {
            encode(message: _18.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.BlockParams;
            fromJSON(object: any): _18.BlockParams;
            toJSON(message: _18.BlockParams): unknown;
            fromPartial(object: Partial<_18.BlockParams>): _18.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _18.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.LastCommitInfo;
            fromJSON(object: any): _18.LastCommitInfo;
            toJSON(message: _18.LastCommitInfo): unknown;
            fromPartial(object: Partial<_18.LastCommitInfo>): _18.LastCommitInfo;
        };
        Event: {
            encode(message: _18.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Event;
            fromJSON(object: any): _18.Event;
            toJSON(message: _18.Event): unknown;
            fromPartial(object: Partial<_18.Event>): _18.Event;
        };
        EventAttribute: {
            encode(message: _18.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.EventAttribute;
            fromJSON(object: any): _18.EventAttribute;
            toJSON(message: _18.EventAttribute): unknown;
            fromPartial(object: Partial<_18.EventAttribute>): _18.EventAttribute;
        };
        TxResult: {
            encode(message: _18.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxResult;
            fromJSON(object: any): _18.TxResult;
            toJSON(message: _18.TxResult): unknown;
            fromPartial(object: Partial<_18.TxResult>): _18.TxResult;
        };
        Validator: {
            encode(message: _18.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Validator;
            fromJSON(object: any): _18.Validator;
            toJSON(message: _18.Validator): unknown;
            fromPartial(object: Partial<_18.Validator>): _18.Validator;
        };
        ValidatorUpdate: {
            encode(message: _18.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ValidatorUpdate;
            fromJSON(object: any): _18.ValidatorUpdate;
            toJSON(message: _18.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_18.ValidatorUpdate>): _18.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _18.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.VoteInfo;
            fromJSON(object: any): _18.VoteInfo;
            toJSON(message: _18.VoteInfo): unknown;
            fromPartial(object: Partial<_18.VoteInfo>): _18.VoteInfo;
        };
        Evidence: {
            encode(message: _18.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Evidence;
            fromJSON(object: any): _18.Evidence;
            toJSON(message: _18.Evidence): unknown;
            fromPartial(object: Partial<_18.Evidence>): _18.Evidence;
        };
        Snapshot: {
            encode(message: _18.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Snapshot;
            fromJSON(object: any): _18.Snapshot;
            toJSON(message: _18.Snapshot): unknown;
            fromPartial(object: Partial<_18.Snapshot>): _18.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _20.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Proof;
            fromJSON(object: any): _20.Proof;
            toJSON(message: _20.Proof): unknown;
            fromPartial(object: Partial<_20.Proof>): _20.Proof;
        };
        ValueOp: {
            encode(message: _20.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ValueOp;
            fromJSON(object: any): _20.ValueOp;
            toJSON(message: _20.ValueOp): unknown;
            fromPartial(object: Partial<_20.ValueOp>): _20.ValueOp;
        };
        DominoOp: {
            encode(message: _20.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.DominoOp;
            fromJSON(object: any): _20.DominoOp;
            toJSON(message: _20.DominoOp): unknown;
            fromPartial(object: Partial<_20.DominoOp>): _20.DominoOp;
        };
        ProofOp: {
            encode(message: _20.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ProofOp;
            fromJSON(object: any): _20.ProofOp;
            toJSON(message: _20.ProofOp): unknown;
            fromPartial(object: Partial<_20.ProofOp>): _20.ProofOp;
        };
        ProofOps: {
            encode(message: _20.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ProofOps;
            fromJSON(object: any): _20.ProofOps;
            toJSON(message: _20.ProofOps): unknown;
            fromPartial(object: Partial<_20.ProofOps>): _20.ProofOps;
        };
        PublicKey: {
            encode(message: _19.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PublicKey;
            fromJSON(object: any): _19.PublicKey;
            toJSON(message: _19.PublicKey): unknown;
            fromPartial(object: Partial<_19.PublicKey>): _19.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _21.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.BitArray;
                fromJSON(object: any): _21.BitArray;
                toJSON(message: _21.BitArray): unknown;
                fromPartial(object: Partial<_21.BitArray>): _21.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _22.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.NetAddress;
            fromJSON(object: any): _22.NetAddress;
            toJSON(message: _22.NetAddress): unknown;
            fromPartial(object: Partial<_22.NetAddress>): _22.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _22.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ProtocolVersion;
            fromJSON(object: any): _22.ProtocolVersion;
            toJSON(message: _22.ProtocolVersion): unknown;
            fromPartial(object: Partial<_22.ProtocolVersion>): _22.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _22.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DefaultNodeInfo;
            fromJSON(object: any): _22.DefaultNodeInfo;
            toJSON(message: _22.DefaultNodeInfo): unknown;
            fromPartial(object: Partial<_22.DefaultNodeInfo>): _22.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _22.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DefaultNodeInfoOther;
            fromJSON(object: any): _22.DefaultNodeInfoOther;
            toJSON(message: _22.DefaultNodeInfoOther): unknown;
            fromPartial(object: Partial<_22.DefaultNodeInfoOther>): _22.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _27.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ValidatorSet;
            fromJSON(object: any): _27.ValidatorSet;
            toJSON(message: _27.ValidatorSet): unknown;
            fromPartial(object: Partial<_27.ValidatorSet>): _27.ValidatorSet;
        };
        Validator: {
            encode(message: _27.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Validator;
            fromJSON(object: any): _27.Validator;
            toJSON(message: _27.Validator): unknown;
            fromPartial(object: Partial<_27.Validator>): _27.Validator;
        };
        SimpleValidator: {
            encode(message: _27.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.SimpleValidator;
            fromJSON(object: any): _27.SimpleValidator;
            toJSON(message: _27.SimpleValidator): unknown;
            fromPartial(object: Partial<_27.SimpleValidator>): _27.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _26.BlockIDFlag;
        blockIDFlagToJSON(object: _26.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _26.SignedMsgType;
        signedMsgTypeToJSON(object: _26.SignedMsgType): string;
        BlockIDFlag: typeof _26.BlockIDFlag;
        BlockIDFlagSDKType: typeof _26.BlockIDFlagSDKType;
        SignedMsgType: typeof _26.SignedMsgType;
        SignedMsgTypeSDKType: typeof _26.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _26.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PartSetHeader;
            fromJSON(object: any): _26.PartSetHeader;
            toJSON(message: _26.PartSetHeader): unknown;
            fromPartial(object: Partial<_26.PartSetHeader>): _26.PartSetHeader;
        };
        Part: {
            encode(message: _26.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Part;
            fromJSON(object: any): _26.Part;
            toJSON(message: _26.Part): unknown;
            fromPartial(object: Partial<_26.Part>): _26.Part;
        };
        BlockID: {
            encode(message: _26.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.BlockID;
            fromJSON(object: any): _26.BlockID;
            toJSON(message: _26.BlockID): unknown;
            fromPartial(object: Partial<_26.BlockID>): _26.BlockID;
        };
        Header: {
            encode(message: _26.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Header;
            fromJSON(object: any): _26.Header;
            toJSON(message: _26.Header): unknown;
            fromPartial(object: Partial<_26.Header>): _26.Header;
        };
        Data: {
            encode(message: _26.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Data;
            fromJSON(object: any): _26.Data;
            toJSON(message: _26.Data): unknown;
            fromPartial(object: Partial<_26.Data>): _26.Data;
        };
        Vote: {
            encode(message: _26.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Vote;
            fromJSON(object: any): _26.Vote;
            toJSON(message: _26.Vote): unknown;
            fromPartial(object: Partial<_26.Vote>): _26.Vote;
        };
        Commit: {
            encode(message: _26.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Commit;
            fromJSON(object: any): _26.Commit;
            toJSON(message: _26.Commit): unknown;
            fromPartial(object: Partial<_26.Commit>): _26.Commit;
        };
        CommitSig: {
            encode(message: _26.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CommitSig;
            fromJSON(object: any): _26.CommitSig;
            toJSON(message: _26.CommitSig): unknown;
            fromPartial(object: Partial<_26.CommitSig>): _26.CommitSig;
        };
        Proposal: {
            encode(message: _26.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Proposal;
            fromJSON(object: any): _26.Proposal;
            toJSON(message: _26.Proposal): unknown;
            fromPartial(object: Partial<_26.Proposal>): _26.Proposal;
        };
        SignedHeader: {
            encode(message: _26.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.SignedHeader;
            fromJSON(object: any): _26.SignedHeader;
            toJSON(message: _26.SignedHeader): unknown;
            fromPartial(object: Partial<_26.SignedHeader>): _26.SignedHeader;
        };
        LightBlock: {
            encode(message: _26.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.LightBlock;
            fromJSON(object: any): _26.LightBlock;
            toJSON(message: _26.LightBlock): unknown;
            fromPartial(object: Partial<_26.LightBlock>): _26.LightBlock;
        };
        BlockMeta: {
            encode(message: _26.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.BlockMeta;
            fromJSON(object: any): _26.BlockMeta;
            toJSON(message: _26.BlockMeta): unknown;
            fromPartial(object: Partial<_26.BlockMeta>): _26.BlockMeta;
        };
        TxProof: {
            encode(message: _26.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.TxProof;
            fromJSON(object: any): _26.TxProof;
            toJSON(message: _26.TxProof): unknown;
            fromPartial(object: Partial<_26.TxProof>): _26.TxProof;
        };
        ConsensusParams: {
            encode(message: _25.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ConsensusParams;
            fromJSON(object: any): _25.ConsensusParams;
            toJSON(message: _25.ConsensusParams): unknown;
            fromPartial(object: Partial<_25.ConsensusParams>): _25.ConsensusParams;
        };
        BlockParams: {
            encode(message: _25.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.BlockParams;
            fromJSON(object: any): _25.BlockParams;
            toJSON(message: _25.BlockParams): unknown;
            fromPartial(object: Partial<_25.BlockParams>): _25.BlockParams;
        };
        EvidenceParams: {
            encode(message: _25.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.EvidenceParams;
            fromJSON(object: any): _25.EvidenceParams;
            toJSON(message: _25.EvidenceParams): unknown;
            fromPartial(object: Partial<_25.EvidenceParams>): _25.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _25.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorParams;
            fromJSON(object: any): _25.ValidatorParams;
            toJSON(message: _25.ValidatorParams): unknown;
            fromPartial(object: Partial<_25.ValidatorParams>): _25.ValidatorParams;
        };
        VersionParams: {
            encode(message: _25.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.VersionParams;
            fromJSON(object: any): _25.VersionParams;
            toJSON(message: _25.VersionParams): unknown;
            fromPartial(object: Partial<_25.VersionParams>): _25.VersionParams;
        };
        HashedParams: {
            encode(message: _25.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.HashedParams;
            fromJSON(object: any): _25.HashedParams;
            toJSON(message: _25.HashedParams): unknown;
            fromPartial(object: Partial<_25.HashedParams>): _25.HashedParams;
        };
        Evidence: {
            encode(message: _24.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Evidence;
            fromJSON(object: any): _24.Evidence;
            toJSON(message: _24.Evidence): unknown;
            fromPartial(object: Partial<_24.Evidence>): _24.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _24.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.DuplicateVoteEvidence;
            fromJSON(object: any): _24.DuplicateVoteEvidence;
            toJSON(message: _24.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_24.DuplicateVoteEvidence>): _24.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _24.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.LightClientAttackEvidence;
            fromJSON(object: any): _24.LightClientAttackEvidence;
            toJSON(message: _24.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_24.LightClientAttackEvidence>): _24.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _24.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.EvidenceList;
            fromJSON(object: any): _24.EvidenceList;
            toJSON(message: _24.EvidenceList): unknown;
            fromPartial(object: Partial<_24.EvidenceList>): _24.EvidenceList;
        };
        Block: {
            encode(message: _23.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Block;
            fromJSON(object: any): _23.Block;
            toJSON(message: _23.Block): unknown;
            fromPartial(object: Partial<_23.Block>): _23.Block;
        };
    };
    const version: {
        App: {
            encode(message: _28.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.App;
            fromJSON(object: any): _28.App;
            toJSON(message: _28.App): unknown;
            fromPartial(object: Partial<_28.App>): _28.App;
        };
        Consensus: {
            encode(message: _28.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Consensus;
            fromJSON(object: any): _28.Consensus;
            toJSON(message: _28.Consensus): unknown;
            fromPartial(object: Partial<_28.Consensus>): _28.Consensus;
        };
    };
}
