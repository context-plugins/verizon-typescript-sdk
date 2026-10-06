import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoUserDtoSchema, type DtoUserDto } from "./dto-user-dto.js";

export type DtoNotificationGroupResponseEntity = {
  /** Timestamp of the record */
  createdon?: Date;
  /** a short description */
  description?: string;
  /** UUID of the ECPD account the user belongs to */
  foreignid?: string;
  /** Contact email for the group */
  groupemail?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** Timestamp of the record */
  lastupdated?: Date;
  /** User defined name of the record */
  name?: string;
  users?: DtoUserDto[];
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
  versionid?: string;
};

export const dtoNotificationGroupResponseEntitySchema: Schema<DtoNotificationGroupResponseEntity> =
  s.object<DtoNotificationGroupResponseEntity>({
    createdon: s.optional(s.dateTime()),
    description: s.optional(s.string()),
    foreignid: s.optional(s.string()),
    groupemail: s.optional(s.string()),
    id: s.optional(s.string()),
    lastupdated: s.optional(s.dateTime()),
    name: s.optional(s.string()),
    users: s.optional(s.array(s.lazy(() => dtoUserDtoSchema))),
    version: s.optional(s.string()),
    versionid: s.optional(s.string()),
  });
