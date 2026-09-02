import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Gbiattribute15 = {
  key?: string;
};

export const gbiattribute15Schema: Schema<Gbiattribute15> = s.object<Gbiattribute15>({
  key: s.optional(s.string()),
});
