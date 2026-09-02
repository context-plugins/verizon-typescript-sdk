import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { lineStringSchema, type LineString } from "../line-string.js";
import { multiLineStringSchema, type MultiLineString } from "../multi-line-string.js";
import { multiPolygonSchema, type MultiPolygon } from "../multi-polygon.js";
import { polygonSchema, type Polygon } from "../polygon.js";

export type Geometry = LineString | Polygon | MultiLineString | MultiPolygon;

export const geometrySchema: Schema<Geometry> = s.of<Geometry>(
  s.union([
    s.lazy(() => lineStringSchema),
    s.lazy(() => polygonSchema),
    s.lazy(() => multiLineStringSchema),
    s.lazy(() => multiPolygonSchema),
  ]),
);
