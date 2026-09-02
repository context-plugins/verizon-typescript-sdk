import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callbackServiceNameSchema, type CallbackServiceName } from "./callback-service-name.js";

export type CallbackRegistrationResult = {
  account?: string;
  name?: CallbackServiceName;
};

export const callbackRegistrationResultSchema: Schema<CallbackRegistrationResult> =
  s.object<CallbackRegistrationResult>({
    account: s.optional(s.string()),
    name: s.optional(s.lazy(() => callbackServiceNameSchema)),
  });
