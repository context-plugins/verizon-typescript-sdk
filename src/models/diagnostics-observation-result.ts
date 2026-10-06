import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A success response containing the current status of the request. */
export type DiagnosticsObservationResult = {
  /** Transaction identifier. */
  transactionId: string;
  /** Status of the request. */
  status: string;
  /** The date and time of when this request was created. */
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
