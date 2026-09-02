import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoDeleteNotificationGroupRequest = {
  accountname?: string;
  force?: boolean;
  id?: string;
};

export const dtoDeleteNotificationGroupRequestSchema: Schema<DtoDeleteNotificationGroupRequest> =
  s.object<DtoDeleteNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    force: s.optional(s.boolean()),
    id: s.optional(s.string()),
  });
