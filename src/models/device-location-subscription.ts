import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceLocationSubscription = {
  accountName?: string;
  locType?: string;
  maxAllowance?: string;
  purchaseTime?: string;
};

export const deviceLocationSubscriptionSchema: Schema<DeviceLocationSubscription> =
  s.object<DeviceLocationSubscription>({
    accountName: s.optional(s.string()),
    locType: s.optional(s.string()),
    maxAllowance: s.optional(s.string()),
    purchaseTime: s.optional(s.string()),
  });
