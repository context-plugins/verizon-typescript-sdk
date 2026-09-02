import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisteredCallbacks = {
  aname?: string;
  name?: string;
  url?: string;
  username?: string;
  password?: string;
};

export const registeredCallbacksSchema: Schema<RegisteredCallbacks> = s.object<RegisteredCallbacks>({
  aname: s.optional(s.string()),
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
});
