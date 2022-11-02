import { Key } from "react";
import { VehicleTrafficEntry } from "../../types";
export interface VehicleTrafficTableProps {
    entries: VehicleTrafficEntry[];
}

export const VehicleTrafficTable = ({ vehicleTraffic }) => {
    return (
        <div className={classes.wrapper}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th>Тип
                        <div className={classes.filterTypeWrapper}>
                            <div className={`${classes.filterType} ${(showFilterOverlay) ? "open" : ""}`}
                                 onClick={() => {setFilterOverlay(true)}}>{renameFilterValue(filterType)}</div>
                            <div className={`${classes.filterTypeIcon} status-icon`}/>
                            <div className={`${classes.filterTypeList} status-list`}>
                                {typeList.map(text => (
                                    <div value={text} className={`${classes.filterTypeElement} ${(filterType === text) ? "active" : ""}`}
                                         key={Math.random()} onClick={e => selectedType(e.target, text)}>{renameFilterValue(text)}
                                    </div>
                                    )
                                )}
                            </div>
                            <div className={`${classes.filterTypeOverlay} status-overlay`}
                                 onClick={() => {setFilterOverlay(false)}}/>
                        </div>
                    </th>
                    <th>Цвет
                        <input type="text" className={classes.filterColor} placeholder="Введите цвет"
                               onChange={e => setFilterColor(e.target.value.trim())}/>
                    </th>
                    <th>
                        <span className={classes.speedText}>Скорость</span>
                        <input type="number" className={classes.filterSpeed} placeholder="от"
                               onChange={e => setFilterSpeed({from: e.target.value.trim(), to: filterSpeed.to})}/>
                        <input type="number" className={classes.filterSpeed} placeholder="до"
                               onChange={e => setFilterSpeed({from: filterSpeed.from, to: e.target.value.trim()})}/>
                    </th>
                </tr>
                </thead>
                <tbody className={(transport.length && visibilityRow) ? classes.even : ""}>
                    {(!transport.length) ? (
                        <tr>
                            <td colSpan="3" className={classes.dataNotFound}>Данные отсутствуют</td>
                        </tr>
                    ) : transport.map((e: { deviceId: Key | null | undefined; }) => <TableRow data={e} renameFilterValue={renameFilterValue} key={e.deviceId}/>)}
                </tbody>
            </table>
        </div>
    );
};

// Компонент строки таблицы
const TableRow = ({data, renameFilterValue}) => {
    return (
        <tr>
            <td>{renameFilterValue(data.class)}</td>
            <td>{data.color}</td>
            <td>{data.speed}</td>
        </tr>
    );
};

export default VehicleTable;