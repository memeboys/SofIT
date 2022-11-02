import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {VehicleTrafficEntry} from "../types";
import {useSelector} from "react-redux";
import { RootState} from "./store";

export interface VehicleTrafficEntriesState {
    bufferSize: number;
    entries: readonly VehicleTrafficEntry[];
}

const initialState: VehicleTrafficEntriesState = {
    bufferSize: 20,
    entries: []
} as const;

const vehicleTrafficEntries = createSlice({
    name: "vehicleTrafficEntries",
    initialState,
    reducers: {
        updateBufferSize(state, action: PayloadAction<number>) {
            if (action.payload < 1) {
                throw new Error("Buffer size should be at least 1!")
            }
            return {
                ...state,
                entries: state.entries.slice(0, action.payload)
            }
        },
        pushVehicleEntry(state, action: PayloadAction<VehicleTrafficEntry>) {
            const entries = state.entries.slice();
            entries.push(action.payload);
            entries.sort((a, b) => a.timestamp - b.timestamp);
            return {
                ...state,
                entries: entries.slice(0, state.bufferSize)
            }
        }
    }
});

export const { updateBufferSize, pushVehicleEntry } = vehicleTrafficEntries.actions
export default vehicleTrafficEntries.reducer

export const useVehicleTrafficEntries = () => useSelector((state: RootState) => state.vehicleTrafficEntries);
