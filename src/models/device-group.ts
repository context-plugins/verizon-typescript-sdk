import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Returns a list of all device groups in a specified account. */
export type DeviceGroup = {
  /** The description of the device group. */
  description?: string;
  /** Any extended attributes for the device group, as Key and Value pairs. */
  extendedAttributes?: CustomFields[];
  /** Identifies the default device group. */
  isDefaultGroup?: boolean;
  /** The name of the device group. */
  name?: string;
};

export const deviceGroupSchema: Schema<DeviceGroup> = s.object<DeviceGroup>({
  description: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  isDefaultGroup: s.optional(s.boolean()),
  name: s.optional(s.string()),
});
