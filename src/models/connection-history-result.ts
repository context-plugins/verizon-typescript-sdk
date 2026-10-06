import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectionEventSchema, type ConnectionEvent } from "./connection-event.js";

/**
 * Response containing the connection history. It is a list of Network Connection Events for a
 * device.
 */
export type ConnectionHistoryResult = {
  /** Device connection events, sorted by the occurredAt timestamp, oldest first. */
  connectionHistory?: ConnectionEvent[];
  /**
   * False for a status 200 response.True for a status 202 response, indicating that there is more
   * data to be retrieved. Send another request, adjusting the earliest value in the request based
   * on the occuredAt value for the last device in the current response.
   */
  hasMoreData?: boolean;
};

export const connectionHistoryResultSchema: Schema<ConnectionHistoryResult> =
  s.object<ConnectionHistoryResult>({
    connectionHistory: s.optional(s.array(s.lazy(() => connectionEventSchema))),
    hasMoreData: s.optional(s.boolean()),
  });
