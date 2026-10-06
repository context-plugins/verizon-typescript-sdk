import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hplDeviceIdSchema, type HplDeviceId } from "./hpl-device-id.js";

/** A list of device IDs */
export type HplAccountDeviceList = {
  deviceIds?: HplDeviceId[];
};

export const hplAccountDeviceListSchema: Schema<HplAccountDeviceList> = s.object<HplAccountDeviceList>({
  deviceIds: s.optional(s.array(s.lazy(() => hplDeviceIdSchema))),
});
