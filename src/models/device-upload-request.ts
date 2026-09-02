import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type DeviceUploadRequest = {
  accountName: string;
  devices: DeviceList[];
  emailAddress: string;
  deviceSku: string;
  uploadType: string;
};

export const deviceUploadRequestSchema: Schema<DeviceUploadRequest> = s.object<DeviceUploadRequest>({
  accountName: s.string(),
  devices: s.array(s.lazy(() => deviceListSchema)),
  emailAddress: s.string(),
  deviceSku: s.string(),
  uploadType: s.string(),
});
