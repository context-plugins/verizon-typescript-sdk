import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Acceptable heading range for road users in degrees. */
export type HeadingRange = {
  /** The minimum value of heading in unit of degrees. */
  min: number;
  /** The maximum value of heading in unit of degrees. */
  max: number;
};

export const headingRangeSchema: Schema<HeadingRange> = s.object<HeadingRange>({
  min: s.float64(),
  max: s.float64(),
});
