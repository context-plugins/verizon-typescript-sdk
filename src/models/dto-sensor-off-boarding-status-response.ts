import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoSensorBoardingEventSchema, type DtoSensorBoardingEvent } from "./dto-sensor-boarding-event.js";

export type DtoSensorOffBoardingStatusResponse = {
  events?: DtoSensorBoardingEvent[];
  isstillregistered?: boolean;
};

export const dtoSensorOffBoardingStatusResponseSchema: Schema<DtoSensorOffBoardingStatusResponse> =
  s.object<DtoSensorOffBoardingStatusResponse>({
    events: s.optional(s.array(s.lazy(() => dtoSensorBoardingEventSchema))),
    isstillregistered: s.optional(s.boolean()),
  });
