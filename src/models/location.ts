import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { positionDataSchema, type PositionData } from "./position-data.js";
import { positionErrorSchema, type PositionError } from "./position-error.js";

/** Device location information. */
export type Location = {
  /** MDN. */
  msid?: string;
  /** Position data. */
  pd?: PositionData;
  /** Position error. */
  error?: PositionError;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  msid: s.optional(s.string()),
  pd: s.optional(s.lazy(() => positionDataSchema)),
  error: s.optional(s.lazy(() => positionErrorSchema)),
});
