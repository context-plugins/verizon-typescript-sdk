import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pwnDeviceIdSchema, type PwnDeviceId } from "./pwn-device-id.js";

export type PwnDeviceList = {
  deviceIds: PwnDeviceId[];
};

export const pwnDeviceListSchema: Schema<PwnDeviceList> = s.object<PwnDeviceList>({
  deviceIds: s.array(s.lazy(() => pwnDeviceIdSchema)),
});
