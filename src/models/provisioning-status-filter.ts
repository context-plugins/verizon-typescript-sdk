import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProvisioningStatusFilter = {
  Unknown: "UNKNOWN",
  Deactivated: "DEACTIVATED",
  Activated: "ACTIVATED",
  Deactive: "DEACTIVE",
  Active: "ACTIVE",
  Suspend: "SUSPEND",
  PendingActivation: "PENDING_ACTIVATION",
  PendingDeactivation: "PENDING_DEACTIVATION",
  PreActive: "PRE_ACTIVE",
  ActivationReady: "ACTIVATION_READY",
  Inventory: "INVENTORY",
  Purged: "PURGED",
  Replaced: "REPLACED",
  Retired: "RETIRED",
  TestReady: "TEST_READY",
} as const;
export type ProvisioningStatusFilter =
  | (typeof ProvisioningStatusFilter)[keyof typeof ProvisioningStatusFilter]
  | (string & {});

export const provisioningStatusFilterSchema: EnumSchema<ProvisioningStatusFilter> =
  s.enumOf<ProvisioningStatusFilter>(ProvisioningStatusFilter);
