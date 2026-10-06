import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The devices that you want to locate. The array cannot contain more than 20 devices. */
export type DeviceInfo = {
  /** Device identifier. */
  id: string;
  /** Device identifier kind. */
  kind: string;
  /** Device MDN. */
  mdn: string;
};

export const deviceInfoSchema: Schema<DeviceInfo> = s.object<DeviceInfo>({
  id: s.string(),
  kind: s.string(),
  mdn: s.string(),
});
