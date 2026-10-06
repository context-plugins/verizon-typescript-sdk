import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { dateFilterSchema, type DateFilter } from "./date-filter.js";

/**
 * Request to list of all 4G devices with an ICCID (SIM) that was not activated with the expected
 * IMEI (hardware) during a specified time frame.
 */
export type DeviceMismatchListRequest = {
  /** Filter out the dates. */
  filter: DateFilter;
  /** A list of specific devices that you want to check, specified by ICCID or MDN. */
  devices?: AccountDeviceList[];
  /**
   * The account that you want to search for mismatched devices. If you don't specify an
   * accountName, the search includes all devices to which you have access.
   */
  accountName?: string;
  /** The name of a device group, to only include devices in that group. */
  groupName?: string;
};

export const deviceMismatchListRequestSchema: Schema<DeviceMismatchListRequest> =
  s.object<DeviceMismatchListRequest>({
    filter: dateFilterSchema,
    devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
    accountName: s.optional(s.string()),
    groupName: s.optional(s.string()),
  });
