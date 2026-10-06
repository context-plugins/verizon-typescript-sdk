import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoProfileSchema, type DtoProfile } from "./dto-profile.js";

export type DtoConfigurationProfile = {
  /** The numeric account name, which must include leading zeros */
  accountname?: string;
  profiles?: DtoProfile[];
};

export const dtoConfigurationProfileSchema: Schema<DtoConfigurationProfile> =
  s.object<DtoConfigurationProfile>({
    accountname: s.optional(s.string()),
    profiles: s.optional(s.array(s.lazy(() => dtoProfileSchema))),
  });
