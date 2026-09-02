import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeIdentifierSchema, type AttributeIdentifier } from "./attribute-identifier.js";

export type ObservationRequestAttribute = {
  name?: AttributeIdentifier;
};

export const observationRequestAttributeSchema: Schema<ObservationRequestAttribute> =
  s.object<ObservationRequestAttribute>({
    name: s.optional(s.lazy(() => attributeIdentifierSchema)),
  });
