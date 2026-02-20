import type { NFTokenMint, Wallet } from "xrpl";

type MintNftProps = Omit<NFTokenMint, "TransactionType" | "Account" | "Flags">

export const mintNfts = (props: MintNftProps, wallet: Wallet) => {
    const nftMint: NFTokenMint = {
        ...props,
        Account: wallet.address,
        TransactionType: "NFTokenMint",
        Flags: 16,
        
    }
};