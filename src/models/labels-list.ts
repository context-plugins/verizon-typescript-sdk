import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceLabelsSchema, type DeviceLabels } from "./device-labels.js";

export type LabelsList = {
  deviceIds?: DeviceLabels[];
};

export const labelsListSchema: Schema<LabelsList> = s.object<LabelsList>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceLabelsSchema))),
});
