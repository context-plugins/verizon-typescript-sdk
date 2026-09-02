import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountLicenseDeviceListItem = {
  deviceId?: string;
  assignmentTime?: Date;
};

export const accountLicenseDeviceListItemSchema: Schema<AccountLicenseDeviceListItem> =
  s.object<AccountLicenseDeviceListItem>({
    deviceId: s.optional(s.string()),
    assignmentTime: s.optional(s.dateTime()),
  });
