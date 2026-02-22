import { Client, getNFTokenID } from "xrpl"
import { mintNfts } from "./transactions/mintNfts";
import { Wallet_1 } from "./wallet";
import { getClient } from "./xrpl-client";
import { getNfts } from "./transactions/getNfts";
import { burnNfts } from "./transactions/burnNfts";
import { createOfferNfts } from "./transactions/createOfferNfts";
import { getURI } from "./transactions/getURI";

const main = async () => {
    // const client = getClient();
    
    // await client.connect();
    
    // // await mintNfts({}, Wallet_1, "Seat number: 17A");
    // await burnNfts(Wallet_1);
    // const result_mint = await mintNfts({}, Wallet_1, "Seat number: 17A");

    // const nftId = getNFTokenID(result_mint.result.meta);
    // const id: string = String(nftId);

    // const result_create = await createOfferNfts({
    //     Flags: 1,
    // }, Wallet_1, id, "1000000")

    // await client.disconnect();

    await getURI();
}

main();