import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Offboarding = {
  /**
   * the IEEE EUI64 address space used to identify a device. It is supplied by the device
   * manufacturer
   */
  sensoridentifier?: string;
};

export const offboardingSchema: Schema<Offboarding> = s.object<Offboarding>({
  sensoridentifier: s.optional(s.string()),
});
