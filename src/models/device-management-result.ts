import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to activate service for one or more devices so that they can send and receive data. */
export type DeviceManagementResult = {
  /**
   * A unique string that associates the request with the results that are sent via a callback
   * service.
   */
  requestId?: string;
};

export const deviceManagementResultSchema: Schema<DeviceManagementResult> = s.object<DeviceManagementResult>({
  requestId: s.optional(s.string()),
});
