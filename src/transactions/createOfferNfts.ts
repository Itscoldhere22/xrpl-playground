import { NFTokenCreateOffer, Wallet } from "xrpl";
import { getClient } from "../xrpl-client";

const client = getClient();

type CreateOfferProps = Omit<NFTokenCreateOffer, "TransactionType" | "Account">;

export const createOfferNfts = async (props: CreateOfferProps, wallet: Wallet, id: string, amount: string) => {

    const nftOffer: NFTokenCreateOffer = {
        ...props,
        NFTokenID: id,
        Amount: amount,
        Account: wallet.address,
        TransactionType: "NFTokenCreateOffer",
    }

    const response = await client.submitAndWait(nftOffer, {
        autofill: true,
        wallet,
    });

    console.log(response);

    return response;
};