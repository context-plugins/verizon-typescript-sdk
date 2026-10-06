import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the carrier. */
export type CarrierInformation = {
  /**
   * The carrier that will perform the activation. This parameter is only required if you have more
   * than one carrier.
   */
  carrierName?: string;
  /** The service plan code that is assigned to the device. */
  servicePlan?: string;
  /** The device state. Valid values include: Activate, Suspend, Deactive, Pre-active. */
  state?: string;
};

export const carrierInformationSchema: Schema<CarrierInformation> = s.object<CarrierInformation>({
  carrierName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  state: s.optional(s.string()),
});
