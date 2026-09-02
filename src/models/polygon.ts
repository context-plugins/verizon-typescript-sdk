import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type Polygon = {
  type: Type3;
  coordinates: number[][][];
};

export const polygonSchema: Schema<Polygon> = s.object<Polygon>({
  type: type3Schema,
  coordinates: s.array(s.array(s.array(s.number()))),
});
