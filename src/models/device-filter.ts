import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/**
 * Specify the kind of the device identifier, the type of match, and the string that you want to
 * match.
 */
export type DeviceFilter = {
  /** The the billing account that the devices belong to. */
  account?: string;
  /** Only include devices that are in this device group. */
  groupName?: string;
  /** Only include devices that have this service plan. */
  servicePlan?: string;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
};

export const deviceFilterSchema: Schema<DeviceFilter> = s.object<DeviceFilter>({
  account: s.optional(s.string()),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
});
