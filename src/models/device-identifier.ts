import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceIdentifier = {
  kind: string;
  id: string;
  mdn?: string;
};

export const deviceIdentifierSchema: Schema<DeviceIdentifier> = s.object<DeviceIdentifier>({
  kind: s.string(),
  id: s.string(),
  mdn: s.optional(s.string()),
});
