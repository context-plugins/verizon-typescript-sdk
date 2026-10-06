import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListforplannerSchema, type DeviceListforplanner } from "./device-listforplanner.js";

export type GetDevicesWindowsRequestforplanner = {
  /** The numeric name of the account, including leading zeros. */
  accountNumber?: string | null;
  /**
   * what windows to filter for: All - all 24 windows in a day, Best - top 3 windows by RAN KPI,
   * Worst - lowest 3 windows by RAN KPI
   */
  filter?: string | null;
  devices?: DeviceListforplanner[] | null;
};

export const getDevicesWindowsRequestforplannerSchema: Schema<GetDevicesWindowsRequestforplanner> =
  s.object<GetDevicesWindowsRequestforplanner>({
    accountNumber: s.optionalNullable(s.string()),
    filter: s.optionalNullable(s.string()),
    devices: s.optionalNullable(s.array(s.lazy(() => deviceListforplannerSchema))),
  });
