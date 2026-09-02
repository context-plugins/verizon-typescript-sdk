import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hplDeviceIdSchema, type HplDeviceId } from "./hpl-device-id.js";

export type HplAccountDeviceList = {
  deviceIds?: HplDeviceId[];
};

export const hplAccountDeviceListSchema: Schema<HplAccountDeviceList> = s.object<HplAccountDeviceList>({
  deviceIds: s.optional(s.array(s.lazy(() => hplDeviceIdSchema))),
});
