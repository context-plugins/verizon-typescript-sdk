import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoAddUsersToNotificationGroupRequest = {
  accountname?: string;
  id?: string;
  userids?: string[];
};

export const dtoAddUsersToNotificationGroupRequestSchema: Schema<DtoAddUsersToNotificationGroupRequest> =
  s.object<DtoAddUsersToNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    id: s.optional(s.string()),
    userids: s.optional(s.array(s.string())),
  });
