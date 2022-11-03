import {FC} from "react";
import styles from "./VehicleTrafficEntriesFilter.module.scss";
export interface VehicleTrafficFilterProps {
    bufferSize: number;
    onBufferSizeChange: (bufferSize: number) => void;
}

export const VehicleTrafficFilter: FC<VehicleTrafficFilterProps> = ({bufferSize, onBufferSizeChange}) => (
    <label className={styles.label}>
        <span>Максимум строк :</span>
        <input 
            type = "number" 
            min = "1" 
            max = "50" 
            value = {String(bufferSize)} 
            onInput = { e => onBufferSizeChange((e.target as HTMLInputElement).valueAsNumber)}
        />
    </label>
);

