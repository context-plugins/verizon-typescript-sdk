import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListFilterSchema, type AccountDeviceListFilter } from "./account-device-list-filter.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Request for listing account devices. */
export type AccountDeviceListRequest = {
  /**
   * The billing account for which a list of devices is returned. If you don't specify an
   * accountName, the list includes all devices to which you have access.
   */
  accountName?: string;
  /** An identifier for a single device. */
  deviceId?: DeviceId;
  /** Filter for a list of devices. */
  filter?: AccountDeviceListFilter;
  /** The name of a device state, to only include devices in that state. */
  currentState?: string;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
  /** Only include devices that were added after this date and time. */
  earliest?: string;
  /** Only include devices that are in this device group. */
  groupName?: string;
  /** Only include devices that were added before this date and time. */
  latest?: string;
  /** Only include devices that have this service plan. */
  servicePlan?: string;
  maxNumberOfDevices?: number;
  largestDeviceIdSeen?: number;
};

export const accountDeviceListRequestSchema: Schema<AccountDeviceListRequest> =
  s.object<AccountDeviceListRequest>({
    accountName: s.optional(s.string()),
    deviceId: s.optional(s.lazy(() => deviceIdSchema)),
    filter: s.optional(s.lazy(() => accountDeviceListFilterSchema)),
    currentState: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    earliest: s.optional(s.string()),
    groupName: s.optional(s.string()),
    latest: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
    maxNumberOfDevices: s.optional(s.int()),
    largestDeviceIdSeen: s.optional(s.int()),
  });
