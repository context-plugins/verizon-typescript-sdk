import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The ConfigurationList's item that contains the configuration identifier, name, description and
 * the active flag.
 */
export type ConfigurationListItem = {
  /**
   * The generated ID (UUID v4) for the configuration. It has to be used when asking for changing
   * any of the configuration parameters.
   */
  id: string;
  /** Name of the configuration. */
  name?: string;
  /** Description of the configuration. */
  description?: string;
  isActive: boolean;
};

export const configurationListItemSchema: Schema<ConfigurationListItem> = s.object<ConfigurationListItem>({
  id: s.string(),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  isActive: s.boolean(),
});
