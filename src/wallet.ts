import * as dotenv from "dotenv"
import { Wallet } from "xrpl"

dotenv.config();

const WALLET_1_SEED = process.env.WALLET_1_SEED ?? "";
const WALLET_2_SEED = process.env.WALLET_2_SEED ?? "";

export const Wallet_1 = Wallet.fromSeed(WALLET_1_SEED);
export const Wallet_2 = Wallet.fromSeed(WALLET_2_SEED);