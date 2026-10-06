import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdentifierSchema, type DeviceIdentifier } from "./device-identifier.js";

/** Get device experience score bulk request. */
export type GetDeviceExperienceScoreBulkRequest = {
  /** Account name. */
  accountName: string;
  deviceList: DeviceIdentifier[];
};

export const getDeviceExperienceScoreBulkRequestSchema: Schema<GetDeviceExperienceScoreBulkRequest> =
  s.object<GetDeviceExperienceScoreBulkRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => deviceIdentifierSchema)),
  });
