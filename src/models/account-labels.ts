import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceLabelsSchema, type DeviceLabels } from "./device-labels.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type AccountLabels = {
  devices: DeviceList[];
  label?: DeviceLabels[];
};

export const accountLabelsSchema: Schema<AccountLabels> = s.object<AccountLabels>({
  devices: s.array(s.lazy(() => deviceListSchema)),
  label: s.optional(s.array(s.lazy(() => deviceLabelsSchema))),
});
