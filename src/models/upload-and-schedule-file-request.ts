import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { downloadTimeWindowSchema, type DownloadTimeWindow } from "./download-time-window.js";

export type UploadAndScheduleFileRequest = {
  campaignName?: string;
  fileName?: string;
  fileVersion?: string;
  distributionType?: string;
  startDate?: string;
  endDate?: string;
  downloadAfterDate?: string;
  downloadTimeWindowList?: DownloadTimeWindow[];
  installAfterDate?: string;
  installTimeWindowList?: DownloadTimeWindow[];
  deviceList?: string[];
};

export const uploadAndScheduleFileRequestSchema: Schema<UploadAndScheduleFileRequest> =
  s.object<UploadAndScheduleFileRequest>({
    campaignName: s.optional(s.string()),
    fileName: s.optional(s.string()),
    fileVersion: s.optional(s.string()),
    distributionType: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    downloadAfterDate: s.optional(s.string()),
    downloadTimeWindowList: s.optional(s.array(s.lazy(() => downloadTimeWindowSchema))),
    installAfterDate: s.optional(s.string()),
    installTimeWindowList: s.optional(s.array(s.lazy(() => downloadTimeWindowSchema))),
    deviceList: s.optional(s.array(s.string())),
  });
