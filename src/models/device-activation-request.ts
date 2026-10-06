import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";

/** Request for device status to check availability of activation. */
export type DeviceActivationRequest = {
  /** The name of a billing account. */
  accountName: string;
  /**
   * Up to 10,000 devices that you want to move to a different account, specified by device
   * identifier.
   */
  devices: AccountDeviceList[];
};

export const deviceActivationRequestSchema: Schema<DeviceActivationRequest> =
  s.object<DeviceActivationRequest>({
    accountName: s.string(),
    devices: s.array(s.lazy(() => accountDeviceListSchema)),
  });
