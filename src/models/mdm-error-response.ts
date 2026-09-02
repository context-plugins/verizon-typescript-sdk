import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MdmErrorResponse = {
  error: string;
  description: string;
  uuid: string;
  timestamp: Date;
};

export const mdmErrorResponseSchema: Schema<MdmErrorResponse> = s.object<MdmErrorResponse>({
  error: s.string(),
  description: s.string(),
  uuid: s.string(),
  timestamp: s.dateTime(),
});
