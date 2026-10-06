import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

/** Firmware upgrade for devices. */
export type CampaignFirmwareUpgrade = {
  /** Campaign name. */
  campaignName?: string;
  /** Firmware name to upgrade to. */
  firmwareName: string;
  /** Old firmware version. */
  firmwareFrom: string;
  /** New firmware version. */
  firmwareTo: string;
  /** Valid values include: LWM2M, OMA and HTTP. @default "LWM2M" */
  protocol?: string;
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /** List of allowed campaign time windows. */
  campaignTimeWindowList?: V3TimeWindow[];
  /** Device IMEI list. */
  deviceList: string[];
  /**
   * This flag, when set to true, will assign a FOTA license automatically if the device does not
   * have one already.
   */
  autoAssignLicenseFlag: boolean;
  /**
   * this flag, when set to true, will automatically add a device of the same make and model to a
   * campaign.
   */
  autoAddDevicesFlag: boolean;
};

export const campaignFirmwareUpgradeSchema: Schema<CampaignFirmwareUpgrade> =
  s.object<CampaignFirmwareUpgrade>({
    campaignName: s.optional(s.string()),
    firmwareName: s.string(),
    firmwareFrom: s.string(),
    firmwareTo: s.string(),
    protocol: s.defaulted(s.string(), "LWM2M"),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
    deviceList: s.array(s.string()),
    autoAssignLicenseFlag: s.boolean(),
    autoAddDevicesFlag: s.boolean(),
  });
