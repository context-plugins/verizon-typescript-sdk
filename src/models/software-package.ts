import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Software package information. */
export type SoftwarePackage = {
  /** Software name. */
  softwareName: string;
  /** Software launch date. */
  launchDate: string;
  /** Software release note reserved for future use. */
  releaseNote?: string;
  /** Software applicable device model. */
  model: string;
  /** Software applicable device make. */
  make: string;
  /** LWM2M, OMD-DM or HTTP. */
  distributionType: string;
  /** The platform (Android, iOS, etc.) that the software can be applied to. */
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
