import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { id1Schema, type Id1 } from "./unions/id1.js";

export type DeviceList2 = {
  ids?: Id1[];
};

export const deviceList2Schema: Schema<DeviceList2> = s.object<DeviceList2>({
  ids: s.optional(s.array(s.lazy(() => id1Schema))),
});
