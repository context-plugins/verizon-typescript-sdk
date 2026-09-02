import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";

export type DeviceActivationRequest = {
  accountName: string;
  devices: AccountDeviceList[];
};

export const deviceActivationRequestSchema: Schema<DeviceActivationRequest> =
  s.object<DeviceActivationRequest>({
    accountName: s.string(),
    devices: s.array(s.lazy(() => accountDeviceListSchema)),
  });
