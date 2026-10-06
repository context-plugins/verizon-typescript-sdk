import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoDeleteUserRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
};

export const dtoDeleteUserRequestSchema: Schema<DtoDeleteUserRequest> = s.object<DtoDeleteUserRequest>({
  accountname: s.optional(s.string()),
  id: s.optional(s.string()),
});
