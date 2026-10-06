import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { numericalDataSchema, type NumericalData } from "./numerical-data.js";
import {
  observationRequestAttributeSchema,
  type ObservationRequestAttribute,
} from "./observation-request-attribute.js";

/**
 * Used to define callbacks including the device identity, the attribute names, corresponding
 * attribute values and the date/timestamp of when the observation was made.
 */
export type ObservationRequest = {
  /** Account identifier in "##########-#####". */
  accountName: string;
  /** List of devices. */
  devices: Device[];
  /** Attributes are streaming RF parameters that you want to observe. */
  attributes: ObservationRequestAttribute[];
  /** Describes value and unit of time. */
  frequency?: NumericalData;
  /** Describes value and unit of time. */
  duration?: NumericalData;
};

export const observationRequestSchema: Schema<ObservationRequest> = s.object<ObservationRequest>({
  accountName: s.string(),
  devices: s.array(s.lazy(() => deviceSchema)),
  attributes: s.array(s.lazy(() => observationRequestAttributeSchema)),
  frequency: s.optional(s.lazy(() => numericalDataSchema)),
  duration: s.optional(s.lazy(() => numericalDataSchema)),
});
