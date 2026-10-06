import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceFilterWithoutAccountSchema,
  type DeviceFilterWithoutAccount,
} from "./device-filter-without-account.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Request to return service suspension information about one or more devices. */
export type DeviceSuspensionStatusRequest = {
  /**
   * The devices that you want to include in the request, specified by device identifier. You only
   * need to provide one identifier per device.
   */
  deviceIds?: DeviceId[];
  /** Filter for devices without account. */
  filter?: DeviceFilterWithoutAccount;
  /** The name of a billing account. */
  accountName?: string;
};

export const deviceSuspensionStatusRequestSchema: Schema<DeviceSuspensionStatusRequest> =
  s.object<DeviceSuspensionStatusRequest>({
    deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
    filter: s.optional(s.lazy(() => deviceFilterWithoutAccountSchema)),
    accountName: s.optional(s.string()),
  });
