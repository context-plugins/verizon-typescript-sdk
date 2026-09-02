import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListforplannerSchema, type DeviceListforplanner } from "./device-listforplanner.js";

export type GetDevicesWindowsRequestforplanner = {
  accountNumber?: string | null;
  filter?: string | null;
  devices?: DeviceListforplanner[] | null;
};

export const getDevicesWindowsRequestforplannerSchema: Schema<GetDevicesWindowsRequestforplanner> =
  s.object<GetDevicesWindowsRequestforplanner>({
    accountNumber: s.optionalNullable(s.string()),
    filter: s.optionalNullable(s.string()),
    devices: s.optionalNullable(s.array(s.lazy(() => deviceListforplannerSchema))),
  });
