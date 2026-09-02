import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type DeviceFilter = {
  account?: string;
  groupName?: string;
  servicePlan?: string;
  customFields?: CustomFields[];
};

export const deviceFilterSchema: Schema<DeviceFilter> = s.object<DeviceFilter>({
  account: s.optional(s.string()),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
});
