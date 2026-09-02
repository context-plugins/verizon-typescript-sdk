import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HeadingRange = {
  min: number;
  max: number;
};

export const headingRangeSchema: Schema<HeadingRange> = s.object<HeadingRange>({
  min: s.number(),
  max: s.number(),
});
