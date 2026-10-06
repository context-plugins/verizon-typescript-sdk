import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { featureItemSchema, type FeatureItem } from "./feature-item.js";
import { typeSchema, type Type } from "./type.js";

/**
 * The GeoJSON representation of geofence. Geofence supports the following geometry types:
 * LineString, Polygon, MultiLineString, and MultiPolygon. The system only supports a single Feature
 * in the FeatureCollection, so only one Line, Polygon, MultiLine or MultiPolygon can be defined
 * within one Geofencing configuration.
 */
export type GeoFence = {
  type: Type;
  features: FeatureItem[];
};

export const geoFenceSchema: Schema<GeoFence> = s.object<GeoFence>({
  type: typeSchema,
  features: s.array(s.lazy(() => featureItemSchema)),
});
