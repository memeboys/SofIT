import {VehicleClass, VehicleColor, VehicleTrafficEntry} from "../types";

const vehicleColors: readonly VehicleColor[] = [
    "black", "white", "red", "green", "blue", "yellow", "silver"
]

const vehicleClasses: readonly VehicleClass[] = [
    "car" , "truck" , "bus" , "motorcycle"
]

export function getMockVehicleTrafficEntry(): VehicleTrafficEntry {
    return {
        deviceId: getRandomId(),
        timestamp: Math.trunc(Date.now() / 1000),
        color: getRandomElement(vehicleColors),
        class: getRandomElement(vehicleClasses),
        plate: getRandomPlate(),
        speed: getRandomSpeed()
    }
}

export async function getMockVehicleTrafficEntryAsync(): Promise<VehicleTrafficEntry> {
    const delay = getRandomInt(1000, 3000);
    await new Promise(resolve => setTimeout(resolve, delay));
    return getMockVehicleTrafficEntry();
}

function getRandomSpeed(): number {
    const min = 100;
    const max = 250;
    return getRandomInt(min, max);
}

function getRandomPlate(): string {
    return "X000XX000"
        .replace("X", getRandomChar())
        .replace("000", getRandomInt(0, 999).toString().padStart(3, "0"))
        .replace("X", getRandomChar())
        .replace("X", getRandomChar())
        .replace("000", getRandomInt(0, 999).toString().padStart(3, "0"))

}

function getRandomId(): string {
    return getRandomInt().toString();
}

function getRandomChar(): string {
    const min = 65;
    const max = 90;
    const code = getRandomInt(min, max);
    return String.fromCharCode(code);
}

function getRandomInt(min = 0, max = Number.MAX_SAFE_INTEGER): number {
    if (min > max) {
        throw new Error("Min value should be less than max value!")
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement<T>(array: readonly T[]): T {
    if (array.length === 0) {
        throw new Error("Array should not be empty!")
    }
    const index = getRandomInt(0, array.length - 1);
    return array[index];
}