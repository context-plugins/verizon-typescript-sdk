import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NetworkTypeObject = {
  networkType?: string;
};

export const networkTypeObjectSchema: Schema<NetworkTypeObject> = s.object<NetworkTypeObject>({
  networkType: s.optional(s.string()),
});
