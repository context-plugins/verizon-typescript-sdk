import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

export type Campaign = {
  id: string;
  accountName: string;
  campaignName?: string;
  firmwareName?: string;
  firmwareFrom?: string;
  firmwareTo?: string;
  protocol: string;
  make: string;
  model: string;
  startDate: string;
  endDate: string;
  campaignTimeWindowList?: V3TimeWindow[];
  status: string;
  autoAssignLicenseFlag: boolean;
  autoAddDevicesFlag: boolean;
};

export const campaignSchema: Schema<Campaign> = s.object<Campaign>({
  id: s.string(),
  accountName: s.string(),
  campaignName: s.optional(s.string()),
  firmwareName: s.optional(s.string()),
  firmwareFrom: s.optional(s.string()),
  firmwareTo: s.optional(s.string()),
  protocol: s.string(),
  make: s.string(),
  model: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
  status: s.string(),
  autoAssignLicenseFlag: s.boolean(),
  autoAddDevicesFlag: s.boolean(),
});
