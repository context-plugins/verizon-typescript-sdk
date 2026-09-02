import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoProfileSchema, type DtoProfile } from "./dto-profile.js";
import { dtoResourceidentifierSchema, type DtoResourceidentifier } from "./dto-resourceidentifier.js";

export type DtoConfigurationProfilePath = {
  accountName?: string;
  resourceidentifier?: DtoResourceidentifier;
  profile?: DtoProfile;
};

export const dtoConfigurationProfilePathSchema: Schema<DtoConfigurationProfilePath> =
  s.object<DtoConfigurationProfilePath>({
    accountName: s.optional(s.string()),
    resourceidentifier: s.optional(s.lazy(() => dtoResourceidentifierSchema)),
    profile: s.optional(s.lazy(() => dtoProfileSchema)),
  });
