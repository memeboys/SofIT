export type DtoVehicleColor = "black"| "white"| "red"| "green"| "blue"| "yellow"| "silver";
export type DtoVehicleClass = "car" | "truck" | "bus" | "motorcycle";

export interface DtoVehicleTrafficEntry {
  deviceId: string;
  timestamp: number;
  color: DtoVehicleColor;
  class: DtoVehicleClass;
  plate: string;
  speed: number;
}