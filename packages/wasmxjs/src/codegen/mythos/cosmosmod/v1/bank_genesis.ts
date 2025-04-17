import { Params, ParamsSDKType, SendEnabled, SendEnabledSDKType, Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { Balance, BalanceSDKType } from "../../../cosmos/bank/v1beta1/genesis";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../helpers";
/** BankGenesisState defines the bank module's genesis state. */

export interface BankGenesisState {
  /** params defines all the parameters of the module. */
  params?: Params;
  /** balances is an array containing the balances of all the accounts. */

  balances: Balance[];
  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   */

  supply: Coin[];
  /** denom_metadata defines the metadata of the different coins. */

  denomInfo: DenomDeploymentInfo[];
  /**
   * send_enabled defines the denoms where send is enabled or disabled.
   * 
   * Since: cosmos-sdk 0.47
   */

  sendEnabled: SendEnabled[];
}
/** BankGenesisState defines the bank module's genesis state. */

export interface BankGenesisStateSDKType {
  /** params defines all the parameters of the module. */
  params?: ParamsSDKType;
  /** balances is an array containing the balances of all the accounts. */

  balances: BalanceSDKType[];
  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   */

  supply: CoinSDKType[];
  /** denom_metadata defines the metadata of the different coins. */

  denom_info: DenomDeploymentInfoSDKType[];
  /**
   * send_enabled defines the denoms where send is enabled or disabled.
   * 
   * Since: cosmos-sdk 0.47
   */

  send_enabled: SendEnabledSDKType[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */

export interface DenomDeploymentInfo {
  metadata?: Metadata;
  codeId: Long;
  admins: string[];
  minters: string[];
  contract: string;
  baseDenom: string;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */

export interface DenomDeploymentInfoSDKType {
  metadata?: MetadataSDKType;
  code_id: Long;
  admins: string[];
  minters: string[];
  contract: string;
  base_denom: string;
}

function createBaseBankGenesisState(): BankGenesisState {
  return {
    params: undefined,
    balances: [],
    supply: [],
    denomInfo: [],
    sendEnabled: []
  };
}

export const BankGenesisState = {
  encode(message: BankGenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.denomInfo) {
      DenomDeploymentInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BankGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;

        case 3:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.denomInfo.push(DenomDeploymentInfo.decode(reader, reader.uint32()));
          break;

        case 5:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BankGenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
      supply: Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : [],
      denomInfo: Array.isArray(object?.denomInfo) ? object.denomInfo.map((e: any) => DenomDeploymentInfo.fromJSON(e)) : [],
      sendEnabled: Array.isArray(object?.sendEnabled) ? object.sendEnabled.map((e: any) => SendEnabled.fromJSON(e)) : []
    };
  },

  toJSON(message: BankGenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    if (message.supply) {
      obj.supply = message.supply.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.supply = [];
    }

    if (message.denomInfo) {
      obj.denomInfo = message.denomInfo.map(e => e ? DenomDeploymentInfo.toJSON(e) : undefined);
    } else {
      obj.denomInfo = [];
    }

    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map(e => e ? SendEnabled.toJSON(e) : undefined);
    } else {
      obj.sendEnabled = [];
    }

    return obj;
  },

  fromPartial(object: Partial<BankGenesisState>): BankGenesisState {
    const message = createBaseBankGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    message.denomInfo = object.denomInfo?.map(e => DenomDeploymentInfo.fromPartial(e)) || [];
    message.sendEnabled = object.sendEnabled?.map(e => SendEnabled.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDenomDeploymentInfo(): DenomDeploymentInfo {
  return {
    metadata: undefined,
    codeId: Long.UZERO,
    admins: [],
    minters: [],
    contract: "",
    baseDenom: ""
  };
}

export const DenomDeploymentInfo = {
  encode(message: DenomDeploymentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }

    if (!message.codeId.isZero()) {
      writer.uint32(16).uint64(message.codeId);
    }

    for (const v of message.admins) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.minters) {
      writer.uint32(34).string(v!);
    }

    if (message.contract !== "") {
      writer.uint32(42).string(message.contract);
    }

    if (message.baseDenom !== "") {
      writer.uint32(50).string(message.baseDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomDeploymentInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomDeploymentInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;

        case 2:
          message.codeId = (reader.uint64() as Long);
          break;

        case 3:
          message.admins.push(reader.string());
          break;

        case 4:
          message.minters.push(reader.string());
          break;

        case 5:
          message.contract = reader.string();
          break;

        case 6:
          message.baseDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DenomDeploymentInfo {
    return {
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      admins: Array.isArray(object?.admins) ? object.admins.map((e: any) => String(e)) : [],
      minters: Array.isArray(object?.minters) ? object.minters.map((e: any) => String(e)) : [],
      contract: isSet(object.contract) ? String(object.contract) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : ""
    };
  },

  toJSON(message: DenomDeploymentInfo): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());

    if (message.admins) {
      obj.admins = message.admins.map(e => e);
    } else {
      obj.admins = [];
    }

    if (message.minters) {
      obj.minters = message.minters.map(e => e);
    } else {
      obj.minters = [];
    }

    message.contract !== undefined && (obj.contract = message.contract);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    return obj;
  },

  fromPartial(object: Partial<DenomDeploymentInfo>): DenomDeploymentInfo {
    const message = createBaseDenomDeploymentInfo();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.admins = object.admins?.map(e => e) || [];
    message.minters = object.minters?.map(e => e) || [];
    message.contract = object.contract ?? "";
    message.baseDenom = object.baseDenom ?? "";
    return message;
  }

};