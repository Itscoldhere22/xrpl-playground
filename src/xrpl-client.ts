import { Client } from "xrpl";

const network = {
    CLIO_TESTNET: "wss://clio.altnet.rippletest.net:51233",
    RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233/",
}

let client: Client;
let clientClio: Client;

export const getClient = () => {
    if (!client) {
        client = new Client(network.RIPPLE_TESTNET);
    }

    return client;
}

export const getClientClio = () => {
    if (!clientClio) {
        clientClio = new Client(network.CLIO_TESTNET);
    }

    return clientClio;
}