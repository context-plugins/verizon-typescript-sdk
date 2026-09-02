import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadConfigurationFilesResponse = {
  fileName?: string;
  fileVersion?: string;
  launchDate?: string;
  releaseNote?: string;
  model?: string;
  make?: string;
  distributionType?: string;
  devicePlatformId?: string;
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
