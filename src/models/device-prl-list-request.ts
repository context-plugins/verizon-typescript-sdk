import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/**
 * Requests the current PRL (Preferred Roaming List) version for 2G or 3G devices, which can help
 * determine which devices need a PRL update. (4G and GSM devices do not have a PRL.).
 */
export type DevicePrlListRequest = {
  /**
   * The devices for which you want the PRL version, specified by device identifier. You only need
   * to provide one identifier per device. Do not use any of the other parameters if you specify
   * device IDs.
   */
  deviceIds?: DeviceId[];
  /**
   * The name of a billing account. This parameter is only required if you are passing groupName and
   * the UWS account used for the current API session has access to multiple billing accounts,
   * because the same device group name can exist in multiple accounts.An account name is usually
   * numeric, and must include any leading zeros.
   */
  accountName?: string;
  /**
   * The names and values of custom fields, if you want to only include devices that have matching
   * custom fields.
   */
  customFields?: CustomFields[];
  /** The name of a device group, if you want to only include devices in that group. */
  groupName?: string;
  /**
   * The name of a service plan, if you want to only include devices that have that service plan.
   */
  servicePlan?: string;
};

export const devicePrlListRequestSchema: Schema<DevicePrlListRequest> = s.object<DevicePrlListRequest>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  accountName: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});
