import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceInfo = {
  id: string;
  kind: string;
  mdn: string;
};

export const deviceInfoSchema: Schema<DeviceInfo> = s.object<DeviceInfo>({
  id: s.string(),
  kind: s.string(),
  mdn: s.string(),
});
