import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoSensorBoardingEventSchema, type DtoSensorBoardingEvent } from "./dto-sensor-boarding-event.js";

export type DtoSensorOnBoardingStatusResponse = {
  events?: DtoSensorBoardingEvent[];
};

export const dtoSensorOnBoardingStatusResponseSchema: Schema<DtoSensorOnBoardingStatusResponse> =
  s.object<DtoSensorOnBoardingStatusResponse>({
    events: s.optional(s.array(s.lazy(() => dtoSensorBoardingEventSchema))),
  });
