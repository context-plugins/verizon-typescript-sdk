import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** error response structure */
export type EtxRespondingErrorError = {
  /** The short summary of the error */
  error: string;
  /** The detailed description of the error */
  description: string;
};

export const etxRespondingErrorErrorSchema: Schema<EtxRespondingErrorError> =
  s.object<EtxRespondingErrorError>({
    error: s.string(),
    description: s.string(),
  });
