import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type UploadsActivatesDeviceRequest = {
  accountName: string;
  emailAddress: string;
  deviceSku: string;
  uploadType: string;
  servicePlan: string;
  carrierIpPoolName?: string;
  mdnZipCode: string;
  devices: DeviceList[];
};

export const uploadsActivatesDeviceRequestSchema: Schema<UploadsActivatesDeviceRequest> =
  s.object<UploadsActivatesDeviceRequest>({
    accountName: s.string(),
    emailAddress: s.string(),
    deviceSku: s.string(),
    uploadType: s.string(),
    servicePlan: s.string(),
    carrierIpPoolName: s.optional(s.string()),
    mdnZipCode: s.string(),
    devices: s.array(s.lazy(() => deviceListSchema)),
  });
