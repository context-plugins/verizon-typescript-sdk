import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Success = {
  status?: string;
};

export const successSchema: Schema<Success> = s.object<Success>({
  status: s.optional(s.string()),
});
