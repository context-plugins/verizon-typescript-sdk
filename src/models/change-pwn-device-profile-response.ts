import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to change PWN device profile */
export type ChangePwnDeviceProfileResponse = {
  /**
   * A unique string that associates the request with the results that are sent via a callback
   * service.
   */
  requestId?: string;
};

export const changePwnDeviceProfileResponseSchema: Schema<ChangePwnDeviceProfileResponse> =
  s.object<ChangePwnDeviceProfileResponse>({
    requestId: s.optional(s.string()),
  });
