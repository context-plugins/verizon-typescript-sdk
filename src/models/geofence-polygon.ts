import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  etxMapMessageGeofenceGeometrySchema,
  type EtxMapMessageGeofenceGeometry,
} from "./etx-map-message-geofence-geometry.js";

export type GeofencePolygon = {
  type?: EtxMapMessageGeofenceGeometry;
  coordinates?: number[][];
};

export const geofencePolygonSchema: Schema<GeofencePolygon> = s.object<GeofencePolygon>({
  type: s.optional(s.lazy(() => etxMapMessageGeofenceGeometrySchema)),
  coordinates: s.optional(s.array(s.array(s.number()))),
});
