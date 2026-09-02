import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoResourceidentifier = {
  id?: string;
};

export const dtoResourceidentifierSchema: Schema<DtoResourceidentifier> = s.object<DtoResourceidentifier>({
  id: s.optional(s.string()),
});
