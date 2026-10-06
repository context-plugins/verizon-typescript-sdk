import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Request for obtaining device extended diagnostics. */
export type DeviceExtendedDiagnosticsRequest = {
  /**
   * The Verizon billing account that the device belongs to. An account name is usually numeric, and
   * must include any leading zeros.
   */
  accountName: string;
  /** The device for which you want diagnostic information, specified by the device's MDN. */
  deviceList: DeviceId[];
};

export const deviceExtendedDiagnosticsRequestSchema: Schema<DeviceExtendedDiagnosticsRequest> =
  s.object<DeviceExtendedDiagnosticsRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => deviceIdSchema)),
  });
