import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceRole = {
  name: string;
  subscribeLimit?: number;
  publishRateLimit?: number;
  publish?: string[];
  subscribe?: string[];
};

export const deviceRoleSchema: Schema<DeviceRole> = s.object<DeviceRole>({
  name: s.string(),
  subscribeLimit: s.optional(s.number()),
  publishRateLimit: s.optional(s.number()),
  publish: s.optional(s.array(s.string())),
  subscribe: s.optional(s.array(s.string())),
});
