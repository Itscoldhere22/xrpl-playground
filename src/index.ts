import {Client} from "xrpl"
import { mintNfts } from "./transactions/mintNfts";
import { Wallet_1 } from "./wallet";
import { getClient } from "./xrpl-client";

const main = async () => {
    const client = getClient();
    
    await client.connect();
    
    await mintNfts({}, Wallet_1, "Seat number: 17A");

    await client.disconnect();
}

main();