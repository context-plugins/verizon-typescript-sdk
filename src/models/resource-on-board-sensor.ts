import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceOnBoardSensor = {
  deveui: string;
  appeui: string;
  appkey: string;
  class: string;
  kind: string;
  description: string;
  name: string;
  customdata?: Record<string, Record<string, unknown>>;
};

export const resourceOnBoardSensorSchema: Schema<ResourceOnBoardSensor> = s.object<ResourceOnBoardSensor>({
  deveui: s.string(),
  appeui: s.string(),
  appkey: s.string(),
  class: s.string(),
  kind: s.string(),
  description: s.string(),
  name: s.string(),
  customdata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
});
