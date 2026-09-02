import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChangePwnDeviceStateResponse = {
  requestId?: string;
};

export const changePwnDeviceStateResponseSchema: Schema<ChangePwnDeviceStateResponse> =
  s.object<ChangePwnDeviceStateResponse>({
    requestId: s.optional(s.string()),
  });
