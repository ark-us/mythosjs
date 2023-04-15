import { AminoMsg } from "@cosmjs/amino";
import { fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { Long } from "../../helpers";
import { MsgStoreCode, MsgStoreCodeEvm, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract, MsgCompileContract } from "./tx";
export interface AminoMsgStoreCode extends AminoMsg {
  type: "/wasmx.wasmx.MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: Uint8Array;
  };
}
export interface AminoMsgStoreCodeEvm extends AminoMsg {
  type: "/wasmx.wasmx.MsgStoreCodeEvm";
  value: {
    sender: string;
    evm_byte_code: Uint8Array;
  };
}
export interface AminoMsgInstantiateContract extends AminoMsg {
  type: "/wasmx.wasmx.MsgInstantiateContract";
  value: {
    sender: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgInstantiateContract2 extends AminoMsg {
  type: "/wasmx.wasmx.MsgInstantiateContract2";
  value: {
    sender: string;
    code_id: string;
    label: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
    salt: Uint8Array;
    fix_msg: boolean;
  };
}
export interface AminoMsgExecuteContract extends AminoMsg {
  type: "/wasmx.wasmx.MsgExecuteContract";
  value: {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
    dependencies: string[];
  };
}
export interface AminoMsgExecuteWithOriginContract extends AminoMsg {
  type: "/wasmx.wasmx.MsgExecuteWithOriginContract";
  value: {
    origin: string;
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgExecuteDelegateContract extends AminoMsg {
  type: "/wasmx.wasmx.MsgExecuteDelegateContract";
  value: {
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
}
export interface AminoMsgCompileContract extends AminoMsg {
  type: "/wasmx.wasmx.MsgCompileContract";
  value: {
    sender: string;
    codeId: string;
  };
}
export const AminoConverter = {
  "/wasmx.wasmx.MsgStoreCode": {
    aminoType: "/wasmx.wasmx.MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode
    }: MsgStoreCode): AminoMsgStoreCode["value"] => {
      return {
        sender,
        wasm_byte_code: wasmByteCode
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code
    }: AminoMsgStoreCode["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: wasm_byte_code
      };
    }
  },
  "/wasmx.wasmx.MsgStoreCodeEvm": {
    aminoType: "/wasmx.wasmx.MsgStoreCodeEvm",
    toAmino: ({
      sender,
      evmByteCode
    }: MsgStoreCodeEvm): AminoMsgStoreCodeEvm["value"] => {
      return {
        sender,
        evm_byte_code: evmByteCode
      };
    },
    fromAmino: ({
      sender,
      evm_byte_code
    }: AminoMsgStoreCodeEvm["value"]): MsgStoreCodeEvm => {
      return {
        sender,
        evmByteCode: evm_byte_code
      };
    }
  },
  "/wasmx.wasmx.MsgInstantiateContract": {
    aminoType: "/wasmx.wasmx.MsgInstantiateContract",
    toAmino: ({
      sender,
      codeId,
      label,
      msg,
      funds
    }: MsgInstantiateContract): AminoMsgInstantiateContract["value"] => {
      return {
        sender,
        code_id: codeId.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      code_id,
      label,
      msg,
      funds
    }: AminoMsgInstantiateContract["value"]): MsgInstantiateContract => {
      return {
        sender,
        codeId: Long.fromString(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/wasmx.wasmx.MsgInstantiateContract2": {
    aminoType: "/wasmx.wasmx.MsgInstantiateContract2",
    toAmino: ({
      sender,
      codeId,
      label,
      msg,
      funds,
      salt,
      fixMsg
    }: MsgInstantiateContract2): AminoMsgInstantiateContract2["value"] => {
      return {
        sender,
        code_id: codeId.toString(),
        label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fix_msg: fixMsg
      };
    },
    fromAmino: ({
      sender,
      code_id,
      label,
      msg,
      funds,
      salt,
      fix_msg
    }: AminoMsgInstantiateContract2["value"]): MsgInstantiateContract2 => {
      return {
        sender,
        codeId: Long.fromString(code_id),
        label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        salt,
        fixMsg: fix_msg
      };
    }
  },
  "/wasmx.wasmx.MsgExecuteContract": {
    aminoType: "/wasmx.wasmx.MsgExecuteContract",
    toAmino: ({
      sender,
      contract,
      msg,
      funds,
      dependencies
    }: MsgExecuteContract): AminoMsgExecuteContract["value"] => {
      return {
        sender,
        contract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        dependencies
      };
    },
    fromAmino: ({
      sender,
      contract,
      msg,
      funds,
      dependencies
    }: AminoMsgExecuteContract["value"]): MsgExecuteContract => {
      return {
        sender,
        contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        dependencies
      };
    }
  },
  "/wasmx.wasmx.MsgExecuteWithOriginContract": {
    aminoType: "/wasmx.wasmx.MsgExecuteWithOriginContract",
    toAmino: ({
      origin,
      sender,
      contract,
      msg,
      funds
    }: MsgExecuteWithOriginContract): AminoMsgExecuteWithOriginContract["value"] => {
      return {
        origin,
        sender,
        contract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      origin,
      sender,
      contract,
      msg,
      funds
    }: AminoMsgExecuteWithOriginContract["value"]): MsgExecuteWithOriginContract => {
      return {
        origin,
        sender,
        contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/wasmx.wasmx.MsgExecuteDelegateContract": {
    aminoType: "/wasmx.wasmx.MsgExecuteDelegateContract",
    toAmino: ({
      origin,
      sender,
      caller,
      codeContract,
      storageContract,
      msg,
      funds
    }: MsgExecuteDelegateContract): AminoMsgExecuteDelegateContract["value"] => {
      return {
        origin,
        sender,
        caller,
        code_contract: codeContract,
        storage_contract: storageContract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      origin,
      sender,
      caller,
      code_contract,
      storage_contract,
      msg,
      funds
    }: AminoMsgExecuteDelegateContract["value"]): MsgExecuteDelegateContract => {
      return {
        origin,
        sender,
        caller,
        codeContract: code_contract,
        storageContract: storage_contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/wasmx.wasmx.MsgCompileContract": {
    aminoType: "/wasmx.wasmx.MsgCompileContract",
    toAmino: ({
      sender,
      codeId
    }: MsgCompileContract): AminoMsgCompileContract["value"] => {
      return {
        sender,
        codeId: codeId.toString()
      };
    },
    fromAmino: ({
      sender,
      codeId
    }: AminoMsgCompileContract["value"]): MsgCompileContract => {
      return {
        sender,
        codeId: Long.fromString(codeId)
      };
    }
  }
};