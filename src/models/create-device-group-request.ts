import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type CreateDeviceGroupRequest = {
  accountName: string;
  groupDescription: string;
  groupName: string;
  devicesToAdd?: DeviceId[];
};

export const createDeviceGroupRequestSchema: Schema<CreateDeviceGroupRequest> =
  s.object<CreateDeviceGroupRequest>({
    accountName: s.string(),
    groupDescription: s.string(),
    groupName: s.string(),
    devicesToAdd: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  });
