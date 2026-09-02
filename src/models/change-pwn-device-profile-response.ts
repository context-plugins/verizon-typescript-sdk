import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChangePwnDeviceProfileResponse = {
  requestId?: string;
};

export const changePwnDeviceProfileResponseSchema: Schema<ChangePwnDeviceProfileResponse> =
  s.object<ChangePwnDeviceProfileResponse>({
    requestId: s.optional(s.string()),
  });
