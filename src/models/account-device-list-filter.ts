import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSearchSchema, type DeviceIdSearch } from "./device-id-search.js";

/** Filter for a list of devices. */
export type AccountDeviceListFilter = {
  /**
   * Specify the kind of the device identifier, the type of match, and the string that you want to
   * match.
   */
  deviceIdentifierFilters: DeviceIdSearch[];
};

export const accountDeviceListFilterSchema: Schema<AccountDeviceListFilter> =
  s.object<AccountDeviceListFilter>({
    deviceIdentifierFilters: s.array(s.lazy(() => deviceIdSearchSchema)),
  });
