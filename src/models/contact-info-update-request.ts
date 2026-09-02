import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { placeOfUseSchema, type PlaceOfUse } from "./place-of-use.js";

export type ContactInfoUpdateRequest = {
  primaryPlaceOfUse: PlaceOfUse;
  accountName?: string;
  devices?: AccountDeviceList[];
};

export const contactInfoUpdateRequestSchema: Schema<ContactInfoUpdateRequest> =
  s.object<ContactInfoUpdateRequest>({
    primaryPlaceOfUse: placeOfUseSchema,
    accountName: s.optional(s.string()),
    devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  });
