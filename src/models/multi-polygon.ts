import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";

/** A MultiPolygon is a type of geometry that represents a collection of Polygon geometries. */
export type MultiPolygon = {
  type: Type5;
  coordinates: number[][][][];
};

export const multiPolygonSchema: Schema<MultiPolygon> = s.object<MultiPolygon>({
  type: type5Schema,
  coordinates: s.array(s.array(s.array(s.array(s.float64())))),
});
