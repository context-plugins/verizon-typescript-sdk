import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseCodeSchema, type ErrorResponseCode } from "./error-response-code.js";
import {
  hyperPreciseLocationFaultSchema,
  type HyperPreciseLocationFault,
} from "./hyper-precise-location-fault.js";

export type HyperPreciseLocationResult = {
  responseCode?: ErrorResponseCode;
  message?: string;
  fault?: HyperPreciseLocationFault;
};

export const hyperPreciseLocationResultSchema: Schema<HyperPreciseLocationResult> =
  s.object<HyperPreciseLocationResult>({
    responseCode: s.optional(s.lazy(() => errorResponseCodeSchema)),
    message: s.optional(s.string()),
    fault: s.optional(s.lazy(() => hyperPreciseLocationFaultSchema)),
  });
