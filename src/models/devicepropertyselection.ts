import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Devicepropertyselection = {
  modelid?: string;
};

export const devicepropertyselectionSchema: Schema<Devicepropertyselection> =
  s.object<Devicepropertyselection>({
    modelid: s.optional(s.string()),
  });
