import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DiagnosticsObservationResult = {
  transactionId: string;
  status: string;
  createdOn: Date;
};

export const diagnosticsObservationResultSchema: Schema<DiagnosticsObservationResult> =
  s.object<DiagnosticsObservationResult>({
    transactionId: s.string(),
    status: s.string(),
    createdOn: s.dateTime(),
    _keysMap: {
      transactionId: "transactionID",
    },
  });
