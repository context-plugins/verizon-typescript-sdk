import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectionResponse = {
  mqttUrl: string;
  host?: string;
  port?: number;
};

export const connectionResponseSchema: Schema<ConnectionResponse> = s.object<ConnectionResponse>({
  mqttUrl: s.string(),
  host: s.optional(s.string()),
  port: s.optional(s.number()),
  _keysMap: {
    mqttUrl: "MqttURL",
    host: "Host",
    port: "Port",
  },
});
