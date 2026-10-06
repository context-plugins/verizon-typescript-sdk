import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoDeleteNotificationGroupRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  force?: boolean;
  /** UUID of the user record, assigned at creation */
  id?: string;
};

export const dtoDeleteNotificationGroupRequestSchema: Schema<DtoDeleteNotificationGroupRequest> =
  s.object<DtoDeleteNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    force: s.optional(s.boolean()),
    id: s.optional(s.string()),
  });
