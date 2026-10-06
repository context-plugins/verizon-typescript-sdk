import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of asphalt or tar. */
export const Type7 = {
  NewSharp: "newSharp",
  Traveled: "traveled",
  TrafficPolished: "trafficPolished",
  ExcessTar: "excessTar",
} as const;
export type Type7 = (typeof Type7)[keyof typeof Type7] | (string & {});

export const type7Schema: EnumSchema<Type7> = s.enumOf<Type7>(Type7);
