import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Active = {
  True: "true",
  False: "false",
} as const;
export type Active = (typeof Active)[keyof typeof Active] | (string & {});

export const activeSchema: EnumSchema<Active> = s.enumOf<Active>(Active);
