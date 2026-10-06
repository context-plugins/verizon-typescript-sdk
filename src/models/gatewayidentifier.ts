import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Gatewayidentifier = {
  /**
   * a unique parent deviceid used to group all Lora sensors. Sensors need parent gateway for
   * connection
   */
  deviceid?: string;
};

export const gatewayidentifierSchema: Schema<Gatewayidentifier> = s.object<Gatewayidentifier>({
  deviceid: s.optional(s.string()),
});
