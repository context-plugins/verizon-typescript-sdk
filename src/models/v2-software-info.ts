import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Software information. */
export type V2SoftwareInfo = {
  /** Software name. */
  name: string;
  /** Software version. */
  version: string;
  /** Upgrade time. */
  upgradeTime: string;
};

export const v2SoftwareInfoSchema: Schema<V2SoftwareInfo> = s.object<V2SoftwareInfo>({
  name: s.string(),
  version: s.string(),
  upgradeTime: s.string(),
});
