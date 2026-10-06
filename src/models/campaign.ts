import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

/** Firmware upgrade information. */
export type Campaign = {
  /** Upgrade identifier. */
  id: string;
  /** Account identifier. */
  accountName: string;
  /** Campaign name. */
  campaignName?: string;
  /** Name of firmware. */
  firmwareName?: string;
  /** Old firmware version. */
  firmwareFrom?: string;
  /** New firmware version. */
  firmwareTo?: string;
  /** The protocol of the firmware distribution. Default: LWM2M. @default "LWM2M" */
  protocol?: string;
  /** Applicable make. */
  make: string;
  /** Applicable model. */
  model: string;
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /** List of allowed campaign time windows. */
  campaignTimeWindowList?: V3TimeWindow[];
  /** Firmware upgrade status. */
  status: string;
  /**
   * Any device included in the device list which does not have a license will automatically be
   * assigned a FOTA license, assuming there are enough FOTA licenses available, when set to true.
   */
  autoAssignLicenseFlag: boolean;
  /**
   * Beyond the devices included on the device list, any other device(s) which matches the
   * eligibility criteria (same make, model, current firmware, protocol, billing account) will
   * automatically be added to the campaign list during the life of the campaign when set to true.
   */
  autoAddDevicesFlag: boolean;
};

export const campaignSchema: Schema<Campaign> = s.object<Campaign>({
  id: s.string(),
  accountName: s.string(),
  campaignName: s.optional(s.string()),
  firmwareName: s.optional(s.string()),
  firmwareFrom: s.optional(s.string()),
  firmwareTo: s.optional(s.string()),
  protocol: s.defaulted(s.string(), "LWM2M"),
  make: s.string(),
  model: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
  status: s.string(),
  autoAssignLicenseFlag: s.boolean(),
  autoAddDevicesFlag: s.boolean(),
});
