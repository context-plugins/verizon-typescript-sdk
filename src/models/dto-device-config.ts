import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sensorInsightsBleSchema, type SensorInsightsBle } from "./sensor-insights-ble.js";

export type DtoDeviceConfig = {
  ble?: SensorInsightsBle;
};

export const dtoDeviceConfigSchema: Schema<DtoDeviceConfig> = s.object<DtoDeviceConfig>({
  ble: s.optional(s.lazy(() => sensorInsightsBleSchema)),
});
