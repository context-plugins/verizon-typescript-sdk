import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A label for a single device. */
export type DeviceLabels = {
  /** The label you want to associate with the device. */
  name: string;
  /** The value of label */
  value: string;
};

export const deviceLabelsSchema: Schema<DeviceLabels> = s.object<DeviceLabels>({
  name: s.string(),
  value: s.string(),
});
