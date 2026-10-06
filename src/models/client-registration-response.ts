import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { certificateSchema, type Certificate } from "./certificate.js";

/**
 * Response for /clients/registration. It provides a generated device ID and the certificates needed
 * to connect the ETX Message Exchange.
 */
export type ClientRegistrationResponse = {
  /**
   * The generated ID (UUID v4) for the device. It can be used as:
   *   - the MQTT Client ID when connecting to the Message Exchange system
   *   - a parameter when asking for the connection endpoint
   *   - a parameter when finishing the device registration
   *   - a parameter when unregistering the device
   */
  deviceId: string;
  /** Structure for the credentials required to connect to the ETX MQTT Message Exchange. */
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
