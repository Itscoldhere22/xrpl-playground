import { Client } from "xrpl";

const network = {
    RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233/",
}

let client: Client;

export const getClient = () => {
    if (!client) {
        client = new Client(network.RIPPLE_TESTNET);
    }

    return client;
}