import { configureStore } from '@reduxjs/toolkit';
import vehicleTrafficEntriesReducer from "./vehicleTrafficEntriesSlice";


export const store = configureStore({
    reducer: {
        vehicleTrafficEntries: vehicleTrafficEntriesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;