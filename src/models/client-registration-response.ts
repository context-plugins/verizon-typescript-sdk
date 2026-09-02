import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { certificateSchema, type Certificate } from "./certificate.js";

export type ClientRegistrationResponse = {
  deviceId: string;
  certificate: Certificate;
};

export const clientRegistrationResponseSchema: Schema<ClientRegistrationResponse> =
  s.object<ClientRegistrationResponse>({
    deviceId: s.string(),
    certificate: certificateSchema,
    _keysMap: {
      deviceId: "DeviceID",
      certificate: "Certificate",
    },
  });
