import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Firmware = {
  firmwareName?: string;
  participantName?: string;
  launchDate?: Date;
  releaseNote?: string;
  model?: string;
  make?: string;
  fromVersion?: string;
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
