import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { VehicleTrafficFilter } from "../components/VehicleTrafficEntriesFilter";
import { VehicleTrafficTable } from "../components/VehicleTrafficTable";
import {updateBufferSize, pushVehicleEntry, useVehicleTrafficEntries} from "../store/vehicleTrafficEntriesSlice";
import {watchVehicleTraffic} from "../api";


const Main = () => {
    const dispatch = useDispatch();
    const { bufferSize, entries } = useVehicleTrafficEntries();

    useEffect(() => {
        const entryStream = watchVehicleTraffic();
        entryStream.listen(entry => dispatch(pushVehicleEntry(entry)));
        return () => entryStream.close();
    }, []);

    return (
        <>
            <VehicleTrafficFilter bufferSize={bufferSize} onBufferSizeChange={x => dispatch(updateBufferSize(x))}/>
            <VehicleTrafficTable entries={entries}/>
        </>
    );
};

export default Main;