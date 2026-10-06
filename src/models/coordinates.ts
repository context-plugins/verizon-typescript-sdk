import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Coordinates information. */
export type Coordinates = {
  /** Latitude value of location. */
  latitude?: string;
  /** Longitude value of location. */
  longitude?: string;
};

export const coordinatesSchema: Schema<Coordinates> = s.object<Coordinates>({
  latitude: s.optional(s.string()),
  longitude: s.optional(s.string()),
});
