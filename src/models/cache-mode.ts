import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CacheMode = {
  _0: "0",
  _1: "1",
  _2: "2",
} as const;
export type CacheMode = (typeof CacheMode)[keyof typeof CacheMode] | (string & {});

export const cacheModeSchema: EnumSchema<CacheMode> = s.enumOf<CacheMode>(CacheMode);
