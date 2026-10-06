import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** response for api/v3/clients/connection */
export type ConnectionResponseV3 = {
  /** Array of full MQTT URLs including protocol, host, and port for each available MEC. */
  mqttUrLs: string[];
  /** Array of hostnames corresponding to each MQTT URL. */
  hosts?: string[];
  /** Array of port numbers corresponding to each MQTT URL. */
  ports?: number[];
};

export const connectionResponseV3Schema: Schema<ConnectionResponseV3> = s.object<ConnectionResponseV3>({
  mqttUrLs: s.array(s.string()),
  hosts: s.optional(s.array(s.string())),
  ports: s.optional(s.array(s.int())),
  _keysMap: {
    mqttUrLs: "MqttURLs",
    hosts: "Hosts",
    ports: "Ports",
  },
});
