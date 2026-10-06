import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeIdentifierSchema, type AttributeIdentifier } from "./attribute-identifier.js";

/** Streaming RF parameter for which you want to retrieve history data. */
export type HistoryAttributeValue = {
  /** Attribute identifier. */
  name?: AttributeIdentifier;
  /** Attribute value. */
  value?: string;
  /** Date and time the request was created. */
  createdOn?: Date;
};

export const historyAttributeValueSchema: Schema<HistoryAttributeValue> = s.object<HistoryAttributeValue>({
  name: s.optional(s.lazy(() => attributeIdentifierSchema)),
  value: s.optional(s.string()),
  createdOn: s.optional(s.dateTime()),
});
