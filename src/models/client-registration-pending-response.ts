import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Response for /clients/registration for pending state. It provides a device_id for user to finish
 * registration with PUT API call
 */
export type ClientRegistrationPendingResponse = {
  /**
   * The generated ID (UUID v4) for the device. It can be used as:
   *   - the MQTT Client ID when connecting to the Message Exchange system
   *   - a parameter when asking for the connection endpoint
   *   - a parameter when finishing the device registration
   *   - a parameter when unregistering the device
   */
  deviceId: string;
  /** The reason why the registration is in pending state */
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
