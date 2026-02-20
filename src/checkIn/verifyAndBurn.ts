import { burnNfts } from "../transactions/burnNfts";
import { Wallet_1 } from "../wallet";
import { getClient, getClientClio } from "../xrpl-client"
import { getNfts } from "../transactions/getNfts";

// this is for check and burn

const client = getClient();
const clientClio = getClientClio();

export const verifyAndBurn = async (ownerAddress: string) => {
    try {
        const scannedNftId = await getNfts(ownerAddress) ?? "";

        console.log(scannedNftId);

        if (scannedNftId == "") throw new Error("no ticket");

        console.log("Cek" + clientClio.isConnected());
        if(!clientClio.isConnected()) {
            clientClio.connect();
        }
        console.log("Cek" + clientClio.isConnected());

        const accountNfts = await clientClio.request({
            command: "nft_info",
            nft_id: scannedNftId,
        })

        const owner = accountNfts.result.owner;
        const burned = accountNfts.result.is_burned;
        const issuer = accountNfts.result.issuer;

        if (issuer != Wallet_1.address) {
            throw new Error("Invalid ticket");
        }

        if (burned) {
            throw new Error("Ticket is already used!");
        }
        
        if (owner != ownerAddress) {
            throw new Error("Ticket is not yours!");
        }

        console.log("Verified!");

        // burn
        await burnNfts(scannedNftId, ownerAddress);

    } catch (e) {
        if (e instanceof Error) {
            console.log("error : " + e.message);
        }
    }
}