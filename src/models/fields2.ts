import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Fields2 = {
  temperature?: string;
};

export const fields2Schema: Schema<Fields2> = s.object<Fields2>({
  temperature: s.optional(s.string()),
});
