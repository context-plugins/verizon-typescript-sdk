import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CampaignMetaInfoProtocol, campaignMetaInfoProtocolSchema } from "./campaign-meta-info-protocol.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

/** Campaign and campaign details. */
export type V3CampaignMetaInfo = {
  /** Account identifier. */
  accountName: string;
  /** Campaign identifier. */
  id: string;
  /** Campaign name. */
  campaignName?: string;
  /** Firmware name. */
  firmwareName?: string;
  /** Old firmware version. */
  firmwareFrom?: string;
  /** New software version. */
  firmwareTo?: string;
  /**
   * Firmware protocol. Valid values include: LWM2M, OMD-DM.
   *
   * @default CampaignMetaInfoProtocol.Lwm2M
   */
  protocol?: CampaignMetaInfoProtocol;
  /** Device make. */
  make: string;
  /** Device model. */
  model: string;
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /** List of allowed campaign time windows. */
  campaignTimeWindowList?: V3TimeWindow[];
  /** Firmware upgrade status. */
  status: string;
};

export const v3CampaignMetaInfoSchema: Schema<V3CampaignMetaInfo> = s.object<V3CampaignMetaInfo>({
  accountName: s.string(),
  id: s.string(),
  campaignName: s.optional(s.string()),
  firmwareName: s.optional(s.string()),
  firmwareFrom: s.optional(s.string()),
  firmwareTo: s.optional(s.string()),
  protocol: s.defaulted(campaignMetaInfoProtocolSchema, CampaignMetaInfoProtocol.Lwm2M),
  make: s.string(),
  model: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
  status: s.string(),
});
