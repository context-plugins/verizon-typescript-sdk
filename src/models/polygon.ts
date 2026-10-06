import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

/**
 * A Polygon is a type of geometry that represents a collection of points that form a closed ring.
 *
 * NOTE: This API only supports a single polygon in the Polygon geometry, so holes cannot be defines
 * at this point. Support for hole will be added in future releases.
 */
export type Polygon = {
  type: Type3;
  coordinates: number[][][];
};

export const polygonSchema: Schema<Polygon> = s.object<Polygon>({
  type: type3Schema,
  coordinates: s.array(s.array(s.array(s.float64()))),
});
