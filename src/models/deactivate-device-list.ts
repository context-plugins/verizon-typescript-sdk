import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";

export type DeactivateDeviceList = {
  ids?: Id[];
};

export const deactivateDeviceListSchema: Schema<DeactivateDeviceList> = s.object<DeactivateDeviceList>({
  ids: s.optional(s.array(s.lazy(() => idSchema))),
});
