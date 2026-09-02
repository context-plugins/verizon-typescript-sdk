import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SoftwarePackage = {
  softwareName: string;
  launchDate: string;
  releaseNote?: string;
  model: string;
  make: string;
  distributionType: string;
  devicePlatformId: string;
};

export const softwarePackageSchema: Schema<SoftwarePackage> = s.object<SoftwarePackage>({
  softwareName: s.string(),
  launchDate: s.dateOnly(),
  releaseNote: s.optional(s.string()),
  model: s.string(),
  make: s.string(),
  distributionType: s.string(),
  devicePlatformId: s.string(),
});
