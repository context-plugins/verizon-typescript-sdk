import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NetworkType = {
  Vz: "VZ",
  NonVz: "non-VZ",
} as const;
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType] | (string & {});

export const networkTypeSchema: EnumSchema<NetworkType> = s.enumOf<NetworkType>(NetworkType);
