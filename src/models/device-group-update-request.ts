import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type DeviceGroupUpdateRequest = {
  devicesToAdd?: DeviceId[];
  devicesToRemove?: DeviceId[];
  newGroupDescription?: string;
  newGroupName?: string;
};

export const deviceGroupUpdateRequestSchema: Schema<DeviceGroupUpdateRequest> =
  s.object<DeviceGroupUpdateRequest>({
    devicesToAdd: s.optional(s.array(s.lazy(() => deviceIdSchema))),
    devicesToRemove: s.optional(s.array(s.lazy(() => deviceIdSchema))),
    newGroupDescription: s.optional(s.string()),
    newGroupName: s.optional(s.string()),
  });
