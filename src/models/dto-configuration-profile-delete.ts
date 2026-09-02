import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoResourceidentifierSchema, type DtoResourceidentifier } from "./dto-resourceidentifier.js";

export type DtoConfigurationProfileDelete = {
  accountName?: string;
  resourceidentifier?: DtoResourceidentifier;
};

export const dtoConfigurationProfileDeleteSchema: Schema<DtoConfigurationProfileDelete> =
  s.object<DtoConfigurationProfileDelete>({
    accountName: s.optional(s.string()),
    resourceidentifier: s.optional(s.lazy(() => dtoResourceidentifierSchema)),
  });
