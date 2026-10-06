import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}. */
export type ResourceIdentifier = {
  /** Target ID. */
  id?: string;
  /** Device IMEI. */
  imei?: string;
};

export const resourceIdentifierSchema: Schema<ResourceIdentifier> = s.object<ResourceIdentifier>({
  id: s.optional(s.string()),
  imei: s.optional(s.string()),
});
