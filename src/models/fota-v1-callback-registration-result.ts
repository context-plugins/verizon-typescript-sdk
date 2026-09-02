import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV1CallbackRegistrationResult = {
  accountName?: string;
  serviceName?: string;
};

export const fotaV1CallbackRegistrationResultSchema: Schema<FotaV1CallbackRegistrationResult> =
  s.object<FotaV1CallbackRegistrationResult>({
    accountName: s.optional(s.string()),
    serviceName: s.optional(s.string()),
  });
