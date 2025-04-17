import { Params, ParamsSDKType } from "../../../cosmos/auth/v1beta1/auth";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** BankGenesisState defines the bank module's genesis state. */
export interface AuthGenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
    baseAccountTypeurl: string;
    moduleAccountTypeurl: string;
}
/** BankGenesisState defines the bank module's genesis state. */
export interface AuthGenesisStateSDKType {
    /** params defines all the parameters of the module. */
    params?: ParamsSDKType;
    /** accounts are the accounts present at genesis. */
    accounts: AnySDKType[];
    base_account_typeurl: string;
    module_account_typeurl: string;
}
export declare const AuthGenesisState: {
    encode(message: AuthGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthGenesisState;
    fromJSON(object: any): AuthGenesisState;
    toJSON(message: AuthGenesisState): unknown;
    fromPartial(object: Partial<AuthGenesisState>): AuthGenesisState;
};
