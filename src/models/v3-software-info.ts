import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Software information. */
export type V3SoftwareInfo = {
  /** Software name. */
  name: string;
  /** Software version. */
  version: string;
  /** Upgrade time. */
  upgradeTime: string;
};

export const v3SoftwareInfoSchema: Schema<V3SoftwareInfo> = s.object<V3SoftwareInfo>({
  name: s.string(),
  version: s.string(),
  upgradeTime: s.string(),
});
