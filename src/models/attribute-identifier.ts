import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AttributeIdentifier = {
  NetworkBearer: "NETWORK_BEARER",
  RadioSignalStrength: "RADIO_SIGNAL_STRENGTH",
  LinkQuality: "LINK_QUALITY",
  CellId: "CELL_ID",
  Manufacturer: "MANUFACTURER",
} as const;
export type AttributeIdentifier =
  | (typeof AttributeIdentifier)[keyof typeof AttributeIdentifier]
  | (string & {});

export const attributeIdentifierSchema: EnumSchema<AttributeIdentifier> =
  s.enumOf<AttributeIdentifier>(AttributeIdentifier);
