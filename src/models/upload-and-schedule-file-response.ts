import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { downloadTimeWindowSchema, type DownloadTimeWindow } from "./download-time-window.js";

export type UploadAndScheduleFileResponse = {
  id?: string;
  accountName?: string;
  campaignName?: string;
  softwareName?: string;
  softwareFrom?: string;
  softwareTo?: string;
  fileName?: string;
  fileVersion?: string;
  distributionType?: string;
  make?: string;
  model?: string;
  startDate?: string;
  endDate?: string;
  downloadAfterDate?: string;
  downloadTimeWindowList?: DownloadTimeWindow[];
  installAfterDate?: string;
  installTimeWindowList?: DownloadTimeWindow[];
  deviceList?: string[];
  status?: string;
};

export const uploadAndScheduleFileResponseSchema: Schema<UploadAndScheduleFileResponse> =
  s.object<UploadAndScheduleFileResponse>({
    id: s.optional(s.string()),
    accountName: s.optional(s.string()),
    campaignName: s.optional(s.string()),
    softwareName: s.optional(s.string()),
    softwareFrom: s.optional(s.string()),
    softwareTo: s.optional(s.string()),
    fileName: s.optional(s.string()),
    fileVersion: s.optional(s.string()),
    distributionType: s.optional(s.string()),
    make: s.optional(s.string()),
    model: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    downloadAfterDate: s.optional(s.string()),
    downloadTimeWindowList: s.optional(s.array(s.lazy(() => downloadTimeWindowSchema))),
    installAfterDate: s.optional(s.string()),
    installTimeWindowList: s.optional(s.array(s.lazy(() => downloadTimeWindowSchema))),
    deviceList: s.optional(s.array(s.string())),
    status: s.optional(s.string()),
  });
