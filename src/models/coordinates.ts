import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Coordinates = {
  latitude?: string;
  longitude?: string;
};

export const coordinatesSchema: Schema<Coordinates> = s.object<Coordinates>({
  latitude: s.optional(s.string()),
  longitude: s.optional(s.string()),
});
