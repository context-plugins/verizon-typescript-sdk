import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  etxMapMessageGeofenceGeometrySchema,
  type EtxMapMessageGeofenceGeometry,
} from "./etx-map-message-geofence-geometry.js";

/** GeoJSON Polygon geofence object. */
export type GeofencePolygon = {
  /** Type of the GeoJSON geometry, must be 'Polygon'. */
  type?: EtxMapMessageGeofenceGeometry;
  /**
   * Coordinates of the GeoJSON polygon. Rules for a valid GeoJSON Polygon:
   * - Must contain between 4 and 50 points.
   * - Must be an array of linear rings (arrays of positions).
   * - The first linear ring represents the outer boundary; subsequent rings would represent holes.
   *   Holes are not supported, so only one linear ring should be defined in a polygon.
   * - Each linear ring must have at least 4 positions, and the first and last positions must be
   *   identical to close the polygon ring.
   * - A linear ring must follow the right-hand rule with respect to the area it bounds: exterior
   *   rings (outer boundery) are counterclockwise.
   * - Each position is an array of two numbers: [longitude, latitude].
   * - Longitude and latitude values must be in decimal degrees.
   * - Longitude must be ranging from -180 to 180.
   * - Latitude must be ranging from -90 to 90.
   * - The polygon must not self-intersect.
   */
  coordinates?: number[][];
};

export const geofencePolygonSchema: Schema<GeofencePolygon> = s.object<GeofencePolygon>({
  type: s.optional(s.lazy(() => etxMapMessageGeofenceGeometrySchema)),
  coordinates: s.optional(s.array(s.array(s.float64()))),
});
