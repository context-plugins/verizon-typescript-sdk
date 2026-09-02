import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdarraySchema, type DeviceIdarray } from "./device-idarray.js";

export type FallBack = {
  devices?: DeviceIdarray[][];
  accountName?: string;
};

export const fallBackSchema: Schema<FallBack> = s.object<FallBack>({
  devices: s.optional(s.array(s.array(s.lazy(() => deviceIdarraySchema)))),
  accountName: s.optional(s.string()),
});
