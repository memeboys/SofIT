import { DtoVehicleTrafficEntry } from "../types";
import { getMockVehicleTrafficEntryAsync } from "../utils/getMockVehicleTrafficEntry";
import { DataStream, DataStreamProducer } from "./dataStream";


export function watchVehicleTraffic(): DataStream<DtoVehicleTrafficEntry> {
    let isClosed = false
    const producer = new DataStreamProducer<DtoVehicleTrafficEntry>(() => isClosed = true);
    (async function() {
        while (!isClosed) {
            const entry = await getMockVehicleTrafficEntryAsync();
            producer.next(entry);
        }
    })();
    return producer;
}
