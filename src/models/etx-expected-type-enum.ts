import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EtxExpectedTypeEnum = {
  Base64: "BASE64",
  Json: "JSON",
} as const;
export type EtxExpectedTypeEnum =
  | (typeof EtxExpectedTypeEnum)[keyof typeof EtxExpectedTypeEnum]
  | (string & {});

export const etxExpectedTypeEnumSchema: EnumSchema<EtxExpectedTypeEnum> =
  s.enumOf<EtxExpectedTypeEnum>(EtxExpectedTypeEnum);
