import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * V2X messaging standard selection. Accepted values are 'sae' (SAE J2735) and 'etsi' (ETSI TS 103
 * 301).
 */
export const EtxMessageStandardEnum = {
  Etsi: "etsi",
  Sae: "sae",
} as const;
export type EtxMessageStandardEnum =
  | (typeof EtxMessageStandardEnum)[keyof typeof EtxMessageStandardEnum]
  | (string & {});

export const etxMessageStandardEnumSchema: EnumSchema<EtxMessageStandardEnum> =
  s.enumOf<EtxMessageStandardEnum>(EtxMessageStandardEnum);
