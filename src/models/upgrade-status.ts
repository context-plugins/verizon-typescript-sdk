import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UpgradeStatus = {
  RequestPending: "RequestPending",
  Queued: "Queued",
  RequestFailed: "RequestFailed",
  InProgress: "InProgress",
  Finished: "Finished",
  UpgradeFailed: "UpgradeFailed",
} as const;
export type UpgradeStatus = (typeof UpgradeStatus)[keyof typeof UpgradeStatus] | (string & {});

export const upgradeStatusSchema: EnumSchema<UpgradeStatus> = s.enumOf<UpgradeStatus>(UpgradeStatus);
