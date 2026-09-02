import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallbackService = {
  Fota: "Fota",
} as const;
export type CallbackService = (typeof CallbackService)[keyof typeof CallbackService] | (string & {});

export const callbackServiceSchema: EnumSchema<CallbackService> = s.enumOf<CallbackService>(CallbackService);
