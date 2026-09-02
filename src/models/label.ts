import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Label = {
  name?: string;
  value?: string;
};

export const labelSchema: Schema<Label> = s.object<Label>({
  name: s.optional(s.string()),
  value: s.optional(s.string()),
});
