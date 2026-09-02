import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Gatewayidentifier = {
  deviceid?: string;
};

export const gatewayidentifierSchema: Schema<Gatewayidentifier> = s.object<Gatewayidentifier>({
  deviceid: s.optional(s.string()),
});
