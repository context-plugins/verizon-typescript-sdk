import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceGroupFilter = {
  deviceGroupName?: string;
  individualOrCombined?: string;
  accountName?: string;
};

export const deviceGroupFilterSchema: Schema<DeviceGroupFilter> = s.object<DeviceGroupFilter>({
  deviceGroupName: s.optional(s.string()),
  individualOrCombined: s.optional(s.string()),
  accountName: s.optional(s.string()),
  _keysMap: {
    individualOrCombined: "IndividualOrCombined",
  },
});
