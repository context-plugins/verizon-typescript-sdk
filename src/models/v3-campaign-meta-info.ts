import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  campaignMetaInfoProtocolSchema,
  type CampaignMetaInfoProtocol,
} from "./campaign-meta-info-protocol.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

export type V3CampaignMetaInfo = {
  accountName: string;
  id: string;
  campaignName?: string;
  firmwareName?: string;
  firmwareFrom?: string;
  firmwareTo?: string;
  protocol?: CampaignMetaInfoProtocol;
  make: string;
  model: string;
  startDate: string;
  endDate: string;
  campaignTimeWindowList?: V3TimeWindow[];
  status: string;
};

export const v3CampaignMetaInfoSchema: Schema<V3CampaignMetaInfo> = s.object<V3CampaignMetaInfo>({
  accountName: s.string(),
  id: s.string(),
  campaignName: s.optional(s.string()),
  firmwareName: s.optional(s.string()),
  firmwareFrom: s.optional(s.string()),
  firmwareTo: s.optional(s.string()),
  protocol: s.optional(s.lazy(() => campaignMetaInfoProtocolSchema)),
  make: s.string(),
  model: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
  status: s.string(),
});
