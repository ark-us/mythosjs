import { AminoMsg } from "@cosmjs/amino";
import { fromUtf8, toUtf8 } from "@cosmjs/encoding";
import { Long } from "../../../helpers";
import { MsgStoreCode, MsgStoreCodeEvm, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgExecuteWithOriginContract, MsgExecuteDelegateContract, MsgCompileContract } from "./tx";
export interface AminoMsgStoreCode extends AminoMsg {
  type: "/mythos.wasmx.v1.MsgStoreCode";
  value: {
    sender: string;
    wasm_byte_code: Uint8Array;
    metadata: {
      name: string;
      categ: string[];
      icon: string;
      author: string;
      site: string;
      abi: string;
      json_schema: string;
      origin: {
        chain_id: string;
        address: string;
      };
    };
  };
}
export interface AminoMsgStoreCodeEvm extends AminoMsg {
  type: "/mythos.wasmx.v1.MsgStoreCodeEvm";
  value: {
    sender: string;
    evm_byte_code: Uint8Array;
    metadata: {
      name: string;
      categ: string[];
      icon: string;
      author: string;
      site: string;
      abi: string;
      json_schema: string;
      origin: {
        chain_id: string;
        address: string;
      };
    };
  };
}
export interface AminoMsgInstantiateContract extends AminoMsg {
  type: "/mythos.wasmx.v1.MsgInstantiateContract";
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
  type: "/mythos.wasmx.v1.MsgInstantiateContract2";
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
  type: "/mythos.wasmx.v1.MsgExecuteContract";
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
  type: "/mythos.wasmx.v1.MsgExecuteWithOriginContract";
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
  type: "/mythos.wasmx.v1.MsgExecuteDelegateContract";
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
  type: "/mythos.wasmx.v1.MsgCompileContract";
  value: {
    sender: string;
    codeId: string;
  };
}
export const AminoConverter = {
  "/mythos.wasmx.v1.MsgStoreCode": {
    aminoType: "/mythos.wasmx.v1.MsgStoreCode",
    toAmino: ({
      sender,
      wasmByteCode,
      metadata
    }: MsgStoreCode): AminoMsgStoreCode["value"] => {
      return {
        sender,
        wasm_byte_code: wasmByteCode,
        metadata: {
          name: metadata.name,
          categ: metadata.categ,
          icon: metadata.icon,
          author: metadata.author,
          site: metadata.site,
          abi: metadata.abi,
          json_schema: metadata.jsonSchema,
          origin: {
            chain_id: metadata.origin.chainId,
            address: metadata.origin.address
          }
        }
      };
    },
    fromAmino: ({
      sender,
      wasm_byte_code,
      metadata
    }: AminoMsgStoreCode["value"]): MsgStoreCode => {
      return {
        sender,
        wasmByteCode: wasm_byte_code,
        metadata: {
          name: metadata.name,
          categ: metadata.categ,
          icon: metadata.icon,
          author: metadata.author,
          site: metadata.site,
          abi: metadata.abi,
          jsonSchema: metadata.json_schema,
          origin: {
            chainId: metadata.origin.chain_id,
            address: metadata.origin.address
          }
        }
      };
    }
  },
  "/mythos.wasmx.v1.MsgStoreCodeEvm": {
    aminoType: "/mythos.wasmx.v1.MsgStoreCodeEvm",
    toAmino: ({
      sender,
      evmByteCode,
      metadata
    }: MsgStoreCodeEvm): AminoMsgStoreCodeEvm["value"] => {
      return {
        sender,
        evm_byte_code: evmByteCode,
        metadata: {
          name: metadata.name,
          categ: metadata.categ,
          icon: metadata.icon,
          author: metadata.author,
          site: metadata.site,
          abi: metadata.abi,
          json_schema: metadata.jsonSchema,
          origin: {
            chain_id: metadata.origin.chainId,
            address: metadata.origin.address
          }
        }
      };
    },
    fromAmino: ({
      sender,
      evm_byte_code,
      metadata
    }: AminoMsgStoreCodeEvm["value"]): MsgStoreCodeEvm => {
      return {
        sender,
        evmByteCode: evm_byte_code,
        metadata: {
          name: metadata.name,
          categ: metadata.categ,
          icon: metadata.icon,
          author: metadata.author,
          site: metadata.site,
          abi: metadata.abi,
          jsonSchema: metadata.json_schema,
          origin: {
            chainId: metadata.origin.chain_id,
            address: metadata.origin.address
          }
        }
      };
    }
  },
  "/mythos.wasmx.v1.MsgInstantiateContract": {
    aminoType: "/mythos.wasmx.v1.MsgInstantiateContract",
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
  "/mythos.wasmx.v1.MsgInstantiateContract2": {
    aminoType: "/mythos.wasmx.v1.MsgInstantiateContract2",
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
  "/mythos.wasmx.v1.MsgExecuteContract": {
    aminoType: "/mythos.wasmx.v1.MsgExecuteContract",
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
  "/mythos.wasmx.v1.MsgExecuteWithOriginContract": {
    aminoType: "/mythos.wasmx.v1.MsgExecuteWithOriginContract",
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
  "/mythos.wasmx.v1.MsgExecuteDelegateContract": {
    aminoType: "/mythos.wasmx.v1.MsgExecuteDelegateContract",
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
  "/mythos.wasmx.v1.MsgCompileContract": {
    aminoType: "/mythos.wasmx.v1.MsgCompileContract",
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