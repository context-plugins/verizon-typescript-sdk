import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Configuration = {
  frequency?: string;
};

export const configurationSchema: Schema<Configuration> = s.object<Configuration>({
  frequency: s.optional(s.string()),
});
