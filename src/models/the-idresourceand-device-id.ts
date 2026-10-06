import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TheIDresourceandDeviceId = {
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** This is a UUID value of the device created when the device is onboarded */
  deviceid?: string;
};

export const theIDresourceandDeviceIdSchema: Schema<TheIDresourceandDeviceId> =
  s.object<TheIDresourceandDeviceId>({
    id: s.optional(s.string()),
    deviceid: s.optional(s.string()),
  });
