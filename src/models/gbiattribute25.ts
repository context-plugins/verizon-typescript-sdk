import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Gbiattribute25 = {
  key?: string;
  value?: string;
};

export const gbiattribute25Schema: Schema<Gbiattribute25> = s.object<Gbiattribute25>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});
