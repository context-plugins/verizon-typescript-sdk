import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClientSubtype = {
  PassengerCar: "PassengerCar",
  Truck: "Truck",
  Bus: "Bus",
  EmergencyVehicle: "EmergencyVehicle",
  SchoolBus: "SchoolBus",
  MaintenanceVehicle: "MaintenanceVehicle",
  Pedestrian: "Pedestrian",
  Bicycle: "Bicycle",
  Scooter: "Scooter",
  Motorcycle: "Motorcycle",
  RoadSideUnit: "RoadSideUnit",
  Camera: "Camera",
  Lidar: "Lidar",
  Radar: "Radar",
  InductiveLoop: "InductiveLoop",
  MagneticSensor: "MagneticSensor",
  Platform: "Platform",
  Application: "Application",
  Na: "NA",
} as const;
export type ClientSubtype = (typeof ClientSubtype)[keyof typeof ClientSubtype] | (string & {});

export const clientSubtypeSchema: EnumSchema<ClientSubtype> = s.enumOf<ClientSubtype>(ClientSubtype);
