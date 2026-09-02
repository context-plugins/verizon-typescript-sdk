import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type10Schema, type Type10 } from "./type10.js";

export type Cinders = {
  type?: Type10;
};

export const cindersSchema: Schema<Cinders> = s.object<Cinders>({
  type: s.optional(s.lazy(() => type10Schema)),
});
