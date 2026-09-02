import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallbackRegistered = {
  accountName: string;
  name: string;
};

export const callbackRegisteredSchema: Schema<CallbackRegistered> = s.object<CallbackRegistered>({
  accountName: s.string(),
  name: s.string(),
});
