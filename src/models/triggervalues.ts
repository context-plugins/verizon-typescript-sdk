import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keysChunkSchema, type KeysChunk } from "./unions/keys-chunk.js";

export type Triggervalues = {
  triggerId?: string;
  triggerName?: string;
  accountName?: string;
  organizationName?: string;
  triggerCategory?: string;
  triggerAttributes?: KeysChunk[];
  createdAt?: Date;
  modifiedAt?: Date;
};

export const triggervaluesSchema: Schema<Triggervalues> = s.object<Triggervalues>({
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
  accountName: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  triggerCategory: s.optional(s.string()),
  triggerAttributes: s.optional(s.array(s.lazy(() => keysChunkSchema))),
  createdAt: s.optional(s.dateTime()),
  modifiedAt: s.optional(s.dateTime()),
});
