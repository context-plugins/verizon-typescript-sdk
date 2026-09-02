import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountGroupShareThresholdSchema,
  type AccountGroupShareThreshold,
} from "./unions/account-group-share-threshold.js";

export type Notify = {
  alertType?: string;
  threshold?: AccountGroupShareThreshold[];
};

export const notifySchema: Schema<Notify> = s.object<Notify>({
  alertType: s.optional(s.string()),
  threshold: s.optional(s.array(s.lazy(() => accountGroupShareThresholdSchema))),
});
