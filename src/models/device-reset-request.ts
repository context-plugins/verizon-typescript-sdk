import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";

/** Request body to Performs a device reboot. */
export type DeviceResetRequest = {
  /**
   * The name of the account. An account name is usually numeric, and must include any leading
   * zeros.
   */
  accountName?: string;
  /** The action you want to take on the device. */
  action?: string;
  /** The devices for which you want to perform a factory reset or reboot. */
  devices?: Device[];
};

export const deviceResetRequestSchema: Schema<DeviceResetRequest> = s.object<DeviceResetRequest>({
  accountName: s.optional(s.string()),
  action: s.optional(s.string()),
  devices: s.optional(s.array(s.lazy(() => deviceSchema))),
});
