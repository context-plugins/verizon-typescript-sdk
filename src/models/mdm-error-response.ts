import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** error response structure */
export type MdmErrorResponse = {
  /** The short summary of the error */
  error: string;
  /** The detailed description of the error */
  description: string;
  /** The unique identifier of the request for tracing */
  uuid: string;
  /** The timestamp of when the error occurred */
  timestamp: Date;
};

export const mdmErrorResponseSchema: Schema<MdmErrorResponse> = s.object<MdmErrorResponse>({
  error: s.string(),
  description: s.string(),
  uuid: s.string(),
  timestamp: s.dateTime(),
});
