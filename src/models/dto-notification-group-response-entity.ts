import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoUserDtoSchema, type DtoUserDto } from "./dto-user-dto.js";

export type DtoNotificationGroupResponseEntity = {
  createdon?: Date;
  description?: string;
  foreignid?: string;
  groupemail?: string;
  id?: string;
  lastupdated?: Date;
  name?: string;
  users?: DtoUserDto[];
  version?: string;
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
