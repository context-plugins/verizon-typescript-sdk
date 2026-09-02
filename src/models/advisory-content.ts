import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { advisoryItemSchema, type AdvisoryItem } from "./unions/advisory-item.js";

export type AdvisoryContent = {
  advisory: AdvisoryItem[];
};

export const advisoryContentSchema: Schema<AdvisoryContent> = s.object<AdvisoryContent>({
  advisory: s.array(s.lazy(() => advisoryItemSchema)),
});
