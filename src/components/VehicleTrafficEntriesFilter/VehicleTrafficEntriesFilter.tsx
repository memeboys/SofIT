import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";

export interface VehicleTrafficFilterProps {
    bufferSize: number;
    onBufferSizeChange: (bufferSize: number) => void;
}

const VehicleTrafficFilter: FC<VehicleTrafficFilterProps> = ({bufferSize, onBufferSizeChange}) => (
    <label>
        <span>Максимум строк</span>
        <input type="number" min="1" max="50" value={String(bufferSize)} onInput={e => {
            onBufferSizeChange((e.target as HTMLInputElement).valueAsNumber);
        )/>
    </label>
);


export default VehicleTrafficFilter;
