import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtxRespondingErrorError = {
  error: string;
  description: string;
};

export const etxRespondingErrorErrorSchema: Schema<EtxRespondingErrorError> =
  s.object<EtxRespondingErrorError>({
    error: s.string(),
    description: s.string(),
  });
