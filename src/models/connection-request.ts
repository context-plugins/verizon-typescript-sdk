import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geolocationSchema, type Geolocation } from "./geolocation.js";
import { networkTypeSchema, type NetworkType } from "./network-type.js";

/**
 * Request for /clients/connection. It requires the device ID acquired in the registration request
 * call; the geolocation of the device at the time of the request; and the network type (Verizon or
 * non-Verizon). The system uses this information to determine with MQTT endpoint the device should
 * use to connect the ETX Message Exchange.
 */
export type ConnectionRequest = {
  /**
   * The generated ID (UUID v4) for the device. It can be used as:
   *   - the MQTT Client ID when connecting to the Message Exchange system
   *   - a parameter when asking for the connection endpoint
   *   - a parameter when finishing the device registration
   *   - a parameter when unregistering the device
   */
  deviceId: string;
  /** Geolocation of the device at the time of the connection request in GPS coordinates. */
  geolocation: Geolocation;
  /**
   * The type of the device's network connection at the time of the request. If the device is on the
   * Verizon cellular network it should use the "VZ" value otherwise the "non-VZ" value.
   *
   * Devices on the Verizon network can directly access the ETX Message Exchange on the MEC (Mobile
   * Edge Compute server)
   */
  networkType: NetworkType;
};

export const connectionRequestSchema: Schema<ConnectionRequest> = s.object<ConnectionRequest>({
  deviceId: s.string(),
  geolocation: geolocationSchema,
  networkType: networkTypeSchema,
  _keysMap: {
    deviceId: "DeviceID",
    geolocation: "Geolocation",
    networkType: "NetworkType",
  },
});
