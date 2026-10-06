import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Geolocation of the device at the time of the connection request in GPS coordinates. */
export type Geolocation = {
  /** The GPS Latitude value */
  latitude: number;
  /** The GPS Longitude value */
  longitude: number;
};

export const geolocationSchema: Schema<Geolocation> = s.object<Geolocation>({
  latitude: s.float64(),
  longitude: s.float64(),
  _keysMap: {
    latitude: "Latitude",
    longitude: "Longitude",
  },
});
