import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TargetAuthenticationBodyHeaders = {
  authorization?: string;
  contentType?: string;
};

export const targetAuthenticationBodyHeadersSchema: Schema<TargetAuthenticationBodyHeaders> =
  s.object<TargetAuthenticationBodyHeaders>({
    authorization: s.optional(s.string()),
    contentType: s.optional(s.string()),
    _keysMap: {
      authorization: "Authorization",
      contentType: "Content-Type",
    },
  });
