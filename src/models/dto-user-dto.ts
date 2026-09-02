import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoUserDto = {
  email?: string;
  firstname?: string;
  lastname?: string;
  mdn?: string;
  customdata?: Record<string, Record<string, unknown>>;
};

export const dtoUserDtoSchema: Schema<DtoUserDto> = s.object<DtoUserDto>({
  email: s.optional(s.string()),
  firstname: s.optional(s.string()),
  lastname: s.optional(s.string()),
  mdn: s.optional(s.string()),
  customdata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
});
