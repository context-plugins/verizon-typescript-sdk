import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RetrieveResponseItem = {
  imei?: string;
  /** Present if credentials exist */
  username?: string;
  /** Present if retrieval failed */
  failure?: string;
};

export const retrieveResponseItemSchema: Schema<RetrieveResponseItem> = s.object<RetrieveResponseItem>({
  imei: s.optional(s.string()),
  username: s.optional(s.string()),
  failure: s.optional(s.string()),
});
