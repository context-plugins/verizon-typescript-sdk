import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestStatusSchema, type RequestStatus } from "./request-status.js";

/** A successful request returns the request ID and the current status. */
export type AsynchronousRequestResult = {
  /** The unique ID of the asynchronous request. */
  requestId?: string;
  /** The current status of the callback response. */
  status?: RequestStatus;
};

export const asynchronousRequestResultSchema: Schema<AsynchronousRequestResult> =
  s.object<AsynchronousRequestResult>({
    requestId: s.optional(s.string()),
    status: s.optional(s.lazy(() => requestStatusSchema)),
  });
