import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceStatusItemforplannerSchema,
  type DeviceStatusItemforplanner,
} from "./device-status-itemforplanner.js";

export type GetDeviceStatusesResponseforplanner = {
  /** The numeric name of the account, including leading zeros. */
  accountNumber?: string | null;
  requestId?: string | null;
  deviceStatusList?: DeviceStatusItemforplanner[] | null;
};

export const getDeviceStatusesResponseforplannerSchema: Schema<GetDeviceStatusesResponseforplanner> =
  s.object<GetDeviceStatusesResponseforplanner>({
    accountNumber: s.optionalNullable(s.string()),
    requestId: s.optionalNullable(s.string()),
    deviceStatusList: s.optionalNullable(s.array(s.lazy(() => deviceStatusItemforplannerSchema))),
  });
