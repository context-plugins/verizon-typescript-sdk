import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientRegistrationPendingResponse = {
  deviceId: string;
  message: string;
};

export const clientRegistrationPendingResponseSchema: Schema<ClientRegistrationPendingResponse> =
  s.object<ClientRegistrationPendingResponse>({
    deviceId: s.string(),
    message: s.string(),
    _keysMap: {
      deviceId: "DeviceID",
      message: "Message",
    },
  });
