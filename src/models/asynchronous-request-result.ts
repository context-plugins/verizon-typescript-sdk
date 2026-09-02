import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestStatusSchema, type RequestStatus } from "./request-status.js";

export type AsynchronousRequestResult = {
  requestId?: string;
  status?: RequestStatus;
};

export const asynchronousRequestResultSchema: Schema<AsynchronousRequestResult> =
  s.object<AsynchronousRequestResult>({
    requestId: s.optional(s.string()),
    status: s.optional(s.lazy(() => requestStatusSchema)),
  });
