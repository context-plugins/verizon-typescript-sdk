import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { numericalDataSchema, type NumericalData } from "./numerical-data.js";
import {
  observationRequestAttributeSchema,
  type ObservationRequestAttribute,
} from "./observation-request-attribute.js";

export type ObservationRequest = {
  accountName: string;
  devices: Device[];
  attributes: ObservationRequestAttribute[];
  frequency?: NumericalData;
  duration?: NumericalData;
};

export const observationRequestSchema: Schema<ObservationRequest> = s.object<ObservationRequest>({
  accountName: s.string(),
  devices: s.array(s.lazy(() => deviceSchema)),
  attributes: s.array(s.lazy(() => observationRequestAttributeSchema)),
  frequency: s.optional(s.lazy(() => numericalDataSchema)),
  duration: s.optional(s.lazy(() => numericalDataSchema)),
});
