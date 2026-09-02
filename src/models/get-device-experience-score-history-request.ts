import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdentifierSchema, type DeviceIdentifier } from "./device-identifier.js";

export type GetDeviceExperienceScoreHistoryRequest = {
  accountName: string;
  deviceId: DeviceIdentifier;
};

export const getDeviceExperienceScoreHistoryRequestSchema: Schema<GetDeviceExperienceScoreHistoryRequest> =
  s.object<GetDeviceExperienceScoreHistoryRequest>({
    accountName: s.string(),
    deviceId: deviceIdentifierSchema,
  });
