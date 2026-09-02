import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrivateNetworkApns = {
  apnName?: string | null;
  addressAssignmentMethod?: string | null;
  ipAddress?: string | null;
};

export const privateNetworkApnsSchema: Schema<PrivateNetworkApns> = s.object<PrivateNetworkApns>({
  apnName: s.optionalNullable(s.string()),
  addressAssignmentMethod: s.optionalNullable(s.string()),
  ipAddress: s.optionalNullable(s.string()),
});
