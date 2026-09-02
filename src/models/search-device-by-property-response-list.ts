import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchDeviceByPropertyResponseSchema,
  type SearchDeviceByPropertyResponse,
} from "./search-device-by-property-response.js";

export type SearchDeviceByPropertyResponseList = {
  deviceProperty?: SearchDeviceByPropertyResponse[];
};

export const searchDeviceByPropertyResponseListSchema: Schema<SearchDeviceByPropertyResponseList> =
  s.object<SearchDeviceByPropertyResponseList>({
    deviceProperty: s.optional(s.array(s.lazy(() => searchDeviceByPropertyResponseSchema))),
    _keysMap: {
      deviceProperty: "DeviceProperty",
    },
  });
