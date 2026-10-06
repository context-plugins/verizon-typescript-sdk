import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

/** The request body identifies the devices to upload. */
export type UploadsActivatesDeviceRequest = {
  /**
   * The name of a billing account. An account name is usually numeric, and must include any leading
   * zeros.
   */
  accountName: string;
  /** The email address that the report should be sent to when the upload is complete. */
  emailAddress: string;
  /** The stock keeping unit that identifies the type of devices in the upload and activation. */
  deviceSku: string;
  /** The format of the device identifiers in the upload and activation. */
  uploadType: string;
  /** The service plan code that you want to assign to all specified devices. */
  servicePlan: string;
  /** The pool from which your device IP addresses is derived. */
  carrierIpPoolName?: string;
  /**
   * The Zip code of the location where the line of service is primarily used, or a Zip code that
   * you have been told to use with these devices.
   */
  mdnZipCode: string;
  /** The devices to upload, specified by device IDs in a format matching uploadType. */
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
