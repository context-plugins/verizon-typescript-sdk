import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FirmwareUpgradeRequest = {
  accountName: string;
  firmwareName: string;
  firmwareTo: string;
  startDate: string;
  endDate: string;
  deviceList: string[];
};

export const firmwareUpgradeRequestSchema: Schema<FirmwareUpgradeRequest> = s.object<FirmwareUpgradeRequest>({
  accountName: s.string(),
  firmwareName: s.string(),
  firmwareTo: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  deviceList: s.array(s.string()),
});
