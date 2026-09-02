import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";
import { geometrySchema, type Geometry } from "./unions/geometry.js";

export type FeatureItem = {
  type: Type1;
  geometry: Geometry;
  properties: Record<string, unknown>;
};

export const featureItemSchema: Schema<FeatureItem> = s.object<FeatureItem>({
  type: type1Schema,
  geometry: geometrySchema,
  properties: s.record(s.string(), s.unknown()),
});
