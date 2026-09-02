import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrafficConditionCauseCode = {
  trafficCondition1: number;
};

export const trafficConditionCauseCodeSchema: Schema<TrafficConditionCauseCode> =
  s.object<TrafficConditionCauseCode>({
    trafficCondition1: s.number(),
  });
