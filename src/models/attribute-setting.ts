import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributeIdentifierSchema, type AttributeIdentifier } from "./attribute-identifier.js";
import { numericalDataSchema, type NumericalData } from "./numerical-data.js";

/**
 * Describes an attribute being observed and the frequency with which the attribute is being
 * observed.
 */
export type AttributeSetting = {
  /** Attribute identifier. */
  name?: AttributeIdentifier;
  /** Attribute value. */
  value?: string;
  /** Date and time request was created. */
  createdOn?: Date;
  /** Is the attribute observable? */
  isObservable?: boolean;
  /** Is the attribute being observed? */
  isObserving?: boolean;
  /** Describes value and unit of time. */
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
