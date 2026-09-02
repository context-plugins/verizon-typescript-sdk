import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TheIDresourceandDeviceId = {
  id?: string;
  deviceid?: string;
};

export const theIDresourceandDeviceIdSchema: Schema<TheIDresourceandDeviceId> =
  s.object<TheIDresourceandDeviceId>({
    id: s.optional(s.string()),
    deviceid: s.optional(s.string()),
  });
