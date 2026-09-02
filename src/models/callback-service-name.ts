import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallbackServiceName = {
  Location: "Location",
  DeviceLocation: "DeviceLocation",
} as const;
export type CallbackServiceName =
  | (typeof CallbackServiceName)[keyof typeof CallbackServiceName]
  | (string & {});

export const callbackServiceNameSchema: EnumSchema<CallbackServiceName> =
  s.enumOf<CallbackServiceName>(CallbackServiceName);
