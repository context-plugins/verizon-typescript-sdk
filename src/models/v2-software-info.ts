import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2SoftwareInfo = {
  name: string;
  version: string;
  upgradeTime: string;
};

export const v2SoftwareInfoSchema: Schema<V2SoftwareInfo> = s.object<V2SoftwareInfo>({
  name: s.string(),
  version: s.string(),
  upgradeTime: s.string(),
});
