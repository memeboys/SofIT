import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { VehicleTrafficFilter } from "../../components/VehicleTrafficEntriesFilter";
import { VehicleTrafficTable } from "../../components/VehicleTrafficTable";
import { pushVehicleEntry, useVehicleTraffic } from "../../store/vehicleTrafficEntriesSlice";
import { watchVehicleTraffic } from "../../api";
import styles from "./Main.module.scss"

export const Main = () => {
    const dispatch = useDispatch();
    const entries = useVehicleTraffic(state => state.entries);

    useEffect(() => {
        const entryStream = watchVehicleTraffic();
        entryStream.onData(entry => dispatch(pushVehicleEntry(entry)));
        return () => entryStream.close();
    }, [dispatch]);

    return (
        <div className={styles.mainPage}>
            <VehicleTrafficFilter />
            <VehicleTrafficTable entries={entries}/>
        </div>
    );
};
