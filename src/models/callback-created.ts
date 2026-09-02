import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallbackCreated = {
  accountName: string;
  name: string;
  url?: string;
};

export const callbackCreatedSchema: Schema<CallbackCreated> = s.object<CallbackCreated>({
  accountName: s.string(),
  name: s.string(),
  url: s.optional(s.string()),
});
