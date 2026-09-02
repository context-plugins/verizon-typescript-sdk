import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProtocolVersion = {
  _2: 2,
} as const;
export type ProtocolVersion = (typeof ProtocolVersion)[keyof typeof ProtocolVersion] | (number & {});

export const protocolVersionSchema: EnumSchema<ProtocolVersion> = s.enumOf<ProtocolVersion>(ProtocolVersion);
