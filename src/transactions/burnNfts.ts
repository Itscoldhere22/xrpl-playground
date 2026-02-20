import { AccountNFToken, Client, NFTokenBurn, Wallet } from "xrpl";
import { getClient } from "../xrpl-client";
import { getNfts } from "./getNfts";

const client: Client = getClient();

type BurnNftProps = Omit<NFTokenBurn, "Account" | "NFTokenID">

export const burnNfts = async (wallet: Wallet) => {
    let results = '\n=== Connected. Burning NFT. ===';

    // Get NFTid
    const NFTokenID = await getNfts(wallet);

    // Prepare transaction
    const nftBurn: NFTokenBurn = {
        TransactionType: "NFTokenBurn",
        Account: wallet.address,
        NFTokenID: NFTokenID ?? ""
    }

    const response = await client.submitAndWait(nftBurn, {
        autofill: true,
        wallet
    });

    console.log(response);
}