import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceName = {
  Location: "Location",
  Fota: "fota",
} as const;
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName] | (string & {});

export const serviceNameSchema: EnumSchema<ServiceName> = s.enumOf<ServiceName>(ServiceName);
