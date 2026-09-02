import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallbackRegistrationRequest = {
  accountName: string;
  serviceName: string;
  endpoint: string;
  httpHeaders?: Record<string, unknown>;
};

export const callbackRegistrationRequestSchema: Schema<CallbackRegistrationRequest> =
  s.object<CallbackRegistrationRequest>({
    accountName: s.string(),
    serviceName: s.string(),
    endpoint: s.string(),
    httpHeaders: s.optional(s.record(s.string(), s.unknown())),
  });
