import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CarrierInformation = {
  carrierName?: string;
  servicePlan?: string;
  state?: string;
};

export const carrierInformationSchema: Schema<CarrierInformation> = s.object<CarrierInformation>({
  carrierName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  state: s.optional(s.string()),
});
