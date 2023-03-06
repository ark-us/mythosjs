import { AminoMsg } from "@cosmjs/amino";
import { fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { Long } from "../../helpers";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract } from "./tx";
export interface MsgStoreCodeAminoType extends AminoMsg {
  type: "/wasmx.wasmx.MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: Uint8Array;
  };
}
export interface MsgInstantiateContractAminoType extends AminoMsg {
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
export interface MsgInstantiateContract2AminoType extends AminoMsg {
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
export interface MsgExecuteContractAminoType extends AminoMsg {
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
export interface MsgExecuteWithOriginContractAminoType extends AminoMsg {
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
export interface MsgExecuteDelegateContractAminoType extends AminoMsg {
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
export const AminoConverter = {
  "/wasmx.wasmx.MsgStoreCode": {
    aminoType: "/wasmx.wasmx.MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode
    }: MsgStoreCode): MsgStoreCodeAminoType["value"] => {
      return {
        sender,
        wasm_byte_code: wasmByteCode
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code
    }: MsgStoreCodeAminoType["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: wasm_byte_code
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
    }: MsgInstantiateContract): MsgInstantiateContractAminoType["value"] => {
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
    }: MsgInstantiateContractAminoType["value"]): MsgInstantiateContract => {
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
    }: MsgInstantiateContract2): MsgInstantiateContract2AminoType["value"] => {
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
    }: MsgInstantiateContract2AminoType["value"]): MsgInstantiateContract2 => {
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
    }: MsgExecuteContract): MsgExecuteContractAminoType["value"] => {
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
    }: MsgExecuteContractAminoType["value"]): MsgExecuteContract => {
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
    }: MsgExecuteWithOriginContract): MsgExecuteWithOriginContractAminoType["value"] => {
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
    }: MsgExecuteWithOriginContractAminoType["value"]): MsgExecuteWithOriginContract => {
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
    }: MsgExecuteDelegateContract): MsgExecuteDelegateContractAminoType["value"] => {
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
    }: MsgExecuteDelegateContractAminoType["value"]): MsgExecuteDelegateContract => {
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
  }
};