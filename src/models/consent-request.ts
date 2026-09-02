import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConsentRequest = {
  accountName: string;
  allDevice?: boolean;
  type?: string;
  exclusion?: string[];
};

export const consentRequestSchema: Schema<ConsentRequest> = s.object<ConsentRequest>({
  accountName: s.string(),
  allDevice: s.optional(s.boolean()),
  type: s.optional(s.string()),
  exclusion: s.optional(s.array(s.string())),
});
