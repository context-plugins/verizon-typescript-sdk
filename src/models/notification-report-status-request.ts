import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type NotificationReportStatusRequest = {
  /** The name of a billing account. */
  accountName: string;
  /** An identifier for a single device. */
  device: DeviceId;
  /** The type of request. */
  requestType: string;
  /** The time at which the request expires. */
  requestExpirationTime?: string;
};

export const notificationReportStatusRequestSchema: Schema<NotificationReportStatusRequest> =
  s.object<NotificationReportStatusRequest>({
    accountName: s.string(),
    device: deviceIdSchema,
    requestType: s.string(),
    requestExpirationTime: s.optional(s.string()),
  });
