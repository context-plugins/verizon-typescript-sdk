import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenerateExternalIdResult = {
  externalid?: string;
};

export const generateExternalIdResultSchema: Schema<GenerateExternalIdResult> =
  s.object<GenerateExternalIdResult>({
    externalid: s.optional(s.string()),
  });
