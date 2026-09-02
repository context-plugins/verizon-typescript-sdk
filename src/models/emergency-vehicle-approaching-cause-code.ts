import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EmergencyVehicleApproachingCauseCode = {
  emergencyVehicleApproaching95: number;
};

export const emergencyVehicleApproachingCauseCodeSchema: Schema<EmergencyVehicleApproachingCauseCode> =
  s.object<EmergencyVehicleApproachingCauseCode>({
    emergencyVehicleApproaching95: s.number(),
  });
