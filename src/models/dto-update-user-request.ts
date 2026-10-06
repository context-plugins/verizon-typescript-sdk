import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoUserDtoSchema, type DtoUserDto } from "./dto-user-dto.js";

export type DtoUpdateUserRequest = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  user?: DtoUserDto;
};

export const dtoUpdateUserRequestSchema: Schema<DtoUpdateUserRequest> = s.object<DtoUpdateUserRequest>({
  accountname: s.optional(s.string()),
  id: s.optional(s.string()),
  user: s.optional(s.lazy(() => dtoUserDtoSchema)),
});
