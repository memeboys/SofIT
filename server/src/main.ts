import { Server } from "ws";
import {getMockVehicleTrafficEntry} from "./utils/getMockVehicleTrafficEntry";
import {delay} from "./utils/delay";

const PORT = Number(process.env["PORT"] ?? 8080);
const server = new Server({ port: PORT });
server.on("connection", async socket => {
    let isClosed = false;
    socket.on("close", () => isClosed = true);
    while (!isClosed) {
        const entry = getMockVehicleTrafficEntry();
        socket.send(JSON.stringify(entry));
        await delay(500);
    }
});
