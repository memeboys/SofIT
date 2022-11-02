import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {VehicleTrafficEntry} from "../types";
import {useSelector} from "react-redux";
import { RootState} from "./store";

export interface VehicleTrafficEntriesState {
    bufferSize: number;
    entries: readonly VehicleTrafficEntry[];
}

const initialState: VehicleTrafficEntriesState = {
    bufferSize: 5,
    entries: []
} as const;

const vehicleTrafficEntries = createSlice({
    name: "vehicleTrafficEntries",
    initialState,
    reducers: {
        updateBufferSize(state, action: PayloadAction<number>) {
            if (!Number.isInteger(action.payload)) {
                throw new Error("Buffer size should be an interger!")
            }
            if (action.payload < 1) {
                throw new Error("Buffer size should be at least 1!")
            }
            return {
                ...state,
                bufferSize: action.payload,
                entries: state.entries.slice().reverse().slice(0, action.payload).reverse()
            }
        },
        pushVehicleEntry(state, action: PayloadAction<VehicleTrafficEntry>) {
            const entries = state.entries.slice();
            entries.push(action.payload);
            entries.sort((a, b) => b.timestamp - a.timestamp);
            return {
                ...state,
                entries: entries.slice(0, state.bufferSize).reverse()
            }
        }
    }
});

export const { updateBufferSize, pushVehicleEntry } = vehicleTrafficEntries.actions
export default vehicleTrafficEntries.reducer

export const useVehicleTrafficEntries = () => useSelector((state: RootState) => state.vehicleTrafficEntries);
