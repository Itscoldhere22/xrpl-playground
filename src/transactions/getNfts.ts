import { Client, Wallet } from "xrpl";
import { getClient } from "../xrpl-client";

const client: Client = getClient();

export const getNfts = async (wallet: Wallet) => {
    let results = '\n=== Connected. Getting NFTs. ===';

    // Target URI for testing
    const targetURI = "53656174206E756D6265723A20313741";

    // Get all NFTs
    const nfts = await client.request({
        // method: "account_nfts",
        account: wallet.classicAddress,
        command: "account_nfts",
    });
    
    // Filter NFTs by URI
    const ticket = nfts.result.account_nfts.filter(nft => {
        if (!nft.URI) return false;

        // Decode URI from hex to UTF-8
        return nft.URI == targetURI;
    });

    results = '\n=========\nTicket:\n' + JSON.stringify(ticket, null, 2) + '\n=========';
    // console.log(`Result: ${results}`);
}