import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RetrievesAvailableFilesResponse = {
  fileName?: string;
  fileVersion?: string;
  releaseNote?: string;
  make?: string;
  model?: string;
  localTargetPath?: string;
  distributionType?: string;
  devicePlatformId?: string;
};

export const retrievesAvailableFilesResponseSchema: Schema<RetrievesAvailableFilesResponse> =
  s.object<RetrievesAvailableFilesResponse>({
    fileName: s.optional(s.string()),
    fileVersion: s.optional(s.string()),
    releaseNote: s.optional(s.string()),
    make: s.optional(s.string()),
    model: s.optional(s.string()),
    localTargetPath: s.optional(s.string()),
    distributionType: s.optional(s.string()),
    devicePlatformId: s.optional(s.string()),
  });
