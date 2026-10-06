import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Tscore = {
  /** the UUID of the profile */
  profileid?: string;
  /** the UUID of the profile version */
  profileversionid?: string;
};

export const tscoreSchema: Schema<Tscore> = s.object<Tscore>({
  profileid: s.optional(s.string()),
  profileversionid: s.optional(s.string()),
});
