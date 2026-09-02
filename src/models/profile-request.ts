import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";
import { primaryPlaceOfUseSchema, type PrimaryPlaceOfUse } from "./unions/primary-place-of-use.js";

export type ProfileRequest = {
  accountName: string;
  devices: DeviceList[];
  carrierName?: string;
  servicePlan?: string;
  mdnZipCode?: string;
  primaryPlaceOfUse?: PrimaryPlaceOfUse[];
  smsrOid?: string;
  carrierIpPoolName?: string;
};

export const profileRequestSchema: Schema<ProfileRequest> = s.object<ProfileRequest>({
  accountName: s.string(),
  devices: s.array(s.lazy(() => deviceListSchema)),
  carrierName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  mdnZipCode: s.optional(s.string()),
  primaryPlaceOfUse: s.optional(s.array(s.lazy(() => primaryPlaceOfUseSchema))),
  smsrOid: s.optional(s.string()),
  carrierIpPoolName: s.optional(s.string()),
});
