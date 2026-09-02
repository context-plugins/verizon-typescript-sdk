import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Acceleration = {
  x?: string;
  y?: string;
  z?: string;
};

export const accelerationSchema: Schema<Acceleration> = s.object<Acceleration>({
  x: s.optional(s.string()),
  y: s.optional(s.string()),
  z: s.optional(s.string()),
});
