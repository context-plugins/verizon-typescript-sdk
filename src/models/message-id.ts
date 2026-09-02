import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageId = {
  _1: 1,
} as const;
export type MessageId = (typeof MessageId)[keyof typeof MessageId] | (number & {});

export const messageIdSchema: EnumSchema<MessageId> = s.enumOf<MessageId>(MessageId);
