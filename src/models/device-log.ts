import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceLog = {
  deviceId: string;
  logTime: Date;
  logType: string;
  eventLog: string;
  binaryLogFileBase64: string;
  binaryLogFilename: string;
};

export const deviceLogSchema: Schema<DeviceLog> = s.object<DeviceLog>({
  deviceId: s.string(),
  logTime: s.dateTime(),
  logType: s.string(),
  eventLog: s.string(),
  binaryLogFileBase64: s.string(),
  binaryLogFilename: s.string(),
});
