import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProfileStatusFilter = {
  Enable: "ENABLE",
  Disable: "DISABLE",
  DownloadDisable: "DOWNLOAD_DISABLE",
  DownloadEnable: "DOWNLOAD_ENABLE",
  NotDownloaded: "NOT_DOWNLOADED",
  Unknown: "UNKNOWN",
  Delete: "DELETE",
} as const;
export type ProfileStatusFilter =
  | (typeof ProfileStatusFilter)[keyof typeof ProfileStatusFilter]
  | (string & {});

export const profileStatusFilterSchema: EnumSchema<ProfileStatusFilter> =
  s.enumOf<ProfileStatusFilter>(ProfileStatusFilter);
