import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifies a particular IoT device. */
export type Device = {
  /** Device identifier. */
  id: string;
  /** Device kind identifier. */
  kind: string;
};

export const deviceSchema: Schema<Device> = s.object<Device>({
  id: s.string(),
  kind: s.string(),
});
