import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Success201 = {
  requestId?: string;
};

export const success201Schema: Schema<Success201> = s.object<Success201>({
  requestId: s.optional(s.string()),
});
