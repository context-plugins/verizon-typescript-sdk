import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoDeleteUserRequest = {
  accountname?: string;
  id?: string;
};

export const dtoDeleteUserRequestSchema: Schema<DtoDeleteUserRequest> = s.object<DtoDeleteUserRequest>({
  accountname: s.optional(s.string()),
  id: s.optional(s.string()),
});
