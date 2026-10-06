import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A new external ID. */
export type GenerateExternalIdResult = {
  /** Newly created security string. */
  externalid?: string;
};

export const generateExternalIdResultSchema: Schema<GenerateExternalIdResult> =
  s.object<GenerateExternalIdResult>({
    externalid: s.optional(s.string()),
  });
