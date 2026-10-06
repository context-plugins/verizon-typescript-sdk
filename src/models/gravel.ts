import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type8Schema, type Type8 } from "./type8.js";

/** Indicates the surface of the roadway is gravel. */
export type Gravel = {
  /** Indicates the type of gravel. */
  type?: Type8;
};

export const gravelSchema: Schema<Gravel> = s.object<Gravel>({
  type: s.optional(s.lazy(() => type8Schema)),
});
