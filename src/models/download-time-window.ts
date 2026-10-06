import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DownloadTimeWindow = {
  /** Device IMEI list. */
  startTime?: string;
  /** Device IMEI list. */
  endTime?: string;
};

export const downloadTimeWindowSchema: Schema<DownloadTimeWindow> = s.object<DownloadTimeWindow>({
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
});
