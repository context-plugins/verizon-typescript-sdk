import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceGroupFilterCriteriaSchema,
  type DeviceGroupFilterCriteria,
} from "./device-group-filter-criteria.js";

export type DeviceGroupObject = {
  deviceGroup?: DeviceGroupFilterCriteria;
};

export const deviceGroupObjectSchema: Schema<DeviceGroupObject> = s.object<DeviceGroupObject>({
  deviceGroup: s.optional(s.lazy(() => deviceGroupFilterCriteriaSchema)),
});
