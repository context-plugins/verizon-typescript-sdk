import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  rbsHighPrecisionTiltConfigSchema,
  type RbsHighPrecisionTiltConfig,
} from "./rbs-high-precision-tilt-config.js";

export type Rbstiltconfig = {
  rbsHighPrecisionTiltConfig?: RbsHighPrecisionTiltConfig;
};

export const rbstiltconfigSchema: Schema<Rbstiltconfig> = s.object<Rbstiltconfig>({
  rbsHighPrecisionTiltConfig: s.optional(s.lazy(() => rbsHighPrecisionTiltConfigSchema)),
  _keysMap: {
    rbsHighPrecisionTiltConfig: "RbsHighPrecisionTiltConfig",
  },
});
