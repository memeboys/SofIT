import {FC} from "react";
import {DtoVehicleClass, DtoVehicleColor, DtoVehicleTrafficEntry} from "../../types";
import styles from './VehicleTrafficTable.module.scss';

export interface VehicleTrafficTableProps {
    entries: readonly DtoVehicleTrafficEntry[];
}

export const VehicleTrafficTable: FC<VehicleTrafficTableProps> = ({ entries }) => (
    <div className={styles.wrapper}>
        <table className={styles.table}>
            <thead>
                <VehicleTrafficTableHeadRow/>
            </thead>
            <tbody>
                {entries.map(entry => <VehicleTrafficTableRow key={entry.deviceId} entry={entry}/>)}
            </tbody>
        </table>
    </div>
)


const VehicleTrafficTableHeadRow: FC = () => (
    <tr className={styles.tr}>
        <td>Дата</td>
        <td>Тип</td>
        <td>Цвет</td>
        <td>Номер</td>
        <td>Скорость</td>
    </tr>
)


interface VehicleTrafficTableRowProps {
    entry: DtoVehicleTrafficEntry;
}

const vehicleClassMap: Record<DtoVehicleClass, string> = {
    'car': "🚗",
    'truck': "🚛",
    'bus': "🚌",
    'motorcycle': "🏍",
} as const;

interface VehicleClassProps {
    vehicleClass: DtoVehicleClass;
}


const VehicleClass: FC<VehicleClassProps> = ({ vehicleClass }) => (
    <span className={styles.vehicleClass}>{vehicleClassMap[vehicleClass]}</span>
)

const vehicleColorMap: Record<DtoVehicleColor, string> = {
    'black': '#222324',
    'white': '#f0f1f2',
    'red': '#e31919',
    'green': '#00ff48',
    'blue': '#0593ff',
    'yellow': '#fbff00',
    'silver': '#cadceb'
} as const;

interface VehicleColorProps {
    color: DtoVehicleColor;
}

const VehicleColor: FC<VehicleColorProps> = ({ color }) => (
    <div className={styles.vehicleColor} style={{ backgroundColor: vehicleColorMap[color] }}/>
)

const VehicleTrafficTableRow: FC<VehicleTrafficTableRowProps> = ({entry}) => (
    <tr>
        <td>{new Date(entry.timestamp * 1000).toLocaleTimeString()}</td>
        <td><VehicleClass vehicleClass={entry.class}/></td>
        <td><VehicleColor color={entry.color}/></td>
        <td>{entry.plate}</td>
        <td>{entry.speed}</td>
    </tr>
)