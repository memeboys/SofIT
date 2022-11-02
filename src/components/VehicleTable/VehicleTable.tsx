import {FC} from "react";
import {VehicleTrafficEntry} from "../types";

export interface VehicleTrafficTableProps {
    entries: VehicleTrafficEntry[];
}

export const VehicleTrafficTable: FC<VehicleTrafficTableProps> = ({ entries }) => (
    <table>
        <thead>
            <VehicleTrafficTableHeadRow/>
        </thead>
        <tbody>
            entries.map(entry => <VehicleTrafficTableRow key={entry.deviceId} entry={entry}/>)
            </tbody>
            </table>
)

const VehicleTrafficTableHeadRow: FC = () => (
    <tr>
        <td>Дата</td>
        <td>Класс</td>
        <td>Цвет</td>
        <td>Номер</td>
        <td>Скорость</td>
    </tr>
)


interface VehicleTrafficTableRowProps {
    entry: VehicleTrafficEntry;
}

const VehicleTrafficTableRow: FC<VehicleTrafficTableRowProps> = ({entry}) => (
    <tr>
        <td>{entry.timestamp}</td>
        <td>{entry.class}</td>
        <td>{entry.color}</td>
        <td>{entry.plate}</td>
        <td>{entry.speed}</td>
    </tr>
);

export default VehicleTrafficTable;