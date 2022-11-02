export type VehicleColor = "black"| "white"| "red"| "green"| "blue"| "yellow"| "silver";
export type VehicleClass = "car" | "truck" | "bus" | "motorcycle";

export interface VehicleTrafficEntry {
  deviceId: string;
  timestamp: number;
  color: VehicleColor;
  class: VehicleClass;
  plate: string;
  speed: number;
}