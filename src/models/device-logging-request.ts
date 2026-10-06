import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device logging information. */
export type DeviceLoggingRequest = {
  /** List of device IMEI identifiers. */
  deviceIds: string[];
};

export const deviceLoggingRequestSchema: Schema<DeviceLoggingRequest> = s.object<DeviceLoggingRequest>({
  deviceIds: s.array(s.string()),
});
