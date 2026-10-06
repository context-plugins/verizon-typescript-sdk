import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdarraySchema, type DeviceIdarray } from "./device-idarray.js";

export type FallBack = {
  /** An array containing the `deviceId` array. */
  devices?: DeviceIdarray[][];
  /**
   * The numeric name of the account, in the format "0000123456-00001". Leading zeros must be
   * included.
   */
  accountName?: string;
};

export const fallBackSchema: Schema<FallBack> = s.object<FallBack>({
  devices: s.optional(s.array(s.array(s.lazy(() => deviceIdarraySchema)))),
  accountName: s.optional(s.string()),
});
