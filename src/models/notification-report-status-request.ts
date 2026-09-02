import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type NotificationReportStatusRequest = {
  accountName: string;
  device: DeviceId;
  requestType: string;
  requestExpirationTime?: string;
};

export const notificationReportStatusRequestSchema: Schema<NotificationReportStatusRequest> =
  s.object<NotificationReportStatusRequest>({
    accountName: s.string(),
    device: deviceIdSchema,
    requestType: s.string(),
    requestExpirationTime: s.optional(s.string()),
  });
