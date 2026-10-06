import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CampaignMetaInfoProtocol, campaignMetaInfoProtocolSchema } from "./campaign-meta-info-protocol.js";

/** Available firmware. */
export type FirmwarePackage = {
  /** Firmware name. */
  firmwareName: string;
  /** Firmware from version. */
  firmwareFrom: string;
  /** Firmware to version. */
  firmwareTo: string;
  /** Firmware launch date. */
  launchDate: Date;
  /** Firmware release note. */
  releaseNote: string;
  /** Firmware applicable device model. */
  model: string;
  /** Firmware applicable device make. */
  make: string;
  /**
   * Firmware protocol. Valid values include: LWM2M, OMD-DM.
   *
   * @default CampaignMetaInfoProtocol.Lwm2M
   */
  protocol?: CampaignMetaInfoProtocol;
};

export const firmwarePackageSchema: Schema<FirmwarePackage> = s.object<FirmwarePackage>({
  firmwareName: s.string(),
  firmwareFrom: s.string(),
  firmwareTo: s.string(),
  launchDate: s.dateTime(),
  releaseNote: s.string(),
  model: s.string(),
  make: s.string(),
  protocol: s.defaulted(campaignMetaInfoProtocolSchema, CampaignMetaInfoProtocol.Lwm2M),
});
