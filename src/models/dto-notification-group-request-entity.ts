import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoNotificationGroupRequestEntity = {
  /** a short description */
  description?: string;
  /** Contact email for the group */
  groupemail?: string;
  /** User defined name of the record */
  name?: string;
};

export const dtoNotificationGroupRequestEntitySchema: Schema<DtoNotificationGroupRequestEntity> =
  s.object<DtoNotificationGroupRequestEntity>({
    description: s.optional(s.string()),
    groupemail: s.optional(s.string()),
    name: s.optional(s.string()),
  });
