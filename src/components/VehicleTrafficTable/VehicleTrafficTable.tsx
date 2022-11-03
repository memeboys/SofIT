import {FC} from "react";
import {VehicleClass, VehicleColor, VehicleTrafficEntry} from "../../types";
import styles from './VehicleTrafficTable.module.scss';



export interface VehicleTrafficTableProps {
    entries: readonly VehicleTrafficEntry[];
}

export const VehicleTrafficTable: FC<VehicleTrafficTableProps> = ({ entries }) => {

    return (<div className={styles.wrapper}>
        <table className={styles.table}>
            <thead>
                <VehicleTrafficTableHeadRow/>
            </thead>
            <tbody>
                {entries.map(entry => <VehicleTrafficTableRow key={entry.deviceId} entry={entry}/>)}
            </tbody>
        </table>
    </div>)
}

const VehicleTrafficTableHeadRow: FC = () => (
    <tr className={styles.tr}>
        <td>Дата</td>
        <td>Тип</td>
        <td>Цвет</td>
        <td>Номер</td>
        <td>Скорость</td></tr>
)


interface VehicleTrafficTableRowProps {
    entry: VehicleTrafficEntry;
}

const vehicleClassMap: Record<VehicleClass, string> = {
    'car': "🚗",
    'truck': "🚛",
    'bus': "🚌",
    'motorcycle': "🏍",
} as const;

interface VehicleClassProps {
    vehicleClass: VehicleClass;
}


const TypeCar: FC<VehicleClassProps> = ({ vehicleClass }) => (
    <span className={styles.vehicleClass}>{vehicleClassMap[vehicleClass]}</span>
)

const vehicleColorMap: Record<VehicleColor, string> = {
    'black': '#222324',
    'white': '#f0f1f2',
    'red': '#e31919',
    'green': '#00ff48',
    'blue': '#0593ff',
    'yellow': '#fbff00',
    'silver': '#cadceb'
} as const;

interface ColorComponentProps {
    color: VehicleColor;
}

const Color: FC<ColorComponentProps> = ({ color }) => (
    <div className={styles.vehicleColor} style={{ backgroundColor: vehicleColorMap[color] }}/>
)


const VehicleTrafficTableRow: FC<VehicleTrafficTableRowProps> = ({entry}) => (
    <tr>
        <td>{new Date(entry.timestamp * 1000).toLocaleTimeString()}</td>
        <td><TypeCar vehicleClass={entry.class}/></td>
        <td><Color color={entry.color}/></td>
        <td>{entry.plate}</td>
        <td>{entry.speed}</td>
    </tr>
)