import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChangePwnDeviceIpAddressResponse = {
  requestId?: string;
};

export const changePwnDeviceIpAddressResponseSchema: Schema<ChangePwnDeviceIpAddressResponse> =
  s.object<ChangePwnDeviceIpAddressResponse>({
    requestId: s.optional(s.string()),
  });
