import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VehicleTrafficEntry } from "../types";
import { useSelector } from "react-redux";
import { RootState} from "./store";

export interface VehicleTrafficEntriesState {
    bufferSize: number;
    searchText: string;
    entries: readonly VehicleTrafficEntry[];
}

const minBufferSize = 1;
const maxBufferSize = 100;
const defaultBufferSize = 5;

const initialState: VehicleTrafficEntriesState = {
    bufferSize: defaultBufferSize,
    searchText: "",
    entries: []
} as const;

const vehicleTrafficEntries = createSlice({
    name: "vehicleTrafficEntries",
    initialState,
    reducers: {
        updateBufferSize: {
            reducer(state, action: PayloadAction<number>) {
                const startIndex = Math.max(0, state.entries.length - action.payload);
                return {
                    ...state,
                    bufferSize: action.payload,
                    entries: state.entries.slice(startIndex)
                }
            },
            prepare(bufferSize: number) {
                bufferSize = Math.trunc(bufferSize);
                if (Number.isNaN(bufferSize)) return { payload: minBufferSize };
                return { payload: Math.min(maxBufferSize, Math.max(minBufferSize, bufferSize)) };
            }
        },
        pushVehicleEntry(state, action: PayloadAction<VehicleTrafficEntry>) {
            return applyFilters({ ...state, entries: [...state.entries, action.payload]})
        },
        updateSearch(state, action: PayloadAction<string>) {
            return applyFilters({ ...state, searchText: action.payload })
        }
    }
});


function applyFilters(state: VehicleTrafficEntriesState): VehicleTrafficEntriesState {
    const startIndex = Math.max(0, state.entries.length - state.bufferSize);
    return {
        ...state,
        entries: fullTextSearch(state.entries, state.searchText)
        .sort((a, b) => a.timestamp - b.timestamp)
        .slice(startIndex)
    }
}

function fullTextSearch(entries: readonly VehicleTrafficEntry[], searchText: string): VehicleTrafficEntry[] {
    searchText = searchText.replaceAll(/\s+/gm, "").toUpperCase();
    if (searchText.length === 0) return entries.slice();
    return entries.filter(entry => entry.plate.toUpperCase().includes(searchText));
}

export const { updateBufferSize, pushVehicleEntry, updateSearch } = vehicleTrafficEntries.actions
export default vehicleTrafficEntries.reducer

export function useVehicleTraffic<T>(select: (state: VehicleTrafficEntriesState) => T): T {
    return useSelector((state: RootState) => select(state.vehicleTrafficEntries));
};
