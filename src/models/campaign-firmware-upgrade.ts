import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

export type CampaignFirmwareUpgrade = {
  campaignName?: string;
  firmwareName: string;
  firmwareFrom: string;
  firmwareTo: string;
  protocol: string;
  startDate: string;
  endDate: string;
  campaignTimeWindowList?: V3TimeWindow[];
  deviceList: string[];
  autoAssignLicenseFlag: boolean;
  autoAddDevicesFlag: boolean;
};

export const campaignFirmwareUpgradeSchema: Schema<CampaignFirmwareUpgrade> =
  s.object<CampaignFirmwareUpgrade>({
    campaignName: s.optional(s.string()),
    firmwareName: s.string(),
    firmwareFrom: s.string(),
    firmwareTo: s.string(),
    protocol: s.string(),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
    deviceList: s.array(s.string()),
    autoAssignLicenseFlag: s.boolean(),
    autoAddDevicesFlag: s.boolean(),
  });
