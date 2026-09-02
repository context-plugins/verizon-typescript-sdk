import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceGroupFilterSchema, type DeviceGroupFilter } from "./device-group-filter.js";

export type DeviceGroupFilterCriteria = {
  filterCriteria?: DeviceGroupFilter;
};

export const deviceGroupFilterCriteriaSchema: Schema<DeviceGroupFilterCriteria> =
  s.object<DeviceGroupFilterCriteria>({
    filterCriteria: s.optional(s.lazy(() => deviceGroupFilterSchema)),
  });
