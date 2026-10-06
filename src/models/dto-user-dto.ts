import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoUserDto = {
  /** Contact email for the group */
  email?: string;
  /** The first name in the user record */
  firstname?: string;
  /** The last name in the user record */
  lastname?: string;
  /** The Mobile Directory Number */
  mdn?: string;
  /**
   * Name/value pair, where the value is client defined. The purpose is to keep track of current
   * state per device action.
   */
  customdata?: Record<string, Record<string, unknown>>;
};

export const dtoUserDtoSchema: Schema<DtoUserDto> = s.object<DtoUserDto>({
  email: s.optional(s.string()),
  firstname: s.optional(s.string()),
  lastname: s.optional(s.string()),
  mdn: s.optional(s.string()),
  customdata: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
});
