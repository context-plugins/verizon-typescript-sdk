import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device logging information. */
export type DeviceLog = {
  /** Device IMEI. */
  deviceId: string;
  /** Time of log. */
  logTime: Date;
  /**
   * Log type (one of SoftwareUpdate, Event, UserNotification, AgentService, Wireless, WirelessWeb,
   * MobileBroadbandModem, WindowsMDM).
   */
  logType: string;
  /** Event log. */
  eventLog: string;
  /** Base64-encoded contents of binary log file. */
  binaryLogFileBase64: string;
  /** File name of binary log file. */
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
