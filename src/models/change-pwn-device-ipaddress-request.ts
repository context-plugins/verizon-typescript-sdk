import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListIpSchema, type DeviceListIp } from "./device-list-ip.js";

export type ChangePwnDeviceIPaddressRequest = {
  accountName: string;
  deviceList: DeviceListIp[];
};

export const changePwnDeviceIPaddressRequestSchema: Schema<ChangePwnDeviceIPaddressRequest> =
  s.object<ChangePwnDeviceIPaddressRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => deviceListIpSchema)),
  });
