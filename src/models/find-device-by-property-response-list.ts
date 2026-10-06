import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  findDeviceByPropertyResponseSchema,
  type FindDeviceByPropertyResponse,
} from "./find-device-by-property-response.js";

/**
 * A success response includes an array of all matching devices. Each device includes the full
 * device resource definition.
 */
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
