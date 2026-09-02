import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GioDeviceId = {
  kind: string;
  id: string;
};

export const gioDeviceIdSchema: Schema<GioDeviceId> = s.object<GioDeviceId>({
  kind: s.string(),
  id: s.string(),
});
