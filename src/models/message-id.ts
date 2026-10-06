import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of ITIS message (typically 1 for DENM). */
export const MessageId = {
  /** Value 1 — identifies the message as a DENM */
  _1: 1,
} as const;
export type MessageId = (typeof MessageId)[keyof typeof MessageId] | (number & {});

export const messageIdSchema: EnumSchema<MessageId> = s.enumOf<MessageId>(MessageId);
