import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdentifierSchema, type DeviceIdentifier } from "./device-identifier.js";

/** Get device experience score history. */
export type GetDeviceExperienceScoreHistoryRequest = {
  /** Account name. */
  accountName: string;
  /** Device Id details. */
  deviceId: DeviceIdentifier;
};

export const getDeviceExperienceScoreHistoryRequestSchema: Schema<GetDeviceExperienceScoreHistoryRequest> =
  s.object<GetDeviceExperienceScoreHistoryRequest>({
    accountName: s.string(),
    deviceId: deviceIdentifierSchema,
  });
