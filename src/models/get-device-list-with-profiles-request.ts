import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type GetDeviceListWithProfilesRequest = {
  accountName: string;
  provisioningStatusFilter?: string;
  profileStatusFilter?: string;
  carrierNameFilter?: string;
  deviceFilter?: GioDeviceId[];
};

export const getDeviceListWithProfilesRequestSchema: Schema<GetDeviceListWithProfilesRequest> =
  s.object<GetDeviceListWithProfilesRequest>({
    accountName: s.string(),
    provisioningStatusFilter: s.optional(s.string()),
    profileStatusFilter: s.optional(s.string()),
    carrierNameFilter: s.optional(s.string()),
    deviceFilter: s.optional(s.array(s.lazy(() => gioDeviceIdSchema))),
  });
