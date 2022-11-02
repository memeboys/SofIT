import {useEffect} from "react";
import {useDispatch} from "react-redux";
import VehicleTrafficTable from "../components/VehicleTrafficTable/VehicleTrafficTable";
import VehicleTrafficEntriesFilter from "../components/VehicleTrafficEntriesFilter/VehicleTrafficEntriesFilter";
import {updateBufferSize, pushVehicleEntry, useVehicleTrafficEntries} from "../store/vehicleTrafficEntriesSlice";
import {watchVehicleTraffic} from "../api";


const Main = () => {
    const dispatch = useDispatch();
    const { bufferSize, entries } = useVehicleTrafficEntries();

    useEffect(() => {
        const entryStream = watchVehicleTraffic();
        entryStream.listen(entry => dispatch(pushVehicleEntry(entry)));
        return () => entryStream.close();
    });

    return (
        <>
            <VehicleTrafficEntriesFilter bufferSize={bufferSize} onBufferSizeChanged={(bufferSize: number) => updateBufferSize(bufferSize)}/>
            <VehicleTrafficTable vehicleTraffic={entries}/>
        </>
    );
};

export default Main;