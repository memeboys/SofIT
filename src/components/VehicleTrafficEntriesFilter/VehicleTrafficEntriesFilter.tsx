import {FC} from "react";
import { useDispatch } from "react-redux";
import { updateBufferSize, updateSearch, useVehicleTraffic } from "../../store/vehicleTrafficEntriesSlice";
import styles from "./VehicleTrafficEntriesFilter.module.scss";

export const VehicleTrafficFilter: FC = () => {
    const dispatch = useDispatch();
    const bufferSize = useVehicleTraffic(state => state.bufferSize);
    const searchText = useVehicleTraffic(state => state.searchText);
    return (
        <div className={styles.trafficFilter}>
            <label className={styles.bufferSizeField}>
                <span>Максимум строк : </span>
                <input 
                    type = "number" 
                    value = {String(bufferSize)}
                    onInput = { e => {
                    const bufferSize = (e.target as HTMLInputElement).valueAsNumber;
                    dispatch(updateBufferSize(bufferSize))
                    }}
                />
            </label>

            <label className={styles.searchField}>
                <span>Поиск : </span>
                <input 
                    type = "text" 
                    value = {searchText} 
                    onInput = { e => {
                        const text = (e.target as HTMLInputElement).value;
                        dispatch(updateSearch(text));
                    }}
                />
            </label>
        </div>
    );
};

