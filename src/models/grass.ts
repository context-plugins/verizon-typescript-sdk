import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type9Schema, type Type9 } from "./type9.js";

/** Indicates the surface of the roadway is grass. */
export type Grass = {
  /** Indicates the surface of the roadway is grass with low speed limit. */
  type?: Type9;
};

export const grassSchema: Schema<Grass> = s.object<Grass>({
  type: s.optional(s.lazy(() => type9Schema)),
});
