import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type10Schema, type Type10 } from "./type10.js";

/** Indicates the surface of the roadway is cinders. */
export type Cinders = {
  /** Indicates the type of cinders. */
  type?: Type10;
};

export const cindersSchema: Schema<Cinders> = s.object<Cinders>({
  type: s.optional(s.lazy(() => type10Schema)),
});
