import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoOffBoardSensorSchema, type DtoOffBoardSensor } from "./dto-off-board-sensor.js";

export type Sensorinsightsconfig = {
  removesensor?: DtoOffBoardSensor;
};

export const sensorinsightsconfigSchema: Schema<Sensorinsightsconfig> = s.object<Sensorinsightsconfig>({
  removesensor: s.optional(s.lazy(() => dtoOffBoardSensorSchema)),
});
