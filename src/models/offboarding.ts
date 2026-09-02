import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Offboarding = {
  sensoridentifier?: string;
};

export const offboardingSchema: Schema<Offboarding> = s.object<Offboarding>({
  sensoridentifier: s.optional(s.string()),
});
