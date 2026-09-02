import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CampaignStatus = {
  CampaignRequestPending: "CampaignRequestPending",
  CampaignRequestFailed: "CampaignRequestFailed",
  CampaignRequestQueued: "CampaignRequestQueued",
  CampaignCancelled: "CampaignCancelled",
  CampaignAborted: "CampaignAborted",
  CampaignFailed: "CampaignFailed",
  CampaignScheduled: "CampaignScheduled",
  CampaignEnded: "CampaignEnded",
} as const;
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus] | (string & {});

export const campaignStatusSchema: EnumSchema<CampaignStatus> = s.enumOf<CampaignStatus>(CampaignStatus);
