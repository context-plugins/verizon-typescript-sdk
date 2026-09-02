import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RetrieveResponseItem = {
  imei?: string;
  username?: string;
  failure?: string;
};

export const retrieveResponseItemSchema: Schema<RetrieveResponseItem> = s.object<RetrieveResponseItem>({
  imei: s.optional(s.string()),
  username: s.optional(s.string()),
  failure: s.optional(s.string()),
});
