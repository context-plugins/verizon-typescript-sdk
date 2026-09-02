import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadySimDeviceId = {
  kind?: string;
  id?: string;
};

export const readySimDeviceIdSchema: Schema<ReadySimDeviceId> = s.object<ReadySimDeviceId>({
  kind: s.optional(s.string()),
  id: s.optional(s.string()),
});
