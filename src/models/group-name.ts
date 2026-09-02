import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GroupName = {
  default?: string;
};

export const groupNameSchema: Schema<GroupName> = s.object<GroupName>({
  default: s.optional(s.string()),
  _keysMap: {
    default: "Default",
  },
});
