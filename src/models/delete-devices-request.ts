import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";

export type DeleteDevicesRequest = {
  devicesToDelete: AccountDeviceList[];
  accountName?: string;
};

export const deleteDevicesRequestSchema: Schema<DeleteDevicesRequest> = s.object<DeleteDevicesRequest>({
  devicesToDelete: s.array(s.lazy(() => accountDeviceListSchema)),
  accountName: s.optional(s.string()),
});
