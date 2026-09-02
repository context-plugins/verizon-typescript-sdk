import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EtxMessageStandardEnum = {
  Etsi: "etsi",
  Sae: "sae",
} as const;
export type EtxMessageStandardEnum =
  | (typeof EtxMessageStandardEnum)[keyof typeof EtxMessageStandardEnum]
  | (string & {});

export const etxMessageStandardEnumSchema: EnumSchema<EtxMessageStandardEnum> =
  s.enumOf<EtxMessageStandardEnum>(EtxMessageStandardEnum);
