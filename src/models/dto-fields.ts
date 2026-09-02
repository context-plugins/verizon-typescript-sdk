import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoFields = {
  additionalProp1?: string;
  additionalProp2?: string;
  additionalProp3?: string;
};

export const dtoFieldsSchema: Schema<DtoFields> = s.object<DtoFields>({
  additionalProp1: s.optional(s.string()),
  additionalProp2: s.optional(s.string()),
  additionalProp3: s.optional(s.string()),
});
