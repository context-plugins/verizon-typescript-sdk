import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";
import { kvPairSchema, type KvPair } from "./kv-pair.js";

export type GiosmsSendRequest = {
  accountName?: string;
  customFields?: KvPair[];
  dataEncoding?: string;
  groupName?: string;
  servicePlan?: string;
  timeToLive?: string;
  deviceIds?: GioDeviceId[];
  smsMessage: string;
};

export const giosmsSendRequestSchema: Schema<GiosmsSendRequest> = s.object<GiosmsSendRequest>({
  accountName: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => kvPairSchema))),
  dataEncoding: s.optional(s.string()),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  timeToLive: s.optional(s.string()),
  deviceIds: s.optional(s.array(s.lazy(() => gioDeviceIdSchema))),
  smsMessage: s.string(),
});
