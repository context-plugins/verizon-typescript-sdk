import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "../device-id.js";
import { propertyDeviceIdSchema, type PropertyDeviceId } from "../property-device-id.js";

export type Id = DeviceId | PropertyDeviceId;

export const idSchema: Schema<Id> = s.of<Id>(
  s.union([s.lazy(() => deviceIdSchema), s.lazy(() => propertyDeviceIdSchema)]),
);
