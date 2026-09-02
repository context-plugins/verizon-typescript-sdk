import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { headingItemSchema, type HeadingItem } from "../heading-item.js";
import { speedItemSchema, type SpeedItem } from "../speed-item.js";

export type Limits = SpeedItem | HeadingItem;

export const limitsSchema: Schema<Limits> = s.of<Limits>(
  s.union([s.lazy(() => speedItemSchema), s.lazy(() => headingItemSchema)]),
);
