import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifier object pairs of kind/id */
export type HplDeviceId = {
  /** The type of ID. This can be IMEI or ICCID. */
  kind?: string;
  /** The ID value. */
  id?: string;
};

export const hplDeviceIdSchema: Schema<HplDeviceId> = s.object<HplDeviceId>({
  kind: s.optional(s.string()),
  id: s.optional(s.string()),
});
