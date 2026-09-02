import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activateSchema, type Activate } from "./activate.js";
import { pwnDeviceListSchema, type PwnDeviceList } from "./pwn-device-list.js";

export type ChangePwnDeviceStateActivateRequest = {
  accountName: string;
  deviceList: PwnDeviceList[];
  activate: Activate;
};

export const changePwnDeviceStateActivateRequestSchema: Schema<ChangePwnDeviceStateActivateRequest> =
  s.object<ChangePwnDeviceStateActivateRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => pwnDeviceListSchema)),
    activate: activateSchema,
  });
