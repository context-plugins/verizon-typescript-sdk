import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Feature = {
  features?: string;
};

export const featureSchema: Schema<Feature> = s.object<Feature>({
  features: s.optional(s.string()),
});
