import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingCycleSchema, type BillingCycle } from "./billing-cycle.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";
import { labelsListSchema, type LabelsList } from "./labels-list.js";

export type BilledusageListRequest = {
  accountName: string;
  labels?: LabelsList;
  deviceIds?: DeviceList[];
  billingCycle?: BillingCycle;
};

export const billedusageListRequestSchema: Schema<BilledusageListRequest> = s.object<BilledusageListRequest>({
  accountName: s.string(),
  labels: s.optional(s.lazy(() => labelsListSchema)),
  deviceIds: s.optional(s.array(s.lazy(() => deviceListSchema))),
  billingCycle: s.optional(s.lazy(() => billingCycleSchema)),
});
