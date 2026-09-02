import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoNotificationGroupRequestEntitySchema,
  type DtoNotificationGroupRequestEntity,
} from "./dto-notification-group-request-entity.js";

export type DtoCreateNotificationGroupRequest = {
  accountname?: string;
  group: DtoNotificationGroupRequestEntity;
  userids?: string[];
};

export const dtoCreateNotificationGroupRequestSchema: Schema<DtoCreateNotificationGroupRequest> =
  s.object<DtoCreateNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    group: dtoNotificationGroupRequestEntitySchema,
    userids: s.optional(s.array(s.string())),
  });
