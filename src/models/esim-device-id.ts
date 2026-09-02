import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ESimDeviceId = {
  id?: string;
  kind?: string;
};

export const eSimDeviceIdSchema: Schema<ESimDeviceId> = s.object<ESimDeviceId>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
