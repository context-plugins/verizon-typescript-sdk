import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { headingRangeSchema, type HeadingRange } from "./heading-range.js";

export type HeadingItem = {
  heading: HeadingRange | null;
};

export const headingItemSchema: Schema<HeadingItem> = s.object<HeadingItem>({
  heading: s.nullable(s.lazy(() => headingRangeSchema)),
});
