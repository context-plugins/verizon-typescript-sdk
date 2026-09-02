import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceIdSearch = {
  contains: string;
  startswith?: string;
  endswith?: string;
  kind: string;
};

export const deviceIdSearchSchema: Schema<DeviceIdSearch> = s.object<DeviceIdSearch>({
  contains: s.string(),
  startswith: s.optional(s.string()),
  endswith: s.optional(s.string()),
  kind: s.string(),
});
