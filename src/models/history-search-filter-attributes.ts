import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeIdentifierSchema, type AttributeIdentifier } from "./attribute-identifier.js";

export type HistorySearchFilterAttributes = {
  name?: AttributeIdentifier;
};

export const historySearchFilterAttributesSchema: Schema<HistorySearchFilterAttributes> =
  s.object<HistorySearchFilterAttributes>({
    name: s.optional(s.lazy(() => attributeIdentifierSchema)),
  });
