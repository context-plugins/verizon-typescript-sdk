import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pwnDeviceListSchema, type PwnDeviceList } from "./pwn-device-list.js";

export type ChangePwnDeviceProfileRequest = {
  accountName: string;
  deviceList: PwnDeviceList[];
  newProfile: string;
};

export const changePwnDeviceProfileRequestSchema: Schema<ChangePwnDeviceProfileRequest> =
  s.object<ChangePwnDeviceProfileRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => pwnDeviceListSchema)),
    newProfile: s.string(),
  });
