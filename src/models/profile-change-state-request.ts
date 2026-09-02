import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type ProfileChangeStateRequest = {
  devices: DeviceList[];
  accountName: string;
  smsrOid: string;
};

export const profileChangeStateRequestSchema: Schema<ProfileChangeStateRequest> =
  s.object<ProfileChangeStateRequest>({
    devices: s.array(s.lazy(() => deviceListSchema)),
    accountName: s.string(),
    smsrOid: s.string(),
  });
