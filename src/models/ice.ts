import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type12Schema, type Type12 } from "./type12.js";

export type Ice = {
  type?: Type12;
};

export const iceSchema: Schema<Ice> = s.object<Ice>({
  type: s.optional(s.lazy(() => type12Schema)),
});
