import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { thingspaceDeviceSchema, type ThingspaceDevice } from "./thingspace-device.js";

export type AccountDeviceListResult = {
  devices?: ThingspaceDevice[];
  hasMoreData?: boolean;
};

export const accountDeviceListResultSchema: Schema<AccountDeviceListResult> =
  s.object<AccountDeviceListResult>({
    devices: s.optional(s.array(s.lazy(() => thingspaceDeviceSchema))),
    hasMoreData: s.optional(s.boolean()),
  });
