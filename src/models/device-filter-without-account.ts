import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Filter for devices without account. */
export type DeviceFilterWithoutAccount = {
  /** Only include devices that are in this device group. */
  groupName?: string;
  /** Only include devices that have this service plan. */
  servicePlan?: string;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
};

export const deviceFilterWithoutAccountSchema: Schema<DeviceFilterWithoutAccount> =
  s.object<DeviceFilterWithoutAccount>({
    groupName: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  });
