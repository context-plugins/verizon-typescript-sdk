import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListforplannerSchema, type DeviceListforplanner } from "./device-listforplanner.js";

export type GetDeviceStatusesRequestforplanner = {
  /** The numeric name of the account, including leading zeros. */
  accountNumber?: string | null;
  /** The unique ID of a request. This is a UUID value. */
  requestId?: string | null;
  devices?: DeviceListforplanner[] | null;
};

export const getDeviceStatusesRequestforplannerSchema: Schema<GetDeviceStatusesRequestforplanner> =
  s.object<GetDeviceStatusesRequestforplanner>({
    accountNumber: s.optionalNullable(s.string()),
    requestId: s.optionalNullable(s.string()),
    devices: s.optionalNullable(s.array(s.lazy(() => deviceListforplannerSchema))),
  });
