import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageStandard = {
  Etsi: "etsi",
  Sae: "sae",
} as const;
export type MessageStandard = (typeof MessageStandard)[keyof typeof MessageStandard] | (string & {});

export const messageStandardSchema: EnumSchema<MessageStandard> = s.enumOf<MessageStandard>(MessageStandard);
