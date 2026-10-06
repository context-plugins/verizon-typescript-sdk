import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConsentRequest = {
  /** Account identifier in "##########-#####". */
  accountName: string;
  /** Exclude all devices or not. */
  allDevice?: boolean;
  /** The change to make: append or replace. */
  type?: string;
  /** Device ID list. */
  exclusion?: string[];
};

export const consentRequestSchema: Schema<ConsentRequest> = s.object<ConsentRequest>({
  accountName: s.string(),
  allDevice: s.optional(s.boolean()),
  type: s.optional(s.string()),
  exclusion: s.optional(s.array(s.string())),
});
