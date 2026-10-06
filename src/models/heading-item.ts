import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headingRangeSchema, type HeadingRange } from "./heading-range.js";

/**
 * Heading limitation provides minimum and maximum value for road user heading in unit of degrees.
 * If the road user's heading value is between the given minimum and maximum value and the
 * TriggerConditions are also met the message will be sent out.
 *
 * The heading minimum value can be bigger than the maximum value as negative number are not
 * supported. For example, the +/- 10 degrees around the north (0 degrees) can be defined as 350
 * (min) to 10 (max) degrees.
 */
export type HeadingItem = {
  /** Acceptable heading range for road users in degrees. */
  heading: HeadingRange | null;
};

export const headingItemSchema: Schema<HeadingItem> = s.object<HeadingItem>({
  heading: s.nullable(s.lazy(() => headingRangeSchema)),
});
