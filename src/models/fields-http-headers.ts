import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FieldsHttpHeaders = {
  authorization?: string;
};

export const fieldsHttpHeadersSchema: Schema<FieldsHttpHeaders> = s.object<FieldsHttpHeaders>({
  authorization: s.optional(s.string()),
  _keysMap: {
    authorization: "Authorization",
  },
});
