import { DtoVehicleTrafficEntry } from "../types";
import { DataStream, DataStreamProducer } from "./dataStream";


export function watchVehicleTraffic(): DataStream<DtoVehicleTrafficEntry> {
    const socket = new WebSocket(process.env["REACT_APP_WS_ENDPOINT"]!);
    const producer = new DataStreamProducer<DtoVehicleTrafficEntry>(() => socket.close());
    socket.addEventListener("message", ({ data }) => {
        const entry = JSON.parse(data) as DtoVehicleTrafficEntry;
        producer.next(entry);
    });
    socket.addEventListener("close", () => producer.close());
    return producer;
}
