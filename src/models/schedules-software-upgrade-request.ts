import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { downloadTimeWindowSchema, type DownloadTimeWindow } from "./download-time-window.js";

export type SchedulesSoftwareUpgradeRequest = {
  /** The campaign name. */
  campaignName?: string;
  /** Software name. */
  softwareName?: string;
  /** Old software name. */
  softwareFrom?: string;
  /** New software name. */
  softwareTo?: string;
  /** Valid values */
  distributionType?: string;
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
};

export const schedulesSoftwareUpgradeRequestSchema: Schema<SchedulesSoftwareUpgradeRequest> =
  s.object<SchedulesSoftwareUpgradeRequest>({
    campaignName: s.optional(s.string()),
    softwareName: s.optional(s.string()),
    softwareFrom: s.optional(s.string()),
    softwareTo: s.optional(s.string()),
    distributionType: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    downloadAfterDate: s.optional(s.string()),
    downloadTimeWindowList: s.optional(s.array(s.lazy(() => downloadTimeWindowSchema))),
    installAfterDate: s.optional(s.string()),
    installTimeWindowList: s.optional(s.array(s.lazy(() => downloadTimeWindowSchema))),
    deviceList: s.optional(s.array(s.string())),
  });
