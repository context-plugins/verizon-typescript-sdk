import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A successful request returns the request ID (UUID) and the current status. */
export type AsynchronousRequestResultforplanner = {
  /** The unique ID of a request. This is a UUID value. */
  requestId?: string | null;
};

export const asynchronousRequestResultforplannerSchema: Schema<AsynchronousRequestResultforplanner> =
  s.object<AsynchronousRequestResultforplanner>({
    requestId: s.optionalNullable(s.string()),
  });
