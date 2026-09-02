import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceLabels = {
  name: string;
  value: string;
};

export const deviceLabelsSchema: Schema<DeviceLabels> = s.object<DeviceLabels>({
  name: s.string(),
  value: s.string(),
});
