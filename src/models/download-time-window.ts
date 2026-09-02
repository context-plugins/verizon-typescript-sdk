import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DownloadTimeWindow = {
  startTime?: string;
  endTime?: string;
};

export const downloadTimeWindowSchema: Schema<DownloadTimeWindow> = s.object<DownloadTimeWindow>({
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
});
