import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetPwnPerformanceConsentResponse = {
  consent?: string;
};

export const getPwnPerformanceConsentResponseSchema: Schema<GetPwnPerformanceConsentResponse> =
  s.object<GetPwnPerformanceConsentResponse>({
    consent: s.optional(s.string()),
  });
