import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { downloadTimeWindowSchema, type DownloadTimeWindow } from "./download-time-window.js";

export type UploadAndScheduleFileResponse = {
  /** Updgrade identifier. */
  id?: string;
  /** Account identifer. */
  accountName?: string;
  /** The campaign name. */
  campaignName?: string;
  /** Software name. */
  softwareName?: string;
  /** Old software name. */
  softwareFrom?: string;
  /** New software name. */
  softwareTo?: string;
  /** The name of the file you are upgrading to. */
  fileName?: string;
  /** The version of the file you are upgrading to. */
  fileVersion?: string;
  /** Valid values */
  distributionType?: string;
  /** Applicable make. */
  make?: string;
  /** Applicable model. */
  model?: string;
  /** Campaign start date. */
  startDate?: string;
  /** Campaign end date. */
  endDate?: string;
  /**
   * Specifies the starting date the client should download the package. If null, client downloads
   * as soon as possible.
   */
  downloadAfterDate?: string;
  /** List of allowed download time windows. */
  downloadTimeWindowList?: DownloadTimeWindow[];
  /** The date after which you install the package. If null, install as soon as possible. */
  installAfterDate?: string;
  /** List of allowed install time windows. */
  installTimeWindowList?: DownloadTimeWindow[];
  /** Device IMEI list. */
  deviceList?: string[];
  /** Software update status. */
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
