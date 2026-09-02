import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type LineString = {
  type: Type2;
  coordinates: number[][];
};

export const lineStringSchema: Schema<LineString> = s.object<LineString>({
  type: type2Schema,
  coordinates: s.array(s.array(s.number())),
});
