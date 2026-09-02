import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geolocationSchema, type Geolocation } from "./geolocation.js";
import { networkTypeSchema, type NetworkType } from "./network-type.js";

export type ConnectionRequest = {
  deviceId: string;
  geolocation: Geolocation;
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
