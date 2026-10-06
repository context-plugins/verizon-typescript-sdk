import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Create request for a new device group and optionally add devices to the group. */
export type CreateDeviceGroupRequest = {
  /**
   * The Verizon billing account that the device group will belong to. An account name is usually
   * numeric, and must include any leading zeros.
   */
  accountName: string;
  /** A description for the device group. */
  groupDescription: string;
  /** The name for the new device group. This name must be unique within the specified account. */
  groupName: string;
  /**
   * Zero or more devices to add to the device group. You can use POST /devices/actions/list to get
   * a list of all devices in the account.
   */
  devicesToAdd?: DeviceId[];
};

export const createDeviceGroupRequestSchema: Schema<CreateDeviceGroupRequest> =
  s.object<CreateDeviceGroupRequest>({
    accountName: s.string(),
    groupDescription: s.string(),
    groupName: s.string(),
    devicesToAdd: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  });
