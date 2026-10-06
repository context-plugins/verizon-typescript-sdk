import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { thingspaceDeviceSchema, type ThingspaceDevice } from "./thingspace-device.js";

/** Response for a request to list down account devices. */
export type AccountDeviceListResult = {
  /**
   * Up to 10,000 devices that you want to move to a different account, specified by device
   * identifier.
   */
  devices?: ThingspaceDevice[];
  /**
   * False for a status 200 response.True for a status 202 response, indicating that there is more
   * data to be retrieved.
   */
  hasMoreData?: boolean;
};

export const accountDeviceListResultSchema: Schema<AccountDeviceListResult> =
  s.object<AccountDeviceListResult>({
    devices: s.optional(s.array(s.lazy(() => thingspaceDeviceSchema))),
    hasMoreData: s.optional(s.boolean()),
  });
