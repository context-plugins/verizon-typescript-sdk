import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Carrier = {
  carriers?: string;
};

export const carrierSchema: Schema<Carrier> = s.object<Carrier>({
  carriers: s.optional(s.string()),
});
