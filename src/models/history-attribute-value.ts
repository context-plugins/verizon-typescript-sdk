import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeIdentifierSchema, type AttributeIdentifier } from "./attribute-identifier.js";

export type HistoryAttributeValue = {
  name?: AttributeIdentifier;
  value?: string;
  createdOn?: Date;
};

export const historyAttributeValueSchema: Schema<HistoryAttributeValue> = s.object<HistoryAttributeValue>({
  name: s.optional(s.lazy(() => attributeIdentifierSchema)),
  value: s.optional(s.string()),
  createdOn: s.optional(s.dateTime()),
});
