import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type DeviceFilterWithoutAccount = {
  groupName?: string;
  servicePlan?: string;
  customFields?: CustomFields[];
};

export const deviceFilterWithoutAccountSchema: Schema<DeviceFilterWithoutAccount> =
  s.object<DeviceFilterWithoutAccount>({
    groupName: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  });
