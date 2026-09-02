import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type DeviceExtendedDiagnosticsRequest = {
  accountName: string;
  deviceList: DeviceId[];
};

export const deviceExtendedDiagnosticsRequestSchema: Schema<DeviceExtendedDiagnosticsRequest> =
  s.object<DeviceExtendedDiagnosticsRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => deviceIdSchema)),
  });
