import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConnectionResponseV3 = {
  mqttUrLs: string[];
  hosts?: string[];
  ports?: number[];
};

export const connectionResponseV3Schema: Schema<ConnectionResponseV3> = s.object<ConnectionResponseV3>({
  mqttUrLs: s.array(s.string()),
  hosts: s.optional(s.array(s.string())),
  ports: s.optional(s.array(s.number())),
  _keysMap: {
    mqttUrLs: "MqttURLs",
    hosts: "Hosts",
    ports: "Ports",
  },
});
