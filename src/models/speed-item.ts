import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { speedRangeSchema, type SpeedRange } from "./speed-range.js";

export type SpeedItem = {
  speed: SpeedRange | null;
};

export const speedItemSchema: Schema<SpeedItem> = s.object<SpeedItem>({
  speed: s.nullable(s.lazy(() => speedRangeSchema)),
});
