import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HyperPreciseLocationFault = {
  code?: string;
  message?: string;
  description?: string;
};

export const hyperPreciseLocationFaultSchema: Schema<HyperPreciseLocationFault> =
  s.object<HyperPreciseLocationFault>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    description: s.optional(s.string()),
  });
