import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MdmErrorResponseError = {
  error: string;
  description: string;
  uuid: string;
  timestamp: Date;
};

export const mdmErrorResponseErrorSchema: Schema<MdmErrorResponseError> = s.object<MdmErrorResponseError>({
  error: s.string(),
  description: s.string(),
  uuid: s.string(),
  timestamp: s.dateTime(),
});
