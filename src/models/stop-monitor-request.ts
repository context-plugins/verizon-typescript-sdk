import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type StopMonitorRequest = {
  accountName: string;
  devices: DeviceList[];
};

export const stopMonitorRequestSchema: Schema<StopMonitorRequest> = s.object<StopMonitorRequest>({
  accountName: s.string(),
  devices: s.array(s.lazy(() => deviceListSchema)),
});
