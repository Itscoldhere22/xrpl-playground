import {Client, getNFTokenID, Wallet} from "xrpl"
import { mintNfts } from "./transactions/mintNfts";
import { Wallet_1 } from "./wallet";
import { getClient } from "./xrpl-client";
import { createOfferNfts } from "./transactions/createOfferNfts";

const main = async () => {
    const client = getClient();
    
    await client.connect();
    
    const result_mint = await mintNfts({}, Wallet_1, "Seat number: 17A");

    const nftId = getNFTokenID(result_mint.result.meta);
    const id: string = String(nftId);

    const result_create = await createOfferNfts({
        Flags: 1,
    }, Wallet_1, id, "1000000")

    await client.disconnect();
}

main();