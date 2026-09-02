import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtxRespondingError = {
  error: string;
  description: string;
};

export const etxRespondingErrorSchema: Schema<EtxRespondingError> = s.object<EtxRespondingError>({
  error: s.string(),
  description: s.string(),
});
