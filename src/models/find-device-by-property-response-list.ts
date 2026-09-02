import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  findDeviceByPropertyResponseSchema,
  type FindDeviceByPropertyResponse,
} from "./find-device-by-property-response.js";

export type FindDeviceByPropertyResponseList = {
  deviceProperty?: FindDeviceByPropertyResponse[];
};

export const findDeviceByPropertyResponseListSchema: Schema<FindDeviceByPropertyResponseList> =
  s.object<FindDeviceByPropertyResponseList>({
    deviceProperty: s.optional(s.array(s.lazy(() => findDeviceByPropertyResponseSchema))),
    _keysMap: {
      deviceProperty: "DeviceProperty",
    },
  });
