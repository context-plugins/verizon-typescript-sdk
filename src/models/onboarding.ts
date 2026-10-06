import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Onboarding = {
  /**
   * the IEEE EUI64 address space used to identify a device. It is supplied by the device
   * manufacturer
   */
  sensoridentifier?: string;
};

export const onboardingSchema: Schema<Onboarding> = s.object<Onboarding>({
  sensoridentifier: s.optional(s.string()),
});
