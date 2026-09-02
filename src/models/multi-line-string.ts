import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

export type MultiLineString = {
  type: Type4;
  coordinates: number[][][];
};

export const multiLineStringSchema: Schema<MultiLineString> = s.object<MultiLineString>({
  type: type4Schema,
  coordinates: s.array(s.array(s.array(s.number()))),
});
