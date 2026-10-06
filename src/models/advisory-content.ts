import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { advisoryItemSchema, type AdvisoryItem } from "./unions/advisory-item.js";

/** DataFrame content variant carrying advisory ITIS codes. */
export type AdvisoryContent = {
  /** List of typical ITIS warnings. */
  advisory: AdvisoryItem[];
};

export const advisoryContentSchema: Schema<AdvisoryContent> = s.object<AdvisoryContent>({
  advisory: s.array(s.lazy(() => advisoryItemSchema)),
});
