import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** PWN Performance Consent Response */
export type GetPwnPerformanceConsentResponse = {
  /** PWN Performance Consent Response. */
  consent?: string;
};

export const getPwnPerformanceConsentResponseSchema: Schema<GetPwnPerformanceConsentResponse> =
  s.object<GetPwnPerformanceConsentResponse>({
    consent: s.optional(s.string()),
  });
