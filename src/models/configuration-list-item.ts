import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConfigurationListItem = {
  id: string;
  name?: string;
  description?: string;
  isActive: boolean;
};

export const configurationListItemSchema: Schema<ConfigurationListItem> = s.object<ConfigurationListItem>({
  id: s.string(),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  isActive: s.boolean(),
});
