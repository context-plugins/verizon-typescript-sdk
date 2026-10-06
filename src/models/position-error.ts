import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Position error. */
export type PositionError = {
  /** Time location obtained. */
  time?: string;
  /** UTC offset of time. */
  utcoffset?: string;
  /** Error type returned from location server. */
  type?: string;
  /** Additional information about the error. */
  info?: string;
};

export const positionErrorSchema: Schema<PositionError> = s.object<PositionError>({
  time: s.optional(s.string()),
  utcoffset: s.optional(s.string()),
  type: s.optional(s.string()),
  info: s.optional(s.string()),
});
