import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbideviceId15 = {
  id?: string;
  kind?: string;
};

export const gbideviceId15Schema: Schema<GbideviceId15> = s.object<GbideviceId15>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
