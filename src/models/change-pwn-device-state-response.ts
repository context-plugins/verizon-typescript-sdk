import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to change PWN device state */
export type ChangePwnDeviceStateResponse = {
  /**
   * A unique string that associates the request with the results that are sent via a callback
   * service.
   */
  requestId?: string;
};

export const changePwnDeviceStateResponseSchema: Schema<ChangePwnDeviceStateResponse> =
  s.object<ChangePwnDeviceStateResponse>({
    requestId: s.optional(s.string()),
  });
