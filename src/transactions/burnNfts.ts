import { NFTokenBurn, Wallet } from "xrpl";
import { getClient } from "../xrpl-client"

const client = getClient();

type BurnNftProps = Omit<NFTokenBurn, "Account">

export const burnNfts = async (wallet: Wallet) => {
    let results = '\n=== Connected. Burning NFT. ===';
    const nftBurn = {

    }
}