import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type DeviceGroup = {
  description?: string;
  extendedAttributes?: CustomFields[];
  isDefaultGroup?: boolean;
  name?: string;
};

export const deviceGroupSchema: Schema<DeviceGroup> = s.object<DeviceGroup>({
  description: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  isDefaultGroup: s.optional(s.boolean()),
  name: s.optional(s.string()),
});
