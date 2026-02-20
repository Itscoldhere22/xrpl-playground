import { convertStringToHex, type NFTokenMint, type Wallet } from "xrpl";
import { getClient } from "../xrpl-client";

const client = getClient();
type MintNftProps = Omit<NFTokenMint, "TransactionType" | "Account" | "Flags">

export const mintNfts = async ({URI, NFTokenTaxon, ...rests}: MintNftProps,
    wallet: Wallet, seat: string) => {
    const nftMint: NFTokenMint = {
        ...rests,
        NFTokenTaxon: 0,
        Account: wallet.address,
        TransactionType: "NFTokenMint",
        Flags: 16,
        URI: convertStringToHex(seat),
    }

    const response = await client.submitAndWait(nftMint, {
        autofill: true,
        wallet,
    });

    // console.log(response);
};