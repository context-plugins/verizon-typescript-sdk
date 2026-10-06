import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  etxMapMessageGeoJsonPolygonSchema,
  type EtxMapMessageGeoJsonPolygon,
} from "../etx-map-message-geo-json-polygon.js";
import {
  etxMapMessageIntersectionCoordinatesSchema,
  type EtxMapMessageIntersectionCoordinates,
} from "../etx-map-message-intersection-coordinates.js";

/**
 * Request structure for querying MAP records. Provide either regionIntersectionPairs (coordinates)
 * or geoJson, not both.
 */
export type MapDataQueryRequest = EtxMapMessageIntersectionCoordinates | EtxMapMessageGeoJsonPolygon;

export const mapDataQueryRequestSchema: Schema<MapDataQueryRequest> = s.of<MapDataQueryRequest>(
  s.union([
    s.lazy(() => etxMapMessageIntersectionCoordinatesSchema),
    s.lazy(() => etxMapMessageGeoJsonPolygonSchema),
  ]),
);
