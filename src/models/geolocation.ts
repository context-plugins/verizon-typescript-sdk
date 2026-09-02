import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Geolocation = {
  latitude: number;
  longitude: number;
};

export const geolocationSchema: Schema<Geolocation> = s.object<Geolocation>({
  latitude: s.number(),
  longitude: s.number(),
  _keysMap: {
    latitude: "Latitude",
    longitude: "Longitude",
  },
});
