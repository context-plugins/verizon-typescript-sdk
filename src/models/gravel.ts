import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

export type Gravel = {
  type?: Type8;
};

export const gravelSchema: Schema<Gravel> = s.object<Gravel>({
  type: s.optional(s.lazy(() => type8Schema)),
});
