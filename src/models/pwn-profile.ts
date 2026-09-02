import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PwnProfile = {
  profileId?: string;
  profileName?: string;
};

export const pwnProfileSchema: Schema<PwnProfile> = s.object<PwnProfile>({
  profileId: s.optional(s.string()),
  profileName: s.optional(s.string()),
});
