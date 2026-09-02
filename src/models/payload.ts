import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceOnBoardSensorSchema, type ResourceOnBoardSensor } from "./resource-on-board-sensor.js";

export type Payload = {
  addsensor?: ResourceOnBoardSensor;
};

export const payloadSchema: Schema<Payload> = s.object<Payload>({
  addsensor: s.optional(s.lazy(() => resourceOnBoardSensorSchema)),
});
