import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type11Schema, type Type11 } from "./type11.js";

export type Rock = {
  type?: Type11;
};

export const rockSchema: Schema<Rock> = s.object<Rock>({
  type: s.optional(s.lazy(() => type11Schema)),
});
