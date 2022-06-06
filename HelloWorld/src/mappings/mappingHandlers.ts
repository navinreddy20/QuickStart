import {SubstrateEvent} from "@subql/types";
import {Transfer} from "../types";
import {Balance} from "@polkadot/types/interfaces";



export async function handleEvent(event: SubstrateEvent): Promise<void> {
    

    const from = event.event.data[0];
    const to = event.event.data[1];
    const amount = event.event.data[2];

    const transfer = new Transfer(`${event.block.block.header.number.toNumber()}-${event.idx}`,);

    transfer.blockNumber = event.block.block.header.number.toBigInt();
    transfer.from = from.toString();
    transfer.to = to.toString();
    transfer.amount = (amount as Balance).toBigInt();
    await transfer.save();

}




