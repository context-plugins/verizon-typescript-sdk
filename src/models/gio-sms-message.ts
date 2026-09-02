import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type GioSmsMessage = {
  deviceIds?: GioDeviceId[];
  message?: string;
  timestamp?: Date;
};

export const gioSmsMessageSchema: Schema<GioSmsMessage> = s.object<GioSmsMessage>({
  deviceIds: s.optional(s.array(s.lazy(() => gioDeviceIdSchema))),
  message: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
});
