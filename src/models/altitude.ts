import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { altitudeConfidenceSchema, type AltitudeConfidence } from "./altitude-confidence.js";

export type Altitude = {
  altitudeValue?: number;
  altitudeConfidence?: AltitudeConfidence;
};

export const altitudeSchema: Schema<Altitude> = s.object<Altitude>({
  altitudeValue: s.optional(s.number()),
  altitudeConfidence: s.optional(s.lazy(() => altitudeConfidenceSchema)),
});
