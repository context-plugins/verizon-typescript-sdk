import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Array of software upgrade objects with the specified status. */
export type DeviceSoftwareUpgrade = {
  /** Device identifier. */
  deviceId: string;
  /** Upgrade identifier. */
  id: string;
  /** Account identifier. */
  accountName: string;
  /** Software name. */
  softwareName?: string;
  /** Software upgrade start date. */
  startDate: string;
  /** Software upgrade status. */
  status: string;
  /** Software upgrade result reason. */
  reason: string;
};

export const deviceSoftwareUpgradeSchema: Schema<DeviceSoftwareUpgrade> = s.object<DeviceSoftwareUpgrade>({
  deviceId: s.string(),
  id: s.string(),
  accountName: s.string(),
  softwareName: s.optional(s.string()),
  startDate: s.dateOnly(),
  status: s.string(),
  reason: s.string(),
});
