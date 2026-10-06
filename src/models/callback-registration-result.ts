import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callbackServiceNameSchema, type CallbackServiceName } from "./callback-service-name.js";

export type CallbackRegistrationResult = {
  /** The name of the account that registered the callback URL. */
  account?: string;
  /** The name of the callback service. */
  name?: CallbackServiceName;
};

export const callbackRegistrationResultSchema: Schema<CallbackRegistrationResult> =
  s.object<CallbackRegistrationResult>({
    account: s.optional(s.string()),
    name: s.optional(s.lazy(() => callbackServiceNameSchema)),
  });
