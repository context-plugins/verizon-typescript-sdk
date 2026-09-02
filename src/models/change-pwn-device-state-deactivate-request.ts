import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pwnDeviceListSchema, type PwnDeviceList } from "./pwn-device-list.js";

export type ChangePwnDeviceStateDeactivateRequest = {
  accountName: string;
  deviceList: PwnDeviceList[];
};

export const changePwnDeviceStateDeactivateRequestSchema: Schema<ChangePwnDeviceStateDeactivateRequest> =
  s.object<ChangePwnDeviceStateDeactivateRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => pwnDeviceListSchema)),
  });
