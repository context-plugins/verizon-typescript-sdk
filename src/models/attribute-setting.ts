import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeIdentifierSchema, type AttributeIdentifier } from "./attribute-identifier.js";
import { numericalDataSchema, type NumericalData } from "./numerical-data.js";

export type AttributeSetting = {
  name?: AttributeIdentifier;
  value?: string;
  createdOn?: Date;
  isObservable?: boolean;
  isObserving?: boolean;
  frequency?: NumericalData;
};

export const attributeSettingSchema: Schema<AttributeSetting> = s.object<AttributeSetting>({
  name: s.optional(s.lazy(() => attributeIdentifierSchema)),
  value: s.optional(s.string()),
  createdOn: s.optional(s.dateTime()),
  isObservable: s.optional(s.boolean()),
  isObserving: s.optional(s.boolean()),
  frequency: s.optional(s.lazy(() => numericalDataSchema)),
});
