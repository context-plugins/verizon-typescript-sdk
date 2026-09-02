import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequestStatus = {
  Pending: "Pending",
  Success: "Success",
  Failure: "Failure",
} as const;
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus] | (string & {});

export const requestStatusSchema: EnumSchema<RequestStatus> = s.enumOf<RequestStatus>(RequestStatus);
