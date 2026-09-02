import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Onboarding = {
  sensoridentifier?: string;
};

export const onboardingSchema: Schema<Onboarding> = s.object<Onboarding>({
  sensoridentifier: s.optional(s.string()),
});
