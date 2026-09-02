import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { featureItemSchema, type FeatureItem } from "./feature-item.js";
import { typeSchema, type Type } from "./type.js";

export type GeoFence = {
  type: Type;
  features: FeatureItem[];
};

export const geoFenceSchema: Schema<GeoFence> = s.object<GeoFence>({
  type: typeSchema,
  features: s.array(s.lazy(() => featureItemSchema)),
});
