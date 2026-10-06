import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type6, type6Schema } from "./type6.js";

/** Indicates the surface of the roadway is portland cement. */
export type PortlandCement = {
  /** Indicates the type of portland cement. @default Type6.Traveled */
  type?: Type6;
};

export const portlandCementSchema: Schema<PortlandCement> = s.object<PortlandCement>({
  type: s.defaulted(type6Schema, Type6.Traveled),
});
