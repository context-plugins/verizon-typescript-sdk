import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceFilterWithoutAccountSchema,
  type DeviceFilterWithoutAccount,
} from "./device-filter-without-account.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type DeviceSuspensionStatusRequest = {
  deviceIds?: DeviceId[];
  filter?: DeviceFilterWithoutAccount;
  accountName?: string;
};

export const deviceSuspensionStatusRequestSchema: Schema<DeviceSuspensionStatusRequest> =
  s.object<DeviceSuspensionStatusRequest>({
    deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
    filter: s.optional(s.lazy(() => deviceFilterWithoutAccountSchema)),
    accountName: s.optional(s.string()),
  });
