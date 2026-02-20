import { Client, Wallet } from "xrpl";
import { getClient } from "../xrpl-client";

const client: Client = getClient();

export const getNfts = async (wallet: Wallet) => {
    let results = '\n=== Connected. Getting NFTs. ===';

    // Target URI for testing
    const targetURI = "53656174206E756D6265723A20313741";

    // Get all NFTs
    const allNfts = await client.request({
        account: wallet.classicAddress,
        command: "account_nfts",
    });
    
    // Filter NFTs by URI
    const nft = allNfts.result.account_nfts.filter(nft => {
        if (!nft.URI) return false;

        // Decode URI from hex to UTF-8
        return nft.URI == targetURI;
    });

    results = '\n=========\nTicket:\n' + JSON.stringify(nft, null, 2) + '\n=========';
    // console.log(`Result: ${results}`);

    return nft;
}