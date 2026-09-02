import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  campaignMetaInfoProtocolSchema,
  type CampaignMetaInfoProtocol,
} from "./campaign-meta-info-protocol.js";

export type FirmwarePackage = {
  firmwareName: string;
  firmwareFrom: string;
  firmwareTo: string;
  launchDate: Date;
  releaseNote: string;
  model: string;
  make: string;
  protocol: CampaignMetaInfoProtocol;
};

export const firmwarePackageSchema: Schema<FirmwarePackage> = s.object<FirmwarePackage>({
  firmwareName: s.string(),
  firmwareFrom: s.string(),
  firmwareTo: s.string(),
  launchDate: s.dateTime(),
  releaseNote: s.string(),
  model: s.string(),
  make: s.string(),
  protocol: campaignMetaInfoProtocolSchema,
});
