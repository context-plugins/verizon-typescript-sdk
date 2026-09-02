import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type NotificationReportRequest = {
  accountName: string;
  requestType: string;
  devices: DeviceList[];
  monitorExpirationTime: string;
};

export const notificationReportRequestSchema: Schema<NotificationReportRequest> =
  s.object<NotificationReportRequest>({
    accountName: s.string(),
    requestType: s.string(),
    devices: s.array(s.lazy(() => deviceListSchema)),
    monitorExpirationTime: s.string(),
  });
