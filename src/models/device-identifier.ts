import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device Id details. */
export type DeviceIdentifier = {
  /** Kind of device. */
  kind: string;
  /** Device Identity number. */
  id: string;
  /** Device MDN number. */
  mdn?: string;
};

export const deviceIdentifierSchema: Schema<DeviceIdentifier> = s.object<DeviceIdentifier>({
  kind: s.string(),
  id: s.string(),
  mdn: s.optional(s.string()),
});
