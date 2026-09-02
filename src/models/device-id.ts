import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceId = {
  id: string;
  kind: string;
};

export const deviceIdSchema: Schema<DeviceId> = s.object<DeviceId>({
  id: s.string(),
  kind: s.string(),
});
