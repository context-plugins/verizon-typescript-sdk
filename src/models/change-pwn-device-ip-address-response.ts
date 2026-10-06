import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to change PWN device ip address. */
export type ChangePwnDeviceIpAddressResponse = {
  /**
   * A unique string that associates the request with the results that are sent via a callback
   * service.
   */
  requestId?: string;
};

export const changePwnDeviceIpAddressResponseSchema: Schema<ChangePwnDeviceIpAddressResponse> =
  s.object<ChangePwnDeviceIpAddressResponse>({
    requestId: s.optional(s.string()),
  });
