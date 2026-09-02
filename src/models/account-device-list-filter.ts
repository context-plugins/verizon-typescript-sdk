import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSearchSchema, type DeviceIdSearch } from "./device-id-search.js";

export type AccountDeviceListFilter = {
  deviceIdentifierFilters: DeviceIdSearch[];
};

export const accountDeviceListFilterSchema: Schema<AccountDeviceListFilter> =
  s.object<AccountDeviceListFilter>({
    deviceIdentifierFilters: s.array(s.lazy(() => deviceIdSearchSchema)),
  });
