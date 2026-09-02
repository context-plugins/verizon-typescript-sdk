import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectionEventSchema, type ConnectionEvent } from "./connection-event.js";

export type ConnectionHistoryResult = {
  connectionHistory?: ConnectionEvent[];
  hasMoreData?: boolean;
};

export const connectionHistoryResultSchema: Schema<ConnectionHistoryResult> =
  s.object<ConnectionHistoryResult>({
    connectionHistory: s.optional(s.array(s.lazy(() => connectionEventSchema))),
    hasMoreData: s.optional(s.boolean()),
  });
