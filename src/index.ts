import {Client, getNFTokenID} from "xrpl"
import { mintNfts } from "./transactions/mintNfts";
import { Wallet_1 } from "./wallet";
import { getClient } from "./xrpl-client";
import { getNfts } from "./transactions/getNfts";
import { burnNfts } from "./transactions/burnNfts";

const main = async () => {
    const client = getClient();
    
    await client.connect();
    
    // await mintNfts({}, Wallet_1, "Seat number: 17A");
    await burnNfts(Wallet_1);

    await client.disconnect();
}

main();