import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CampaignMetaInfoProtocol = {
  Lwm2M: "LWM2M",
  OmdDm: "OMD-DM",
} as const;
export type CampaignMetaInfoProtocol =
  | (typeof CampaignMetaInfoProtocol)[keyof typeof CampaignMetaInfoProtocol]
  | (string & {});

export const campaignMetaInfoProtocolSchema: EnumSchema<CampaignMetaInfoProtocol> =
  s.enumOf<CampaignMetaInfoProtocol>(CampaignMetaInfoProtocol);
