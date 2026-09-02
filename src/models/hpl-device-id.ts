import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HplDeviceId = {
  kind?: string;
  id?: string;
};

export const hplDeviceIdSchema: Schema<HplDeviceId> = s.object<HplDeviceId>({
  kind: s.optional(s.string()),
  id: s.optional(s.string()),
});
