import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "../device-id.js";

export type DeviceIds = DeviceId[] | DeviceId;

export const deviceIdsSchema: Schema<DeviceIds> = s.of<DeviceIds>(
  s.union([s.array(s.lazy(() => deviceIdSchema)), s.lazy(() => deviceIdSchema)]),
);
