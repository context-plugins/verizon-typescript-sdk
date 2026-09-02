import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pwnProfileSchema, type PwnProfile } from "./pwn-profile.js";

export type PwnProfileList = {
  profiles?: PwnProfile[];
};

export const pwnProfileListSchema: Schema<PwnProfileList> = s.object<PwnProfileList>({
  profiles: s.optional(s.array(s.lazy(() => pwnProfileSchema))),
});
