import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PropertyDeviceId = {
  id?: string;
  kind?: string;
};

export const propertyDeviceIdSchema: Schema<PropertyDeviceId> = s.object<PropertyDeviceId>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
