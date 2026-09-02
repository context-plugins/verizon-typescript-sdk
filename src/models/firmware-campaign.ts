import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

export type FirmwareCampaign = {
  id: string;
  accountName: string;
  campaignName?: string;
  firmwareName?: string;
  firmwareFrom: string;
  firmwareTo: string;
  protocol: string;
  make: string;
  model: string;
  startDate: string;
  endDate: string;
  campaignTimeWindowList?: V3TimeWindow[];
  status: string;
};

export const firmwareCampaignSchema: Schema<FirmwareCampaign> = s.object<FirmwareCampaign>({
  id: s.string(),
  accountName: s.string(),
  campaignName: s.optional(s.string()),
  firmwareName: s.optional(s.string()),
  firmwareFrom: s.string(),
  firmwareTo: s.string(),
  protocol: s.string(),
  make: s.string(),
  model: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
  status: s.string(),
});
