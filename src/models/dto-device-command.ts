import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoResourceidentifierSchema, type DtoResourceidentifier } from "./dto-resourceidentifier.js";
import { rbstiltconfigSchema, type Rbstiltconfig } from "./rbstiltconfig.js";

export type DtoDeviceCommand = {
  /** The numeric account name, which must include leading zeros */
  accountName?: string;
  configuration?: Rbstiltconfig;
  resourceidentifier?: DtoResourceidentifier;
};

export const dtoDeviceCommandSchema: Schema<DtoDeviceCommand> = s.object<DtoDeviceCommand>({
  accountName: s.optional(s.string()),
  configuration: s.optional(s.lazy(() => rbstiltconfigSchema)),
  resourceidentifier: s.optional(s.lazy(() => dtoResourceidentifierSchema)),
});
