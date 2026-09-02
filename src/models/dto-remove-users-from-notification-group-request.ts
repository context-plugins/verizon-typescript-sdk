import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoRemoveUsersFromNotificationGroupRequest = {
  accountname?: string;
  id?: string;
  userids?: string[];
};

export const dtoRemoveUsersFromNotificationGroupRequestSchema: Schema<DtoRemoveUsersFromNotificationGroupRequest> =
  s.object<DtoRemoveUsersFromNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    id: s.optional(s.string()),
    userids: s.optional(s.array(s.string())),
  });
