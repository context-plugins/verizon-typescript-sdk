import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Firmware information. */
export type Firmware = {
  /** The name of the firmware image, provided by the device manufacturer. */
  firmwareName?: string;
  /** Internal reference; can be ignored. */
  participantName?: string;
  /** The release date of the firmware image. */
  launchDate?: Date;
  /** Additional information about the release. */
  releaseNote?: string;
  /** The device model that the firmware applies to. */
  model?: string;
  /** The device make that the firmware applies to. */
  make?: string;
  /** The firmware version that must currently be on the device to upgrade. */
  fromVersion?: string;
  /** The firmware version that will be on the device after an upgrade. */
  toVersion?: string;
};

export const firmwareSchema: Schema<Firmware> = s.object<Firmware>({
  firmwareName: s.optional(s.string()),
  participantName: s.optional(s.string()),
  launchDate: s.optional(s.dateTime()),
  releaseNote: s.optional(s.string()),
  model: s.optional(s.string()),
  make: s.optional(s.string()),
  fromVersion: s.optional(s.string()),
  toVersion: s.optional(s.string()),
});
