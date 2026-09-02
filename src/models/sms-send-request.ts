import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type SmsSendRequest = {
  accountName: string;
  smsMessage: string;
  customFields?: CustomFields[];
  dataEncoding?: string;
  deviceIds?: DeviceId[];
  groupName?: string;
  servicePlan?: string;
  timeToLive?: string;
};

export const smsSendRequestSchema: Schema<SmsSendRequest> = s.object<SmsSendRequest>({
  accountName: s.string(),
  smsMessage: s.string(),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  dataEncoding: s.optional(s.string()),
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  timeToLive: s.optional(s.string()),
});
