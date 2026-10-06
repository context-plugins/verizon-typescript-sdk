import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceGroupFilter = {
  deviceGroupName?: string;
  individualOrCombined?: string;
  /** The numeric name of the account and must include leading zeroes */
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
