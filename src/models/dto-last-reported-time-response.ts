import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceEventSchema, type ResourceEvent } from "./resource-event.js";

export type DtoLastReportedTimeResponse = {
  event?: ResourceEvent;
  timestamp?: string;
};

export const dtoLastReportedTimeResponseSchema: Schema<DtoLastReportedTimeResponse> =
  s.object<DtoLastReportedTimeResponse>({
    event: s.optional(s.lazy(() => resourceEventSchema)),
    timestamp: s.optional(s.string()),
  });
