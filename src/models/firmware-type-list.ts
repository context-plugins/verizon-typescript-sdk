import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FirmwareTypeList = {
  Append: "append",
  Remove: "remove",
} as const;
export type FirmwareTypeList = (typeof FirmwareTypeList)[keyof typeof FirmwareTypeList] | (string & {});

export const firmwareTypeListSchema: EnumSchema<FirmwareTypeList> =
  s.enumOf<FirmwareTypeList>(FirmwareTypeList);
