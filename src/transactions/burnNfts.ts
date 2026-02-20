import { AccountNFToken, Client, NFTokenBurn, Wallet } from "xrpl";
import { getClient } from "../xrpl-client";
import { Wallet_1 } from "../wallet";

const client: Client = getClient();

type BurnNftProps = Omit<NFTokenBurn, "Account" | "NFTokenID">

export const burnNfts = async (NFTokenID: string, wallet: string) => {
    let results = '\n=== Connected. Burning NFT. ===';

    // Prepare transaction
    
    const nftBurn: NFTokenBurn = {
        TransactionType: "NFTokenBurn",
        Account: Wallet_1.address,
        Owner: wallet,
        NFTokenID: NFTokenID ?? ""
    }

    const response = await client.submitAndWait(nftBurn, {
        autofill: true,
        wallet: Wallet_1,
    });

    console.log(response);
}