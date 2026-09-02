import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkUpdateSmartalert = {
  name?: string;
};

export const bulkUpdateSmartalertSchema: Schema<BulkUpdateSmartalert> = s.object<BulkUpdateSmartalert>({
  name: s.optional(s.string()),
});
