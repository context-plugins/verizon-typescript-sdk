import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusList = {
  id?: string;
  status?: string;
  reason?: string;
};

export const statusListSchema: Schema<StatusList> = s.object<StatusList>({
  id: s.optional(s.string()),
  status: s.optional(s.string()),
  reason: s.optional(s.string()),
});
