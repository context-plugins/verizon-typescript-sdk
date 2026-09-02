import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accidentCauseCodeSchema, type AccidentCauseCode } from "../accident-cause-code.js";
import {
  emergencyVehicleApproachingCauseCodeSchema,
  type EmergencyVehicleApproachingCauseCode,
} from "../emergency-vehicle-approaching-cause-code.js";
import { impassabilityCauseCodeSchema, type ImpassabilityCauseCode } from "../impassability-cause-code.js";
import { roadworksCauseCodeSchema, type RoadworksCauseCode } from "../roadworks-cause-code.js";
import {
  trafficConditionCauseCodeSchema,
  type TrafficConditionCauseCode,
} from "../traffic-condition-cause-code.js";
import {
  wrongWayDrivingCauseCodeSchema,
  type WrongWayDrivingCauseCode,
} from "../wrong-way-driving-cause-code.js";

export type CauseCodeChoice =
  | TrafficConditionCauseCode
  | AccidentCauseCode
  | RoadworksCauseCode
  | ImpassabilityCauseCode
  | WrongWayDrivingCauseCode
  | EmergencyVehicleApproachingCauseCode;

export const causeCodeChoiceSchema: Schema<CauseCodeChoice> = s.of<CauseCodeChoice>(
  s.union([
    s.lazy(() => trafficConditionCauseCodeSchema),
    s.lazy(() => accidentCauseCodeSchema),
    s.lazy(() => roadworksCauseCodeSchema),
    s.lazy(() => impassabilityCauseCodeSchema),
    s.lazy(() => wrongWayDrivingCauseCodeSchema),
    s.lazy(() => emergencyVehicleApproachingCauseCodeSchema),
  ]),
);
