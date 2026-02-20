import { Client, Wallet } from "xrpl";
import { getClient } from "../xrpl-client";

const client: Client = getClient();

export const getNfts = async (wallet: string) => {
    let results = '\n=== Connected. Getting NFTs. ===';

    // Target URI for testing
    const targetTaxon = 59187;

    // Get all NFTs
    const allNfts = await client.request({
        account: wallet,
        command: "account_nfts",
    });
    
    // Filter NFTs by URI
    const nft = allNfts.result.account_nfts.find(nft => {
        if (!nft.URI) return false;

        // Decode URI from hex to UTF-8
        return nft.NFTokenTaxon == targetTaxon;
    });

    results = '\n=========\nTicket:\n' + JSON.stringify(nft, null, 2) + '\n=========';
    console.log(`Result: ${results}`);

    return nft?.NFTokenID;
}