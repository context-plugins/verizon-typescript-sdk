import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EtxClientType = {
  Vehicle: "Vehicle",
  VulnerableRoadUser: "VulnerableRoadUser",
  TrafficLightController: "TrafficLightController",
  InfrastructureSensor: "InfrastructureSensor",
  OnboardSensor: "OnboardSensor",
  Software: "Software",
} as const;
export type EtxClientType = (typeof EtxClientType)[keyof typeof EtxClientType] | (string & {});

export const etxClientTypeSchema: EnumSchema<EtxClientType> = s.enumOf<EtxClientType>(EtxClientType);
