import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

/** Firmware upgrade information. */
export type FirmwareCampaign = {
  /** Upgrade identifier. */
  id: string;
  /** Account identifier. */
  accountName: string;
  /** Campaign name. */
  campaignName?: string;
  /** Firmware name (for firmware upgrade only). */
  firmwareName?: string;
  /** Old firmware version (for firmware upgrade only). */
  firmwareFrom: string;
  /** New firmware version (for firmware upgrade only). */
  firmwareTo: string;
  /** Available values: LWM2M. @default "LWM2M" */
  protocol?: string;
  make: string;
  model: string;
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /** List of allowed campaign time windows. */
  campaignTimeWindowList?: V3TimeWindow[];
  /** Campaign status. */
  status: string;
};

export const firmwareCampaignSchema: Schema<FirmwareCampaign> = s.object<FirmwareCampaign>({
  id: s.string(),
  accountName: s.string(),
  campaignName: s.optional(s.string()),
  firmwareName: s.optional(s.string()),
  firmwareFrom: s.string(),
  firmwareTo: s.string(),
  protocol: s.defaulted(s.string(), "LWM2M"),
  make: s.string(),
  model: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
  status: s.string(),
});
