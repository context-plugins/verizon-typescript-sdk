import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The access rule (DeviceRole object) defines the topics the application or device can publish or
 * subscribe to. It also defines how many parallel subscriptions one device or application can have
 * and how fast it can publish messages.
 */
export type DeviceRole = {
  /** The unique name of the access rule. */
  name: string;
  /** The maximum number of subscriptions that one application or device can make. @default 50 */
  subscribeLimit?: number;
  /**
   * The maximum rate that one application or device can publish messages per seconds.
   *
   * @default 15
   */
  publishRateLimit?: number;
  publish?: string[];
  subscribe?: string[];
};

export const deviceRoleSchema: Schema<DeviceRole> = s.object<DeviceRole>({
  name: s.string(),
  subscribeLimit: s.defaulted(s.int(), 50),
  publishRateLimit: s.defaulted(s.int(), 15),
  publish: s.optional(s.array(s.string())),
  subscribe: s.optional(s.array(s.string())),
});
