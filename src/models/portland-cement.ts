import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type6Schema, type Type6 } from "./type6.js";

export type PortlandCement = {
  type?: Type6;
};

export const portlandCementSchema: Schema<PortlandCement> = s.object<PortlandCement>({
  type: s.optional(s.lazy(() => type6Schema)),
});
