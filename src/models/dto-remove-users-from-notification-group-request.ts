import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoRemoveUsersFromNotificationGroupRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  userids?: string[];
};

export const dtoRemoveUsersFromNotificationGroupRequestSchema: Schema<DtoRemoveUsersFromNotificationGroupRequest> =
  s.object<DtoRemoveUsersFromNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    id: s.optional(s.string()),
    userids: s.optional(s.array(s.string())),
  });
