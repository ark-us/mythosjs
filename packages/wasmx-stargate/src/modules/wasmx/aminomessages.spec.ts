/* eslint-disable @typescript-eslint/naming-convention */
import { fromBase64, toUtf8 } from "@cosmjs/encoding";
import { AminoTypes, coins } from "@cosmjs/stargate";
import {
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgStoreCode,
} from "@ark-us/wasmxjs";
import Long from 'long';

import {
  AminoMsgExecuteContract,
  AminoMsgInstantiateContract,
  AminoMsgStoreCode,
  createWasmAminoConverters,
} from "./aminomessages";

describe("AminoTypes", () => {
  describe("toAmino", () => {
    it("works for MsgStoreCode", () => {
      const msg: MsgStoreCode = {
        sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        wasmByteCode: fromBase64("WUVMTE9XIFNVQk1BUklORQ=="),
      };
      const aminoMsg = new AminoTypes(createWasmAminoConverters()).toAmino({
        typeUrl: "/wasmx.wasmx.MsgStoreCode",
        value: msg,
      });
      const expected: AminoMsgStoreCode = {
        type: "wasmx/MsgStoreCode",
        value: {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          wasm_byte_code: "WUVMTE9XIFNVQk1BUklORQ==",
        },
      };
      expect(aminoMsg).toEqual(expected);
    });

    it("works for MsgInstantiateContract", () => {
      // With admin
      {
        const msg: MsgInstantiateContract = {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          // @ts-ignore
          codeId: Long.fromString("12345"),
          label: "sticky",
          msg: toUtf8(`{"foo":"bar"}`),
          funds: coins(1234, "ucosm"),
        };
        const aminoMsg = new AminoTypes(createWasmAminoConverters()).toAmino({
          typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
          value: msg,
        });
        const expected: AminoMsgInstantiateContract = {
          type: "wasmx/MsgInstantiateContract",
          value: {
            sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
            code_id: "12345",
            label: "sticky",
            msg: { foo: "bar" },
            funds: coins(1234, "ucosm"),
          },
        };
        expect(aminoMsg).toEqual(expected);
      }

      // Without admin
      {
        const msg: MsgInstantiateContract = {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          // @ts-ignore
          codeId: Long.fromString("12345"),
          label: "sticky",
          msg: toUtf8(`{"foo":"bar"}`),
          funds: coins(1234, "ucosm"),
        };
        const aminoMsg = new AminoTypes(createWasmAminoConverters()).toAmino({
          typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
          value: msg,
        });
        const expected: AminoMsgInstantiateContract = {
          type: "wasmx/MsgInstantiateContract",
          value: {
            sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
            code_id: "12345",
            label: "sticky",
            msg: { foo: "bar" },
            funds: coins(1234, "ucosm"),
          },
        };
        expect(aminoMsg).toEqual(expected);
      }
    });

    it("works for MsgExecuteContract", () => {
      const msg: MsgExecuteContract = {
        sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        contract: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
        msg: toUtf8(`{"foo":"bar"}`),
        funds: coins(1234, "ucosm"),
        dependencies: [],
      };
      const aminoMsg = new AminoTypes(createWasmAminoConverters()).toAmino({
        typeUrl: "/wasmx.wasmx.MsgExecuteContract",
        value: msg,
      });
      const expected: AminoMsgExecuteContract = {
        type: "wasmx/MsgExecuteContract",
        value: {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          contract: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
          msg: { foo: "bar" },
          funds: coins(1234, "ucosm"),
          dependencies: [],
        },
      };
      expect(aminoMsg).toEqual(expected);
    });
  })

  describe("fromAmino", () => {
    it("works for MsgStoreCode", () => {
      const aminoMsg: AminoMsgStoreCode = {
        type: "wasmx/MsgStoreCode",
        value: {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          wasm_byte_code: "WUVMTE9XIFNVQk1BUklORQ==",
        },
      };
      const msg = new AminoTypes(createWasmAminoConverters()).fromAmino(aminoMsg);
      const expectedValue: MsgStoreCode = {
        sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        wasmByteCode: fromBase64("WUVMTE9XIFNVQk1BUklORQ=="),
      };
      expect(msg).toEqual({
        typeUrl: "/wasmx.wasmx.MsgStoreCode",
        value: expectedValue,
      });
    });

    it("works for MsgInstantiateContract", () => {
      // With admin
      {
        const aminoMsg: AminoMsgInstantiateContract = {
          type: "wasmx/MsgInstantiateContract",
          value: {
            sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
            code_id: "12345",
            label: "sticky",
            msg: { foo: "bar" },
            funds: coins(1234, "ucosm"),
          },
        };
        const msg = new AminoTypes(createWasmAminoConverters()).fromAmino(aminoMsg);
        const expectedValue: MsgInstantiateContract = {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          // @ts-ignore
          codeId: Long.fromString("12345"),
          label: "sticky",
          msg: toUtf8(`{"foo":"bar"}`),
          funds: coins(1234, "ucosm"),
        };
        expect(msg).toEqual({
          typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
          value: expectedValue,
        });
      }

      // Without admin
      {
        const aminoMsg: AminoMsgInstantiateContract = {
          type: "wasmx/MsgInstantiateContract",
          value: {
            sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
            code_id: "12345",
            label: "sticky",
            msg: { foo: "bar" },
            funds: coins(1234, "ucosm"),
          },
        };
        const msg = new AminoTypes(createWasmAminoConverters()).fromAmino(aminoMsg);
        const expectedValue: MsgInstantiateContract = {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          // @ts-ignore
          codeId: Long.fromString("12345"),
          label: "sticky",
          msg: toUtf8(`{"foo":"bar"}`),
          funds: coins(1234, "ucosm"),
        };
        expect(msg).toEqual({
          typeUrl: "/wasmx.wasmx.MsgInstantiateContract",
          value: expectedValue,
        });
      }
    });

    it("works for MsgExecuteContract", () => {
      const aminoMsg: AminoMsgExecuteContract = {
        type: "wasmx/MsgExecuteContract",
        value: {
          sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
          contract: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
          msg: { foo: "bar" },
          funds: coins(1234, "ucosm"),
          dependencies: [],
        },
      };
      const msg = new AminoTypes(createWasmAminoConverters()).fromAmino(aminoMsg);
      const expectedValue: MsgExecuteContract = {
        sender: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
        contract: "cosmos1xy4yqngt0nlkdcenxymg8tenrghmek4nmqm28k",
        msg: toUtf8(`{"foo":"bar"}`),
        funds: coins(1234, "ucosm"),
        dependencies: [],
      };
      expect(msg).toEqual({
        typeUrl: "/wasmx.wasmx.MsgExecuteContract",
        value: expectedValue,
      });
    });
  });
});
