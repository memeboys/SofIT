import {FC} from "react";
import {VehicleClass, VehicleColor, VehicleTrafficEntry} from "../../types";
import styles from './VehicleTrafficTable.module.scss';
export interface VehicleTrafficTableProps {
    entries: readonly VehicleTrafficEntry[];
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
    <tr className={styles.tr}><td>Дата</td><td>Тип</td><td>Цвет</td><td>Номер</td><td>Скорость</td></tr>
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

interface ClassComponentProps {
    typeCar: VehicleClass;
}

const TypeCar: FC<ClassComponentProps> = ({ typeCar }) => (
    <span>{vehicleClassMap[typeCar]}</span>
)

const vehicleColorMap: Record<VehicleColor, string> = {
    'black': '⚫️',
    'white': '⚪️',
    'red': '🔴',
    'green': '🟢',
    'blue': '🔵',
    'yellow': '🟡',
    'silver': '⚪️'
} as const;

interface ColorComponentProps {
    color: VehicleColor;
}

const Color: FC<ColorComponentProps> = ({ color }) => (
    <span>{vehicleColorMap[color]}</span>
)

const VehicleTrafficTableRow: FC<VehicleTrafficTableRowProps> = ({entry}) => {
    return (
        <tr>
            <td>{new Date(entry.timestamp * 1000).toLocaleTimeString()}</td>
            <td><TypeCar typeCar={entry.class}/></td>
            <td><Color color={entry.color}/></td>
            <td>{entry.plate}</td>
            <td>{entry.speed}</td>
        </tr>
    )
};
