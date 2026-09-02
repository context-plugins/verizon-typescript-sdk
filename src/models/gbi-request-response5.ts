import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbiRequestResponse5 = {
  requestId?: string;
};

export const gbiRequestResponse5Schema: Schema<GbiRequestResponse5> = s.object<GbiRequestResponse5>({
  requestId: s.optional(s.string()),
});
