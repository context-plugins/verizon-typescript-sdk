import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RetrievesAvailableFilesResponse = {
  /**
   * ThingSpace-generated name of the file. You will use this name when listing or scheduling
   * campaigns for the file.
   */
  fileName?: string;
  /** Version of the file. */
  fileVersion?: string;
  /** Software release note. */
  releaseNote?: string;
  /** The software-applicable device make. */
  make?: string;
  /** The software-applicable device model. */
  model?: string;
  /** Local target path on the device. */
  localTargetPath?: string;
  /** Valid values */
  distributionType?: string;
  /** The platform (Android, iOS, etc.,) that the software can be applied to. */
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
