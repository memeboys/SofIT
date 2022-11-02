import { VehicleTrafficEntry } from "../types";
import { getMockVehicleTrafficEntryAsync } from "../utils/getMockVehicleTrafficEntry";
import { DataStream, DataStreamProducer } from "./dataStream";


export function watchVehicleTraffic(): DataStream<VehicleTrafficEntry> {
    let isClosed = false
    const producer = new DataStreamProducer<VehicleTrafficEntry>(() => isClosed = true);
    (async function() {
        while (!isClosed) {
            const entry = await getMockVehicleTrafficEntryAsync();
            producer.next(entry);
        }
    })();
    return producer;
}
