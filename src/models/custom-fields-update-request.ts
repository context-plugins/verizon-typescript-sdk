import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Request to assign or change custom field values for one or more devices. */
export type CustomFieldsUpdateRequest = {
  /**
   * The name of a billing account.This parameter is only required if the UWS account used for the
   * current API session has access to multiple billing accounts.An account name is usually numeric,
   * and must include any leading zeros.
   */
  accountName?: string;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
  /** The names and new values of any custom fields that you want to change. */
  customFieldsToUpdate?: CustomFields[];
  /** The devices that you want to change. */
  devices?: AccountDeviceList[];
  /** The name of a device group, if you want to only include devices in that group. */
  groupName?: string;
  /**
   * The name of a service plan, if you want to only include devices that have that service plan.
   */
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
