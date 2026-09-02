import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accelerationSchema, type Acceleration } from "./acceleration.js";
import { devicePropertylocationSchema, type DevicePropertylocation } from "./device-propertylocation.js";

export type SearchDeviceByPropertyFields = {
  acceleration?: Acceleration;
  battery?: string;
  humidity?: string;
  light?: string;
  pressure?: string;
  signalStrength?: string;
  temperature?: string;
  devicePropertylocation?: DevicePropertylocation;
};

export const searchDeviceByPropertyFieldsSchema: Schema<SearchDeviceByPropertyFields> =
  s.object<SearchDeviceByPropertyFields>({
    acceleration: s.optional(s.lazy(() => accelerationSchema)),
    battery: s.optional(s.string()),
    humidity: s.optional(s.string()),
    light: s.optional(s.string()),
    pressure: s.optional(s.string()),
    signalStrength: s.optional(s.string()),
    temperature: s.optional(s.string()),
    devicePropertylocation: s.optional(s.lazy(() => devicePropertylocationSchema)),
    _keysMap: {
      devicePropertylocation: "DevicePropertylocation",
    },
  });
