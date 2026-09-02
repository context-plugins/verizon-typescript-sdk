import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Comparitor = {
  Gt: "gt",
  Lt: "lt",
  Eq: "eq",
} as const;
export type Comparitor = (typeof Comparitor)[keyof typeof Comparitor] | (string & {});

export const comparitorSchema: EnumSchema<Comparitor> = s.enumOf<Comparitor>(Comparitor);
