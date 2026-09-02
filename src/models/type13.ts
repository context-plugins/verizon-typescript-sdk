import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type13 = {
  Packed: "packed",
  Loose: "loose",
} as const;
export type Type13 = (typeof Type13)[keyof typeof Type13] | (string & {});

export const type13Schema: EnumSchema<Type13> = s.enumOf<Type13>(Type13);
