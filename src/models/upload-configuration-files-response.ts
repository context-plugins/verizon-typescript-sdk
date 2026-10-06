import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadConfigurationFilesResponse = {
  /** The name of the file you are upgrading to. */
  fileName?: string;
  /** The version of the file you are upgrading to. */
  fileVersion?: string;
  /** Software launch date. */
  launchDate?: string;
  /** Software release note. */
  releaseNote?: string;
  /** Software applicable device model. */
  model?: string;
  /** Software applicable device make. */
  make?: string;
  /** LWM2M, OMD-DM or HTTP. */
  distributionType?: string;
  /** The platform (Android, iOS, etc.) that the software can be applied to. */
  devicePlatformId?: string;
  /** Local target path on the device. */
  localTargetPath?: string;
};

export const uploadConfigurationFilesResponseSchema: Schema<UploadConfigurationFilesResponse> =
  s.object<UploadConfigurationFilesResponse>({
    fileName: s.optional(s.string()),
    fileVersion: s.optional(s.string()),
    launchDate: s.optional(s.dateOnly()),
    releaseNote: s.optional(s.string()),
    model: s.optional(s.string()),
    make: s.optional(s.string()),
    distributionType: s.optional(s.string()),
    devicePlatformId: s.optional(s.string()),
    localTargetPath: s.optional(s.string()),
  });
