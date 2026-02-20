import {Client, getNFTokenID, Wallet} from "xrpl"
import { mintNfts } from "./transactions/mintNfts";
import { Wallet_1 } from "./wallet";
import { getClient, getClientClio } from "./xrpl-client";
import { createOfferNfts } from "./transactions/createOfferNfts";
import { verifyAndBurn } from "./checkIn/verifyAndBurn";

const main = async () => {
    const client = getClient();
    const clientClio = getClientClio();

    await client.connect();
    await clientClio.connect();

    const result_mint = await mintNfts({}, Wallet_1, "Seat number: 17A");

    // const nftId = getNFTokenID(result_mint.result.meta);
    // const id: string = String(nftId);

    // const result_create = await createOfferNfts({
    //     Flags: 1,
    // }, Wallet_1, id, "1000000")

    await verifyAndBurn(Wallet_1.address);

    await clientClio.disconnect();
    await client.disconnect();
}

main();