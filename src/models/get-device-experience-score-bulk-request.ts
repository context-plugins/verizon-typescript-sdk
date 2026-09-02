import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdentifierSchema, type DeviceIdentifier } from "./device-identifier.js";

export type GetDeviceExperienceScoreBulkRequest = {
  accountName: string;
  deviceList: DeviceIdentifier[];
};

export const getDeviceExperienceScoreBulkRequestSchema: Schema<GetDeviceExperienceScoreBulkRequest> =
  s.object<GetDeviceExperienceScoreBulkRequest>({
    accountName: s.string(),
    deviceList: s.array(s.lazy(() => deviceIdentifierSchema)),
  });
