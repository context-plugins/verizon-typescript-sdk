import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Fault occurred while responding. */
export type HyperPreciseLocationFault = {
  /** Hyper precise location fault code. */
  code?: string;
  /** Hyper precise location fault message. */
  message?: string;
  /** Hyper precise location fault description. */
  description?: string;
};

export const hyperPreciseLocationFaultSchema: Schema<HyperPreciseLocationFault> =
  s.object<HyperPreciseLocationFault>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    description: s.optional(s.string()),
  });
