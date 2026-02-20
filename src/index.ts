import {Client} from "xrpl"

const main = async () => {
    const client = new Client("wss://s.altnet.rippletest.net:51233/");
    
    await client.connect();

    await client.disconnect();
}

main();