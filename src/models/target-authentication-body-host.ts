import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TargetAuthenticationBodyHost = {
  hostandpath?: string;
};

export const targetAuthenticationBodyHostSchema: Schema<TargetAuthenticationBodyHost> =
  s.object<TargetAuthenticationBodyHost>({
    hostandpath: s.optional(s.string()),
  });
