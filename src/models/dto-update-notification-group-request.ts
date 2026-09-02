import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoNotificationGroupRequestEntitySchema,
  type DtoNotificationGroupRequestEntity,
} from "./dto-notification-group-request-entity.js";

export type DtoUpdateNotificationGroupRequest = {
  accountname?: string;
  group: DtoNotificationGroupRequestEntity;
  id?: string;
  userids?: string[];
};

export const dtoUpdateNotificationGroupRequestSchema: Schema<DtoUpdateNotificationGroupRequest> =
  s.object<DtoUpdateNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    group: dtoNotificationGroupRequestEntitySchema,
    id: s.optional(s.string()),
    userids: s.optional(s.array(s.string())),
  });
