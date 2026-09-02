import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SensorInsightsBle = {
  dataMode?: number;
  manufacturerId?: number;
  maxNumScan?: number;
  minSigStr?: number;
  monitorPeriod?: number;
  moreManufId?: Record<string, unknown>[];
  opMode?: number;
  reportOffset?: number;
  reportPeriod?: number;
  reportType?: number;
  scanDuration?: number;
};

export const sensorInsightsBleSchema: Schema<SensorInsightsBle> = s.object<SensorInsightsBle>({
  dataMode: s.optional(s.number()),
  manufacturerId: s.optional(s.number()),
  maxNumScan: s.optional(s.number()),
  minSigStr: s.optional(s.number()),
  monitorPeriod: s.optional(s.number()),
  moreManufId: s.optional(s.array(s.record(s.string(), s.unknown()))),
  opMode: s.optional(s.number()),
  reportOffset: s.optional(s.number()),
  reportPeriod: s.optional(s.number()),
  reportType: s.optional(s.number()),
  scanDuration: s.optional(s.number()),
});
