import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoUserDtoSchema, type DtoUserDto } from "./dto-user-dto.js";

export type DtoCreateUserRequest = {
  accountname?: string;
  user?: DtoUserDto;
};

export const dtoCreateUserRequestSchema: Schema<DtoCreateUserRequest> = s.object<DtoCreateUserRequest>({
  accountname: s.optional(s.string()),
  user: s.optional(s.lazy(() => dtoUserDtoSchema)),
});
