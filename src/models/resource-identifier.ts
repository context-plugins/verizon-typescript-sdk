import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResourceIdentifier = {
  id?: string;
  imei?: string;
};

export const resourceIdentifierSchema: Schema<ResourceIdentifier> = s.object<ResourceIdentifier>({
  id: s.optional(s.string()),
  imei: s.optional(s.string()),
});
