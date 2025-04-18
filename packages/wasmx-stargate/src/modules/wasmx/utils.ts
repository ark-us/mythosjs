import {
  accountFromAny,
} from "@cosmjs/stargate";
import { decodePubkey } from "@cosmjs/proto-signing";
import { Uint64 } from "@cosmjs/math";
import { assert } from "@cosmjs/utils";
import { mythos } from "@ark-us/wasmxjs"

/**
 * Basic implementation of AccountParser. This is supposed to support the most relevant
 * common Cosmos SDK account types. If you need support for exotic account types,
 * you'll need to write your own account decoder.
 */
export function accountFromAnyWasmx(input: any) {
    const { typeUrl, value } = input;
    switch (typeUrl) {
        // auth
        case "/mythos.cosmosmod.v1.BaseAccount":
            return accountFromBaseAccount(mythos.cosmosmod.v1.BaseAccount.decode(value));
        case "/mythos.cosmosmod.v1.ModuleAccount": {
            const baseAccount = mythos.cosmosmod.v1.ModuleAccount.decode(value).baseAccount;
            assert(baseAccount);
            return accountFromBaseAccount(baseAccount);
        }
        default:
            return accountFromAny(input)
    }
}

function accountFromBaseAccount(input: any) {
    const { address, pubKey, accountNumber, sequence } = input;
    const pubkey = pubKey ? decodePubkey(pubKey) : null;
    return {
        address: address,
        pubkey: pubkey,
        accountNumber: uint64FromProto(accountNumber).toNumber(),
        sequence: uint64FromProto(sequence).toNumber(),
    };
}

function uint64FromProto(input: any) {
    return Uint64.fromString(input.toString());
}
