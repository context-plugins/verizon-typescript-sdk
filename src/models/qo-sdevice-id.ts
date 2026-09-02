import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type QoSdeviceId = {
  id?: string;
  kind?: string;
};

export const qoSdeviceIdSchema: Schema<QoSdeviceId> = s.object<QoSdeviceId>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
