import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type CustomFieldsUpdateRequest = {
  accountName?: string;
  customFields?: CustomFields[];
  customFieldsToUpdate?: CustomFields[];
  devices?: AccountDeviceList[];
  groupName?: string;
  servicePlan?: string;
};

export const customFieldsUpdateRequestSchema: Schema<CustomFieldsUpdateRequest> =
  s.object<CustomFieldsUpdateRequest>({
    accountName: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    customFieldsToUpdate: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
    groupName: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
  });
