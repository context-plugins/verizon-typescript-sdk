import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type SmsEventHistoryRequest = {
  deviceId: GioDeviceId;
  earliest?: Date;
  latest?: Date;
};

export const smsEventHistoryRequestSchema: Schema<SmsEventHistoryRequest> = s.object<SmsEventHistoryRequest>({
  deviceId: gioDeviceIdSchema,
  earliest: s.optional(s.dateTime()),
  latest: s.optional(s.dateTime()),
});
