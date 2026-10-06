import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** response for /clients/connection */
export type ConnectionResponse = {
  /** The full MQTT URL including protocol, host, and port. */
  mqttUrl: string;
  /** The hostname of the MQTT broker to connect to. */
  host?: string;
  /** The port number of the MQTT broker. */
  port?: number;
};

export const connectionResponseSchema: Schema<ConnectionResponse> = s.object<ConnectionResponse>({
  mqttUrl: s.string(),
  host: s.optional(s.string()),
  port: s.optional(s.int()),
  _keysMap: {
    mqttUrl: "MqttURL",
    host: "Host",
    port: "Port",
  },
});
